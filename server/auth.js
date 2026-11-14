// Passwords: Node's built-in scrypt with a random salt. Sessions: HMAC-signed HttpOnly cookies.
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import * as db from './store.js';

const KEYLEN = 64;
const COOKIE = 'kt_session';
const SESSION_DAYS = 7;

export function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(String(password), salt, KEYLEN).toString('hex');
  return `scrypt$${salt}$${hash}`;
}

export function verifyPassword(password, stored) {
  const [alg, salt, hash] = String(stored || '').split('$');
  if (alg !== 'scrypt' || !salt || !hash) return false;
  const test = crypto.scryptSync(String(password), salt, KEYLEN);
  const ref = Buffer.from(hash, 'hex');
  return ref.length === test.length && crypto.timingSafeEqual(ref, test);
}

// Sessions are signed cookies: "<userId>.<expiresMs>.<hmac>". Any server copy holding the same
// secret can check them, which matters on Vercel where requests reach several short-lived copies.
// The secret comes from KONTRAK_SECRET, or is created once in the data folder for local use.
function loadSecret() {
  if (process.env.KONTRAK_SECRET) return process.env.KONTRAK_SECRET;
  const file = path.join(db.DATA_DIR, '.session-secret');
  try { return fs.readFileSync(file, 'utf8').trim(); } catch { /* create below */ }
  const fresh = crypto.randomBytes(32).toString('hex');
  try { fs.mkdirSync(db.DATA_DIR, { recursive: true }); fs.writeFileSync(file, fresh); } catch { /* read-only: keep in memory */ }
  return fresh;
}
let SECRET = null;
const sign = (payload) => crypto.createHmac('sha256', (SECRET ||= loadSecret())).update(payload).digest('base64url');

// The signature also covers the account email, so a cookie can never open a different account
// that happens to have the same ID (possible on Vercel, where each copy numbers new sign-ups itself).
export function createSession(res, userId) {
  const expires = Date.now() + SESSION_DAYS * 864e5;
  const payload = `${userId}.${expires}`;
  const email = db.get('users', userId)?.email || '';
  res.setHeader('Set-Cookie', `${COOKIE}=${payload}.${sign(`${payload}.${email}`)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_DAYS * 86400}${process.env.VERCEL ? '; Secure' : ''}`);
}

function readCookie(req) {
  const raw = req.headers.cookie || '';
  for (const part of raw.split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === COOKIE) return v.join('=');
  }
  return null;
}

export function destroySession(_req, res) {
  res.setHeader('Set-Cookie', `${COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`);
}

/** Express middleware: attaches req.user when a valid, unexpired, correctly signed cookie is present. */
export function sessionMiddleware(req, _res, next) {
  const token = readCookie(req);
  const m = token && token.match(/^(U-\d+)\.(\d+)\.([\w-]+)$/);
  const u = m && db.get('users', m[1]);
  if (u) {
    const expected = Buffer.from(sign(`${m[1]}.${m[2]}.${u.email}`));
    const given = Buffer.from(m[3]);
    if (expected.length === given.length && crypto.timingSafeEqual(expected, given) && Number(m[2]) > Date.now() && u.status !== 'suspended') req.user = u;
  }
  next();
}

/** Removes rows left by the earlier server-side session store (sessions are cookies now). */
export function purgeExpiredSessions() {
  db.remove('sessions', () => true);
}

// In-memory login rate limit: 5 failed attempts per 10 minutes per IP and email.
const attempts = new Map();
export function loginAllowed(key) {
  const a = attempts.get(key);
  if (!a) return true;
  if (Date.now() > a.until) { attempts.delete(key); return true; }
  return a.count < 5;
}
export function loginFailed(key) {
  const a = attempts.get(key) || { count: 0, until: Date.now() + 10 * 60 * 1000 };
  a.count += 1;
  attempts.set(key, a);
}
export function loginSucceeded(key) { attempts.delete(key); }

export const newToken = () => crypto.randomBytes(18).toString('hex');
