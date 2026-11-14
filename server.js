// Kontrak prototype server: static hosting + a small JSON API. All data lives in /data/*.xlsx.
// Run: npm install && npm start  →  http://localhost:3000
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as db from './server/store.js';
import * as C from './server/compliance.js';
import * as auth from './server/auth.js';
import * as D from './server/domain.js';
import { letterPage, esc } from './server/contracts.js';
import { seed, writeDemoJson } from './server/seed.js';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 3000;
const app = express();

// ── Plumbing ────────────────────────────────────────────────
class HttpError extends Error { constructor(status, message, extra = {}) { super(message); this.status = status; this.extra = extra; } }
const fail = (status, msg, extra) => { throw new HttpError(status, msg, extra); };
const bad = (msg, extra) => fail(400, msg, extra);
const h = (fn) => async (req, res) => {
  try { const out = await fn(req, res); if (out !== undefined && !res.headersSent) res.json(out); }
  catch (e) {
    if (e instanceof HttpError) return res.status(e.status).json({ error: e.message, ...e.extra });
    console.error(e); res.status(500).json({ error: 'Something went wrong on the server. Try again, and check the terminal if it repeats.' });
  }
};
const need = (...roles) => (req, res, next) => {
  if (!req.user) return res.status(401).json({ error: 'Log in to continue.' });
  if (roles.length && !roles.includes(req.user.role)) return res.status(403).json({ error: `This action is for ${roles.join(' or ')} accounts only.` });
  next();
};

// ── Validation (messages follow the voice rules: what happened, then what to do) ──
const V = {
  str(v, label, { min = 1, max = 200, optional = false } = {}) {
    const s = String(v ?? '').trim();
    if (!s) { if (optional) return ''; bad(`Enter ${label}.`); }
    if (s.length < min) bad(`Enter ${label} of at least ${min} characters.`);
    if (s.length > max) bad(`Shorten ${label} to ${max} characters or fewer.`);
    return s;
  },
  email(v, label = 'a valid email address') {
    const s = String(v ?? '').trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(s) || s.length > 120) bad(`Enter ${label}.`);
    return s;
  },
  num(v, label, { min = -Infinity, max = Infinity } = {}) {
    const n = Number(String(v ?? '').replace(',', '.'));
    if (v === '' || v == null || !Number.isFinite(n)) bad(`Enter ${label} as a number.`);
    if (n < min) bad(`Enter ${label} of at least ${min}.`);
    if (n > max) bad(`Enter ${label} of no more than ${max}.`);
    return n;
  },
  date(v, label) { const s = String(v ?? '').slice(0, 10); if (!/^\d{4}-\d{2}-\d{2}$/.test(s) || isNaN(C.parseISO(s))) bad(`Enter ${label} as a date.`); return s; },
  oneOf(v, list, label) { if (!list.includes(v)) bad(`Choose ${label} from the list.`); return v; },
};
const UNI_EMAIL = /@([a-z0-9-]+\.)*((uni|tu|th|hs|fh|hu|fu|lmu|tum|kit|rwth|stud|student)[a-z0-9-]*|[a-z0-9-]*(universit|hochschule|college)[a-z0-9-]*)\.(de|at|ch|eu|edu|demo)$/i;
const FREE_MAIL = /@(gmail|googlemail|yahoo|outlook|hotmail|gmx|web|icloud|aol|t-online|proton|protonmail)\./i;
const cents = (eur) => Math.round(Number(eur) * 100);
const safeUser = (u) => u && ({ id: u.id, role: u.role, email: u.email, first_name: u.first_name, last_name: u.last_name, status: u.status, is_demo: db.bool(u.is_demo), created_at: u.created_at });
const today = () => D.todayISO();
const rules = () => D.getRules();

app.disable('x-powered-by');
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'same-origin');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  next();
});
app.use(express.json({ limit: '100kb' }));
app.use(auth.sessionMiddleware);
// JSON-only mutations: a cross-site form cannot send application/json without a CORS preflight.
app.use('/api', (req, res, next) => {
  if (['POST', 'PUT', 'DELETE'].includes(req.method) && !req.is('application/json')) return res.status(415).json({ error: 'Send the request as JSON.' });
  next();
});

// ── Auth ────────────────────────────────────────────────────
app.post('/api/auth/signup', h((req, res) => {
  const b = req.body || {};
  const role = V.oneOf(b.role, ['student', 'client'], 'student or client');
  const first_name = V.str(b.first_name, 'your first name', { max: 60 });
  const last_name = V.str(b.last_name, 'your last name', { max: 60 });
  const password = String(b.password || '');
  if (password.length < 10) bad('Choose a password of at least 10 characters.');
  let email;
  if (role === 'student') {
    email = V.email(b.email, 'a valid university email');
    if (!UNI_EMAIL.test(email)) bad('Enter a valid university email, for example name@uni-passau.de.');
  } else {
    email = V.email(b.email, 'a valid work email');
    if (FREE_MAIL.test(email)) bad('Use your work email, not a personal address.');
  }
  if (db.find('users', (u) => u.email === email)) bad('An account with this email already exists. Log in instead.');

  let student, client;
  if (role === 'student') {
    const permit_type = V.oneOf(b.permit_type, C.PERMIT_TYPES, 'your permit type');
    const work_rule = b.work_rule ? V.oneOf(b.work_rule, C.WORK_RULES, 'your work allowance') : C.DEFAULT_WORK_RULE[permit_type];
    if (b.permit_confirmed !== true) bad('Confirm that your permit allows paid employment.');
    student = { university: V.str(b.university, 'your university', { max: 120 }), university_email: email, nationality: V.str(b.nationality, 'your nationality', { max: 60 }), permit_type, work_rule,
      permit_wording_note: V.str(b.permit_wording_note, 'the wording on your permit', { optional: permit_type === 'EU/EEA citizen', max: 400 }),
      permit_valid_until: b.permit_valid_until ? V.date(b.permit_valid_until, 'the permit expiry') : '',
      practice_areas: Array.isArray(b.practice_areas) ? b.practice_areas.slice(0, 8).map((x) => V.str(x, 'a practice area', { max: 40 })).join('|') : '',
      languages: V.str(b.languages, 'your languages', { optional: true, max: 120 }), bio: '', first_job_done: false, permit_confirmed: true, verified_at: '' };
  } else {
    const register_number = V.str(b.register_number, 'the Handelsregister number', { max: 40 });
    client = { company_name: V.str(b.company_name, 'the company name', { max: 120 }), legal_form: V.str(b.legal_form, 'the legal form', { max: 60 }), register_number,
      vat_id: V.str(b.vat_id, 'the VAT ID', { optional: true, max: 30 }), city: V.str(b.city, 'the city', { max: 60 }), contact_role: V.str(b.contact_role, 'your role', { max: 60 }),
      website: V.str(b.website, 'the website', { optional: true, max: 120 }), register_check: /^(HRB|HRA)\s*\d+/i.test(register_number) ? 'passed' : 'pending', plan: 'pay-per-brief' };
  }
  const token = auth.newToken();
  const user = db.insert('users', { role, email, password_hash: auth.hashPassword(password), first_name, last_name, status: 'pending', verify_token: token, is_demo: false });
  if (student) db.insert('students', { id: user.id, user_id: user.id, ...student, is_demo: false });
  if (client) db.insert('clients', { id: user.id, user_id: user.id, ...client, is_demo: false });
  if (student) D.dayAccount(user.id, Number(today().slice(0, 4)));
  D.audit(user.id, 'user.signup', 'users', user.id, { role, register_check: client?.register_check });
  auth.createSession(res, user.id);
  return { user: safeUser(user), verify_url: `/api/auth/verify?token=${token}`, register_check: client?.register_check };
}));

app.get('/api/auth/verify', (req, res) => {
  const u = db.find('users', (x) => x.verify_token && x.verify_token === String(req.query.token || ''));
  if (!u) return res.redirect('/login.html?error=link');
  db.update('users', u.id, { status: u.status === 'pending' ? 'verified' : u.status, verify_token: '' });
  if (u.role === 'student') db.update('students', u.id, { verified_at: db.nowISO() });
  D.notify(u.id, 'welcome', u.role === 'student' ? 'Your university email is verified. You can now bid on briefs that fit your permit.' : 'Your work email is verified.', u.role === 'student' ? '/app/briefs.html' : '/client/dashboard.html');
  D.audit(u.id, 'user.verified', 'users', u.id, 'Simulated email link clicked');
  const next = String(req.query.next || '');
  const home = u.role === 'student' ? '/app/' : '/client/';
  if (next.startsWith(home) && /^\/[\w\-./?=&%]*$/.test(next)) return res.redirect(next + (next.includes('?') ? '&' : '?') + 'verified=1');
  res.redirect(u.role === 'student' ? '/app/dashboard.html?verified=1' : '/client/dashboard.html?verified=1');
});

