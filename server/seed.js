// Creates data/*.xlsx with realistic demo data when missing.
//   node server/seed.js          seed only if workbooks are missing
//   node server/seed.js --reset  wipe and reseed (npm run reset)
// All people and firms below are fictional and flagged is_demo = true.
// Dates are relative to today so the demo always looks current.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as db from './store.js';
import * as C from './compliance.js';
import { hashPassword } from './auth.js';
import { todayISO, reloadRules, rebuildLetter, briefView, liveBriefs } from './domain.js';

export const DEMO_PASSWORD = 'Kontrak2026';
const ALL_PERMITS = C.PERMIT_TYPES.join('|');

export async function seed({ write = true } = {}) {
  db.resetAll();
  const today = todayISO();
  const year = Number(today.slice(0, 4));
  const d = (n) => C.addDays(today, n);
  const ts = (n, hh = 10) => `${d(n)}T${String(hh).padStart(2, '0')}:00:00.000Z`;
  const monday = C.mondayOf(today);
  // A date this week that is not in the future (falls back to the previous week if needed).
  const thisWeek = (i) => { const x = C.addDays(monday, i); return x <= today ? x : C.addDays(x, -7); };
  const pw = hashPassword(DEMO_PASSWORD);
  const demo = { is_demo: true };

  // ── Config (rules are read from here, never hard-coded in routes) ──
  const cfg = [
    ['min_wage_hourly_cents', 1390, '2026-01-01', 'Statutory minimum wage, MiLoV5. €13.90 per hour from 1 Jan 2026.'],
    ['min_wage_hourly_cents', 1460, '2027-01-01', 'Already legislated. €14.60 per hour from 1 Jan 2027.'],
    ['weekly_cap_hours', 20, '2026-01-01', '§16b AufenthG: 20 h per week in the lecture period (applied year-round in this prototype).'],
    ['annual_full_days', 140, '2024-03-01', '§16b(3) AufenthG: 140 full working days per calendar year.'],
    ['annual_half_days', 280, '2024-03-01', '§16b(3) AufenthG: or 280 half working days. One full day = two half days.'],
    ['full_day_threshold_hours', 4, '2024-03-01', 'More than 4 h on a date is a full day; 4 h or fewer is a half day.'],
    ['platform_fee_pct', 5, '2026-01-01', 'Fee on every job after the first, taken from the amount released to the student.'],
    ['first_job_fee_pct', 0, '2026-01-01', 'No fee on a student\'s first job.'],
    ['boost_fee_pct', 3, '2026-01-01', 'Optional boost to promote a bid, charged on payout.'],
    ['minijob_ceiling_cents', 60300, '2026-01-01', 'Geringfügigkeitsgrenze 2026: €603 per month. Flag only, never blocks.'],
    ['live_jurisdictions', 'Germany', '2026-01-01', 'Comma list. Austria and Switzerland are roadmap modules.'],
  ];
  cfg.forEach(([key, value, valid_from, note]) => db.insert('config', { key, value, valid_from, note }));
  reloadRules();

  // ── Users ──
  const users = [
    ['U-0001', 'admin', 'admin@kontrak.demo', 'Kontrak', 'Admin', 'verified'],
    ['U-0002', 'student', 'lina.haddad@uni-passau.demo', 'Lina', 'Haddad', 'verified'],
    ['U-0003', 'student', 'aisha.rahman@hu-berlin.demo', 'Aisha', 'Rahman', 'verified'],
    ['U-0004', 'student', 'mehmet.yilmaz@lmu.demo', 'Mehmet', 'Yılmaz', 'verified'],
    ['U-0005', 'student', 'priya.nandra@uni-hamburg.demo', 'Priya', 'Nandra', 'verified'],
    ['U-0006', 'student', 'elena.popescu@uni-passau.demo', 'Elena', 'Popescu', 'verified'],
    ['U-0007', 'client', 'dana.krueger@aurelis.demo', 'Dana', 'Krüger', 'verified'],
    ['U-0008', 'client', 'johanna.ferrow@ferrow-legal.demo', 'Johanna', 'Ferrow', 'verified'],
    ['U-0009', 'client', 'tobias.halden@halden.demo', 'Tobias', 'Halden', 'verified'],
    ['U-0010', 'client', 'mira.albers@nordwind.demo', 'Mira', 'Albers', 'verified'],
    ['U-0011', 'client', 'felix.brandt@kelvin-analytics.demo', 'Felix', 'Brandt', 'verified'],
    ['U-0012', 'client', 'selin.aksoy@selfapay.demo', 'Selin', 'Aksoy', 'verified'],
    ['U-0013', 'client', 'clara.ostwald@ostwald-economics.demo', 'Clara', 'Ostwald', 'verified'],
    ['U-0014', 'client', 'ben.mor@studiomor.demo', 'Ben', 'Mor', 'verified'],
  ];
  users.forEach(([id, role, email, first_name, last_name, status], i) =>
    db.insert('users', { id, role, email, password_hash: pw, first_name, last_name, status, verify_token: '', ...demo, created_at: ts(-200 + i * 6) }));

  // ── Students (five stages) ──
  const students = [
    ['U-0002', 'Universität Passau', 'Lebanese', '§16b student permit (non-EU)', 'Beschäftigung bis 140 Tage oder 280 halbe Tage im Jahr sowie studentische Nebentätigkeit erlaubt.', d(400), 'Data protection|Commercial', 'English, Arabic, French', 'Second-semester LL.M. student in European business law. New to Kontrak.', false],
    ['U-0003', 'Humboldt-Universität zu Berlin', 'Pakistani', '§16b student permit (non-EU)', 'Beschäftigung bis 140 Tage oder 280 halbe Tage im Jahr erlaubt. Selbständige Tätigkeit nicht erlaubt.', d(520), 'Commercial|Data protection|Employment', 'English, Urdu, German (B2)', 'LL.M. candidate focusing on commercial contracts and data protection. Five engagements on Kontrak.', true],
    ['U-0004', 'LMU München', 'Turkish', '§16b student permit (non-EU)', 'Beschäftigung bis 140 Tage oder 280 halbe Tage im Jahr erlaubt.', d(300), 'Fintech|Regulatory|Corporate', 'English, Turkish, German (C1)', 'Law and economics student. Works most semester breaks, so the day account is nearly used.', true],
    ['U-0005', 'Universität Hamburg', 'Indian', '§16f language course', 'Beschäftigung bis 20 Stunden je Woche erlaubt.', d(180), 'Employment|Research', 'English, Hindi, German (A2)', 'Preparatory German course before an LL.M. Minijob-style limit of 20 hours a week.', false],
    ['U-0006', 'Universität Passau', 'Romanian', 'EU/EEA citizen', 'EU citizen. No work permit required.', '', 'Tax|Corporate', 'English, Romanian, German (B2)', 'Exchange student in tax law. EU/EEA citizen, so no day account or weekly cap applies.', false],
  ];
  students.forEach(([uid, university, nationality, permit_type, note, valid, areas, languages, bio, first]) => {
    const u = db.get('users', uid);
    db.insert('students', { id: uid, user_id: uid, university, university_email: u.email, nationality, permit_type, permit_wording_note: note, permit_valid_until: valid, work_rule: C.DEFAULT_WORK_RULE[permit_type], practice_areas: areas, languages, bio, first_job_done: first, permit_confirmed: true, verified_at: ts(-150), ...demo });
  });
  // Mehmet already completed one job (0% fee); Elena's first job is pending signature funding.
  db.update('students', 'U-0004', { first_job_done: true });

  // ── Clients (fictional firms, register numbers marked DEMO) ──
  const clients = [
    ['U-0007', 'Aurelis Studio', 'GmbH', 'HRB 214587 B (DEMO)', 'DE 318 554 120 (DEMO)', 'Berlin', 'General Counsel', 'aurelis.demo', 'passed'],
    ['U-0008', 'Ferrow Legal', 'Rechtsanwaltsgesellschaft mbH', 'HRB 268114 (DEMO)', 'DE 297 410 882 (DEMO)', 'München', 'Partner', 'ferrow-legal.demo', 'passed'],
    ['U-0009', 'Halden & Co.', 'GmbH', 'HRB 198320 B (DEMO)', 'DE 301 228 765 (DEMO)', 'Berlin', 'Managing Director', 'halden.demo', 'passed'],
    ['U-0010', 'Nordwind Ventures', 'GmbH & Co. KG', 'HRA 127745 (DEMO)', 'DE 344 019 553 (DEMO)', 'Hamburg', 'Head of Legal', 'nordwind.demo', 'passed'],
    ['U-0011', 'Kelvin Analytics', 'GmbH', 'HRB 40112 (DEMO)', 'DE 312 876 001 (DEMO)', 'Leipzig', 'HR Lead', 'kelvin-analytics.demo', 'passed'],
    ['U-0012', 'Selfa Pay', 'GmbH', 'HRB 119874 (DEMO)', 'DE 329 650 447 (DEMO)', 'Frankfurt am Main', 'Compliance Officer', 'selfapay.demo', 'passed'],
    ['U-0013', 'Ostwald Economics', 'GmbH', 'HRB 230045 B (DEMO)', 'DE 336 102 938 (DEMO)', 'Berlin', 'Partner', 'ostwald-economics.demo', 'passed'],
    ['U-0014', 'Studio Mor', 'Einzelunternehmen', 'Not registered (DEMO)', '', 'Köln', 'Owner', 'studiomor.demo', 'pending'],
  ];
  clients.forEach(([uid, company_name, legal_form, register_number, vat_id, city, contact_role, website, register_check]) =>
    db.insert('clients', { id: uid, user_id: uid, company_name, legal_form, register_number, vat_id, city, contact_role, website, register_check, plan: 'pay-per-brief', ...demo }));

  // ── Briefs ──
  const B = (id, client_id, title, description, scope, areas, fee, hours, deadline, mode, city, extra = {}) =>
    db.insert('briefs', { id, client_id, title, description, scope_deliverable: scope, practice_areas: areas, fee_cents: fee, scoped_hours: hours, jurisdiction: 'Germany', location_mode: mode, city, deadline, min_permit_types: ALL_PERMITS, languages: 'English', status: 'open', posted_at: ts(extra.posted ?? -2), ...demo, ...extra.fields });
  B('B-0001', 'U-0007', 'Review a SaaS reseller agreement', 'We are signing our first reseller in Austria and need a careful first-pass review of their paper before our GC negotiates.', 'The Student Employee shall deliver a marked-up copy of the Reseller Agreement together with a written risk note of no more than one page, identifying provisions that depart materially from market standard.', 'Commercial|SaaS & IT', 48000, 14, d(27), 'Remote', 'Berlin', { posted: 0 });
  B('B-0002', 'U-0008', 'DPA and SCC pack for a cloud migration', 'A client is moving its HR system to a US cloud provider. We need the data-processing paperwork prepared for partner review.', 'The Student Employee shall prepare a draft data processing agreement under Art. 28 GDPR and the applicable Standard Contractual Clauses module, with a transfer impact assessment template.', 'Data protection|Drafting', 61200, 18, d(24), 'On-site', 'München', { posted: -1 });
  B('B-0003', 'U-0009', 'AI Act risk-classification memo for a scoring model', 'Our client runs a credit-scoring model. We need a structured memo on how it is classified under the AI Act.', 'The Student Employee shall deliver a memo of no more than eight pages classifying the system under the AI Act, listing the resulting obligations and open questions.', 'AI & regulation|Research', 62000, 16, d(30), 'Remote', 'Berlin', { posted: -3 });
  B('B-0004', 'U-0010', 'Open-source licence audit for a Series A data room', 'Our portfolio company is raising its Series A. Investors want a clean view of the open-source licences in the codebase.', 'The Student Employee shall review the dependency export provided, classify each licence by obligation type and deliver a spreadsheet with a one-page summary of copyleft exposure.', 'IP & licensing|Due diligence', 54600, 21, d(21), 'On-site', 'Hamburg', { posted: -4 });
  B('B-0005', 'U-0012', 'Trademark filing support across 6 Nice classes', 'We are registering our fintech brand at the DPMA and EUIPO and need the class specifications drafted.', 'The Student Employee shall draft goods and services specifications for six Nice classes and a short note on conflicting marks found in a basic search.', 'IP & licensing|Filings', 34000, 10, d(14), 'Remote', 'Frankfurt am Main', { posted: -1 });
  B('B-0006', 'U-0011', 'SaaS contract templates for a Series A team', 'We are standardising our customer contracts after our Series A and need a clean template set.', 'The Student Employee shall deliver a master subscription agreement template, an order form and a service-level schedule, each with drafting notes.', 'Corporate|Drafting', 58000, 20, d(35), 'Remote', 'Leipzig', { posted: -5 });
  B('B-0007', 'U-0012', 'BaFin outsourcing clauses for a payments integration', 'A new payments partner must meet our outsourcing requirements. We need the clauses checked against the supervisory guidance.', 'The Student Employee shall compare the partner agreement with the outsourcing requirements and deliver a gap table with proposed clause wording.', 'Fintech|Regulatory', 52000, 15, d(12), 'On-site', 'Frankfurt am Main', { posted: -2 });
  B('B-0008', 'U-0013', 'Market-definition note for a merger filing', 'We advise on a merger filing and need a research note on how the relevant market has been defined in past decisions.', 'The Student Employee shall deliver a research note of no more than six pages summarising market definitions in comparable Bundeskartellamt and Commission decisions.', 'Competition|Research', 43400, 14, d(20), 'Remote', 'Berlin', { posted: -6 });
  B('B-0009', 'U-0007', 'Cookie consent and banner audit', 'Our marketing site uses several tracking tools. We want to know whether the consent banner meets current requirements.', 'The Student Employee shall audit the consent banner against the TDDDG and GDPR and deliver a findings table with recommended fixes.', 'Data protection', 28000, 8, d(9), 'Remote', 'Berlin', { posted: -1 });
  B('B-0010', 'U-0010', 'Supplier-contract red-flag summary, 30 contracts', 'Before closing, we need a quick red-flag pass across thirty supplier contracts in the data room.', 'The Student Employee shall review thirty supplier contracts and deliver a red-flag summary covering change of control, exclusivity, liability caps and termination rights.', 'Commercial|Due diligence', 90000, 44, d(6), 'Remote', 'Hamburg', { posted: 0 });
  B('B-0011', 'U-0009', 'GmbH formation checklist for an Austrian subsidiary', 'A client is setting up a subsidiary in Vienna and needs a formation checklist.', 'The Student Employee shall deliver a checklist of formation steps, documents and filing fees for an Austrian GmbH.', 'Corporate', 30000, 10, d(25), 'Remote', 'Wien', { posted: -2, fields: { jurisdiction: 'Austria' } });
  B('B-0012', 'U-0010', 'Three-week data-room sprint, full time', 'An intensive due-diligence sprint on site, five full days a week for three weeks.', 'The Student Employee shall index and summarise the target\'s commercial contracts in the data room during a three-week full-time sprint.', 'Due diligence|Commercial', 210000, 120, d(21), 'On-site', 'Hamburg', { posted: -3, fields: { min_permit_types: 'EU/EEA citizen' } });
  // Briefs already in progress or completed
  B('B-0013', 'U-0009', 'Data-processing register for a 60-person SaaS', 'Build the record of processing activities for a growing SaaS business.', 'The Student Employee shall deliver a record of processing activities under Art. 30 GDPR covering all departments, with gaps flagged for the DPO.', 'Data protection', 81600, 24, d(10), 'Remote', 'Berlin', { posted: -25, fields: { status: 'in_progress' } });
  B('B-0014', 'U-0008', 'NDA pack for a seed round', 'Mutual and one-way NDA templates for a founder client preparing a seed round.', 'The Student Employee shall draft a mutual NDA, a one-way NDA and a short guidance note on when to use each.', 'Commercial|Drafting', 38000, 10, d(20), 'Remote', 'München', { posted: -8, fields: { status: 'awarded' } });
  B('B-0015', 'U-0011', 'Employment handbook gap review', 'Check our employee handbook against current German employment law.', 'The Student Employee shall review the employee handbook and deliver a gap list with suggested wording for each section that departs from current law.', 'Employment', 45000, 12, d(2), 'Remote', 'Leipzig', { posted: -30, fields: { status: 'in_progress' } });
  B('B-0016', 'U-0007', 'Privacy notice rewrite for a health app', 'Plain-language privacy notice for a health-tracking app.', 'The Student Employee shall deliver a rewritten privacy notice in plain English that meets Art. 13 GDPR, with a change log.', 'Data protection', 36000, 10, d(-110), 'Remote', 'Berlin', { posted: -140, fields: { status: 'completed' } });
  B('B-0017', 'U-0013', 'Shareholder agreement comparison table', 'Compare three shareholder agreements for a client negotiation.', 'The Student Employee shall deliver a comparison table of three shareholder agreements covering vesting, drag and tag rights, and reserved matters.', 'Corporate', 52000, 14, d(-28), 'Remote', 'Berlin', { posted: -55, fields: { status: 'completed' } });
  B('B-0018', 'U-0013', 'VAT reverse-charge memo for cross-border SaaS', 'Short memo on VAT treatment of SaaS sales to EU business customers.', 'The Student Employee shall deliver a memo of no more than four pages on the reverse-charge mechanism for cross-border SaaS supplies, with examples.', 'Tax|Research', 42000, 12, d(18), 'Remote', 'Berlin', { posted: -6, fields: { status: 'awarded' } });
  B('B-0019', 'U-0012', 'KYC policy gap analysis', 'Compare our KYC policy with the current GwG requirements.', 'The Student Employee shall deliver a gap analysis of the KYC policy against the Geldwäschegesetz, with prioritised recommendations.', 'Fintech|Regulatory', 39000, 12, d(-62), 'Remote', 'Frankfurt am Main', { posted: -90, fields: { status: 'completed' } });

  // ── Bids ──
  const gate = (passed = true) => JSON.stringify({ allowed: passed, gates: [{ id: 1, passed: true }, { id: 2, passed: true }, { id: 3, passed: true }], seeded: true });
  const bid = (id, brief_id, student_id, fee, hours, pattern, status, note, created, boost = false) =>
    db.insert('bids', { id, brief_id, student_id, proposed_fee_cents: fee, proposed_hours: hours, planned_pattern: pattern, planned_half_days: C.plannedHalfDays(hours, pattern), cover_note: note, boost, status, gate_result: gate(), ...demo, created_at: ts(created) });
  bid('BID-0001', 'B-0019', 'U-0004', 39000, 12, '4 h sessions', 'accepted', 'I have worked on GwG compliance during an internship at a payments firm.', -85);
  bid('BID-0002', 'B-0016', 'U-0003', 36000, 10, '4 h sessions', 'accepted', 'I rewrite privacy notices in plain English and track every change.', -135);
  bid('BID-0003', 'B-0017', 'U-0003', 52000, 14, '4 h sessions', 'accepted', 'Comparison tables are a strength. I will flag every deviation from your standard.', -50);
  bid('BID-0004', 'B-0015', 'U-0003', 45000, 12, '4 h sessions', 'accepted', 'Employment law is one of my focus areas.', -28);
  bid('BID-0005', 'B-0013', 'U-0003', 81600, 24, '4 h sessions', 'accepted', 'I built a processing register during my internship and can reuse the structure.', -22, true);
  bid('BID-0006', 'B-0014', 'U-0003', 38000, 10, '4 h sessions', 'accepted', 'Happy to deliver both NDAs with a one-page guide.', -6);
  bid('BID-0007', 'B-0018', 'U-0006', 42000, 12, '4 h sessions', 'accepted', 'My exchange semester focuses on EU VAT.', -5);
  bid('BID-0008', 'B-0003', 'U-0002', 62000, 16, '4 h sessions', 'submitted', 'I studied the AI Act in my European business law module and can start this week.', -1);
  bid('BID-0009', 'B-0002', 'U-0003', 61200, 18, '4 h sessions', 'submitted', 'I have drafted DPAs before and know the SCC modules well.', -1);
  bid('BID-0010', 'B-0001', 'U-0005', 44800, 14, '2 h sessions', 'submitted', 'I can review in short sessions around my language course.', 0);
  bid('BID-0011', 'B-0009', 'U-0004', 28000, 8, '4 h sessions', 'submitted', 'Two short sessions are enough for this audit.', 0);
  bid('BID-0012', 'B-0001', 'U-0006', 48000, 14, '4 h sessions', 'submitted', 'I can deliver the mark-up within a week.', 0);
  bid('BID-0013', 'B-0008', 'U-0003', 43400, 14, '4 h sessions', 'declined', 'Competition research suits my background.', -4);

  // ── Contracts and escrow ──
  const K = (id, brief_id, bid_id, client_id, student_id, fee, hours, deadline, status, x = {}) => {
    const b = db.get('bids', bid_id);
    const fees = C.payoutFees(fee, { firstJobDone: x.firstJob !== false, boost: db.bool(b?.boost) });
    db.insert('contracts', { id, brief_id, bid_id, client_id, student_id, fee_cents: fee, platform_fee_cents: fees.feeCents, student_net_cents: fees.netCents, scoped_hours: hours, deadline, status, student_signed_at: x.ss || '', client_signed_at: x.cs || '', student_signature_name: x.ss ? `${db.get('users', student_id).first_name} ${db.get('users', student_id).last_name}` : '', client_signature_name: x.cs ? `${db.get('users', client_id).first_name} ${db.get('users', client_id).last_name}` : '', governing_law: 'Germany', delivery_note: x.note || '', letter_html: '', pdf_ready: false, ...demo, created_at: x.created });
    db.insert('escrow', { id: `ESC-${id.split('-')[2]}`, contract_id: id, amount_cents: fee, status: x.escrow, method: x.method || '', funded_at: x.funded || '', release_requested_at: x.rr || '', released_at: x.released || '', reference: `KTK-ESC-${id.split('-')[2]}`, ...demo });
  };
  const yr = (n) => `KTK-${year}-${n}`;
  K(yr('0405'), 'B-0019', 'BID-0001', 'U-0012', 'U-0004', 39000, 12, d(-62), 'closed', { firstJob: false, created: ts(-84), ss: ts(-84, 11), cs: ts(-84, 15), escrow: 'released', method: 'SEPA (simulated)', funded: ts(-83), rr: ts(-64), released: ts(-63) });
  K(yr('0407'), 'B-0016', 'BID-0002', 'U-0007', 'U-0003', 36000, 10, d(-110), 'closed', { firstJob: false, created: ts(-134), ss: ts(-134, 11), cs: ts(-134, 14), escrow: 'released', method: 'Card (simulated)', funded: ts(-133), rr: ts(-112), released: ts(-111) });
  K(yr('0408'), 'B-0017', 'BID-0003', 'U-0013', 'U-0003', 52000, 14, d(-28), 'signed_off', { created: ts(-49), ss: ts(-49, 11), cs: ts(-48, 9), escrow: 'released', method: 'SEPA (simulated)', funded: ts(-48), rr: ts(-30), released: ts(-29) });
  K(yr('0409'), 'B-0015', 'BID-0004', 'U-0011', 'U-0003', 45000, 12, d(2), 'delivered', { created: ts(-27), ss: ts(-27, 11), cs: ts(-27, 16), escrow: 'release_requested', method: 'Card (simulated)', funded: ts(-26), rr: ts(-1), note: 'Gap list and suggested wording delivered as one document.' });
  K(yr('0410'), 'B-0013', 'BID-0005', 'U-0009', 'U-0003', 81600, 24, d(10), 'in_progress', { created: ts(-21), ss: ts(-21, 11), cs: ts(-21, 13), escrow: 'funded', method: 'SEPA (simulated)', funded: ts(-20) });
  K(yr('0411'), 'B-0014', 'BID-0006', 'U-0008', 'U-0003', 38000, 10, d(20), 'awaiting_signatures', { created: ts(-5), cs: ts(-4, 9), escrow: 'awaiting_funding' });
  K(yr('0412'), 'B-0018', 'BID-0007', 'U-0013', 'U-0006', 42000, 12, d(18), 'signed', { firstJob: false, created: ts(-4), ss: ts(-4, 12), cs: ts(-3, 10), escrow: 'awaiting_funding' });
  // Released contracts: record the fee that was actually taken (0% on first jobs, 5% after, +3% boost).
  db.update('contracts', yr('0405'), { platform_fee_cents: 0, student_net_cents: 39000 });
  db.update('contracts', yr('0407'), { platform_fee_cents: 0, student_net_cents: 36000 });
  db.update('contracts', yr('0408'), { platform_fee_cents: 2600, student_net_cents: 49400 });
  db.update('contracts', yr('0410'), { platform_fee_cents: 6528, student_net_cents: 75072 });

  // ── Hour log ──
  const H = (contract_id, student_id, work_date, hours, note) =>
    db.insert('hour_log', { contract_id, student_id, work_date, hours, note, day_type: C.dayCost(hours), counted_in_year: Number(work_date.slice(0, 4)), ...demo });
  H(yr('0405'), 'U-0004', d(-75), 4, 'Policy read-through'); H(yr('0405'), 'U-0004', d(-72), 4, 'GwG mapping'); H(yr('0405'), 'U-0004', d(-68), 4, 'Recommendations draft');
  H(yr('0407'), 'U-0003', d(-125), 3.5, 'Inventory of data flows'); H(yr('0407'), 'U-0003', d(-122), 3.5, 'Rewrite, sections 1 to 6'); H(yr('0407'), 'U-0003', d(-118), 3, 'Change log and final pass');
  H(yr('0408'), 'U-0003', d(-44), 4, 'First agreement mapped'); H(yr('0408'), 'U-0003', d(-41), 4, 'Second and third agreements'); H(yr('0408'), 'U-0003', d(-38), 3.5, 'Comparison table'); H(yr('0408'), 'U-0003', d(-35), 2.5, 'Client comments');
  H(yr('0409'), 'U-0003', C.addDays(monday, -12), 3, 'Handbook read-through'); H(yr('0409'), 'U-0003', C.addDays(monday, -10), 3, 'Working time and leave sections'); H(yr('0409'), 'U-0003', C.addDays(monday, -8), 3, 'Termination and data sections'); H(yr('0409'), 'U-0003', C.addDays(monday, -4), 3, 'Suggested wording and delivery');
  H(yr('0410'), 'U-0003', C.addDays(monday, -6), 3, 'Department interviews, part 1'); H(yr('0410'), 'U-0003', C.addDays(monday, -5), 3, 'Department interviews, part 2');
  H(yr('0410'), 'U-0003', thisWeek(0), 3, 'Register structure and first entries'); H(yr('0410'), 'U-0003', thisWeek(1), 2.5, 'Sales and HR processing activities'); H(yr('0410'), 'U-0003', thisWeek(2), 4, 'Engineering and vendor processing');

  // ── Day accounts (include days worked for other employers before or outside Kontrak) ──
  const DA = (student_id, full, half, note) => db.insert('day_account', { id: `DA-${student_id}-${year}`, student_id, year, full_days_used: full, half_days_used: half, weekly_hours_cache: '', note, ...demo });
  DA('U-0002', 0, 0, 'New student. No days used yet.');
  DA('U-0003', 80, 12, 'Includes 74 full days at a law-firm Werkstudent job earlier this year (seeded).');
  DA('U-0004', 136, 4, 'Includes semester-break employment outside Kontrak (seeded). 4 half days left.');
  DA('U-0005', 0, 0, 'Language-course permit: weekly cap only, no day account.');
  DA('U-0006', 0, 0, 'EU/EEA citizen: no day account or weekly cap.');

  // ── Messages ──
  const Msg = (contract_id, sender_id, recipient_id, body, at, read = true) =>
    db.insert('messages', { contract_id, sender_id, recipient_id, body, sent_at: at, read_at: read ? at : '', ...demo, created_at: at });
  Msg(yr('0410'), 'U-0009', 'U-0003', 'Hello Aisha, the department list and current vendor export are in the shared folder.', ts(-20, 9));
  Msg(yr('0410'), 'U-0003', 'U-0009', 'Thank you. I will start with sales and HR, then engineering. I will log each session against the contract.', ts(-20, 11));
  Msg(yr('0410'), 'U-0009', 'U-0003', 'Could you also flag any processing that relies on legitimate interest? Our DPO wants to review those first.', ts(-1, 16), false);
  Msg(yr('0409'), 'U-0003', 'U-0011', 'The gap list and suggested wording are uploaded. Sections 4 and 9 need your attention first.', ts(-1, 10));
  Msg(yr('0409'), 'U-0011', 'U-0003', 'Thanks, I will review it with our HR team and sign off this week.', ts(-1, 14), false);
  Msg(yr('0411'), 'U-0008', 'U-0003', 'I have signed the engagement letter. Please sign when you are ready and we will fund escrow the same day.', ts(-4, 9), false);
  Msg(yr('0412'), 'U-0013', 'U-0006', 'Welcome aboard. We will fund escrow shortly.', ts(-3, 10));
  Msg(yr('0408'), 'U-0013', 'U-0003', 'The comparison table was exactly what we needed. Releasing the payment now.', ts(-29, 10));

  // ── Notifications ──
  const N = (user_id, type, text, link, read = false) => db.insert('notifications', { user_id, type, text, link, read_at: read ? ts(-1) : '', ...demo });
  N('U-0003', 'contract', `Ferrow Legal signed the engagement letter for ${yr('0411')}. Your signature is next.`, `/app/contract.html?id=${yr('0411')}`);
  N('U-0003', 'message', 'New message from Tobias Halden on the data-processing register.', `/app/messages.html?contract=${yr('0410')}`);
  N('U-0003', 'bid', 'Your bid on "Market-definition note for a merger filing" was declined.', '/app/briefs.html', true);
  N('U-0011', 'escrow', `Aisha Rahman requested release of €450 on ${yr('0409')}.`, `/client/contract.html?id=${yr('0409')}`);
  N('U-0007', 'bid', 'Two new bids on "Review a SaaS reseller agreement".', '/client/bids.html?brief=B-0001');
  N('U-0013', 'escrow', `Escrow for ${yr('0412')} is waiting for funding.`, `/client/contract.html?id=${yr('0412')}`);
  N('U-0002', 'welcome', 'Your university email is verified. You can now bid on briefs that fit your permit.', '/app/briefs.html');

  // ── Reviews ──
  db.insert('reviews', { contract_id: yr('0407'), from_user_id: 'U-0007', to_user_id: 'U-0003', stars: 5, text: 'Clear, careful work delivered ahead of the deadline.', ...demo });
  db.insert('reviews', { contract_id: yr('0407'), from_user_id: 'U-0003', to_user_id: 'U-0007', stars: 5, text: 'Precise brief and quick answers to every question.', ...demo });
  db.insert('reviews', { contract_id: yr('0408'), from_user_id: 'U-0013', to_user_id: 'U-0003', stars: 5, text: 'The comparison table was exactly what the negotiation needed.', ...demo });
  db.insert('reviews', { contract_id: yr('0405'), from_user_id: 'U-0012', to_user_id: 'U-0004', stars: 4, text: 'Good structure and well-prioritised recommendations.', ...demo });

  // ── Letters ──
  for (const c of db.all('contracts')) rebuildLetter(c, today);
  // First-job flags for letters: Aisha's first job was 0407; Elena has none yet.
  db.update('students', 'U-0006', { first_job_done: false });

  db.insert('audit_log', { actor_id: 'system', action: 'seed', entity: 'all', entity_id: '', detail: `Demo data created for ${today}`, at: db.nowISO() });
  writeDemoJson(today);
  if (write) await db.writeAllNow();
}

/** Read-only snapshot for Live Server mode (no server, no writes). */
export function writeDemoJson(today = todayISO()) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const briefs = liveBriefs(today).map((b) => briefView(b, today));
  const out = {
    generated_for: today,
    note: 'Read-only demo snapshot for front-end work without the server. Run npm start for the real app.',
    briefs,
    stats: { open_briefs: briefs.length, verified_students: db.filter('users', (u) => u.role === 'student' && u.status === 'verified').length, compliant_placements: db.filter('contracts', (c) => ['signed_off', 'closed'].includes(c.status)).length },
  };
  fs.writeFileSync(path.join(root, 'public', 'js', 'demo-data.json'), JSON.stringify(out, null, 1));
}

// CLI
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const reset = process.argv.includes('--reset');
  const missing = reset ? Object.keys(db.SCHEMA) : await db.load();
  if (reset || missing.length) {
    await seed();
    await db.flushAll();
    console.log(`Seeded ${Object.keys(db.SCHEMA).length} workbooks in /data. Demo password for every demo account: ${DEMO_PASSWORD}`);
  } else {
    console.log('Workbooks already exist. Use npm run reset to wipe and reseed.');
  }
}
