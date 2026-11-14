import { boot, setTopActions } from '../chrome.js';
import { api, put } from '../api.js';
import { $, esc, icon, euro, euro2, hrs, fmtDate, statusBadge, dayCapBadge, empty, errorBox, openDialog, toast, toastError, tabs } from '../ui.js';

await boot({ shell: 'client', title: 'My briefs', eyebrow: 'Briefs' });
setTopActions(`<a class="btn btn-accent btn-sm" href="/client/post-brief.html">${icon('plus', 14)} Post a brief</a>`);
const view = $('#view');
view.innerHTML = '<div id="t"></div><div class="card card-flush" id="list"></div>';
let briefs = [];
const groups = { all: () => true, open: (b) => b.status === 'open', active: (b) => ['awarded', 'in_progress'].includes(b.status), done: (b) => ['completed', 'cancelled'].includes(b.status) };

function render(v) {
  const rows = briefs.filter(groups[v]);
  $('#list').innerHTML = rows.length ? `<div class="table-wrap"><table class="table"><thead><tr><th>Brief</th><th>Status</th><th class="num">Fee</th><th class="num">Rate</th><th>Deadline</th><th class="num">Bids</th><th></th></tr></thead><tbody>
  ${rows.map((b) => `<tr><td><a class="title" style="font-size:14px" href="/brief.html?id=${b.id}">${esc(b.title)}</a><div class="row mt-4" style="--gap:6px"><span class="xs faint">${esc(b.id)} · ${hrs(b.scoped_hours)}</span>${b.day_cap_safe && b.status === 'open' ? dayCapBadge() : ''}</div></td>
    <td>${statusBadge(b.status)}</td><td class="num">${euro(b.fee_cents)}</td><td class="num">${euro2(b.effective_hourly_cents)}</td><td class="small nowrap">${esc(fmtDate(b.deadline))}</td>
    <td class="num">${b.bids_count}${b.bids_total > b.bids_count ? `<span class="xs faint"> / ${b.bids_total}</span>` : ''}</td>
    <td class="right nowrap">${b.contract ? `<a class="btn btn-ghost btn-sm" href="/client/contract.html?id=${b.contract}">Contract</a>` : `<a class="btn btn-ghost btn-sm" href="/client/bids.html?brief=${b.id}">Bids</a>`}${b.status === 'open' ? `<button class="btn btn-ghost btn-sm" data-cancel="${b.id}">Cancel</button>` : ''}</td></tr>`).join('')}</tbody></table></div>`
    : empty('briefcase', 'No briefs here', 'Post a brief to start receiving bids from verified students.', '<a class="btn btn-sm" href="/client/post-brief.html">Post a brief</a>');
}
async function load() {
  try {
    ({ briefs } = await api('/api/client/briefs'));
    tabs($('#t'), [{ value: 'all', label: 'All', count: briefs.length }, { value: 'open', label: 'Open', count: briefs.filter(groups.open).length }, { value: 'active', label: 'In progress', count: briefs.filter(groups.active).length }, { value: 'done', label: 'Closed', count: briefs.filter(groups.done).length }], 'all', render);
    render('all');
  } catch (e) { view.innerHTML = errorBox(e); }
}
view.addEventListener('click', (e) => {
  const b = e.target.closest('[data-cancel]'); if (!b) return;
  openDialog({ eyebrow: 'Brief', title: 'Cancel this brief?', body: '<p>Open bids are declined and students are notified. A cancelled brief can\'t be reopened.</p>',
    actions: [{ label: 'Keep it open', variant: 'ghost' }, { label: 'Cancel brief', variant: 'danger', onClick: async () => { try { await put(`/api/client/briefs/${b.dataset.cancel}/cancel`); toast('Brief cancelled.'); load(); } catch (err) { toastError(err); } } }] });
});
load();