app.post('/api/auth/login', h((req, res) => {
  const email = String(req.body?.email || '').trim().toLowerCase();
  const key = `${req.ip}|${email}`;
  if (!auth.loginAllowed(key)) fail(429, 'Too many attempts. Wait 10 minutes, then try again.');
  const u = db.find('users', (x) => x.email === email);
  if (!u || !auth.verifyPassword(req.body?.password || '', u.password_hash)) { auth.loginFailed(key); fail(401, 'The email or password is not right. Check both and try again.'); }
  if (u.status === 'suspended') fail(403, 'This account is suspended. Contact the Kontrak team to review it.');
  auth.loginSucceeded(key);
  auth.createSession(res, u.id);
  return { user: safeUser(u) };
}));

app.post('/api/auth/demo-login', h((req, res) => {
  const u = db.find('users', (x) => x.email === String(req.body?.email || '').toLowerCase());
  if (!u || !db.bool(u.is_demo)) fail(404, 'That demo account does not exist. Run npm run reset to restore demo data.');
  auth.createSession(res, u.id);
  return { user: safeUser(u) };
}));

app.post('/api/auth/logout', h((req, res) => { auth.destroySession(req, res); return { ok: true }; }));

// ── Me ──────────────────────────────────────────────────────
function mePayload(u) {
  const out = { user: safeUser(u), today: today(), rules: rules() };
  if (u.role === 'student') { out.profile = D.studentOf(u.id); out.state = D.studentState(u.id); }
  if (u.role === 'client') out.profile = D.clientOf(u.id);
  out.unread = {
    notifications: db.filter('notifications', (n) => n.user_id === u.id && !n.read_at).length,
    messages: db.filter('messages', (m) => m.recipient_id === u.id && !m.read_at).length,
  };
  return out;
}
app.get('/api/me', h((req) => (req.user ? mePayload(req.user) : { user: null, today: today(), rules: rules() })));
app.get('/api/rules', h(() => ({ rules: rules(), today: today(), permit_types: C.PERMIT_TYPES, work_rules: C.WORK_RULES, default_work_rule: C.DEFAULT_WORK_RULE })));

app.put('/api/me/profile', need('student'), h((req) => {
  const b = req.body || {};
  const patch = {
    bio: V.str(b.bio, 'a short bio', { optional: true, max: 600 }),
    languages: V.str(b.languages, 'your languages', { optional: true, max: 120 }),
    permit_wording_note: V.str(b.permit_wording_note, 'the permit wording', { optional: true, max: 400 }),
    university: V.str(b.university, 'your university', { max: 120 }),
    practice_areas: (Array.isArray(b.practice_areas) ? b.practice_areas : []).slice(0, 8).map((x) => V.str(x, 'a practice area', { max: 40 })).join('|'),
  };
  if (b.permit_valid_until) patch.permit_valid_until = V.date(b.permit_valid_until, 'the permit expiry');
  db.update('students', req.user.id, patch);
  D.audit(req.user.id, 'profile.updated', 'students', req.user.id, Object.keys(patch));
  return mePayload(req.user);
}));

app.put('/api/me/company', need('client'), h((req) => {
  const b = req.body || {};
  const cur = D.clientOf(req.user.id);
  const register_number = V.str(b.register_number, 'the Handelsregister number', { max: 40 });
  const patch = { company_name: V.str(b.company_name, 'the company name', { max: 120 }), legal_form: V.str(b.legal_form, 'the legal form', { max: 60 }), register_number,
    vat_id: V.str(b.vat_id, 'the VAT ID', { optional: true, max: 30 }), city: V.str(b.city, 'the city', { max: 60 }), contact_role: V.str(b.contact_role, 'your role', { max: 60 }), website: V.str(b.website, 'the website', { optional: true, max: 120 }) };
  if (register_number !== cur.register_number) patch.register_check = /^(HRB|HRA)\s*\d+/i.test(register_number) ? 'passed' : 'pending';
  db.update('clients', req.user.id, patch);
  D.audit(req.user.id, 'company.updated', 'clients', req.user.id, { register_check: patch.register_check || cur.register_check });
  return mePayload(req.user);
}));

// ── Briefs ──────────────────────────────────────────────────
function sortBriefs(list, sort, scoreOf) {
  const by = {
    newest: (a, b) => String(b.posted_at).localeCompare(String(a.posted_at)),
    fee: (a, b) => b.fee_cents - a.fee_cents,
    rate: (a, b) => b.effective_hourly_cents - a.effective_hourly_cents,
    deadline: (a, b) => String(a.deadline).localeCompare(String(b.deadline)),
    fit: (a, b) => scoreOf(b) - scoreOf(a),
  };
  return list.sort(by[sort] || by.newest);
}

app.get('/api/briefs', h((req) => {
  const q = req.query;
  const t = today();
  const text = String(q.q || '').trim().toLowerCase();
  const areas = String(q.areas || '').split(',').filter(Boolean);
  const textMatch = (b) => !text || [b.title, b.description, b.client?.company_name, b.practice_areas.join(' '), b.city].join(' ').toLowerCase().includes(text);
  const areaMatch = (b) => !areas.length || b.practice_areas.some((a) => areas.includes(a));
  const jurMatch = (b) => !q.jurisdiction || b.jurisdiction === q.jurisdiction;
  const modeMatch = (b) => (!q.mode || b.location_mode === q.mode) && (!q.minRate || b.effective_hourly_cents >= Number(q.minRate));
  let views = D.liveBriefs(t).map((b) => D.briefView(b, t));
  const allAreas = [...new Set(views.flatMap((b) => b.practice_areas))].sort();

  const user = req.user;
  if (user?.role === 'student') {
    const state = D.studentState(user.id, t);
    const st = D.studentOf(user.id);
    const mine = new Set(String(st?.practice_areas || '').split('|').filter(Boolean));
    const saved = new Set(db.filter('saved_briefs', (s) => s.user_id === user.id).map((s) => s.brief_id));
    views = views.map((b) => ({ ...b, fit: D.fitForStudent(user, db.get('briefs', b.id), t, state), saved: saved.has(b.id) }));
    const score = (b) => (b.fit.fits ? 1000 : 0) + b.practice_areas.filter((a) => mine.has(a)).length * 100 + b.effective_hourly_cents / 100;
    const base = views.filter((b) => textMatch(b) && areaMatch(b) && jurMatch(b) && modeMatch(b) && (q.fits !== '1' || (b.fit.eligible && b.fit.fits)));
    // Gate 1 runs before ranking: ineligible briefs never reach the Matched feed.
    const matched = base.filter((b) => b.fit.eligible);
    const savedList = db.filter('saved_briefs', (s) => s.user_id === user.id).map((s) => db.get('briefs', s.brief_id)).filter(Boolean).map((b) => ({ ...D.briefView(b, t), fit: D.fitForStudent(user, b, t, state), saved: true }));
    const tab = q.tab || 'matched';
    const list = tab === 'all' ? base : tab === 'saved' ? savedList : matched;
    return { tab, briefs: sortBriefs([...list], q.sort || (tab === 'matched' ? 'fit' : 'newest'), score), counts: { matched: matched.length, all: base.length, saved: savedList.length }, areas: allAreas, state };
  }
  // Guests and clients: public view. "Fits my remaining days" uses checker numbers if given, else Day-Cap Safe.
  let base = views.filter((b) => textMatch(b) && areaMatch(b) && jurMatch(b) && modeMatch(b));
  if (q.fits === '1') {
    const remHalf = q.remHalf !== undefined && q.remHalf !== '' ? Number(q.remHalf) : null;
    const remWeek = q.remWeek !== undefined && q.remWeek !== '' ? Number(q.remWeek) : null;
    base = base.filter((b) => {
      if (!b.day_cap_safe) return false;
      if (remHalf != null && C.plannedHalfDays(b.scoped_hours, '4 h sessions', rules()) > remHalf) return false;
      if (remWeek != null && b.scoped_hours / b.weeks > remWeek) return false;
      return true;
    });
  }
  if (q.today === '1') base = base.filter((b) => String(b.posted_at).slice(0, 10) === t);
  return { tab: 'all', briefs: sortBriefs(base, q.sort || 'newest'), counts: { all: base.length }, areas: allAreas };
}));

