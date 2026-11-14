// Day-Cap Checker. Instant maths in the browser (compliance-client), live brief count and an
// anonymous run log from the server. Used in the homepage hero and on day-cap-checker.html.
import * as C from './compliance-client.js';
import { api, post } from './api.js';
import { esc, icon, meter } from './ui.js';
import { t } from './chrome.js';

export function mountChecker(el, { compact = false } = {}) {
  const permits = C.PERMIT_TYPES;
  el.innerHTML = `<div class="checker" aria-labelledby="ck-title">
    <div class="ck-head"><span class="label" id="ck-title" data-i18n="checker.title">Day-Cap Checker</span><span class="badge badge-gold" data-i18n="checker.free">Free · no login</span></div>
    <form class="ck-body" novalidate>
      <div class="field"><label for="ck-permit" data-i18n="checker.permit">Permit type</label>
        <select class="select" id="ck-permit" name="permit_type">${permits.map((p) => `<option>${esc(p)}</option>`).join('')}</select></div>
      <div class="form-grid" style="grid-template-columns:repeat(3,minmax(0,1fr))">
        <div class="field"><label for="ck-full" data-i18n="checker.full">Full days used</label><input class="input" id="ck-full" name="full_used" type="number" inputmode="decimal" min="0" max="140" value="86"></div>
        <div class="field"><label for="ck-half" data-i18n="checker.half">Half days used</label><input class="input" id="ck-half" name="half_used" type="number" inputmode="decimal" min="0" max="280" value="0"></div>
        <div class="field"><label for="ck-week" data-i18n="checker.week">Hours booked this week</label><input class="input" id="ck-week" name="week_hours" type="number" inputmode="decimal" min="0" max="80" step="0.5" value="12.5"></div>
      </div>
    </form>
    <div class="ck-out" aria-live="polite"></div>
  </div>`;
  const form = el.querySelector('form');
  const out = el.querySelector('.ck-out');
  let rules = C.DEFAULT_RULES, today = new Date().toISOString().slice(0, 10), lastLogged = '', timer, logTimer;
  api('/api/rules').then((r) => { rules = r.rules; today = r.today; render(); }).catch(() => render());

  function values() {
    const n = (v) => Math.max(0, Number(String(v).replace(',', '.')) || 0);
    return { permit_type: form.permit_type.value, full_used: n(form.full_used.value), half_used: n(form.half_used.value), week_hours: n(form.week_hours.value) };
  }
  function render() {
    const v = values();
    const over = C.halfDayUnits(v.full_used, v.half_used) > rules.annualHalfDays;
    const s = C.checkerSummary({ permitType: v.permit_type, fullUsed: v.full_used, halfUsed: v.half_used, weekHours: v.week_hours }, { rules, today });
    const dayBlock = s.appliesDays
      ? `<div><div class="between"><span class="ck-big">${s.remainingDays}<small> / ${rules.annualFullDays} <span data-i18n="checker.days_left">${t('checker.days_left', 'days left')}</span></small></span><span class="small muted">${s.accountLeftPct}% ${t('checker.account', 'of your account')}</span></div>${meter(100 - s.accountLeftPct, 'gold')}</div>`
      : `<div class="small muted">${t('checker.no_days', 'No annual day account applies to this permit type.')}</div>`;
    const weekBlock = s.appliesWeekly
      ? `<div class="between"><span><b class="num" style="font-size:20px">${s.remainingWeeklyHours} h</b> <span class="small muted" data-i18n="checker.week_left">${t('checker.week_left', 'left this week')}</span></span><span class="small muted">of ${rules.weeklyCapHours} h</span></div>`
      : `<div class="small muted">${t('checker.no_week', 'No weekly hour cap applies to this permit type.')}</div>`;
    out.innerHTML = over
      ? `<div class="callout danger">${icon('circle-alert')}<div>Full and half days together cannot exceed ${rules.annualFullDays} days. Check both numbers.</div></div>`
      : `${dayBlock}${weekBlock}
      <div class="small muted">${t('checker.year', '{pct}% of {year} is left. Your account resets on 1 January {next}.').replace('{pct}', s.yearLeftPct).replace('{year}', s.year).replace('{next}', s.year + 1)}</div>
      <div class="between"><span class="small"><span data-i18n="checker.today">${t('checker.today', 'Briefs you could take today')}</span>: <b class="num" id="ck-count">…</b></span>
      <a class="btn btn-sm ${compact ? '' : 'btn-accent'}" id="ck-go" href="/find-work.html?fits=1&remHalf=${s.remainingHalfDays ?? ''}&remWeek=${s.remainingWeeklyHours ?? ''}" data-i18n="checker.cta">${t('checker.cta', 'See the briefs you could take')}</a></div>
      <p class="xs faint">${t('checker.disclaimer', 'Information, not legal advice. Your permit wording and your Ausländerbehörde decide your case.')}</p>`;
    clearTimeout(timer);
    if (!over) timer = setTimeout(() => count(v), 350);
  }
  async function count(v) {
    const key = JSON.stringify(v);
    const shouldLog = key !== lastLogged;
    try {
      const r = await post('/api/checker/run', { ...v, log: false });
      const c = el.querySelector('#ck-count'); if (c) c.textContent = r.briefs_today;
      // Log one anonymous run once the visitor stops typing (no personal data is stored).
      clearTimeout(logTimer);
      if (shouldLog) logTimer = setTimeout(() => { lastLogged = key; post('/api/checker/run', { ...v, log: true }).catch(() => {}); }, 1500);
    } catch {
      const c = el.querySelector('#ck-count'); if (c) c.textContent = 'n/a';
    }
  }
  form.addEventListener('input', render);
  document.addEventListener('kt:lang', render);
  form.addEventListener('submit', (e) => e.preventDefault());
  render();
}
