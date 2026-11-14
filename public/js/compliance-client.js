// CLIENT MIRROR of server/compliance.js — gives instant feedback in the browser.
// The server re-runs every gate and its decision is final. Keep this file identical to
// server/compliance.js below this header (npm test checks that both return the same results).
//
// Money is integer cents. Dates are ISO strings (YYYY-MM-DD). Hours are decimals.

export const PERMIT_TYPES = [
  '§16b student permit (non-EU)',
  '§16f language course',
  '§20 job-seeking permit',
  'EU/EEA citizen',
];

// work_rule decides which limits apply. "140/280 days" = annual day account, "20 h" = weekly cap.
export const WORK_RULES = [
  '140/280 days + 20 h per week',
  '140/280 days',
  '20 h per week',
  'no restriction',
];

export const DEFAULT_WORK_RULE = {
  '§16b student permit (non-EU)': '140/280 days + 20 h per week',
  '§16f language course': '20 h per week',
  '§20 job-seeking permit': '140/280 days + 20 h per week',
  'EU/EEA citizen': 'no restriction',
};

export const DEFAULT_RULES = {
  minWage: [{ from: '2026-01-01', cents: 1390 }, { from: '2027-01-01', cents: 1460 }],
  weeklyCapHours: 20,
  annualFullDays: 140,
  annualHalfDays: 280,
  platformFeePct: 5,
  firstJobFeePct: 0,
  boostFeePct: 3,
  fullDayThresholdHours: 4,
  minijobCeilingCents: 60300,
  liveJurisdictions: ['Germany'],
};

/** Build a rules object from rows of the `config` sheet ({key, value, valid_from}). */
export function rulesFromConfig(rows = []) {
  const r = { ...DEFAULT_RULES, minWage: [], liveJurisdictions: [...DEFAULT_RULES.liveJurisdictions] };
  const num = (v) => Number(String(v).replace(',', '.'));
  for (const row of rows) {
    const k = String(row.key || '').trim();
    const v = row.value;
    if (k === 'min_wage_hourly_cents') r.minWage.push({ from: String(row.valid_from || '1970-01-01').slice(0, 10), cents: Math.round(num(v)) });
    else if (k === 'weekly_cap_hours') r.weeklyCapHours = num(v);
    else if (k === 'annual_full_days') r.annualFullDays = num(v);
    else if (k === 'annual_half_days') r.annualHalfDays = num(v);
    else if (k === 'platform_fee_pct') r.platformFeePct = num(v);
    else if (k === 'first_job_fee_pct') r.firstJobFeePct = num(v);
    else if (k === 'boost_fee_pct') r.boostFeePct = num(v);
    else if (k === 'full_day_threshold_hours') r.fullDayThresholdHours = num(v);
    else if (k === 'minijob_ceiling_cents') r.minijobCeilingCents = Math.round(num(v));
    else if (k === 'live_jurisdictions') r.liveJurisdictions = String(v).split(',').map((s) => s.trim()).filter(Boolean);
  }
  if (!r.minWage.length) r.minWage = [...DEFAULT_RULES.minWage];
  r.minWage.sort((a, b) => a.from.localeCompare(b.from));
  return r;
}

// ── Formatting ──────────────────────────────────────────────
export function euro(cents, { decimals } = {}) {
  const v = (Number(cents) || 0) / 100;
  const d = decimals ?? (Number.isInteger(v) ? 0 : 2);
  return '€' + v.toLocaleString('en-GB', { minimumFractionDigits: d, maximumFractionDigits: d });
}
export const fmtHours = (h) => {
  const n = Math.round(Number(h) * 100) / 100;
  return (Number.isInteger(n) ? String(n) : String(n)) + ' h';
};
const round1 = (n) => Math.round(n * 10) / 10;
export const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