app.get('/api/briefs/eligible-count', h((req) => {
  const t = today();
  const permits = String(req.query.permits || C.PERMIT_TYPES.join('|'));
  const hours = Number(req.query.hours) || 0;
  const fake = { id: '_', status: 'open', jurisdiction: req.query.jurisdiction || 'Germany', min_permit_types: permits, scoped_hours: hours, deadline: req.query.deadline || C.addDays(t, 14) };
  const verified = db.filter('users', (u) => u.role === 'student' && u.status === 'verified');
  const n = verified.filter((u) => {
    const st = D.studentOf(u.id);
    if (!C.eligible({ status: u.status, permit_type: st?.permit_type }, fake, { rules: rules() }).passed) return false;
    if (!hours) return true;
    return C.withinCap(D.studentState(u.id, t), { hours, pattern: '4 h sessions', deadline: fake.deadline }, { rules: rules(), today: t }).passed;
  }).length;
  return { count: n, verified_total: verified.length };
}));

app.get('/api/briefs/:id', h((req) => {
  const b = db.get('briefs', req.params.id);
  if (!b) fail(404, 'This brief does not exist. Go back to the feed and choose another.');
  const t = today();
  const view = D.briefView(b, t);
  const isOwner = req.user?.role === 'client' && b.client_id === req.user.id;
  // Closed briefs stay readable; the view shows their status.
  const out = { brief: view };
  if (req.user?.role === 'student') {
    out.fit = D.fitForStudent(req.user, b, t);
    out.state = D.studentState(req.user.id, t);
    out.profile = D.studentOf(req.user.id);
    out.my_bid = db.find('bids', (x) => x.brief_id === b.id && x.student_id === req.user.id && ['submitted', 'accepted'].includes(x.status)) || null;
    out.saved = !!db.find('saved_briefs', (s) => s.user_id === req.user.id && s.brief_id === b.id);
  }
  if (isOwner) out.is_owner = true;
  return out;
}));

app.post('/api/briefs', need('client'), h((req) => {
  const b = req.body || {};
  const client = D.clientOf(req.user.id);
  if (req.user.status !== 'verified') fail(403, 'Verify your work email before you publish. Use the link shown after sign-up.');
  if (client.register_check !== 'passed') fail(403, 'Your company register check is pending. You can publish once the Kontrak team confirms it.');
  const t = today();
  const fee_cents = cents(V.num(b.fee, 'the fee in euros', { min: 1, max: 100000 }));
  const scoped_hours = V.num(b.scoped_hours, 'the scoped hours', { min: 0.5, max: 400 });
  const deadline = V.date(b.deadline, 'the deadline');
  if (deadline < t) bad('Choose a deadline today or later.');
  const jurisdiction = V.oneOf(b.jurisdiction || 'Germany', ['Germany', 'Austria', 'Switzerland', 'EU-wide'], 'the jurisdiction');
  const floor = C.aboveFloor({ feeCents: fee_cents, hours: scoped_hours, deadline }, { rules: rules(), today: t });
  if (!floor.passed) { D.audit(req.user.id, 'brief.blocked', 'briefs', '', { reason: floor.reason }); fail(422, floor.reason, { gate: floor }); }
  const areas = (Array.isArray(b.practice_areas) ? b.practice_areas : []).slice(0, 5).map((x) => V.str(x, 'a practice area', { max: 40 }));
  if (!areas.length) bad('Choose at least one practice area.');
  const permits = (Array.isArray(b.min_permit_types) && b.min_permit_types.length ? b.min_permit_types : C.PERMIT_TYPES).map((p) => V.oneOf(p, C.PERMIT_TYPES, 'a permit type'));
  const brief = db.insert('briefs', {
    client_id: req.user.id, title: V.str(b.title, 'a title', { min: 8, max: 120 }), description: V.str(b.description, 'a description', { min: 20, max: 1500 }),
    scope_deliverable: V.str(b.scope_deliverable, 'the scope and deliverable', { min: 20, max: 1500 }), practice_areas: areas.join('|'), fee_cents, scoped_hours,
    jurisdiction, location_mode: V.oneOf(b.location_mode || 'Remote', ['Remote', 'On-site'], 'remote or on-site'), city: V.str(b.city, 'the city', { optional: true, max: 60 }) || client.city,
    deadline, min_permit_types: permits.join('|'), languages: V.str(b.languages, 'the working language', { optional: true, max: 60 }) || 'English', status: 'open', posted_at: db.nowISO(), is_demo: false,
  });
  D.audit(req.user.id, 'brief.published', 'briefs', brief.id, { fee_cents, scoped_hours, effective_hourly_cents: floor.detail.effectiveHourlyCents });
  return { brief: D.briefView(brief, t), warning: rules().liveJurisdictions.includes(jurisdiction) ? null : `${jurisdiction} is not live yet. Students can see this brief but cannot bid until that country module launches.` };
}));

app.post('/api/briefs/:id/save', need('student'), h((req) => {
  const b = db.get('briefs', req.params.id);
  if (!b) fail(404, 'This brief does not exist.');
  const ex = db.find('saved_briefs', (s) => s.user_id === req.user.id && s.brief_id === b.id);
  if (ex) db.remove('saved_briefs', (s) => s.id === ex.id); else db.insert('saved_briefs', { user_id: req.user.id, brief_id: b.id });
  return { saved: !ex };
}));

app.get('/api/client/briefs', need('client'), h((req) => {
  const t = today();
  return { briefs: db.filter('briefs', (b) => b.client_id === req.user.id).map((b) => ({ ...D.briefView(b, t), bids_total: db.filter('bids', (x) => x.brief_id === b.id).length, contract: db.find('contracts', (c) => c.brief_id === b.id)?.id || null })).sort((a, b) => String(b.posted_at).localeCompare(String(a.posted_at))) };
}));

app.put('/api/client/briefs/:id/cancel', need('client'), h((req) => {
  const b = db.get('briefs', req.params.id);
  if (!b || b.client_id !== req.user.id) fail(404, 'This brief does not exist.');
  if (b.status !== 'open') bad('Only open briefs can be cancelled.');
  db.update('briefs', b.id, { status: 'cancelled' });
  for (const x of db.filter('bids', (x) => x.brief_id === b.id && x.status === 'submitted')) { db.update('bids', x.id, { status: 'declined' }); D.notify(x.student_id, 'bid', `"${b.title}" was cancelled by the client.`, '/app/briefs.html'); }
  D.audit(req.user.id, 'brief.cancelled', 'briefs', b.id, '');
  return { ok: true };
}));

// ── Bids ────────────────────────────────────────────────────
function runGates(user, brief, input, { excludeBidId } = {}) {
  const t = today();
  const st = D.studentOf(user.id);
  const state = D.studentState(user.id, t);
  const already = !!db.find('bids', (x) => x.brief_id === brief.id && x.student_id === user.id && x.id !== excludeBidId && ['submitted', 'accepted'].includes(x.status));
  return { state, result: C.checkBid({ student: { status: user.status, permit_type: st?.permit_type }, state, brief, bid: { feeCents: input.feeCents, hours: input.hours, pattern: input.pattern, deadline: brief.deadline }, alreadyOnBrief: already }, { rules: rules(), today: t }) };
}

