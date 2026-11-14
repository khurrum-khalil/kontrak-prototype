import { boot } from '../chrome.js';
import { api } from '../api.js';
import { $, esc, qs, briefCard, tabs, empty, errorBox } from '../ui.js';

const me = await boot({ shell: 'site' });
if (me?.user?.role === 'student') {
  // Students get the matched feed with their own gates inside the app.
  location.replace('/app/briefs.html' + location.search);
}

const form = $('#filters');
const state = { tab: 'all', areas: new Set(), remHalf: qs('remHalf') ?? '', remWeek: qs('remWeek') ?? '' };
if (qs('fits') === '1') form.fits.checked = true;
if (qs('q')) form.q.value = qs('q');
if (state.remHalf !== '' || state.remWeek !== '') {
  const n = $('#fits-note');
  n.hidden = false;
  n.textContent = `Using your Day-Cap Checker result: ${state.remHalf !== '' ? Number(state.remHalf) / 2 + ' days' : 'no day account'} and ${state.remWeek !== '' ? state.remWeek + ' h this week' : 'no weekly cap'} left.`;
}
tabs($('#f-tabs'), [{ value: 'all', label: 'All open' }, { value: 'today', label: 'Posted today' }], 'all', (v) => { state.tab = v; load(); });

let timer;
async function load() {
  const p = new URLSearchParams({ q: form.q.value, jurisdiction: form.jurisdiction.value, mode: form.mode.value, sort: form.sort.value, areas: [...state.areas].join(','), fits: form.fits.checked ? '1' : '', remHalf: state.remHalf, remWeek: state.remWeek, today: state.tab === 'today' ? '1' : '' });
  const out = $('#results');
  try {
    const r = await api('/api/briefs?' + p);
    if (!$('#f-areas').children.length) {
      $('#f-areas').innerHTML = r.areas.map((a) => `<button type="button" class="tag" aria-pressed="false" data-area="${esc(a)}">${esc(a)}</button>`).join('');
    }
    $('#f-count').textContent = `${r.briefs.length} brief${r.briefs.length === 1 ? '' : 's'}`;
    out.innerHTML = r.briefs.length ? r.briefs.map((b) => briefCard(b)).join('')
      : `<div style="grid-column:1/-1">${empty('search', 'No briefs match these filters', 'Clear a filter or switch off "Fits my remaining days" to see more.')}</div>`;
  } catch (e) { out.innerHTML = `<div style="grid-column:1/-1">${errorBox(e)}</div>`; }
}
form.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(load, 250); });
form.addEventListener('submit', (e) => { e.preventDefault(); load(); });
$('#f-areas').addEventListener('click', (e) => {
  const b = e.target.closest('[data-area]'); if (!b) return;
  const on = b.getAttribute('aria-pressed') !== 'true';
  b.setAttribute('aria-pressed', on);
  on ? state.areas.add(b.dataset.area) : state.areas.delete(b.dataset.area);
  load();
});
load();
