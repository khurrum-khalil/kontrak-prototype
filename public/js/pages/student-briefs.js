// Find briefs: Gate 1 runs before ranking. Matched never shows ineligible work; All open shows it greyed with a reason.
import { boot, updateMeters } from '../chrome.js';
import { api, post } from '../api.js';
import * as C from '../compliance-client.js';
import { $, $$, esc, icon, qs, euro, euro2, hrs, fmtDate, avatar, briefCard, tabs, empty, errorBox, gatesHtml, openDialog, formData, toast, toastError, statusBadge, dayCapBadge, busy } from '../ui.js';

let me = await boot({ shell: 'student', title: 'Find briefs', eyebrow: 'Briefs' });
const view = $('#view');
view.innerHTML = `
<div class="filters-layout">
  <aside class="card card-sm" aria-label="Filters">
    <form id="filters" class="stack" style="--gap:16px" role="search">
      <span class="label">Filters</span>
      <div class="field"><label for="f-jur">Jurisdiction</label><select class="select select-sm" id="f-jur" name="jurisdiction"><option value="">All jurisdictions</option><option>Germany</option><option>Austria</option><option>Switzerland</option><option>EU-wide</option></select></div>
      <div class="field"><label for="f-rate">Fee per hour</label><select class="select select-sm" id="f-rate" name="minRate"><option value="">Any hourly rate</option><option value="2000">€20 or more</option><option value="3000">€30 or more</option><option value="4000">€40 or more</option></select></div>
      <div class="field"><label for="f-mode">Work mode</label><select class="select select-sm" id="f-mode" name="mode"><option value="">Remote or on-site</option><option>Remote</option><option>On-site</option></select></div>
      <div><span class="label">Practice area</span><div class="tags mt-8" id="f-areas"></div></div>
      <hr class="divider" style="margin:0">
      <label class="switch"><input type="checkbox" name="fits" id="f-fits"><span>Fits my remaining days</span></label>
      <button class="btn btn-secondary btn-sm btn-block" type="reset">Reset</button>
    </form>
  </aside>
  <div class="stack" style="--gap:16px">
    <div class="row" style="flex-wrap:nowrap">
      <div class="input-icon grow"><label class="sr-only" for="f-q">Search</label>${icon('search', 15)}<input class="input" id="f-q" form="filters" name="q" placeholder="Search briefs, clients, practice areas"></div>
      <label class="sr-only" for="f-sort">Sort</label><select class="select" id="f-sort" form="filters" name="sort" style="width:200px"><option value="">Best fit first</option><option value="newest">Newest first</option><option value="fee">Highest fee</option><option value="rate">Highest hourly rate</option><option value="deadline">Soonest deadline</option></select>
    </div>
    <div id="f-tabs"></div>
    <div class="stack" style="--gap:12px" id="results">${'<div class="skeleton"></div>'.repeat(2)}</div>
  </div>
</div>`;

const form = $('#filters');
const st = { tab: 'matched', areas: new Set() };
if (qs('fits') === '1') form.fits.checked = true;
let timer;

