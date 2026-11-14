// Passwords: Node's built-in scrypt with a random salt. Sessions: random token in an
// HttpOnly cookie; only its SHA-256 hash is stored in kontrak_users.xlsx → sessions.
import crypto from 'node:crypto';
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

const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');

export function createSession(res, userId) {
  const token = crypto.randomBytes(32).toString('hex');
  const expires = new Date(Date.now() + SESSION_DAYS * 864e5);
  db.insert('sessions', { token_hash: sha(token), user_id: userId, expires_at: expires.toISOString() });
  res.setHeader('Set-Cookie', `${COOKIE}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_DAYS * 86400}`);
}

function readCookie(req) {
  const raw = req.headers.cookie || '';
  for (const part of raw.split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === COOKIE) return v.join('=');
  }
  return null;
}

export function destroySession(req, res) {
  const token = readCookie(req);
  if (token) db.remove('sessions', (s) => s.token_hash === sha(token));
  res.setHeader('Set-Cookie', `${COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`);
}

/** Express middleware: attaches req.user when a valid session cookie is present. */
export function sessionMiddleware(req, _res, next) {
  const token = readCookie(req);
  if (token) {
    const s = db.find('sessions', (x) => x.token_hash === sha(token));
    if (s && new Date(s.expires_at) > new Date()) {
      const u = db.get('users', s.user_id);
      if (u && u.status !== 'suspended') req.user = u;
    }
  }
  next();
}

export function purgeExpiredSessions() {
  const now = new Date();
  db.remove('sessions', (s) => new Date(s.expires_at) <= now);
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
