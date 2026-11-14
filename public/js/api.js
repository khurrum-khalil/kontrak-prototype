// Small fetch wrapper for the Kontrak JSON API.
// If no server answers (for example when the site is opened with VS Code Live Server),
// public pages fall back to a read-only demo mode using /js/demo-data.json.
import * as C from './compliance-client.js';

let mode = null; // 'live' | 'demo'
let demoData = null;

async function detect() {
  try {
    const r = await fetch('/api/rules', { credentials: 'same-origin' });
    const ok = r.ok && (r.headers.get('content-type') || '').includes('json');
    mode = ok ? 'live' : 'demo';
  } catch { mode = 'demo'; }
  return mode;
}

export async function isDemoMode() { if (!mode) await detect(); return mode === 'demo'; }

export class ApiError extends Error { constructor(msg, status, data) { super(msg); this.status = status; this.data = data; } }

export async function api(path, { method = 'GET', body } = {}) {
  if (!mode) await detect();
  if (mode === 'demo') return demoApi(path, method, body);
  let res;
  try {
    res = await fetch(path, { method, credentials: 'same-origin', headers: body !== undefined ? { 'Content-Type': 'application/json' } : {}, body: body !== undefined ? JSON.stringify(body) : undefined });
  } catch {
    throw new ApiError('The server did not answer. Check that npm start is running, then try again.', 0);
  }
  let data = null;
  try { data = await res.json(); } catch { /* not JSON */ }
  if (!res.ok) throw new ApiError(data?.error || `The request failed (${res.status}). Try again.`, res.status, data);
  return data;
}

export const get = (p) => api(p);
export const post = (p, body = {}) => api(p, { method: 'POST', body });
export const put = (p, body = {}) => api(p, { method: 'PUT', body });

// ── Read-only demo mode ─────────────────────────────────────
const READ_ONLY = 'Read-only demo mode. Start the server with npm start to save data.';
async function loadDemo() {
  if (!demoData) {
    try { demoData = await (await fetch('/js/demo-data.json')).json(); }
    catch { demoData = { briefs: [], stats: { open_briefs: 0, verified_students: 0, compliant_placements: 0 }, generated_for: new Date().toISOString().slice(0, 10) }; }
  }
  return demoData;
}
async function demoApi(path, method, body) {
  const d = await loadDemo();
  const today = d.generated_for;
  const url = new URL(path, location.origin);
  const p = url.pathname;
  if (method !== 'GET' && p !== '/api/checker/run') throw new ApiError(READ_ONLY, 503);
  if (p === '/api/rules') return { rules: C.DEFAULT_RULES, today, permit_types: C.PERMIT_TYPES, work_rules: C.WORK_RULES, default_work_rule: C.DEFAULT_WORK_RULE };
  if (p === '/api/me') return { user: null, today, rules: C.DEFAULT_RULES };
  if (p === '/api/stats/public') return { ...d.stats, today, min_wage_cents: C.minWageFor(today), demo_data: true };
  if (p === '/api/briefs') {
    const q = Object.fromEntries(url.searchParams);
    const areas = (q.areas || '').split(',').filter(Boolean);
    let list = d.briefs.filter((b) => (!q.q || (b.title + ' ' + b.description + ' ' + (b.client?.company_name || '')).toLowerCase().includes(q.q.toLowerCase()))
      && (!areas.length || b.practice_areas.some((a) => areas.includes(a))) && (!q.jurisdiction || b.jurisdiction === q.jurisdiction) && (!q.mode || b.location_mode === q.mode)
      && (q.fits !== '1' || b.day_cap_safe));
    return { tab: 'all', briefs: list, counts: { all: list.length }, areas: [...new Set(d.briefs.flatMap((b) => b.practice_areas))].sort() };
  }
  const m = p.match(/^\/api\/briefs\/(B-\d+)$/);
  if (m) { const b = d.briefs.find((x) => x.id === m[1]); if (!b) throw new ApiError('This brief does not exist in the demo snapshot.', 404); return { brief: b }; }
  if (p === '/api/briefs/eligible-count') return { count: d.stats.verified_students, verified_total: d.stats.verified_students };
  if (p === '/api/checker/run') {
    // Same maths as the server, counted against the snapshot. Nothing is logged in demo mode.
    const b = body || {};
    const summary = C.checkerSummary({ permitType: b.permit_type, fullUsed: b.full_used, halfUsed: b.half_used, weekHours: b.week_hours }, { today });
    const state = { workRule: summary.workRule, fullUsed: b.full_used, halfUsed: b.half_used, loggedThisWeek: b.week_hours };
    const n = d.briefs.filter((x) => x.jurisdiction === 'Germany' && x.min_permit_types.includes(b.permit_type)
      && C.withinCap(state, { hours: x.scoped_hours, pattern: '4 h sessions', deadline: x.deadline }, { today }).passed).length;
    return { summary, briefs_today: n };
  }
  throw new ApiError(READ_ONLY, 503);
}