async function load() {
  const v = formData(form);
  const p = new URLSearchParams({ tab: st.tab, q: v.q || '', jurisdiction: v.jurisdiction, minRate: v.minRate, mode: v.mode, sort: v.sort, fits: v.fits ? '1' : '', areas: [...st.areas].join(',') });
  try {
    const r = await api('/api/briefs?' + p);
    if (!$('#f-areas').children.length) $('#f-areas').innerHTML = r.areas.map((a) => `<button type="button" class="tag" aria-pressed="false" data-area="${esc(a)}">${esc(a)}</button>`).join('');
    tabs($('#f-tabs'), [{ value: 'matched', label: 'Matched', count: r.counts.matched }, { value: 'all', label: 'All open', count: r.counts.all }, { value: 'saved', label: 'Saved', count: r.counts.saved }], st.tab, (t) => { st.tab = t; load(); });
    $('#results').innerHTML = r.briefs.length ? r.briefs.map((b) => briefCard(b, { href: `?brief=${b.id}`, saveable: true })).join('')
      : empty(st.tab === 'saved' ? 'bookmark' : 'search', st.tab === 'saved' ? 'No saved briefs' : 'No briefs match', st.tab === 'saved' ? 'Use Save on any brief to keep it here.' : st.tab === 'matched' ? 'Only briefs you can legally take appear in Matched. Clear a filter or check All open.' : 'Clear a filter to see more.');
  } catch (e) { $('#results').innerHTML = errorBox(e); }
}
form.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(load, 250); });
form.addEventListener('reset', () => { st.areas.clear(); $$('#f-areas [aria-pressed]').forEach((b) => b.setAttribute('aria-pressed', 'false')); setTimeout(load); });
form.addEventListener('submit', (e) => { e.preventDefault(); load(); });
$('#f-areas').addEventListener('click', (e) => {
  const b = e.target.closest('[data-area]'); if (!b) return;
  const on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', on);
  on ? st.areas.add(b.dataset.area) : st.areas.delete(b.dataset.area); load();
});
$('#results').addEventListener('click', async (e) => {
  const save = e.target.closest('[data-save]');
  if (save) { e.preventDefault(); try { const r = await post(`/api/briefs/${save.dataset.save}/save`); toast(r.saved ? 'Brief saved.' : 'Removed from saved.'); load(); } catch (err) { toastError(err); } return; }
  const a = e.target.closest('a[href^="?brief="]');
  if (a) { e.preventDefault(); openBrief(new URLSearchParams(a.getAttribute('href').slice(1)).get('brief')); }
});
load();
if (qs('brief')) openBrief(qs('brief'));

