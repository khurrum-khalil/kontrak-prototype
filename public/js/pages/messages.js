// Messages: one thread per contract ID, so scope changes stay traceable. Shared by both roles.
import { boot } from '../chrome.js';
import { api, post } from '../api.js';
import { $, $$, esc, icon, qs, avatar, relTime, fmtDateTime, empty, errorBox, toastError } from '../ui.js';

const shell = document.body.dataset.shell;
await boot({ shell, title: 'Messages', eyebrow: 'Inbox' });
const base = shell === 'student' ? '/app' : '/client';
const view = $('#view');
view.innerHTML = `<div class="msg-layout">
  <section class="card card-flush thread-list" aria-label="Conversations"><div style="padding:14px 16px;border-bottom:1px solid var(--border-hairline)"><div class="input-icon">${icon('search', 14)}<label class="sr-only" for="t-q">Search conversations</label><input class="input input-sm" id="t-q" placeholder="Search conversations"></div></div><div id="threads"></div></section>
  <section class="card card-flush conv" id="conv" aria-label="Conversation">${empty('message-square', 'Choose a conversation', 'Every thread belongs to one contract.')}</section>
</div>`;

let threads = [], active = qs('contract'), poll;
async function loadThreads() {
  try {
    ({ threads } = await api('/api/messages/threads'));
    renderThreads();
    if (!active && threads[0]) active = threads[0].contract_id;
    if (active) openThread(active);
  } catch (e) { $('#threads').innerHTML = errorBox(e); }
}
function renderThreads() {
  const q = $('#t-q').value.toLowerCase();
  const list = threads.filter((t) => !q || `${t.other.name} ${t.other.org} ${t.title} ${t.contract_id}`.toLowerCase().includes(q));
  $('#threads').innerHTML = list.length ? list.map((t) => `<button class="thread" type="button" data-id="${t.contract_id}" aria-current="${t.contract_id === active}">
    ${avatar(t.other.name, { size: 'sm' })}<div class="grow"><div class="between"><span class="t-name">${esc(t.other.name)}</span><span class="xs faint">${esc(relTime(t.last_at))}</span></div>
    <div class="xs faint">${esc(t.contract_id)} · ${esc(t.other.org || '')}</div><div class="t-last">${esc(t.last || 'No messages yet')}</div></div>${t.unread ? `<span class="t-unread" aria-label="${t.unread} unread"></span>` : ''}</button>`).join('')
    : `<div class="empty small">No conversations yet. A thread opens with each contract.</div>`;
}
async function openThread(id) {
  active = id;
  history.replaceState(null, '', `?contract=${id}`);
  $$('.thread').forEach((b) => b.setAttribute('aria-current', b.dataset.id === id));
  const t = threads.find((x) => x.contract_id === id);
  if (!t) { $('#conv').innerHTML = empty('message-square', 'This conversation does not exist'); return; }
  $('#conv').innerHTML = `<div class="conv-head">${avatar(t.other.name, { verified: true })}<div class="grow"><div class="title">${esc(t.other.name)}</div><div class="small muted">${esc(t.other.org || '')} · ${esc(t.title || '')}</div></div>
    <span class="badge badge-navy">${esc(t.contract_id)}</span><a class="btn icon-btn" href="${base}/contract.html?id=${t.contract_id}" aria-label="Open contract" data-tip="Contract">${icon('file-signature', 17)}</a></div>
    <div class="conv-body" id="msgs" aria-live="polite"></div>
    <form class="conv-foot" id="composer"><label class="sr-only" for="m-body">Message</label><input class="input" id="m-body" name="body" autocomplete="off" maxlength="2000" placeholder="Write a message about ${esc(t.contract_id)}"><button class="btn" type="submit">Send ${icon('send', 15)}</button></form>`;
  await loadMessages();
  t.unread = 0; renderThreads();
  $('#composer').addEventListener('submit', async (e) => {
    e.preventDefault();
    const inp = $('#m-body'); const body = inp.value.trim(); if (!body) return;
    inp.value = '';
    try { await post('/api/messages', { contract_id: id, body }); await loadMessages(); t.last = body; t.last_at = new Date().toISOString(); renderThreads(); }
    catch (err) { inp.value = body; toastError(err); }
  });
  clearInterval(poll); poll = setInterval(loadMessages, 10000);
}
async function loadMessages() {
  const box = $('#msgs'); if (!box) return;
  try {
    const { messages } = await api(`/api/messages?contract_id=${encodeURIComponent(active)}`);
    const atBottom = box.scrollHeight - box.scrollTop - box.clientHeight < 40;
    box.innerHTML = messages.length ? messages.map((m) => `<div class="bubble ${m.mine ? 'me' : ''}"><div class="b">${esc(m.body)}</div><div class="at">${m.mine ? 'You' : esc(m.sender)} · ${esc(fmtDateTime(m.sent_at))}</div></div>`).join('')
      : '<div class="empty small">No messages yet. Agree scope changes here so they stay attached to the contract.</div>';
    if (atBottom || !box.dataset.ready) box.scrollTop = box.scrollHeight;
    box.dataset.ready = '1';
  } catch (e) { box.innerHTML = errorBox(e); }
}
$('#threads').addEventListener('click', (e) => { const b = e.target.closest('[data-id]'); if (b) openThread(b.dataset.id); });
$('#t-q').addEventListener('input', renderThreads);
loadThreads();
