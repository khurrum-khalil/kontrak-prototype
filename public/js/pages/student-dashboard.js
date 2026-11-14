import { boot, setTitle } from '../chrome.js';
import { api, post } from '../api.js';
import { $, esc, icon, euro, hrs, avatar, stepper, statusBadge, tabs, empty, dueIn, briefCard, toast, toastError } from '../ui.js';

const me = await boot({ shell: 'student', title: 'Dashboard', eyebrow: 'Student dashboard' });
setTitle(`Good to see you, ${me.user.first_name}`);
const s = me.state;
const view = $('#view');

const [cr, br, pr, mr] = await Promise.all([api('/api/contracts'), api('/api/bids'), api('/api/payments'), api('/api/briefs?tab=matched&fits=1').catch(() => ({ briefs: [] }))]);
const contracts = cr.contracts, bids = br.bids;
const ACTIVE = ['awaiting_signatures', 'signed', 'in_progress', 'delivered'];
const active = contracts.filter((c) => ACTIVE.includes(c.status));
const done = contracts.filter((c) => ['signed_off', 'closed'].includes(c.status));
const openBids = bids.filter((b) => b.status === 'submitted');
const hoursYear = contracts.reduce((a, c) => a + c.logged_hours, 0);

const nudge = s.appliesWeekly
  ? `${s.remainingWeekly} hours left this week. Bids over that limit are blocked automatically.`
  : s.appliesDays ? `${s.remainingDays} days left in ${s.year}. Bids over that limit are blocked automatically.` : 'No day account or weekly cap applies to your work rule.';

view.innerHTML = `
${me.user.status !== 'verified' ? `<div class="callout warn">${icon('mail')}<div><b>Verify your university email to bid.</b> Use the verification link shown after sign-up. Until then, every brief fails gate 1.</div></div>` : ''}
<div class="grid-4">
  <div class="stat"><span class="label">In escrow</span><span class="value">${euro(pr.totals.in_escrow_cents)}</span><span class="delta neutral">${active.filter((c) => c.escrow?.status === 'funded' || c.escrow?.status === 'release_requested').length} funded engagement(s)</span></div>
  <div class="stat"><span class="label">Paid out (${s.year})</span><span class="value">${euro(pr.totals.released_year_cents)}</span><span class="delta neutral">After Kontrak fees · simulated</span></div>
  <div class="stat"><span class="label">Hours logged</span><span class="value">${Math.round(hoursYear * 10) / 10}</span><span class="delta neutral">On Kontrak contracts</span></div>
  <div class="stat navy"><span class="label">Open bids</span><span class="value">${openBids.length}</span><span class="delta">${openBids.length ? 'Awaiting client reply' : 'Find a brief to bid on'}</span></div>
</div>
<div class="split">
  <div class="card card-flush">
    <div style="padding:22px 24px 0"><div id="dash-tabs"></div></div>
    <div id="tab-body" style="padding:24px"></div>
  </div>
  <div class="stack" style="--gap:20px">
    <div class="callout">${icon('shield-check')}<div>${esc(nudge)}${s.appliesDays ? `<br><span class="small muted">Day account: ${s.usedDays} of ${s.caps.fullDays} days used${s.reservedDays ? `, ${s.reservedDays} reserved for signed work` : ''}.</span>` : ''}</div></div>
    <div class="card card-md"><div class="card-head"><span class="label">Matched for you</span><a class="small" href="/app/briefs.html">See all</a></div>
      <div class="stack" style="--gap:12px" id="rail"></div></div>
  </div>
</div>`;

$('#rail').innerHTML = mr.briefs.length ? mr.briefs.slice(0, 3).map((b) => briefCard(b, { href: `/app/briefs.html?brief=${b.id}`, showReason: false }).replace('class="brief-card', 'style="box-shadow:none;border:1px solid var(--border-subtle);padding:18px" class="brief-card')).join('')
  : empty('search', 'No matched briefs fit right now', 'New briefs that fit your remaining days appear here.');

const workItem = (c) => `<div class="work-item">
  <div class="between" style="align-items:flex-start">
    <div class="row" style="align-items:flex-start;flex-wrap:nowrap">${avatar(c.client.company, { verified: c.client.verified })}
      <div><a class="title" href="/app/contract.html?id=${c.id}">${esc(c.brief?.title)}</a><div class="small muted mt-4">${esc(c.client.company)} · ${esc(c.id)} · ${esc(dueIn(c.deadline, me.today))}</div></div></div>
    <div class="row">${statusBadge(c.status)}${c.escrow ? statusBadge(c.escrow.status) : ''}<span class="num">${euro(c.fee_cents)}</span></div>
  </div>
  ${stepper(c.step)}
  <div class="small muted">${hrs(c.logged_hours)} of ${hrs(c.scoped_hours)} logged${c.unread ? ` · <a href="/app/messages.html?contract=${c.id}">${c.unread} unread message(s)</a>` : ''}</div>
</div>`;

function renderTab(v) {
  const body = $('#tab-body');
  if (v === 'active') body.innerHTML = active.length ? active.map(workItem).join('') + `<a class="btn btn-ghost btn-sm mt-16" href="/app/contracts.html">Open contracts ${icon('arrow-right', 14)}</a>` : empty('briefcase', 'No active work', 'When a client accepts your bid, the engagement appears here.', '<a class="btn btn-sm" href="/app/briefs.html">Find briefs</a>');
  if (v === 'done') body.innerHTML = done.length ? done.map(workItem).join('') : empty('circle-check', 'No completed engagements yet');
  if (v === 'bids') body.innerHTML = bids.length ? `<div class="table-wrap"><table class="table table-dense"><thead><tr><th>Brief</th><th>Fee</th><th>Hours</th><th>Status</th><th></th></tr></thead><tbody>${bids.map((b) => `<tr>
    <td><a href="/app/briefs.html?brief=${b.brief_id}">${esc(b.brief?.title || b.brief_id)}</a>${b.boost === true || b.boost === 'true' ? ' <span class="badge badge-gold">Boost</span>' : ''}</td><td class="nowrap">${euro(b.proposed_fee_cents)}</td><td>${hrs(b.proposed_hours)}</td><td>${statusBadge(b.status)}</td>
    <td class="right">${b.status === 'submitted' ? `<button class="btn btn-ghost btn-sm" data-withdraw="${b.id}">Withdraw</button>` : b.contract_id ? `<a class="btn btn-ghost btn-sm" href="/app/contract.html?id=${b.contract_id}">Contract</a>` : ''}</td></tr>`).join('')}</tbody></table></div>` : empty('send', 'No bids yet', 'Bids you place appear here with their status.', '<a class="btn btn-sm" href="/app/briefs.html">Find briefs</a>');
}
tabs($('#dash-tabs'), [{ value: 'active', label: 'Active work', count: active.length }, { value: 'bids', label: 'My bids', count: bids.length }, { value: 'done', label: 'Completed', count: done.length }], 'active', renderTab);
renderTab('active');

view.addEventListener('click', async (e) => {
  const b = e.target.closest('[data-withdraw]'); if (!b) return;
  try { await post(`/api/bids/${b.dataset.withdraw}/withdraw`); toast('Bid withdrawn. You can bid on the brief again.'); location.reload(); }
  catch (err) { toastError(err); }
});