// ── Dates ───────────────────────────────────────────────────
export function parseISO(d) { const [y, m, day] = String(d).slice(0, 10).split('-').map(Number); return new Date(Date.UTC(y, m - 1, day)); }
export function toISO(date) { return date.toISOString().slice(0, 10); }
export function addDays(iso, n) { const d = parseISO(iso); d.setUTCDate(d.getUTCDate() + n); return toISO(d); }
export function daysBetween(a, b) { return Math.round((parseISO(b) - parseISO(a)) / 86400000); }
export function mondayOf(iso) { const d = parseISO(iso); const wd = (d.getUTCDay() + 6) % 7; d.setUTCDate(d.getUTCDate() - wd); return toISO(d); }
export function isoWeekKey(iso) {
  const d = parseISO(iso); const wd = (d.getUTCDay() + 6) % 7; d.setUTCDate(d.getUTCDate() - wd + 3); // Thursday of this week
  const dayOfYear = Math.round((d - Date.UTC(d.getUTCFullYear(), 0, 1)) / 86400000);
  const week = 1 + Math.floor(dayOfYear / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}
/** Number of calendar weeks the work is spread over, from today to the deadline (at least 1). */
export function weeksBetween(todayISO, deadlineISO) {
  if (!deadlineISO) return 1;
  const days = daysBetween(mondayOf(todayISO), deadlineISO);
  return Math.max(1, Math.ceil((days + 1) / 7));
}

// ── Day account maths ───────────────────────────────────────
export const dayCost = (hoursInSession, r = DEFAULT_RULES) => (Number(hoursInSession) > r.fullDayThresholdHours ? 'full' : 'half');
export const halfDayUnits = (full, half) => (Number(full) || 0) * 2 + (Number(half) || 0);
export const hasDayAccount = (workRule) => String(workRule || '').includes('140/280');
export const hasWeeklyCap = (workRule) => String(workRule || '').includes('20 h');

/** Half days left this calendar year. reservedHalf = half days already promised to signed work. */
export function remainingHalfDays({ fullUsed = 0, halfUsed = 0, reservedHalf = 0 } = {}, r = DEFAULT_RULES) {
  return Math.max(0, r.annualHalfDays - halfDayUnits(fullUsed, halfUsed) - reservedHalf);
}
export const remainingFullDayEquivalents = (remainingHalf) => remainingHalf / 2;
export function remainingWeeklyHours({ loggedThisWeek = 0, plannedThisWeek = 0 } = {}, r = DEFAULT_RULES) {
  return Math.max(0, round1(r.weeklyCapHours - loggedThisWeek - plannedThisWeek));
}

/** Parse "4 h sessions" / "8 h days" / "2 h sessions" into session length in hours (default 4). */
export function sessionLength(pattern) {
  const m = String(pattern || '').match(/(\d+(?:[.,]\d+)?)\s*h/i);
  const s = m ? Number(m[1].replace(',', '.')) : 4;
  return s > 0 ? s : 4;
}
/** Half-day units a bid will use: full sessions of the pattern length plus one remainder session. */
export function plannedHalfDays(hours, pattern, r = DEFAULT_RULES) {
  const h = Number(hours) || 0;
  if (h <= 0) return 0;
  const s = sessionLength(pattern);
  const unit = (len) => (dayCost(len, r) === 'full' ? 2 : 1);
  const n = Math.floor(h / s + 1e-9);
  const rem = Math.round((h - n * s) * 100) / 100;
  return n * unit(s) + (rem > 0 ? unit(rem) : 0);
}

/** Change to the day account when a date's total hours go from `before` to `after`. */
export function dayAccountDelta(before, after, r = DEFAULT_RULES) {
  const kind = (h) => (h > 0 ? dayCost(h, r) : null);
  const a = kind(before), b = kind(after);
  const d = { full: 0, half: 0 };
  if (a === b) return d;
  if (a) d[a] -= 1;
  if (b) d[b] += 1;
  return d;
}

// ── Wage floor ──────────────────────────────────────────────
export function minWageFor(dateISO, r = DEFAULT_RULES) {
  let cents = r.minWage[0]?.cents ?? 0;
  for (const w of r.minWage) if (w.from <= dateISO) cents = w.cents;
  return cents;
}
/** Highest floor in force at any point between today and the deadline (work may run into 2027). */
export function floorForPeriod(startISO, endISO, r = DEFAULT_RULES) {
  let cents = minWageFor(startISO, r);
  for (const w of r.minWage) if (w.from > startISO && endISO && w.from <= endISO) cents = Math.max(cents, w.cents);
  return cents;
}
export const effectiveHourlyCents = (feeCents, hours) => (Number(hours) > 0 ? Math.round(Number(feeCents) / Number(hours)) : 0);
/** Exact comparison without rounding: fee >= floor × hours. */
export const meetsFloor = (feeCents, hours, floorCents) => Math.round(Number(feeCents) * 100) >= floorCents * Math.round(Number(hours) * 100);

// ── Gate 1: eligible? ───────────────────────────────────────
export function eligible(student, brief, { rules = DEFAULT_RULES, alreadyOnBrief = false } = {}) {
  const permits = String(brief.min_permit_types || '').split('|').map((s) => s.trim()).filter(Boolean);
  const jurisdiction = brief.jurisdiction || 'Germany';
  let reason = null;
  if (student.status !== 'verified') reason = 'Your account is not verified yet. Confirm your university email before you bid.';
  else if (brief.status !== 'open') reason = 'This brief is no longer open. Choose another brief from the feed.';
  else if (!rules.liveJurisdictions.includes(jurisdiction)) reason = `${jurisdiction} briefs are not live yet. Only briefs in ${rules.liveJurisdictions.join(', ')} can be taken today.`;
  else if (permits.length && !permits.includes(student.permit_type)) reason = 'Not available for your permit type. Choose a brief that is open to your permit.';
  else if (alreadyOnBrief) reason = 'You already have a bid or engagement on this brief. Withdraw the bid to place a new one.';
  return { id: 1, name: 'Eligible?', passed: !reason, reason: reason || 'Your permit, the jurisdiction and your verification all fit this brief.' };
}

// ── Gate 2: within the cap? ─────────────────────────────────
// state: { workRule, fullUsed, halfUsed, reservedHalf, loggedThisWeek, plannedThisWeek }
// bid:   { hours, pattern, deadline }
export function withinCap(state, bid, { rules = DEFAULT_RULES, today, year } = {}) {
  const hours = Number(bid.hours) || 0;
  const y = year || Number(String(today).slice(0, 4));
  const detail = { neededHalfDays: 0, remainingHalfDays: null, perWeekHours: 0, remainingWeeklyHours: null, weeks: 1 };
  if (hours <= 0) return { id: 2, name: 'Within the cap?', passed: false, reason: 'Enter the hours you plan to work, above zero.', detail };
  const days = hasDayAccount(state.workRule);
  const weekly = hasWeeklyCap(state.workRule);
  if (!days && !weekly) return { id: 2, name: 'Within the cap?', passed: true, reason: 'No day account or weekly cap applies to your work rule.', detail };

  if (days) {
    detail.neededHalfDays = plannedHalfDays(hours, bid.pattern, rules);
    detail.remainingHalfDays = remainingHalfDays(state, rules);
    if (detail.neededHalfDays > detail.remainingHalfDays) {
      return { id: 2, name: 'Within the cap?', passed: false, detail,
        reason: `This bid needs ${plural(detail.neededHalfDays, 'half day')}. You have ${detail.remainingHalfDays} left in ${y}. Reduce the hours or choose a smaller brief.` };
    }
  }
  if (weekly) {
    detail.weeks = weeksBetween(today, bid.deadline);
    detail.perWeekHours = round1(hours / detail.weeks);
    detail.remainingWeeklyHours = remainingWeeklyHours(state, rules);
    if (hours / detail.weeks > detail.remainingWeeklyHours + 1e-9) {
      return { id: 2, name: 'Within the cap?', passed: false, detail,
        reason: `This bid adds ${detail.perWeekHours} h a week. You have ${detail.remainingWeeklyHours} h left under the ${rules.weeklyCapHours} h cap. Reduce the hours or choose a later deadline.` };
    }
  }
  const parts = [];
  if (days) parts.push(`${detail.neededHalfDays} of your ${detail.remainingHalfDays} remaining half days`);
  if (weekly) parts.push(`${detail.perWeekHours} h a week of your ${detail.remainingWeeklyHours} h left`);
  return { id: 2, name: 'Within the cap?', passed: true, reason: `Fits: uses ${parts.join(' and ')}.`, detail };
}

// ── Gate 3: above the floor? ────────────────────────────────
export function aboveFloor(bid, { rules = DEFAULT_RULES, today } = {}) {
  const fee = Number(bid.feeCents) || 0;
  const hours = Number(bid.hours) || 0;
  const floor = floorForPeriod(today, bid.deadline || today, rules);
  const eff = effectiveHourlyCents(fee, hours);
  const detail = { effectiveHourlyCents: eff, floorCents: floor };
  if (fee <= 0 || hours <= 0) return { id: 3, name: 'Above the floor?', passed: false, detail, reason: 'Enter a fee and hours above zero.' };
  const passed = meetsFloor(fee, hours, floor);
  if (!passed) {
    const minFee = Math.ceil(floor * hours);
    return { id: 3, name: 'Above the floor?', passed, detail,
      reason: `${euro(eff, { decimals: 2 })} per hour is below the ${euro(floor, { decimals: 2 })} statutory minimum. Raise the fee to at least ${euro(minFee, { decimals: 2 })} or reduce the hours.` };
  }
  return { id: 3, name: 'Above the floor?', passed, detail, reason: `${euro(eff, { decimals: 2 })} per hour, above the ${euro(floor, { decimals: 2 })} statutory minimum.` };
}

/** Flags never block. Minijob ceiling: monthly gross above €603 means Midijob contributions apply. */
export function flags(bid, { rules = DEFAULT_RULES, today } = {}) {
  const out = [];
  const weeks = weeksBetween(today, bid.deadline);
  const months = Math.max(1, weeks / 4.33);
  const monthly = Math.round((Number(bid.feeCents) || 0) / months);
  if (monthly > rules.minijobCeilingCents) {
    out.push({ id: 'minijob', text: `About ${euro(monthly)} gross in a month, above the ${euro(rules.minijobCeilingCents)} Minijob ceiling. Midijob contributions apply.` });
  }
  return out;
}

/** Run all three gates. Result: { allowed, gates:[{id,name,passed,reason}], flags } */
export function checkBid({ student, state, brief, bid, alreadyOnBrief = false }, { rules = DEFAULT_RULES, today } = {}) {
  const ctx = { rules, today, year: Number(String(today).slice(0, 4)) };
  const g1 = eligible(student, brief, { rules, alreadyOnBrief });
  const g2 = withinCap(state, bid, ctx);
  const g3 = aboveFloor(bid, ctx);
  const gates = [g1, g2, g3];
  return { allowed: gates.every((g) => g.passed), gates, flags: flags(bid, ctx) };
}

// ── Fees on payout ──────────────────────────────────────────
export function payoutFees(amountCents, { firstJobDone = false, boost = false } = {}, r = DEFAULT_RULES) {
  const pct = (firstJobDone ? r.platformFeePct : r.firstJobFeePct) + (boost ? r.boostFeePct : 0);
  const feeCents = Math.round((Number(amountCents) * pct) / 100);
  return { pct, feeCents, netCents: Number(amountCents) - feeCents };
}

// ── Brief-level label: Day-Cap Safe ─────────────────────────
// A brief is Day-Cap Safe when its scoped hours fit a 20 h week across its timeline,
// it pays at least the statutory floor, and it sits in a live jurisdiction.
export function isDayCapSafe(brief, { rules = DEFAULT_RULES, today } = {}) {
  const weeks = weeksBetween(today, brief.deadline);
  const perWeek = Number(brief.scoped_hours) / weeks;
  return rules.liveJurisdictions.includes(brief.jurisdiction || 'Germany')
    && perWeek <= rules.weeklyCapHours
    && meetsFloor(brief.fee_cents, brief.scoped_hours, floorForPeriod(today, brief.deadline || today, rules));
}

// ── Day-Cap Checker (public tool) ───────────────────────────
export function checkerSummary({ permitType, fullUsed = 0, halfUsed = 0, weekHours = 0 }, { rules = DEFAULT_RULES, today } = {}) {
  const workRule = DEFAULT_WORK_RULE[permitType] || '140/280 days + 20 h per week';
  const days = hasDayAccount(workRule), weekly = hasWeeklyCap(workRule);
  const year = Number(String(today).slice(0, 4));
  const remHalf = days ? remainingHalfDays({ fullUsed, halfUsed }, rules) : null;
  const remWeekly = weekly ? remainingWeeklyHours({ loggedThisWeek: weekHours }, rules) : null;
  const daysInYear = daysBetween(`${year}-01-01`, `${year + 1}-01-01`);
  const yearLeftPct = Math.round((daysBetween(today, `${year + 1}-01-01`) / daysInYear) * 100);
  return {
    workRule, year, appliesDays: days, appliesWeekly: weekly,
    remainingHalfDays: remHalf,
    remainingDays: remHalf == null ? null : remHalf / 2,
    accountLeftPct: remHalf == null ? null : Math.round((remHalf / rules.annualHalfDays) * 100),
    remainingWeeklyHours: remWeekly,
    yearLeftPct,
    resetsOn: `${year + 1}-01-01`,
  };
}
