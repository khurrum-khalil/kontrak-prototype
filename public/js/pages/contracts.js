// Contracts list, shared by students and clients.
import { boot } from '../chrome.js';
import { api } from '../api.js';
import { $, esc, euro, hrs, avatar, statusBadge, tabs, empty, errorBox, dueIn } from '../ui.js';

const shell = document.body.dataset.shell;
const me = await boot({ shell, title: 'Contracts', eyebrow: 'Engagements' });
const base = shell === 'student' ? '/app' : '/client';
const view = $('#view');
view.innerHTML = '<div id="c-tabs"></div><div class="card card-flush" id="c-list"></div>';
const GROUPS = { action: ['awaiting_signatures', 'signed', 'delivered'], active: ['awaiting_signatures', 'signed', 'in_progress', 'delivered'], done: ['signed_off', 'closed'] };

try {
  const { contracts } = await api('/api/contracts');
  const needsMe = (c) => (c.status === 'awaiting_signatures' && !(shell === 'student' ? c.student_signed_at : c.client_signed_at))
    || (shell === 'client' && ((c.status === 'signed' && c.escrow?.status === 'awaiting_funding') || c.escrow?.status === 'release_requested'));
  const list = (v) => (v === 'all' ? contracts : v === 'action' ? contracts.filter(needsMe) : contracts.filter((c) => GROUPS[v].includes(c.status)));
  const render = (v) => {
    const rows = list(v);
    $('#c-list').innerHTML = rows.length ? `<div class="table-wrap"><table class="table"><thead><tr><th>Contract</th><th>${shell === 'student' ? 'Client' : 'Student'}</th><th>Status</th><th>Escrow</th><th class="num">Fee</th><th class="num">Hours</th></tr></thead><tbody>
    ${rows.map((c) => { const who = shell === 'student' ? c.client.company : c.student.name; return `<tr>
      <td><a class="title" style="font-size:14px" href="${base}/contract.html?id=${c.id}">${esc(c.brief?.title)}</a><div class="xs faint mt-4">${esc(c.id)} · ${esc(dueIn(c.deadline, me.today))}${needsMe(c) ? ' · <span class="gold-text">Your action</span>' : ''}</div></td>
      <td><span class="row" style="flex-wrap:nowrap">${avatar(who, { size: 'sm' })}${esc(who)}</span></td>
      <td>${statusBadge(c.status)}</td><td>${c.escrow ? statusBadge(c.escrow.status) : ''}</td>
      <td class="num">${euro(c.fee_cents)}</td><td class="num">${hrs(c.logged_hours)} / ${hrs(c.scoped_hours)}</td></tr>`; }).join('')}</tbody></table></div>`
      : empty('file-signature', 'No contracts here', shell === 'student' ? 'When a client accepts your bid, Kontrak generates the engagement letter and it appears here.' : 'Accept a bid to create a contract and its escrow record.');
  };
  const items = [{ value: 'all', label: 'All', count: contracts.length }, { value: 'action', label: 'Needs your action', count: contracts.filter(needsMe).length }, { value: 'active', label: 'Active', count: list('active').length }, { value: 'done', label: 'Completed', count: list('done').length }];
  tabs($('#c-tabs'), items, 'all', render);
  render('all');
} catch (e) { view.innerHTML = errorBox(e); }
