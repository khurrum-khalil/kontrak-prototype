// Domain helpers shared by the routes and the seed: rules, student state, brief views, audit.
import * as db from './store.js';
import * as C from './compliance.js';
import { buildLetter } from './contracts.js';

let rules = C.DEFAULT_RULES;
export function reloadRules() { rules = C.rulesFromConfig(db.all('config')); return rules; }
export const getRules = () => rules;

/** Today's date in Germany. KONTRAK_TODAY=YYYY-MM-DD overrides it for rehearsals. */
export function todayISO() {
  if (process.env.KONTRAK_TODAY) return process.env.KONTRAK_TODAY;
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
}

export function audit(actorId, action, entity, entityId, detail) {
  db.insert('audit_log', { actor_id: actorId || 'system', action, entity, entity_id: entityId || '', detail: typeof detail === 'string' ? detail : JSON.stringify(detail ?? ''), at: db.nowISO() });
}
export function notify(userId, type, text, link) { db.insert('notifications', { user_id: userId, type, text, link, read_at: '' }); }

export const fullName = (u) => (u ? `${u.first_name} ${u.last_name}`.trim() : '');
export const studentOf = (userId) => db.find('students', (s) => s.user_id === userId);
export const clientOf = (userId) => db.find('clients', (c) => c.user_id === userId);
export const ACTIVE = ['awaiting_signatures', 'signed', 'in_progress'];
export const DONE = ['signed_off', 'closed'];

export function dayAccount(studentId, year) {
  let row = db.find('day_account', (d) => d.student_id === studentId && Number(d.year) === Number(year));
  if (!row) row = db.insert('day_account', { id: `DA-${studentId}-${year}`, student_id: studentId, year, full_days_used: 0, half_days_used: 0, weekly_hours_cache: '', note: '' });
  return row;
}

export const loggedHours = (contractId) => db.filter('hour_log', (h) => h.contract_id === contractId).reduce((s, h) => s + db.numv(h.hours), 0);

/** Everything the gates and meters need about one student today. */
export function studentState(userId, today = todayISO()) {
  const st = studentOf(userId);
  const year = Number(today.slice(0, 4));
  const acc = dayAccount(userId, year);
  const workRule = st?.work_rule || '140/280 days + 20 h per week';
  const monday = C.mondayOf(today), sunday = C.addDays(monday, 6);
  const loggedThisWeek = db.filter('hour_log', (h) => h.student_id === userId && h.work_date >= monday && h.work_date <= sunday).reduce((s, h) => s + db.numv(h.hours), 0);
  let reservedHalf = 0, plannedThisWeek = 0;
  const active = db.filter('contracts', (c) => c.student_id === userId && ACTIVE.includes(c.status));
  for (const c of active) {
    const remaining = Math.max(0, db.numv(c.scoped_hours) - loggedHours(c.id));
    if (!remaining) continue;
    const bid = db.get('bids', c.bid_id);
    reservedHalf += C.plannedHalfDays(remaining, bid?.planned_pattern, rules);
    plannedThisWeek += remaining / C.weeksBetween(today, c.deadline);
  }
  plannedThisWeek = Math.round(plannedThisWeek * 10) / 10;
  const fullUsed = db.numv(acc.full_days_used), halfUsed = db.numv(acc.half_days_used);
  const state = { workRule, fullUsed, halfUsed, reservedHalf, loggedThisWeek: Math.round(loggedThisWeek * 10) / 10, plannedThisWeek };
  const usedHalf = C.halfDayUnits(fullUsed, halfUsed);
  const remainingHalf = C.remainingHalfDays(state, rules);
  return {
    ...state, year,
    appliesDays: C.hasDayAccount(workRule), appliesWeekly: C.hasWeeklyCap(workRule),
    usedDays: usedHalf / 2, reservedDays: reservedHalf / 2,
    remainingHalf, remainingDays: remainingHalf / 2,
    weekCommitted: Math.round((state.loggedThisWeek + plannedThisWeek) * 10) / 10,
    remainingWeekly: C.remainingWeeklyHours(state, rules),
    caps: { fullDays: rules.annualFullDays, halfDays: rules.annualHalfDays, weekly: rules.weeklyCapHours },
  };
}