// ── Brief detail and bid dialog ─────────────────────────────
async function openBrief(id) {
  history.replaceState(null, '', `?brief=${id}`);
  let data;
  try { data = await api(`/api/briefs/${encodeURIComponent(id)}`); } catch (e) { toastError(e); return; }
  const { brief: b, fit, state, profile, my_bid: myBid } = data;
  const rules = me.rules, today = me.today;
  const firstJob = !(profile.first_job_done === true || profile.first_job_done === 'true');
  const canBid = b.status === 'open' && !myBid;
  const body = `
  <div class="row mb-16">${b.day_cap_safe ? dayCapBadge() : ''}${statusBadge(b.status)}${b.client?.verified ? `<span class="badge badge-navy">${icon('badge-check', 12)} Company register checked</span>` : '<span class="badge badge-warning">Client check pending</span>'}</div>
  <div class="row">${avatar(b.client?.company_name, { verified: b.client?.verified })}<div><div class="title">${esc(b.client?.company_name)}</div><div class="small muted">${esc(b.location_mode)}${b.city ? ' · ' + esc(b.city) : ''} · ${esc(b.jurisdiction)}</div></div></div>
  <div class="kv mt-16">
    <div><div class="k">Fee</div><div class="v num">${euro(b.fee_cents)}</div></div>
    <div><div class="k">Scoped hours</div><div class="v num">${hrs(b.scoped_hours)}</div></div>
    <div><div class="k">Effective rate</div><div class="v num">${euro2(b.effective_hourly_cents)} / h</div></div>
    <div><div class="k">Deadline</div><div class="v">${esc(fmtDate(b.deadline))}</div></div>
  </div>
  <p class="body mt-16">${esc(b.description)}</p>
  <div class="card card-sunken card-sm mt-16"><span class="label">Scope and deliverable</span><p class="small mt-8" style="line-height:1.7">${esc(b.scope_deliverable)}</p></div>
  ${!fit.eligible ? `<div class="callout danger mt-16">${icon('ban')}<div><b>You cannot bid on this brief.</b> ${esc(fit.eligibleReason)}</div></div>` : ''}
  ${myBid ? `<div class="callout info mt-16">${icon('send')}<div>You already bid ${euro(myBid.proposed_fee_cents)} for ${hrs(myBid.proposed_hours)}. Status: ${esc(myBid.status)}.</div></div>` : ''}
  ${canBid && fit.eligible ? `<hr class="divider"><span class="label">Your bid</span>
  <form id="bid-form" class="form-stack mt-12" novalidate>
    <div class="form-grid">
      <div class="field"><label for="b-fee">Proposed fee</label><div class="input-affix"><span class="affix">€</span><input class="input" id="b-fee" name="proposed_fee" type="number" min="0" step="10" value="${b.fee_cents / 100}"></div></div>
      <div class="field"><label for="b-hours">Hours you plan to work</label><input class="input" id="b-hours" name="proposed_hours" type="number" min="0.5" step="0.5" value="${b.scoped_hours}"></div>
      <div class="field"><label for="b-pat">Work pattern</label><select class="select" id="b-pat" name="planned_pattern"><option>4 h sessions</option><option>2 h sessions</option><option>8 h days</option></select><span class="hint">Sessions over 4 h count as full days.</span></div>
      <div class="field"><span class="field-label">Boost</span><label class="check" style="margin-top:8px"><input type="checkbox" name="boost"><span>Show my bid first (+3% on payout)</span></label></div>
    </div>
    <div id="bid-gates"></div>
    <div class="field"><label for="b-note">Cover note</label><textarea class="textarea" id="b-note" name="cover_note" rows="3" placeholder="Why you are a good fit, and when you can start. At least 20 characters."></textarea></div>
    <div id="bid-split"></div>
  </form>` : ''}`;
  openDialog({ eyebrow: `Brief · ${b.id}`, title: b.title, body, wide: true,
    actions: canBid && fit.eligible ? [{ label: 'Cancel', variant: 'ghost' }, { label: 'Send bid', variant: 'accent', id: 'bid-send', onClick: send }] : [{ label: 'Close', variant: 'secondary' }],
    onOpen: (d) => {
      d.addEventListener('close', () => history.replaceState(null, '', location.pathname));
      const f = d.querySelector('#bid-form'); if (!f) return;
      const check = () => {
        const v = formData(f);
        const res = C.checkBid({ student: { status: me.user.status, permit_type: profile.permit_type }, state, brief: { ...b, min_permit_types: b.min_permit_types.join('|') },
          bid: { feeCents: Math.round(Number(v.proposed_fee) * 100), hours: Number(v.proposed_hours), pattern: v.planned_pattern, deadline: b.deadline }, alreadyOnBrief: fit.alreadyOnBrief }, { rules, today });
        d.querySelector('#bid-gates').innerHTML = gatesHtml(res.gates, res.flags);
        const split = C.payoutFees(Math.round(Number(v.proposed_fee) * 100) || 0, { firstJobDone: !firstJob, boost: v.boost }, rules);
        d.querySelector('#bid-split').innerHTML = `<div class="rows small"><div><span class="muted">Kontrak fee on payout (${split.pct}%${firstJob ? ', first job' : ''})</span><b>${euro2(split.feeCents)}</b></div><div><span class="muted">You would receive</span><b class="num gold-text">${euro2(split.netCents)}</b></div></div>`;
        const btn = d.querySelector('#bid-send'); btn.disabled = !res.allowed || String(v.cover_note).trim().length < 20;
        btn.title = !res.allowed ? 'Blocked by a gate above' : String(v.cover_note).trim().length < 20 ? 'Write a cover note of at least 20 characters' : '';
      };
      f.addEventListener('input', check); check();
    } });

  async function send({ close, dialog, button }) {
    const f = dialog.querySelector('#bid-form');
    busy(button, true, 'Checking…');
    try {
      const r = await post('/api/bids', { brief_id: b.id, ...formData(f) });
      toast(r.message, { title: 'Bid sent' }); close();
      me = await api('/api/me'); updateMeters(me.state); load();
    } catch (err) {
      busy(button, false);
      if (err.data?.result) dialog.querySelector('#bid-gates').innerHTML = gatesHtml(err.data.result.gates, err.data.result.flags);
      toastError(err);
    }
    return false;
  }
}
