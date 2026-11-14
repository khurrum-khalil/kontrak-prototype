// Engagement letter generator. Builds the letter as HTML (stored on the contract) and wraps
// it in a printable page so "Download PDF" works through the browser's print dialog.
// Template for prototype purposes. Not reviewed by a lawyer.
import { euro, effectiveHourlyCents, floorForPeriod, payoutFees, DEFAULT_RULES } from './compliance.js';

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmtDate = (iso) => (iso ? new Date(String(iso).length <= 10 ? iso + 'T12:00:00Z' : iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'Europe/Berlin' }) : '');
const fmtStamp = (iso) => (iso ? new Date(iso).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Berlin' }) + ' CET' : '');

export function buildLetter({ contract, brief, bid, studentUser, student, clientUser, client, rules = DEFAULT_RULES, today, firstJobDone }) {
  const fee = Number(contract.fee_cents);
  const hours = Number(contract.scoped_hours);
  const eff = effectiveHourlyCents(fee, hours);
  const floor = floorForPeriod(today, contract.deadline || brief.deadline, rules);
  const boost = String(bid?.boost) === 'true' || bid?.boost === true;
  const fees = payoutFees(fee, { firstJobDone, boost }, rules);
  const studentName = `${studentUser.first_name} ${studentUser.last_name}`;
  const clientRep = `${clientUser.first_name} ${clientUser.last_name}`;
  const sig = (name, at, party) => at
    ? `<div class="sig signed"><div class="sig-name">${esc(name)}</div><div class="sig-meta">Signed electronically (simulated) · ${esc(fmtStamp(at))}</div><div class="sig-role">${esc(party)}</div></div>`
    : `<div class="sig"><div class="sig-name pending">Awaiting signature</div><div class="sig-meta">&nbsp;</div><div class="sig-role">${esc(party)}</div></div>`;

  return `
<div class="proto-banner">Template for prototype purposes. Not reviewed by a lawyer. Signatures and payments are simulated.</div>
<header class="l-head">
  <div class="l-eyebrow">Engagement letter · ${esc(contract.id)}</div>
  <h1>${esc(brief.title)}</h1>
  <p class="l-sub">Employment engagement under German law · Issued ${esc(fmtDate(contract.created_at))}</p>
</header>

<h2>1. Parties</h2>
<p><strong>${esc(client.company_name)}</strong>${client.legal_form ? ', ' + esc(client.legal_form) : ''}, ${esc(client.city)}, commercial register ${esc(client.register_number || 'pending')}, represented by ${esc(clientRep)} (${esc(client.contact_role || 'authorised representative')}), hereinafter "the Employer".</p>
<p><strong>${esc(studentName)}</strong>, enrolled at ${esc(student.university)}, residence status recorded as "${esc(student.permit_type)}", hereinafter "the Student Employee".</p>
<p>The engagement is arranged through Kontrak, which provides the platform, the escrow account and the compliance checks. Kontrak is not a party to the employment relationship.</p>

<h2>2. Nature of the engagement</h2>
<p>The Student Employee is engaged as an employee for the single brief described below, on a fixed-term basis. This is an employment relationship. It is not freelance work and not a contract for services. The Student Employee carries out the work under the Employer's instructions as to subject matter, and organises working time within the limits in clause 4.</p>

<h2>3. Scope of work</h2>
<p>${esc(brief.scope_deliverable)}</p>
<p>Practice area: ${esc(brief.practice_areas)}. Place of work: ${esc(brief.location_mode)}${brief.city ? ', ' + esc(brief.city) : ''}.</p>

<h2>4. Working time and statutory limits</h2>
<p>The work is scoped at <strong>${esc(hours)} hours</strong>, to be completed by <strong>${esc(fmtDate(contract.deadline || brief.deadline))}</strong>. Working time shall not exceed ${esc(rules.weeklyCapHours)} hours in any week during the lecture period, counted together with all other employment of the Student Employee.</p>
<p>Kontrak records each working day against the Student Employee's annual allowance of ${esc(rules.annualFullDays)} full days or ${esc(rules.annualHalfDays)} half days (§16b AufenthG, where applicable). A day of more than ${esc(rules.fullDayThresholdHours)} hours counts as a full day, ${esc(rules.fullDayThresholdHours)} hours or fewer as a half day. Kontrak blocks the logging of hours that would exceed the remaining allowance or the weekly limit.</p>

<h2>5. Remuneration</h2>
<p>The Employer shall pay a gross fee of <strong>${esc(euro(fee, { decimals: 2 }))}</strong> for the scoped hours, equal to <strong>${esc(euro(eff, { decimals: 2 }))} per hour</strong>. This is not below the statutory minimum wage under the Mindestlohngesetz of ${esc(euro(floor, { decimals: 2 }))} per hour that applies for the term of this engagement.</p>
<p>Tax and social-insurance deductions that apply to the employment are not modelled in this prototype.</p>

<h2>6. Escrow, sign-off and release</h2>
<p>The Employer shall pay the fee into the Kontrak escrow account before work begins. The Student Employee may request release once the deliverable in clause 3 is complete. The fee is released on the Employer's sign-off. Once released, a payment can't be reversed.</p>
<p>Kontrak deducts a platform fee of ${esc(fees.pct)}% (${esc(euro(fees.feeCents, { decimals: 2 }))}) from the amount released${firstJobDone ? '' : ', because this is the Student Employee\'s first engagement on Kontrak'}${boost ? ', including the optional 3% boost' : ''}. The Student Employee receives <strong>${esc(euro(fees.netCents, { decimals: 2 }))}</strong>. The fee is recalculated at release.</p>

<h2>7. Term</h2>
<p>This engagement begins when both parties have signed and ends on sign-off of the deliverable or on ${esc(fmtDate(contract.deadline || brief.deadline))}, whichever is earlier.</p>

<h2>8. Confidentiality</h2>
<p>The Student Employee shall keep confidential all information received from the Employer in connection with the brief, during and after the engagement. Messages relating to this engagement are recorded under contract ID ${esc(contract.id)}.</p>

<h2>9. Governing law</h2>
<p>This engagement letter is governed by the law of the Federal Republic of Germany.</p>

<div class="sigs">
  ${sig(contract.client_signature_name, contract.client_signed_at, 'For the Employer · ' + client.company_name)}
  ${sig(contract.student_signature_name, contract.student_signed_at, 'Student Employee')}
</div>
<p class="l-foot">Generated by Kontrak · Contract ID ${esc(contract.id)} · Information, not legal advice.</p>`;
}

// Letter typography lives in public/css/letter.css (shared by the app view and this print page).

export function letterPage(contract, html) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Engagement letter ${esc(contract.id)} · Kontrak</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/css/components.css"><link rel="stylesheet" href="/css/app.css"><link rel="stylesheet" href="/css/letter.css">
<style>
body{background:#EDE9E0;padding:32px 16px}.wrap{max-width:820px;margin:0 auto}.bar{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:16px}
@media print{body{background:#fff;padding:0}.bar{display:none}.letter{padding:0;box-shadow:none}.letter .proto-banner{border:1px solid #999}@page{margin:18mm}}</style>
</head><body><div class="wrap"><div class="bar"><a class="btn btn-ghost btn-sm" href="javascript:history.back()">Back</a>
<button class="btn btn-sm" type="button" onclick="window.print()">Print or save as PDF</button></div>
<article class="letter card">${html}</article></div></body></html>`;
}
