// Run with: npm test   (Node's built-in test runner)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as C from '../server/compliance.js';
import * as M from '../public/js/compliance-client.js';

const rules = C.DEFAULT_RULES;
const today = '2026-11-14';
const student = { status: 'verified', permit_type: '§16b student permit (non-EU)' };
const openBrief = { status: 'open', jurisdiction: 'Germany', min_permit_types: C.PERMIT_TYPES.join('|') };
const base16b = { workRule: '140/280 days + 20 h per week', fullUsed: 0, halfUsed: 0, reservedHalf: 0, loggedThisWeek: 0, plannedThisWeek: 0 };

test('day cost: more than 4 h is a full day, 4 h or fewer a half day', () => {
  assert.equal(C.dayCost(4), 'half');
  assert.equal(C.dayCost(4.25), 'full');
  assert.equal(C.halfDayUnits(3, 1), 7);
});

test('exactly 140 full days used: nothing left, any bid is blocked', () => {
  const state = { ...base16b, fullUsed: 140 };
  assert.equal(C.remainingHalfDays(state, rules), 0);
  const g = C.withinCap(state, { hours: 2, pattern: '4 h sessions', deadline: '2026-11-20' }, { rules, today });
  assert.equal(g.passed, false);
  assert.match(g.reason, /needs 1 half days?\. You have 0 left in 2026/);
});

test('139.5 days used and a bid needing one full day is blocked', () => {
  const state = { ...base16b, fullUsed: 139, halfUsed: 1 }; // 139.5 days = 279 half-day units
  assert.equal(C.remainingHalfDays(state, rules), 1);
  const g = C.withinCap(state, { hours: 8, pattern: '8 h days', deadline: '2026-11-20' }, { rules, today });
  assert.equal(g.detail.neededHalfDays, 2);
  assert.equal(g.passed, false);
});

test('138 days used: a 44 h brief needs 11 half days and is blocked with the exact message', () => {
  const state = { ...base16b, fullUsed: 136, halfUsed: 4 };
  const g = C.withinCap(state, { hours: 44, pattern: '4 h sessions', deadline: '2026-12-31' }, { rules, today });
  assert.equal(g.passed, false);
  assert.equal(g.reason, 'This bid needs 11 half days. You have 4 left in 2026. Reduce the hours or choose a smaller brief.');
});

test('a 20.5 hour week is blocked, 20 hours passes', () => {
  const deadline = '2026-11-15'; // same ISO week as today
  const over = C.withinCap(base16b, { hours: 20.5, pattern: '8 h days', deadline }, { rules, today });
  assert.equal(over.passed, false);
  assert.match(over.reason, /20\.5 h a week/);
  const roomy = { ...base16b }; // day account is plentiful
  const ok = C.withinCap(roomy, { hours: 20, pattern: '8 h days', deadline }, { rules, today });
  assert.equal(ok.passed, true);
});

test('weekly cap counts hours already logged and planned this week', () => {
  const state = { ...base16b, loggedThisWeek: 9.5, plannedThisWeek: 3 };
  assert.equal(C.remainingWeeklyHours(state, rules), 7.5);
  const g = C.withinCap(state, { hours: 8, deadline: '2026-11-15' }, { rules, today });
  assert.equal(g.passed, false);
});

test('€13.89 per hour is blocked, €13.90 passes (2026 floor)', () => {
  const low = C.aboveFloor({ feeCents: 13890, hours: 10, deadline: '2026-12-01' }, { rules, today });
  const ok = C.aboveFloor({ feeCents: 13900, hours: 10, deadline: '2026-12-01' }, { rules, today });
  assert.equal(low.passed, false);
  assert.match(low.reason, /€13\.89 per hour is below the €13\.90 statutory minimum/);
  assert.equal(ok.passed, true);
});

test('2027 floor: work running into 2027 must reach €14.60', () => {
  assert.equal(C.minWageFor('2026-12-31', rules), 1390);
  assert.equal(C.minWageFor('2027-01-01', rules), 1460);
  const blocked = C.aboveFloor({ feeCents: 14000, hours: 10, deadline: '2027-01-15' }, { rules, today });
  assert.equal(blocked.passed, false);
  const ok = C.aboveFloor({ feeCents: 14600, hours: 10, deadline: '2027-01-15' }, { rules, today });
  assert.equal(ok.passed, true);
});

