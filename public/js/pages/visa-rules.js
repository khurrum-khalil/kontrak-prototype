// Earnings estimator (ported from the old visa-rules screen, now with the fee model from the pitch).
import { boot } from '../chrome.js';
import { api } from '../api.js';
import * as C from '../compliance-client.js';
import { $, $$, icon, euro, euro2 } from '../ui.js';

await boot({ shell: 'site' });
let rules = C.DEFAULT_RULES, today = new Date().toISOString().slice(0, 10), model = 'Werkstudent';
const rate = $('#es-rate'), hours = $('#es-hours'), first = $('#es-first');

function render() {
  const r = Number(rate.value), h = Number(hours.value);
  $('#es-rate-v').textContent = euro2(Math.round(r * 100));
  $('#es-hours-v').textContent = `${h} h`;
  const monthlyCents = Math.round(r * h * 4.33 * 100);
  const fee = C.payoutFees(monthlyCents, { firstJobDone: !first.checked }, rules);
  const sessionsPerWeek = Math.ceil(h / rules.fullDayThresholdHours);
  const halfDaysYear = Math.min(rules.annualHalfDays, sessionsPerWeek * 52);
  const floor = C.minWageFor(today, rules);
  const notes = [];
  if (Math.round(r * 100) < floor) notes.push(['danger', 'ban', `${euro2(Math.round(r * 100))} per hour is below the ${euro2(floor)} statutory minimum. Kontrak blocks briefs at this rate.`]);
  if (model === 'Minijob' && monthlyCents > rules.minijobCeilingCents) notes.push(['warn', 'triangle-alert', `Over the ${euro(rules.minijobCeilingCents)} Minijob ceiling. At this level the job becomes a Midijob and social contributions apply.`]);
  if (model === 'Werkstudent') notes.push(['', 'info', 'Werkstudent status generally exempts you from health, care and unemployment contributions. Pension insurance still applies.']);
  if (sessionsPerWeek * 52 > rules.annualHalfDays) notes.push(['warn', 'clock', `Working ${sessionsPerWeek} half days every week for a year would use more than your ${rules.annualFullDays} days. Plan for semester breaks.`]);
  $('#es-out').innerHTML = `
  <div class="grid-3" style="gap:12px">
    <div><span class="label">Gross per month</span><div class="num mt-4" style="font-size:32px">${euro(monthlyCents)}</div></div>
    <div><span class="label">Kontrak fee · ${fee.pct}%</span><div class="num mt-4" style="font-size:24px">${euro(fee.feeCents)}</div><span class="xs faint">${first.checked ? 'First job: no fee' : '5% from the second job'}</span></div>
    <div><span class="label">Days used per year</span><div class="num mt-4" style="font-size:24px">≈ ${halfDaysYear} half days</div><span class="xs faint">${halfDaysYear / 2} of ${rules.annualFullDays} days</span></div>
  </div>
  ${notes.map(([tone, ic, t]) => `<div class="callout ${tone} mt-12">${icon(ic)}<div>${t}</div></div>`).join('')}`;
}
$$('#estimator [data-model]').forEach((b) => (b.onclick = () => { model = b.dataset.model; $$('#estimator [data-model]').forEach((x) => x.setAttribute('aria-pressed', x === b)); render(); }));
[rate, hours, first].forEach((el) => el.addEventListener('input', render));
render();
api('/api/rules').then((r) => { rules = r.rules; today = r.today; $('#vr-floor').textContent = euro2(C.minWageFor(today, rules)); render(); }).catch(() => {});
