// Post a brief: live effective hourly rate, publishing blocked under the wage floor,
// and "Publish to N verified students" with the real count of eligible students.
import { boot } from '../chrome.js';
import { api, post } from '../api.js';
import * as C from '../compliance-client.js';
import { $, esc, icon, qs, euro2, formData, busy, toast, showFormError } from '../ui.js';

const AREAS = ['Commercial', 'Data protection', 'Employment', 'Corporate', 'IP & licensing', 'AI & regulation', 'Fintech', 'Regulatory', 'Competition', 'Tax', 'Due diligence', 'Research', 'Drafting', 'SaaS & IT'];
const me = await boot({ shell: 'client', title: 'Post a brief', eyebrow: 'New brief' });
const rules = me.rules, today = me.today;
const blocked = me.user.status !== 'verified' ? 'Verify your work email before you publish. Use the link shown after sign-up.'
  : me.profile.register_check !== 'passed' ? `Your company register check is ${me.profile.register_check}. You can publish once the Kontrak team confirms it.` : '';

$('#view').innerHTML = `
<div class="split">
  <form class="card form-stack" id="brief" novalidate>
    ${blocked ? `<div class="callout warn">${icon('landmark')}<div>${esc(blocked)}</div></div>` : ''}
    <div class="field"><label for="b-title">Title</label><input class="input" id="b-title" name="title" maxlength="120" required placeholder="Review a SaaS reseller agreement"></div>
    <div class="field"><label for="b-desc">What the brief is about</label><textarea class="textarea" id="b-desc" name="description" rows="3" maxlength="1500" placeholder="Context the student needs. At least 20 characters."></textarea></div>
    <div class="field"><label for="b-scope">Scope and deliverable</label><textarea class="textarea" id="b-scope" name="scope_deliverable" rows="3" maxlength="1500" placeholder="The Student Employee shall deliver a marked-up copy of the agreement together with a written risk note of no more than one page."></textarea><span class="hint">This text becomes clause 3 of the engagement letter.</span></div>
    <div class="form-grid">
      <div class="field"><label for="b-fee">Fee</label><div class="input-affix"><span class="affix">€</span><input class="input" id="b-fee" name="fee" type="number" min="1" step="10" value="480"></div></div>
      <div class="field"><label for="b-hours">Scoped hours</label><input class="input" id="b-hours" name="scoped_hours" type="number" min="0.5" step="0.5" value="14"></div>
      <div class="field"><label for="b-deadline">Deadline</label><input class="input" id="b-deadline" name="deadline" type="date" min="${today}" value="${C.addDays(today, 21)}"></div>
      <div class="field"><label for="b-jur">Jurisdiction</label><select class="select" id="b-jur" name="jurisdiction"><option>Germany</option><option>Austria</option><option>Switzerland</option><option>EU-wide</option></select></div>
      <div class="field"><label for="b-mode">Work mode</label><select class="select" id="b-mode" name="location_mode"><option>Remote</option><option>On-site</option></select></div>
      <div class="field"><label for="b-city">City</label><input class="input" id="b-city" name="city" value="${esc(me.profile.city || '')}"></div>
    </div>
    <div class="field"><span class="field-label" id="ar-l">Practice areas · up to 5</span><div class="tags" role="group" aria-labelledby="ar-l">${AREAS.map((a) => `<label class="check tag" style="gap:6px"><input type="checkbox" name="practice_areas" value="${esc(a)}" data-multi="1" style="width:14px;height:14px;margin:0">${esc(a)}</label>`).join('')}</div></div>
    <div class="field"><span class="field-label" id="pm-l">Open to these permit types</span><div class="stack" style="--gap:8px" role="group" aria-labelledby="pm-l">${C.PERMIT_TYPES.map((p) => `<label class="check"><input type="checkbox" name="min_permit_types" value="${esc(p)}" data-multi="1" checked><span>${esc(p)}</span></label>`).join('')}</div><span class="hint">Untick a permit type only if the work genuinely requires it, for example full-time on-site work.</span></div>
    <div class="field"><label for="b-lang">Working language</label><input class="input" id="b-lang" name="languages" value="English"></div>
  </form>
  <aside class="stack" style="--gap:16px;position:sticky;top:120px">
    <section class="card"><span class="label">Before you publish</span>
      <div class="num mt-12" style="font-size:34px" id="rate">–</div><div class="small muted">effective hourly rate</div>
      <div id="floor" class="mt-16" aria-live="polite"></div>
      <div class="rows small mt-16" id="facts"></div>
      <button class="btn btn-accent btn-block mt-16" id="publish" type="button" ${blocked ? 'disabled' : ''}>Publish</button>
      <p class="xs faint mt-8">Posting is free. You pay the agreed fee into escrow after both sides sign.</p>
    </section>
  </aside>
</div>`;