app.post('/api/bids', need('student'), h((req) => {
  const b = req.body || {};
  const brief = db.get('briefs', String(b.brief_id || ''));
  if (!brief) fail(404, 'This brief does not exist. Go back to the feed and choose another.');
  const feeCents = cents(V.num(b.proposed_fee, 'your fee in euros', { min: 0, max: 100000 }));
  const hours = V.num(b.proposed_hours, 'your hours', { min: 0, max: 400 });
  const pattern = V.oneOf(b.planned_pattern || '4 h sessions', ['2 h sessions', '4 h sessions', '8 h days'], 'a work pattern');
  const { result } = runGates(req.user, brief, { feeCents, hours, pattern });
  if (b.dry_run) return { result };
  if (!result.allowed) {
    const first = result.gates.find((g) => !g.passed);
    D.audit(req.user.id, 'bid.blocked', 'briefs', brief.id, { gate: first.id, reason: first.reason, fee_cents: feeCents, hours });
    fail(422, first.reason, { result });
  }
  const cover_note = V.str(b.cover_note, 'a cover note', { min: 20, max: 1200 });
  const bid = db.insert('bids', { brief_id: brief.id, student_id: req.user.id, proposed_fee_cents: feeCents, proposed_hours: hours, planned_pattern: pattern, planned_half_days: C.plannedHalfDays(hours, pattern, rules()), cover_note, boost: b.boost === true, status: 'submitted', gate_result: JSON.stringify({ allowed: true, gates: result.gates.map(({ id, name, passed, reason }) => ({ id, name, passed, reason })), flags: result.flags, at: db.nowISO() }), is_demo: false });
  D.audit(req.user.id, 'bid.allowed', 'bids', bid.id, { brief: brief.id, fee_cents: feeCents, hours, gates: result.gates.map((g) => g.passed) });
  D.notify(brief.client_id, 'bid', `New bid from ${D.fullName(req.user)} on "${brief.title}".`, `/client/bids.html?brief=${brief.id}`);
  const client = D.clientOf(brief.client_id);
  return { bid, result, message: `Bid sent. ${client?.company_name || 'The client'} will see your remaining days and hours with it.` };
}));

app.get('/api/bids', need('student', 'client'), h((req) => {
  const t = today();
  if (req.user.role === 'student') {
    return { bids: db.filter('bids', (x) => x.student_id === req.user.id).map((x) => ({ ...x, brief: (() => { const b = db.get('briefs', x.brief_id); return b ? D.briefView(b, t) : null; })(), contract_id: db.find('contracts', (c) => c.bid_id === x.id)?.id || null })).sort((a, b) => String(b.created_at).localeCompare(String(a.created_at))) };
  }
  const briefId = String(req.query.brief || '');
  const mine = db.filter('briefs', (b) => b.client_id === req.user.id && (!briefId || b.id === briefId));
  const ids = new Set(mine.map((b) => b.id));
  const bids = db.filter('bids', (x) => ids.has(x.brief_id)).map((x) => {
    const u = db.get('users', x.student_id);
    const st = D.studentOf(x.student_id);
    const state = D.studentState(x.student_id, t);
    const brief = db.get('briefs', x.brief_id);
    const now = x.status === 'submitted' ? runGates(u, brief, { feeCents: db.numv(x.proposed_fee_cents), hours: db.numv(x.proposed_hours), pattern: x.planned_pattern }, { excludeBidId: x.id }).result : null;
    const revs = db.filter('reviews', (r) => r.to_user_id === x.student_id);
    return { ...x, gate_result: undefined, brief_title: brief?.title, student: { id: u.id, name: D.fullName(u), university: st?.university, permit_type: st?.permit_type, work_rule: st?.work_rule, practice_areas: String(st?.practice_areas || '').split('|').filter(Boolean), languages: st?.languages, verified: u.status === 'verified', first_job_done: db.bool(st?.first_job_done), rating: revs.length ? Math.round((revs.reduce((s, r) => s + Number(r.stars), 0) / revs.length) * 10) / 10 : null, reviews: revs.length },
      remaining: { appliesDays: state.appliesDays, appliesWeekly: state.appliesWeekly, days: state.remainingDays, weekly: state.remainingWeekly }, fits_now: now ? now.allowed : null, fits_reason: now ? (now.gates.find((g) => !g.passed)?.reason || 'Fits all three gates today.') : null,
      effective_hourly_cents: C.effectiveHourlyCents(db.numv(x.proposed_fee_cents), db.numv(x.proposed_hours)) };
  });
  const rank = (x) => (x.status === 'submitted' ? 10000 : 0) + (x.fits_now ? 5000 : 0) + (x.student.rating || 0) * 100 + (x.student.practice_areas.length);
  bids.sort((a, b) => rank(b) - rank(a));
  return { bids, briefs: mine.map((b) => D.briefView(b, t)) };
}));

app.post('/api/bids/:id/withdraw', need('student'), h((req) => {
  const x = db.get('bids', req.params.id);
  if (!x || x.student_id !== req.user.id) fail(404, 'This bid does not exist.');
  if (x.status !== 'submitted') bad('Only submitted bids can be withdrawn.');
  db.update('bids', x.id, { status: 'withdrawn' });
  D.audit(req.user.id, 'bid.withdrawn', 'bids', x.id, '');
  return { ok: true };
}));

app.post('/api/bids/:id/decline', need('client'), h((req) => {
  const x = db.get('bids', req.params.id);
  const brief = x && db.get('briefs', x.brief_id);
  if (!x || brief.client_id !== req.user.id) fail(404, 'This bid does not exist.');
  if (x.status !== 'submitted') bad('Only submitted bids can be declined.');
  db.update('bids', x.id, { status: 'declined' });
  D.notify(x.student_id, 'bid', `Your bid on "${brief.title}" was declined.`, '/app/briefs.html');
  D.audit(req.user.id, 'bid.declined', 'bids', x.id, '');
  return { ok: true };
}));

app.post('/api/bids/:id/accept', need('client'), h((req) => {
  const x = db.get('bids', req.params.id);
  const brief = x && db.get('briefs', x.brief_id);
  if (!x || brief.client_id !== req.user.id) fail(404, 'This bid does not exist.');
  if (x.status !== 'submitted') bad('Only submitted bids can be accepted.');
  if (brief.status !== 'open') bad('This brief is no longer open.');
  if (req.user.status !== 'verified') fail(403, 'Verify your work email before you accept a bid.');
  const student = db.get('users', x.student_id);
  const { result } = runGates(student, brief, { feeCents: db.numv(x.proposed_fee_cents), hours: db.numv(x.proposed_hours), pattern: x.planned_pattern }, { excludeBidId: x.id });
  if (!result.allowed) {
    const first = result.gates.find((g) => !g.passed);
    D.audit(req.user.id, 'accept.blocked', 'bids', x.id, { gate: first.id, reason: first.reason });
    fail(422, `This student no longer fits the rules today. ${first.reason.replace(/^This bid/, 'The bid').replace(/^You have/, 'They have')}`, { result });
  }
  const t = today();
  const id = db.nextId('contracts', { year: Number(t.slice(0, 4)) });
  const contract = db.insert('contracts', { id, brief_id: brief.id, bid_id: x.id, client_id: req.user.id, student_id: x.student_id, fee_cents: db.numv(x.proposed_fee_cents), platform_fee_cents: 0, student_net_cents: 0, scoped_hours: db.numv(x.proposed_hours), deadline: brief.deadline, status: 'awaiting_signatures', governing_law: 'Germany', pdf_ready: false, is_demo: false });
  const fees = D.feeSplit(contract);
  db.update('contracts', id, { platform_fee_cents: fees.feeCents, student_net_cents: fees.netCents });
  db.insert('escrow', { id: `ESC-${id.split('-')[2]}`, contract_id: id, amount_cents: db.numv(x.proposed_fee_cents), status: 'awaiting_funding', reference: `KTK-ESC-${id.split('-')[2]}`, is_demo: false });
  D.rebuildLetter(contract, t);
  db.update('bids', x.id, { status: 'accepted' });
  db.update('briefs', brief.id, { status: 'awarded' });
  for (const o of db.filter('bids', (o) => o.brief_id === brief.id && o.id !== x.id && o.status === 'submitted')) {
    db.update('bids', o.id, { status: 'declined' });
    D.notify(o.student_id, 'bid', `"${brief.title}" was awarded to another student.`, '/app/briefs.html');
  }
  D.notify(x.student_id, 'contract', `${D.clientOf(req.user.id).company_name} accepted your bid. Contract ${id} is ready to sign.`, `/app/contract.html?id=${id}`);
  D.audit(req.user.id, 'contract.created', 'contracts', id, { bid: x.id, gates: result.gates.map((g) => g.passed) });
  return { contract_id: id };
}));

