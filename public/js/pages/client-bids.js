// Bids per brief, sorted by fit. Each bid shows the student's remaining days and hours, as the pitch promises.
import { boot } from '../chrome.js';
import { api, post } from '../api.js';
import { $, esc, icon, qs, euro, euro2, hrs, avatar, statusBadge, empty, errorBox, openDialog, toast, toastError, busy, relTime } from '../ui.js';

await boot({ shell: 'client', title: 'Bids', eyebrow: 'Review bids' });
const view = $('#view');
let briefFilter = qs('brief') || '';

async function load() {
  try {
    const { bids, briefs } = await api('/api/bids');
    const openBriefs = briefs.filter((b) => b.status === 'open' || bids.some((x) => x.brief_id === b.id));
    const list = bids.filter((x) => !briefFilter || x.brief_id === briefFilter);
    view.innerHTML = `
    <div class="between"><div class="field" style="min-width:320px"><label for="bf">Brief</label><select class="select" id="bf"><option value="">All briefs</option>${openBriefs.map((b) => `<option value="${b.id}" ${b.id === briefFilter ? 'selected' : ''}>${esc(b.title)} · ${esc(b.status)}</option>`).join('')}</select></div>
      <p class="small muted" style="max-width:52ch">Sorted by fit: bids that pass all three gates today come first. Accepting creates the contract and its escrow record.</p></div>
    <div class="stack" style="--gap:14px">${list.length ? list.map(card).join('') : empty('users', 'No bids yet', 'Eligible students see your brief in their matched feed. Bids appear here as they arrive.')}</div>`;
    $('#bf').onchange = (e) => { briefFilter = e.target.value; history.replaceState(null, '', briefFilter ? `?brief=${briefFilter}` : location.pathname); load(); };
  } catch (e) { view.innerHTML = errorBox(e); }
}

function card(x) {
  const s = x.student, r = x.remaining;
  const boost = x.boost === true || x.boost === 'true';
  return `<article class="card card-md" ${x.status !== 'submitted' ? 'style="opacity:.8"' : ''}>
    <div class="between" style="align-items:flex-start">
      <div class="row" style="flex-wrap:nowrap;align-items:flex-start">${avatar(s.name, { verified: s.verified })}<div>
        <div class="title">${esc(s.name)} ${boost ? '<span class="badge badge-gold">Boosted</span>' : ''}</div>
        <div class="small muted">${esc(s.university || '')} · ${esc(s.permit_type || '')}</div>
        <div class="small muted">${s.rating ? `<span class="gold-text">${icon('star', 13)}</span> ${s.rating} from ${s.reviews} review${s.reviews === 1 ? '' : 's'}` : 'No reviews yet'} · on "${esc(x.brief_title)}" · ${esc(relTime(x.created_at))}</div></div></div>
      <div class="right"><div class="num" style="font-size:22px">${euro(x.proposed_fee_cents)}</div><div class="small muted">${hrs(x.proposed_hours)} · ${euro2(x.effective_hourly_cents)}/h · ${esc(x.planned_pattern)}</div></div>
    </div>
    <div class="grid-3 mt-16" style="gap:12px">
      <div class="card card-sunken card-sm"><span class="label">Days left this year</span><div class="num mt-4" style="font-size:20px">${r.appliesDays ? `${r.days} days` : 'No day account'}</div></div>
      <div class="card card-sunken card-sm"><span class="label">Hours left this week</span><div class="num mt-4" style="font-size:20px">${r.appliesWeekly ? `${r.weekly} h` : 'No weekly cap'}</div></div>
      <div class="card card-sunken card-sm"><span class="label">Gates today</span><div class="mt-4 small">${x.fits_now == null ? statusBadge(x.status) : x.fits_now ? `<span class="badge badge-success dot">All three pass</span>` : `<span class="badge badge-danger dot">Blocked</span><div class="xs mt-4" style="color:var(--danger)">${esc(x.fits_reason)}</div>`}</div></div>
    </div>
    <p class="body mt-16" style="font-size:15px">${esc(x.cover_note)}</p>
    <div class="tags mt-12">${s.practice_areas.map((a) => `<span class="tag">${esc(a)}</span>`).join('')}${s.first_job_done ? '' : '<span class="badge badge-navy">First job on Kontrak</span>'}</div>
    ${x.status === 'submitted' ? `<div class="row mt-16"><button class="btn btn-accent" data-accept="${x.id}" ${x.fits_now ? '' : 'disabled title="This bid no longer passes the gates"'}>Accept bid</button><button class="btn btn-ghost" data-decline="${x.id}">Decline</button></div>` : `<div class="mt-16">${statusBadge(x.status)}</div>`}
  </article>`;
}

view.addEventListener('click', (e) => {
  const a = e.target.closest('[data-accept]'), d = e.target.closest('[data-decline]');
  if (a) openDialog({ eyebrow: 'Accept bid', title: 'Accept this bid and create the contract?',
    body: `<p>Kontrak generates the engagement letter under German law and opens an escrow record. Other bids on this brief are declined.</p><p class="small muted mt-12">Next: both sides sign, then you fund escrow.</p>`,
    actions: [{ label: 'Cancel', variant: 'ghost' }, { label: 'Accept and create contract', variant: 'accent', onClick: async ({ button, close }) => {
      busy(button, true);
      try { const r = await post(`/api/bids/${a.dataset.accept}/accept`); close(); toast(`Contract ${r.contract_id} created. Sign the engagement letter next.`, { title: 'Bid accepted' }); setTimeout(() => (location.href = `/client/contract.html?id=${r.contract_id}`), 700); }
      catch (err) { busy(button, false); toastError(err); }
      return false;
    } }] });
  if (d) openDialog({ eyebrow: 'Decline bid', title: 'Decline this bid?', body: '<p>The student is notified and can bid on other briefs.</p>',
    actions: [{ label: 'Keep it', variant: 'ghost' }, { label: 'Decline', variant: 'danger', onClick: async () => { try { await post(`/api/bids/${d.dataset.decline}/decline`); toast('Bid declined.'); load(); } catch (err) { toastError(err); } } }] });
});
load();