test('EU/EEA citizens have no day account and no weekly cap', () => {
  const state = { workRule: 'no restriction', fullUsed: 200, halfUsed: 0, loggedThisWeek: 30 };
  const g = C.withinCap(state, { hours: 60, deadline: '2026-11-15' }, { rules, today });
  assert.equal(g.passed, true);
});

test('first job fee is 0%, every job after is 5%, boost adds 3%', () => {
  assert.deepEqual(C.payoutFees(48000, { firstJobDone: false }, rules), { pct: 0, feeCents: 0, netCents: 48000 });
  assert.deepEqual(C.payoutFees(48000, { firstJobDone: true }, rules), { pct: 5, feeCents: 2400, netCents: 45600 });
  assert.equal(C.payoutFees(48000, { firstJobDone: true, boost: true }, rules).feeCents, 3840);
});

test('€480 for 14 h is €34.29 an hour', () => {
  assert.equal(C.effectiveHourlyCents(48000, 14), 3429);
  const g = C.aboveFloor({ feeCents: 48000, hours: 14, deadline: '2026-12-01' }, { rules, today });
  assert.equal(g.passed, true);
  assert.match(g.reason, /€34\.29 per hour/);
});

test('gate 1 filters permit type, jurisdiction, verification and duplicates', () => {
  assert.equal(C.eligible(student, openBrief, { rules }).passed, true);
  assert.equal(C.eligible({ ...student, status: 'pending' }, openBrief, { rules }).passed, false);
  assert.equal(C.eligible(student, { ...openBrief, jurisdiction: 'Austria' }, { rules }).passed, false);
  const euOnly = { ...openBrief, min_permit_types: 'EU/EEA citizen' };
  const r = C.eligible(student, euOnly, { rules });
  assert.equal(r.passed, false);
  assert.match(r.reason, /Not available for your permit type/);
  assert.equal(C.eligible(student, openBrief, { rules, alreadyOnBrief: true }).passed, false);
});

test('checkBid combines all three gates', () => {
  const res = C.checkBid({ student, state: base16b, brief: openBrief, bid: { feeCents: 48000, hours: 14, pattern: '4 h sessions', deadline: '2026-12-11' } }, { rules, today });
  assert.equal(res.allowed, true);
  assert.equal(res.gates.length, 3);
});

test('hour logging moves the day account: half → full when a date passes 4 h', () => {
  assert.deepEqual(C.dayAccountDelta(0, 3, rules), { full: 0, half: 1 });
  assert.deepEqual(C.dayAccountDelta(3, 6, rules), { full: 1, half: -1 });
  assert.deepEqual(C.dayAccountDelta(5, 7, rules), { full: 0, half: 0 });
});

test('rules are read from config rows', () => {
  const r = C.rulesFromConfig([
    { key: 'min_wage_hourly_cents', value: 1390, valid_from: '2026-01-01' },
    { key: 'min_wage_hourly_cents', value: 1460, valid_from: '2027-01-01' },
    { key: 'weekly_cap_hours', value: 18 },
  ]);
  assert.equal(r.weeklyCapHours, 18);
  assert.equal(C.minWageFor('2027-03-01', r), 1460);
});

test('client mirror returns identical results to the server engine', () => {
  const cases = [
    () => [C.checkBid, M.checkBid, { student, state: { ...base16b, fullUsed: 86 }, brief: openBrief, bid: { feeCents: 48000, hours: 14, deadline: '2026-12-01' } }],
    () => [C.checkBid, M.checkBid, { student, state: { ...base16b, fullUsed: 138 }, brief: openBrief, bid: { feeCents: 90000, hours: 44, deadline: '2026-12-20' } }],
    () => [C.checkBid, M.checkBid, { student, state: base16b, brief: openBrief, bid: { feeCents: 9800, hours: 10, deadline: '2027-02-01' } }],
  ];
  for (const mk of cases) {
    const [a, b, input] = mk();
    assert.deepEqual(JSON.parse(JSON.stringify(a(input, { rules, today }))), JSON.parse(JSON.stringify(b(input, { rules: M.DEFAULT_RULES, today }))));
  }
  assert.deepEqual(C.payoutFees(48000, { firstJobDone: true }), M.payoutFees(48000, { firstJobDone: true }));
  assert.deepEqual(C.checkerSummary({ permitType: '§16b student permit (non-EU)', fullUsed: 86, weekHours: 12.5 }, { today }),
    M.checkerSummary({ permitType: '§16b student permit (non-EU)', fullUsed: 86, weekHours: 12.5 }, { today }));
});