// ── Contracts ───────────────────────────────────────────────
const STEP = { awaiting_signatures: 2, signed: 3, in_progress: 3, delivered: 3, disputed: 3, signed_off: 4, closed: 4 };
function contractFor(req, id) {
  const c = db.get('contracts', id);
  if (!c) fail(404, 'This contract does not exist.');
  if (req.user.role !== 'admin' && c.student_id !== req.user.id && c.client_id !== req.user.id) fail(404, 'This contract does not exist.');
  return c;
}
function contractView(c, viewer) {
  const brief = db.get('briefs', c.brief_id);
  const esc_ = db.find('escrow', (e) => e.contract_id === c.id);
  const su = db.get('users', c.student_id), cu = db.get('users', c.client_id);
  const logged = D.loggedHours(c.id);
  const fees = ['signed_off', 'closed'].includes(c.status) ? { feeCents: db.numv(c.platform_fee_cents), netCents: db.numv(c.student_net_cents), pct: db.numv(c.fee_cents) ? Math.round((db.numv(c.platform_fee_cents) / db.numv(c.fee_cents)) * 1000) / 10 : 0 } : D.feeSplit(c);
  const unread = viewer ? db.filter('messages', (m) => m.contract_id === c.id && m.recipient_id === viewer.id && !m.read_at).length : 0;
  return { id: c.id, status: c.status, step: STEP[c.status] ?? 1, brief: brief ? { id: brief.id, title: brief.title, scope_deliverable: brief.scope_deliverable, practice_areas: String(brief.practice_areas).split('|'), jurisdiction: brief.jurisdiction, location_mode: brief.location_mode, city: brief.city } : null,
    fee_cents: db.numv(c.fee_cents), scoped_hours: db.numv(c.scoped_hours), logged_hours: Math.round(logged * 100) / 100, deadline: c.deadline, governing_law: c.governing_law,
    effective_hourly_cents: C.effectiveHourlyCents(db.numv(c.fee_cents), db.numv(c.scoped_hours)), fees, boost: db.bool(db.get('bids', c.bid_id)?.boost),
    student: { id: su.id, name: D.fullName(su), university: D.studentOf(su.id)?.university }, client: { id: cu.id, name: D.fullName(cu), company: D.clientOf(cu.id)?.company_name, role: D.clientOf(cu.id)?.contact_role, verified: D.clientOf(cu.id)?.register_check === 'passed' },
    student_signed_at: c.student_signed_at, client_signed_at: c.client_signed_at, student_signature_name: c.student_signature_name, client_signature_name: c.client_signature_name, delivery_note: c.delivery_note,
    escrow: esc_ ? { status: esc_.status, amount_cents: db.numv(esc_.amount_cents), method: esc_.method, funded_at: esc_.funded_at, release_requested_at: esc_.release_requested_at, released_at: esc_.released_at, reference: esc_.reference } : null,
    created_at: c.created_at, unread };
}
app.get('/api/contracts', need(), h((req) => {
  const list = db.filter('contracts', (c) => req.user.role === 'admin' || c.student_id === req.user.id || c.client_id === req.user.id).map((c) => contractView(c, req.user));
  return { contracts: list.sort((a, b) => String(b.created_at).localeCompare(String(a.created_at))) };
}));
app.get('/api/contracts/:id', need(), h((req) => {
  const c = contractFor(req, req.params.id);
  const out = contractView(c, req.user);
  out.hours = db.filter('hour_log', (x) => x.contract_id === c.id).sort((a, b) => String(b.work_date).localeCompare(String(a.work_date)));
  out.letter_html = c.letter_html;
  out.reviews = db.filter('reviews', (r) => r.contract_id === c.id);
  out.my_review = out.reviews.find((r) => r.from_user_id === req.user.id) || null;
  if (req.user.role === 'student') out.state = D.studentState(req.user.id);
  return out;
}));
app.get('/api/contracts/:id/letter', need(), (req, res) => {
  try { const c = contractFor(req, req.params.id); res.type('html').send(letterPage(c, c.letter_html)); }
  catch (e) { res.status(e.status || 500).type('html').send(`<p>${esc(e.message)}</p>`); }
});

app.post('/api/contracts/:id/sign', need('student', 'client'), h((req) => {
  const c = contractFor(req, req.params.id);
  if (!['awaiting_signatures'].includes(c.status)) bad('This contract is already signed by both parties.');
  const side = req.user.id === c.student_id ? 'student' : 'client';
  if (c[`${side}_signed_at`]) bad('You have already signed this engagement letter.');
  const name = String(req.body?.full_name || '').trim().replace(/\s+/g, ' ');
  if (name.toLowerCase() !== D.fullName(req.user).toLowerCase()) bad(`Type your full name exactly as registered: ${D.fullName(req.user)}.`);
  if (req.body?.consent !== true) bad('Tick the box to confirm you agree to the engagement letter.');
  const at = db.nowISO();
  db.update('contracts', c.id, { [`${side}_signed_at`]: at, [`${side}_signature_name`]: name });
  if (c.student_signed_at && c.client_signed_at) db.update('contracts', c.id, { status: 'signed' });
  D.rebuildLetter(c);
  const other = side === 'student' ? c.client_id : c.student_id;
  D.notify(other, 'contract', `${name} signed the engagement letter for ${c.id}.${c.status === 'signed' ? (side === 'student' ? ' Fund escrow to start the work.' : ' Escrow funding is next.') : ' Your signature is next.'}`, `/${side === 'student' ? 'client' : 'app'}/contract.html?id=${c.id}`);
  D.audit(req.user.id, 'contract.signed', 'contracts', c.id, { side, name, simulated: true });
  return contractView(c, req.user);
}));

app.post('/api/contracts/:id/fund', need('client'), h((req) => {
  const c = contractFor(req, req.params.id);
  if (c.status !== 'signed') bad(c.status === 'awaiting_signatures' ? 'Both parties must sign before escrow can be funded.' : 'Escrow for this contract is already funded.');
  const method = V.oneOf(req.body?.method, ['card', 'sepa'], 'card or SEPA');
  const e = db.find('escrow', (x) => x.contract_id === c.id);
  db.update('escrow', e.id, { status: 'funded', method: method === 'card' ? 'Card (simulated)' : 'SEPA (simulated)', funded_at: db.nowISO() });
  db.update('contracts', c.id, { status: 'in_progress' });
  D.notify(c.student_id, 'escrow', `Escrow for ${c.id} is funded with ${C.euro(db.numv(e.amount_cents))}. You can start work and log hours.`, `/app/contract.html?id=${c.id}`);
  D.audit(req.user.id, 'escrow.funded', 'escrow', e.id, { contract: c.id, amount_cents: e.amount_cents, method, simulated: true });
  return contractView(c, req.user);
}));

app.post('/api/contracts/:id/hours', need('student'), h((req) => {
  const c = contractFor(req, req.params.id);
  if (c.status !== 'in_progress') bad(c.status === 'signed' || c.status === 'awaiting_signatures' ? 'Wait until the client funds escrow, then log your hours.' : 'Hours can only be logged while the work is in progress.');
  const t = today();
  const work_date = V.date(req.body?.work_date, 'the work date');
  if (work_date > t) bad('Log hours for today or an earlier date, not the future.');
  if (work_date.slice(0, 4) !== t.slice(0, 4)) bad(`Log hours for ${t.slice(0, 4)} only. Earlier years are closed.`);
  const hours = V.num(req.body?.hours, 'the hours', { min: 0.25, max: 10 });
  if (Math.round(hours * 4) !== hours * 4) bad('Log hours in steps of a quarter hour, for example 2.5 or 3.75.');
  const note = V.str(req.body?.note, 'a short note on the work', { max: 200 });
  const r = rules();
  const logged = D.loggedHours(c.id);
  if (logged + hours > db.numv(c.scoped_hours) + 1e-9) bad(`This entry would take the log to ${logged + hours} h, above the ${c.scoped_hours} scoped hours. Agree a scope change with the client in messages first.`);
  const st = D.studentOf(req.user.id);
  const sameDay = db.filter('hour_log', (x) => x.student_id === req.user.id && x.work_date === work_date);
  const before = sameDay.reduce((s, x) => s + db.numv(x.hours), 0);
  const after = before + hours;
  const delta = C.dayAccountDelta(before, after, r);
  const year = Number(work_date.slice(0, 4));
  const acc = D.dayAccount(req.user.id, year);
  if (C.hasDayAccount(st.work_rule)) {
    const units = C.halfDayUnits(db.numv(acc.full_days_used) + delta.full, db.numv(acc.half_days_used) + delta.half);
    if (units > r.annualHalfDays) {
      D.audit(req.user.id, 'hours.blocked', 'contracts', c.id, { gate: 2, work_date, hours });
      fail(422, `This entry would go past your ${r.annualFullDays}-day account for ${year}. You have ${C.remainingHalfDays({ fullUsed: db.numv(acc.full_days_used), halfUsed: db.numv(acc.half_days_used) }, r)} half days left. Log fewer hours or stop work on this brief.`);
    }
  }
  if (C.hasWeeklyCap(st.work_rule)) {
    const mon = C.mondayOf(work_date), sun = C.addDays(mon, 6);
    const week = db.filter('hour_log', (x) => x.student_id === req.user.id && x.work_date >= mon && x.work_date <= sun).reduce((s, x) => s + db.numv(x.hours), 0);
    if (week + hours > r.weeklyCapHours + 1e-9) {
      D.audit(req.user.id, 'hours.blocked', 'contracts', c.id, { gate: 2, work_date, hours, week });
      fail(422, `This entry takes the week of ${mon} to ${week + hours} h, above the ${r.weeklyCapHours} h cap. Log no more than ${Math.max(0, r.weeklyCapHours - week)} h for that week.`);
    }
  }
  const type = C.dayCost(after, r);
  for (const x of sameDay) db.update('hour_log', x.id, { day_type: type });
  const entry = db.insert('hour_log', { contract_id: c.id, student_id: req.user.id, work_date, hours, note, day_type: type, counted_in_year: year, is_demo: false });
  db.update('day_account', acc.id, { full_days_used: db.numv(acc.full_days_used) + delta.full, half_days_used: db.numv(acc.half_days_used) + delta.half });
  D.audit(req.user.id, 'hours.logged', 'hour_log', entry.id, { contract: c.id, work_date, hours, day_type: type, delta });
  return { entry, state: D.studentState(req.user.id), contract: contractView(c, req.user) };
}));

