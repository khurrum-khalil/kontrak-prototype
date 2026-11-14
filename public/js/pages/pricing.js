// Fee calculator: fee, hours and "first job?" → what the student receives.
import { boot } from '../chrome.js';
import { api } from '../api.js';
import * as C from '../compliance-client.js';
import { $, icon, euro2, formData } from '../ui.js';

await boot({ shell: 'site' });
let rules = C.DEFAULT_RULES, today = new Date().toISOString().slice(0, 10);
const form = $('#fee-calc form');

function render() {
  const v = formData(form);
  const fee = Math.max(0, Math.round(Number(v.fee) * 100) || 0);
  const hours = Number(v.hours) || 0;
  const split = C.payoutFees(fee, { firstJobDone: !v.first, boost: v.boost }, rules);
  const floor = C.aboveFloor({ feeCents: fee, hours, deadline: today }, { rules, today });
  $('#fc-out').innerHTML = `
  <div class="rows">
    <div><span class="muted">Client pays into escrow</span><b class="num">${euro2(fee)}</b></div>
    <div><span class="muted">Effective hourly rate</span><b class="num">${hours ? euro2(C.effectiveHourlyCents(fee, hours)) : '–'}</b></div>
    <div><span class="muted">Kontrak fee (${split.pct}%)</span><b class="num">${euro2(split.feeCents)}</b></div>
    <div><span class="muted">You receive</span><b class="num gold-text" style="font-size:22px">${euro2(split.netCents)}</b></div>
  </div>
  ${hours ? `<div class="callout ${floor.passed ? 'success' : 'danger'} mt-12">${icon(floor.passed ? 'circle-check' : 'ban')}<div>${floor.reason}</div></div>` : ''}
  <p class="xs faint mt-12">Prototype. Payments are simulated. Payroll deductions are not modelled.</p>`;
}
form.addEventListener('input', render);
form.addEventListener('submit', (e) => e.preventDefault());
render();
api('/api/rules').then((r) => { rules = r.rules; today = r.today; render(); }).catch(() => {});