const f = $('#brief');
if (qs('draft')) {
  try { const d = JSON.parse(sessionStorage.getItem('kt_brief_draft') || '{}'); for (const k of ['title', 'fee', 'scoped_hours', 'jurisdiction', 'deadline']) if (d[k]) f.elements[k].value = d[k]; } catch { /* ignore */ }
}
let count = null, timer;
function render() {
  const v = formData(f);
  const fee = Math.round(Number(v.fee) * 100) || 0, hours = Number(v.scoped_hours) || 0;
  const g = C.aboveFloor({ feeCents: fee, hours, deadline: v.deadline || today }, { rules, today });
  $('#rate').textContent = hours ? euro2(C.effectiveHourlyCents(fee, hours)) : '–';
  $('#floor').innerHTML = `<div class="gate ${g.passed ? 'pass' : 'fail'}"><span class="gate-ico">${icon(g.passed ? 'check' : 'x', 15)}</span><div><div class="gate-name">Above the floor?</div><div class="gate-reason">${esc(g.reason)}</div></div></div>`;
  const weeks = C.weeksBetween(today, v.deadline);
  const safe = C.isDayCapSafe({ fee_cents: fee, scoped_hours: hours, deadline: v.deadline, jurisdiction: v.jurisdiction }, { rules, today });
  $('#facts').innerHTML = `<div><span class="muted">Spread</span><b>${weeks} week${weeks === 1 ? '' : 's'} · ${Math.round((hours / weeks) * 10) / 10} h a week</b></div>
    <div><span class="muted">Day-Cap Safe label</span><b>${safe ? 'Yes' : 'No'}</b></div>
    <div><span class="muted">Jurisdiction</span><b>${rules.liveJurisdictions.includes(v.jurisdiction) ? esc(v.jurisdiction) + ' · live' : esc(v.jurisdiction) + ' · not live yet'}</b></div>`;
  const pub = $('#publish');
  pub.disabled = !!blocked || !g.passed;
  pub.textContent = count == null ? 'Publish' : `Publish to ${count} verified student${count === 1 ? '' : 's'}`;
  clearTimeout(timer);
  timer = setTimeout(async () => {
    try {
      const r = await api(`/api/briefs/eligible-count?${new URLSearchParams({ hours, deadline: v.deadline, jurisdiction: v.jurisdiction, permits: (v.min_permit_types || []).join('|') })}`);
      count = r.count; pub.textContent = `Publish to ${count} verified student${count === 1 ? '' : 's'}`;
    } catch { /* keep label */ }
  }, 300);
}
f.addEventListener('input', render);
render();

$('#publish').addEventListener('click', async () => {
  const btn = $('#publish');
  showFormError(f, null); busy(btn, true, 'Publishing…');
  try {
    const r = await post('/api/briefs', formData(f));
    sessionStorage.removeItem('kt_brief_draft');
    toast(r.warning || `"${r.brief.title}" is live. Eligible students can bid now.`, { title: 'Brief published' });
    setTimeout(() => (location.href = '/client/my-briefs.html'), 900);
  } catch (err) { busy(btn, false); showFormError(f, err.message); }
});