app.post('/api/contracts/:id/request-release', need('student'), h((req) => {
  const c = contractFor(req, req.params.id);
  const e = db.find('escrow', (x) => x.contract_id === c.id);
  if (c.status !== 'in_progress' || e.status !== 'funded') bad('Release can be requested once escrow is funded and the work is in progress.');
  if (req.body?.confirm !== true) bad('Tick the box to confirm the deliverable is complete.');
  const note = V.str(req.body?.note, 'a delivery note', { optional: true, max: 300 });
  db.update('escrow', e.id, { status: 'release_requested', release_requested_at: db.nowISO() });
  db.update('contracts', c.id, { status: 'delivered', delivery_note: note });
  const cl = D.clientOf(c.client_id);
  D.notify(c.client_id, 'escrow', `${D.fullName(req.user)} delivered the work on ${c.id} and requested release of ${C.euro(db.numv(e.amount_cents))}.`, `/client/contract.html?id=${c.id}`);
  D.audit(req.user.id, 'escrow.release_requested', 'escrow', e.id, { contract: c.id });
  return { ...contractView(c, req.user), message: `Release requested. We have notified ${cl.company_name}.` };
}));

app.post('/api/contracts/:id/release', need('client'), h((req) => {
  const c = contractFor(req, req.params.id);
  const e = db.find('escrow', (x) => x.contract_id === c.id);
  if (e.status !== 'release_requested') bad(e.status === 'released' ? 'This payment has already been released.' : 'The student has not requested release yet. Wait for delivery, then sign off.');
  if (req.body?.confirm !== true) bad('Tick the box to confirm you have reviewed the delivered work.');
  const st = D.studentOf(c.student_id);
  const wasFirst = !db.bool(st.first_job_done);
  const fees = D.feeSplit(c);
  const at = db.nowISO();
  db.update('contracts', c.id, { status: 'signed_off', platform_fee_cents: fees.feeCents, student_net_cents: fees.netCents });
  db.update('escrow', e.id, { status: 'released', released_at: at });
  db.update('students', st.id, { first_job_done: true });
  db.update('briefs', c.brief_id, { status: 'completed' });
  D.notify(c.student_id, 'escrow', `${C.euro(fees.netCents, { decimals: 2 })} released on ${c.id}. Kontrak fee: ${fees.pct}% (${C.euro(fees.feeCents, { decimals: 2 })})${wasFirst ? ', your first job is free' : ''}. Payout is simulated.`, `/app/payments.html`);
  D.audit(req.user.id, 'escrow.released', 'escrow', e.id, { contract: c.id, amount_cents: e.amount_cents, fee_pct: fees.pct, fee_cents: fees.feeCents, first_job: wasFirst, simulated: true });
  return contractView(c, req.user);
}));

app.post('/api/contracts/:id/review', need('student', 'client'), h((req) => {
  const c = contractFor(req, req.params.id);
  if (!['signed_off', 'closed'].includes(c.status)) bad('Reviews open once the payment is released.');
  if (db.find('reviews', (r) => r.contract_id === c.id && r.from_user_id === req.user.id)) bad('You have already reviewed this engagement.');
  const stars = V.num(req.body?.stars, 'a rating', { min: 1, max: 5 });
  const text = V.str(req.body?.text, 'a short review', { min: 10, max: 500 });
  const to = req.user.id === c.student_id ? c.client_id : c.student_id;
  db.insert('reviews', { contract_id: c.id, from_user_id: req.user.id, to_user_id: to, stars: Math.round(stars), text, is_demo: false });
  if (db.filter('reviews', (r) => r.contract_id === c.id).length >= 2) db.update('contracts', c.id, { status: 'closed' });
  D.notify(to, 'review', `${D.fullName(req.user)} left a ${Math.round(stars)}-star review on ${c.id}.`, `/${req.user.role === 'student' ? 'client' : 'app'}/contract.html?id=${c.id}`);
  D.audit(req.user.id, 'review.created', 'contracts', c.id, { stars });
  return contractView(c, req.user);
}));