export function briefView(b, today = todayISO()) {
  const client = db.find('clients', (c) => c.user_id === b.client_id);
  const fee = db.numv(b.fee_cents), hours = db.numv(b.scoped_hours);
  return {
    id: b.id, title: b.title, description: b.description, scope_deliverable: b.scope_deliverable,
    practice_areas: String(b.practice_areas || '').split('|').filter(Boolean),
    fee_cents: fee, scoped_hours: hours, jurisdiction: b.jurisdiction, location_mode: b.location_mode, city: b.city,
    deadline: b.deadline, min_permit_types: String(b.min_permit_types || '').split('|').filter(Boolean), languages: b.languages,
    status: b.status, posted_at: b.posted_at, client_id: b.client_id,
    client: client ? { company_name: client.company_name, city: client.city, verified: client.register_check === 'passed', legal_form: client.legal_form } : null,
    effective_hourly_cents: C.effectiveHourlyCents(fee, hours),
    floor_cents: C.floorForPeriod(today, b.deadline || today, rules),
    day_cap_safe: C.isDayCapSafe({ ...b, fee_cents: fee, scoped_hours: hours }, { rules, today }),
    weeks: C.weeksBetween(today, b.deadline),
    bids_count: db.filter('bids', (x) => x.brief_id === b.id && x.status === 'submitted').length,
    is_demo: db.bool(b.is_demo),
  };
}

/** Open briefs whose deadline has not passed. */
export const liveBriefs = (today = todayISO()) => db.filter('briefs', (b) => b.status === 'open' && (!b.deadline || b.deadline >= today));

export function hasBidOrEngagement(userId, briefId) {
  return !!db.find('bids', (x) => x.brief_id === briefId && x.student_id === userId && ['submitted', 'accepted'].includes(x.status));
}

/** Gate 1 + Gate 2 (with the brief's own fee and hours) for listing and matching. */
export function fitForStudent(user, brief, today = todayISO(), state = studentState(user.id, today)) {
  const st = studentOf(user.id);
  const studentLike = { status: user.status, permit_type: st?.permit_type };
  const g1 = C.eligible(studentLike, brief, { rules, alreadyOnBrief: hasBidOrEngagement(user.id, brief.id) });
  const g2 = C.withinCap(state, { hours: db.numv(brief.scoped_hours), pattern: '4 h sessions', deadline: brief.deadline }, { rules, today });
  return { eligible: g1.passed, eligibleReason: g1.reason, fits: g2.passed, fitReason: g2.reason, alreadyOnBrief: hasBidOrEngagement(user.id, brief.id) };
}

export function rebuildLetter(contract, today = todayISO()) {
  const brief = db.get('briefs', contract.brief_id);
  const bid = db.get('bids', contract.bid_id);
  const studentUser = db.get('users', contract.student_id);
  const clientUser = db.get('users', contract.client_id);
  const student = studentOf(contract.student_id);
  const client = clientOf(contract.client_id);
  if (!brief || !studentUser || !clientUser || !student || !client) return;
  const html = buildLetter({ contract, brief, bid, studentUser, student, clientUser, client, rules, today, firstJobDone: db.bool(student.first_job_done) });
  db.update('contracts', contract.id, { letter_html: html, pdf_ready: true });
}

/** Contract fee split shown before release (recalculated at release). */
export function feeSplit(contract) {
  const st = studentOf(contract.student_id);
  const bid = db.get('bids', contract.bid_id);
  return C.payoutFees(db.numv(contract.fee_cents), { firstJobDone: db.bool(st?.first_job_done), boost: db.bool(bid?.boost) }, rules);
}