// ── Hour log export (for the Ausländerbehörde) ──────────────
function hourRows(userId) {
  return db.filter('hour_log', (x) => x.student_id === userId).sort((a, b) => String(a.work_date).localeCompare(String(b.work_date))).map((x) => {
    const c = db.get('contracts', x.contract_id); const cl = c && D.clientOf(c.client_id); const b = c && db.get('briefs', c.brief_id);
    return { date: x.work_date, contract: x.contract_id, employer: cl?.company_name || '', brief: b?.title || '', hours: db.numv(x.hours), day_type: x.day_type, note: x.note };
  });
}
const csvCell = (v) => { let s = String(v ?? ''); if (/^[=+\-@]/.test(s)) s = "'" + s; return /[",\n;]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
app.get('/api/me/hour-log.csv', need('student'), (req, res) => {
  const rows = hourRows(req.user.id);
  const lines = [['Date', 'Contract ID', 'Employer', 'Brief', 'Hours', 'Day type', 'Note'].join(','), ...rows.map((r) => [r.date, r.contract, r.employer, r.brief, r.hours, r.day_type, r.note].map(csvCell).join(','))];
  res.setHeader('Content-Disposition', `attachment; filename="kontrak-hour-log-${req.user.id}.csv"`);
  res.type('text/csv').send('﻿' + lines.join('\r\n'));
});
app.get('/api/me/hour-log.html', need('student'), (req, res) => {
  const rows = hourRows(req.user.id);
  const s = D.studentState(req.user.id); const st = D.studentOf(req.user.id);
  const total = rows.reduce((a, r) => a + r.hours, 0);
  res.type('html').send(`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Hour log · ${esc(D.fullName(req.user))} · Kontrak</title><link rel="stylesheet" href="/css/components.css"><link rel="stylesheet" href="/css/app.css"><style>body{background:#fff;padding:40px}@media print{body{padding:0}.no-print{display:none}}</style></head><body>
<div class="no-print between mb-24"><a class="btn btn-ghost btn-sm" href="/app/payments.html">Back</a><button class="btn btn-sm" onclick="window.print()">Print or save as PDF</button></div>
<div class="label">Kontrak · hour log · prototype export</div><h1 class="h2 mt-8">${esc(D.fullName(req.user))}</h1>
<p class="muted mt-8">${esc(st.university)} · ${esc(st.permit_type)} · Generated ${esc(today())}</p>
<div class="kv mt-24 mb-24"><div><div class="k">Day account ${s.year}</div><div class="v num">${s.usedDays} of ${s.caps.fullDays} days used</div></div><div><div class="k">Hours logged on Kontrak</div><div class="v num">${total} h</div></div><div><div class="k">Entries</div><div class="v num">${rows.length}</div></div></div>
<table class="table"><thead><tr><th>Date</th><th>Contract</th><th>Employer</th><th>Brief</th><th class="num">Hours</th><th>Day type</th></tr></thead><tbody>
${rows.map((r) => `<tr><td>${esc(r.date)}</td><td>${esc(r.contract)}</td><td>${esc(r.employer)}</td><td>${esc(r.brief)}</td><td class="num">${r.hours}</td><td>${esc(r.day_type)}</td></tr>`).join('') || '<tr><td colspan="6">No hours logged yet.</td></tr>'}
</tbody></table><p class="small faint mt-24">The day account includes days entered for other employers. Prototype export: information, not legal advice. Your Ausländerbehörde decides what evidence it accepts.</p></body></html>`);
});

// ── Payments ────────────────────────────────────────────────
app.get('/api/payments', need('student', 'client'), h((req) => {
  const isStudent = req.user.role === 'student';
  const list = db.filter('contracts', (c) => (isStudent ? c.student_id : c.client_id) === req.user.id).map((c) => contractView(c, req.user));
  const year = today().slice(0, 4);
  const sum = (arr, f) => arr.reduce((s, x) => s + f(x), 0);
  const inEscrow = list.filter((c) => ['funded', 'release_requested'].includes(c.escrow?.status));
  const released = list.filter((c) => c.escrow?.status === 'released');
  const awaiting = list.filter((c) => c.escrow?.status === 'awaiting_funding');
  return {
    rows: list.sort((a, b) => String(b.escrow?.released_at || b.escrow?.funded_at || b.created_at).localeCompare(String(a.escrow?.released_at || a.escrow?.funded_at || a.created_at))),
    totals: {
      in_escrow_cents: sum(inEscrow, (c) => c.escrow.amount_cents),
      released_year_cents: sum(released.filter((c) => String(c.escrow.released_at).startsWith(year)), (c) => (isStudent ? c.fees.netCents : c.escrow.amount_cents)),
      fees_year_cents: sum(released.filter((c) => String(c.escrow.released_at).startsWith(year)), (c) => c.fees.feeCents),
      awaiting_cents: sum(awaiting, (c) => c.escrow.amount_cents),
    },
  };
}));

// ── Messages and notifications ──────────────────────────────
app.get('/api/messages/threads', need('student', 'client'), h((req) => {
  const mine = db.filter('contracts', (c) => c.student_id === req.user.id || c.client_id === req.user.id);
  const threads = mine.map((c) => {
    const msgs = db.filter('messages', (m) => m.contract_id === c.id).sort((a, b) => String(a.sent_at).localeCompare(String(b.sent_at)));
    const otherId = req.user.id === c.student_id ? c.client_id : c.student_id;
    const other = db.get('users', otherId);
    const last = msgs[msgs.length - 1];
    return { contract_id: c.id, title: db.get('briefs', c.brief_id)?.title, other: { name: D.fullName(other), org: other.role === 'client' ? D.clientOf(other.id)?.company_name : D.studentOf(other.id)?.university }, last: last?.body || '', last_at: last?.sent_at || c.created_at, unread: msgs.filter((m) => m.recipient_id === req.user.id && !m.read_at).length };
  });
  return { threads: threads.sort((a, b) => String(b.last_at).localeCompare(String(a.last_at))) };
}));
app.get('/api/messages', need('student', 'client', 'admin'), h((req) => {
  const c = contractFor(req, String(req.query.contract_id || ''));
  const msgs = db.filter('messages', (m) => m.contract_id === c.id).sort((a, b) => String(a.sent_at).localeCompare(String(b.sent_at)));
  const now = db.nowISO();
  for (const m of msgs) if (m.recipient_id === req.user.id && !m.read_at) db.update('messages', m.id, { read_at: now });
  return { messages: msgs.map((m) => ({ id: m.id, body: m.body, sent_at: m.sent_at, mine: m.sender_id === req.user.id, sender: D.fullName(db.get('users', m.sender_id)) })) };
}));
app.post('/api/messages', need('student', 'client'), h((req) => {
  const c = contractFor(req, String(req.body?.contract_id || ''));
  const body = V.str(req.body?.body, 'a message', { max: 2000 });
  const to = req.user.id === c.student_id ? c.client_id : c.student_id;
  const at = db.nowISO();
  const m = db.insert('messages', { contract_id: c.id, sender_id: req.user.id, recipient_id: to, body, sent_at: at, read_at: '', is_demo: false });
  D.notify(to, 'message', `New message from ${D.fullName(req.user)} on ${c.id}.`, `/${req.user.role === 'student' ? 'client' : 'app'}/messages.html?contract=${c.id}`);
  return { message: { id: m.id, body, sent_at: at, mine: true, sender: D.fullName(req.user) } };
}));
app.get('/api/notifications', need(), h((req) => {
  const list = db.filter('notifications', (n) => n.user_id === req.user.id).sort((a, b) => String(b.created_at).localeCompare(String(a.created_at)));
  return { notifications: list.slice(0, 30), unread: list.filter((n) => !n.read_at).length };
}));
app.post('/api/notifications/read', need(), h((req) => {
  const now = db.nowISO();
  for (const n of db.filter('notifications', (n) => n.user_id === req.user.id && !n.read_at && (!req.body?.id || n.id === req.body.id))) db.update('notifications', n.id, { read_at: now });
  return { ok: true };
}));

// ── Public: stats, checker, waitlist, universities ──────────
app.get('/api/stats/public', h(() => {
  const t = today();
  return {
    open_briefs: D.liveBriefs(t).length,
    verified_students: db.filter('users', (u) => u.role === 'student' && u.status === 'verified').length,
    compliant_placements: db.filter('contracts', (c) => D.DONE.includes(c.status)).length,
    verified_clients: db.filter('clients', (c) => c.register_check === 'passed').length,
    min_wage_cents: C.minWageFor(t, rules()), today: t, demo_data: db.all('users').some((u) => db.bool(u.is_demo)),
  };
}));

app.post('/api/checker/run', h((req) => {
  const b = req.body || {};
  const r = rules(); const t = today();
  const permitType = V.oneOf(b.permit_type, C.PERMIT_TYPES, 'your permit type');
  const fullUsed = V.num(b.full_used ?? 0, 'full days used', { min: 0, max: r.annualFullDays });
  const halfUsed = V.num(b.half_used ?? 0, 'half days used', { min: 0, max: r.annualHalfDays });
  if (C.halfDayUnits(fullUsed, halfUsed) > r.annualHalfDays) bad(`Full and half days together cannot exceed ${r.annualFullDays} days. Check both numbers.`);
  const weekHours = V.num(b.week_hours ?? 0, 'hours booked this week', { min: 0, max: 80 });
  const summary = C.checkerSummary({ permitType, fullUsed, halfUsed, weekHours }, { rules: r, today: t });
  const state = { workRule: summary.workRule, fullUsed, halfUsed, reservedHalf: 0, loggedThisWeek: weekHours, plannedThisWeek: 0 };
  const takeable = D.liveBriefs(t).filter((brief) => C.eligible({ status: 'verified', permit_type: permitType }, brief, { rules: r }).passed
    && C.withinCap(state, { hours: db.numv(brief.scoped_hours), pattern: '4 h sessions', deadline: brief.deadline }, { rules: r, today: t }).passed
    && C.aboveFloor({ feeCents: db.numv(brief.fee_cents), hours: db.numv(brief.scoped_hours), deadline: brief.deadline }, { rules: r, today: t }).passed);
  if (b.log !== false) db.insert('checker_runs', { permit_type: permitType, days_used: fullUsed + halfUsed / 2, week_hours: weekHours });
  return { summary, briefs_today: takeable.length };
}));

app.post('/api/waitlist', h((req) => {
  const b = req.body || {};
  const email = V.email(b.email);
  const role = V.oneOf(b.role, ['student', 'client', 'university'], 'student, client or university');
  if (b.consent !== true) bad('Tick the consent box so we may email you about the pilot.');
  if (db.find('waitlist', (w) => w.email === email && w.role === role)) bad('This email is already on the waitlist. We will be in touch.');
  db.insert('waitlist', { email, role, city_or_university: V.str(b.city_or_university, 'your city or university', { optional: true, max: 120 }), source: V.str(b.source, 'the source', { optional: true, max: 60 }) || 'homepage', consent: true });
  return { message: 'You are on the waitlist. We will email you when the pilot opens at your university.' };
}));

app.post('/api/university-requests', h((req) => {
  const b = req.body || {};
  const row = db.insert('university_requests', { university: V.str(b.university, 'the university', { max: 120 }), contact_name: V.str(b.contact_name, 'your name', { max: 80 }), contact_email: V.email(b.contact_email), role: V.str(b.role, 'your role', { max: 80 }), message: V.str(b.message, 'a short message', { optional: true, max: 1500 }) });
  D.audit('guest', 'university.request', 'university_requests', row.id, { university: row.university });
  return { message: 'Thank you. The Kontrak team will reply within five working days.' };
}));

// ── Admin ───────────────────────────────────────────────────
const ADMIN_TABLES = ['users', 'students', 'clients', 'briefs', 'bids', 'contracts', 'escrow', 'hour_log', 'day_account', 'messages', 'notifications', 'reviews', 'waitlist', 'university_requests', 'checker_runs', 'interview_notes', 'config', 'audit_log'];
const STRIP = { users: ['password_hash', 'verify_token'], contracts: ['letter_html'] };
app.get('/api/admin/overview', need('admin'), h(() => {
  const students = db.filter('users', (u) => u.role === 'student');
  const bidders = new Set(db.all('bids').map((b) => b.student_id));
  const signers = new Set(db.filter('contracts', (c) => c.student_signed_at).map((c) => c.student_id));
  const placed = new Set(db.filter('contracts', (c) => D.DONE.includes(c.status)).map((c) => c.student_id));
  const blocks = db.filter('audit_log', (a) => a.action === 'bid.blocked' || a.action === 'hours.blocked' || a.action === 'brief.blocked');
  const byGate = { 1: 0, 2: 0, 3: 0 };
  for (const a of blocks) { try { const g = JSON.parse(a.detail).gate; if (byGate[g] !== undefined) byGate[g]++; else if (a.action === 'brief.blocked') byGate[3]++; } catch { /* ignore */ } }
  return {
    counts: { users: db.all('users').length, students: students.length, clients: db.filter('users', (u) => u.role === 'client').length, open_briefs: D.liveBriefs().length, bids: db.all('bids').length, contracts: db.all('contracts').length, in_escrow_cents: db.filter('escrow', (e) => ['funded', 'release_requested'].includes(e.status)).reduce((s, e) => s + db.numv(e.amount_cents), 0), waitlist: db.all('waitlist').length, university_requests: db.all('university_requests').length, checker_runs: db.all('checker_runs').length, pending_users: db.filter('users', (u) => u.status === 'pending').length, pending_registers: db.filter('clients', (c) => c.register_check === 'pending').length },
    funnel: [['Signed up', students.length], ['Verified', students.filter((u) => u.status === 'verified').length], ['Placed a bid', bidders.size], ['Signed a contract', signers.size], ['Compliant placement', placed.size]],
    gate_blocks: byGate, recent: db.all('audit_log').slice(-12).reverse(),
    market: { sourced: 209000, reachable: 3120, signup_pct: 25, signups: 780, active_pct: 35, active: 270, break_even_low: 110, break_even_high: 120 },
  };
}));
app.get('/api/admin/waitlist.csv', need('admin'), (req, res) => {
  const cols = ['id', 'email', 'role', 'city_or_university', 'source', 'consent', 'created_at'];
  res.setHeader('Content-Disposition', 'attachment; filename="kontrak-waitlist.csv"');
  res.type('text/csv').send('﻿' + [cols.join(','), ...db.all('waitlist').map((w) => cols.map((c) => csvCell(w[c])).join(','))].join('\r\n'));
});
app.get('/api/admin/table/:name', need('admin'), h((req) => {
  const name = req.params.name;
  if (!ADMIN_TABLES.includes(name)) fail(404, 'This table does not exist.');
  const strip = STRIP[name] || [];
  return { rows: db.all(name).map((r) => { const o = { ...r }; for (const k of strip) delete o[k]; return o; }).reverse() };
}));
app.put('/api/admin/users/:id', need('admin'), h((req) => {
  const u = db.get('users', req.params.id); if (!u) fail(404, 'This user does not exist.');
  if (u.id === req.user.id) bad('You cannot change your own admin account here.');
  const status = V.oneOf(req.body?.status, ['pending', 'verified', 'suspended'], 'a status');
  db.update('users', u.id, { status });
  if (status === 'verified' && u.role === 'student') db.update('students', u.id, { verified_at: db.nowISO() });
  if (status === 'suspended') db.remove('sessions', (s) => s.user_id === u.id);
  D.audit(req.user.id, `user.${status}`, 'users', u.id, '');
  return { ok: true };
}));
app.put('/api/admin/clients/:id', need('admin'), h((req) => {
  const c = D.clientOf(req.params.id); if (!c) fail(404, 'This client does not exist.');
  const register_check = V.oneOf(req.body?.register_check, ['pending', 'passed', 'failed'], 'a register check result');
  db.update('clients', c.id, { register_check });
  D.notify(c.user_id, 'company', `Company register check: ${register_check}.`, '/client/company.html');
  D.audit(req.user.id, 'client.register_check', 'clients', c.id, { register_check });
  return { ok: true };
}));
app.put('/api/admin/briefs/:id', need('admin'), h((req) => {
  const b = db.get('briefs', req.params.id); if (!b) fail(404, 'This brief does not exist.');
  const status = V.oneOf(req.body?.status, ['open', 'awarded', 'in_progress', 'completed', 'cancelled'], 'a status');
  db.update('briefs', b.id, { status });
  D.audit(req.user.id, 'brief.status', 'briefs', b.id, { status });
  return { ok: true };
}));
app.put('/api/admin/config/:id', need('admin'), h((req) => {
  const row = db.get('config', req.params.id); if (!row) fail(404, 'This config row does not exist.');
  const value = V.str(req.body?.value, 'a value', { max: 200 });
  if (row.key !== 'live_jurisdictions' && !Number.isFinite(Number(value))) bad('Enter a number for this rule.');
  const valid_from = req.body?.valid_from ? V.date(req.body.valid_from, 'the valid-from date') : row.valid_from;
  db.update('config', row.id, { value: row.key === 'live_jurisdictions' ? value : Number(value), valid_from, note: V.str(req.body?.note, 'a note', { optional: true, max: 300 }) || row.note });
  D.reloadRules();
  D.audit(req.user.id, 'config.updated', 'config', row.id, { key: row.key, from: row.value, to: value, valid_from });
  return { ok: true, rules: rules() };
}));
app.post('/api/admin/interview-notes', need('admin'), h((req) => {
  const b = req.body || {};
  const row = db.insert('interview_notes', { interviewee_type: V.oneOf(b.interviewee_type, ['student', 'client', 'university', 'authority', 'other'], 'the interviewee type'), date: V.date(b.date, 'the interview date'), key_quote: V.str(b.key_quote, 'a key quote', { max: 500 }), insight: V.str(b.insight, 'the insight', { max: 1000 }), is_demo: false });
  D.audit(req.user.id, 'interview.added', 'interview_notes', row.id, '');
  return { note: row };
}));
app.post('/api/admin/reset', need('admin'), h(async (req, res) => {
  await seed();
  D.reloadRules();
  auth.destroySession(req, res);
  return { ok: true, message: 'Demo data restored. Log in again.' };
}));

// ── Static site ─────────────────────────────────────────────
app.use('/api', (req, res) => res.status(404).json({ error: 'This API route does not exist.' }));
app.use(express.static(path.join(ROOT, 'public'), { extensions: ['html'], maxAge: 0 }));
app.use((req, res) => res.status(404).sendFile(path.join(ROOT, 'public', '404.html')));

// ── Start ───────────────────────────────────────────────────
const missing = await db.load();
if (missing.length) { console.log(`Creating demo workbooks: ${missing.join(', ')}`); await seed(); }
D.reloadRules();
writeDemoJson();
auth.purgeExpiredSessions();
db.watchConfig(() => D.reloadRules());
const server = app.listen(PORT, () => {
  console.log(`\n  Kontrak prototype running at http://localhost:${PORT}`);
  console.log('  Data: /data/*.xlsx  ·  Reset: npm run reset  ·  Stop: Ctrl+C\n');
});
async function shutdown() { console.log('\nSaving workbooks…'); server.close(); await db.flushAll(); process.exit(0); }
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
