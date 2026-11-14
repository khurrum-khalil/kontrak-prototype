// Shared UI helpers: escaping, formatting, icons, toast, dialog, tabs, stepper, cards.
import { euro as euroFmt } from './compliance-client.js';

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
export const qs = (k) => new URLSearchParams(location.search).get(k);

export const icon = (name, size = 18, extra = '') => `<span class="ico ${extra}" aria-hidden="true" style="--i:url(/assets/icons/${name}.svg);--s:${size}px"></span>`;
export const euro = (c, o) => euroFmt(c, o);
export const euro2 = (c) => euroFmt(c, { decimals: 2 });
export const hrs = (h) => `${Math.round(Number(h) * 100) / 100} h`;
export const days = (n) => `${Math.round(Number(n) * 10) / 10}`;

const dt = (iso) => new Date(String(iso).length <= 10 ? `${iso}T12:00:00` : iso);
export const fmtDate = (iso, opts = {}) => (iso ? dt(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: opts.year === false ? undefined : 'numeric' }) : '');
export const fmtDateTime = (iso) => (iso ? dt(iso).toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }) : '');
export function relTime(iso) {
  if (!iso) return '';
  const s = (Date.now() - dt(iso).getTime()) / 1000;
  if (s < 60) return 'Just now';
  if (s < 3600) return `${Math.floor(s / 60)} min ago`;
  if (s < 86400) return `${Math.floor(s / 3600)} h ago`;
  if (s < 172800) return 'Yesterday';
  if (s < 604800) return `${Math.floor(s / 86400)} days ago`;
  return fmtDate(iso);
}
export function dueIn(iso, today) {
  if (!iso) return '';
  const d = Math.round((dt(iso) - dt(today || new Date().toISOString().slice(0, 10))) / 864e5);
  if (d < 0) return `Due ${fmtDate(iso, { year: false })} · passed`;
  if (d === 0) return 'Due today';
  if (d === 1) return 'Due tomorrow';
  return `Due ${fmtDate(iso, { year: false })} · ${d} days`;
}
export const initials = (name) => String(name || '?').split(/\s+/).filter((w) => /^[\p{L}\d]/u.test(w)).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
export const avatar = (name, { verified = false, size = '' } = {}) => `<span class="avatar ${size ? 'avatar-' + size : ''} ${verified ? 'verified' : ''}" aria-hidden="true">${esc(initials(name))}</span>`;

// ── Status badges ───────────────────────────────────────────
const STATUS = {
  open: ['Open', 'success'], awarded: ['Awarded', 'navy'], in_progress: ['In progress', 'navy'], completed: ['Completed', ''], cancelled: ['Cancelled', 'danger'],
  submitted: ['Submitted', 'navy'], accepted: ['Accepted', 'success'], declined: ['Declined', ''], withdrawn: ['Withdrawn', ''],
  awaiting_signatures: ['Awaiting signatures', 'warning'], signed: ['Signed', 'navy'], delivered: ['Delivered', 'gold'], signed_off: ['Signed off', 'success'], closed: ['Closed', ''], disputed: ['Disputed', 'danger'],
  awaiting_funding: ['Awaiting funding', 'warning'], funded: ['Escrow funded', 'success'], release_requested: ['Release requested', 'gold'], released: ['Released', 'success'], refunded: ['Refunded', ''],
  pending: ['Pending', 'warning'], verified: ['Verified', 'success'], suspended: ['Suspended', 'danger'], passed: ['Register check passed', 'success'], failed: ['Register check failed', 'danger'],
};
export const statusBadge = (s, label) => { const [l, t] = STATUS[s] || [s, '']; return `<span class="badge ${t ? 'badge-' + t : ''} dot">${esc(label || l)}</span>`; };
export const dayCapBadge = () => `<span class="badge badge-gold">${icon('shield-check', 12)} Day-Cap Safe</span>`;

// ── Stepper ─────────────────────────────────────────────────
export const STEPS = ['Scope', 'Bid accepted', 'Contract signed', 'Escrow released'];
export function stepper(current, steps = STEPS) {
  return `<ol class="stepper" aria-label="Progress">${steps.map((label, i) => {
    const cls = i < current ? 'done' : i === current ? 'on' : '';
    const sep = i < steps.length - 1 ? '<span class="sep" aria-hidden="true"></span>' : '';
    return `<li class="${cls}" ${i === current ? 'aria-current="step"' : ''}><span class="dot">${i < current ? '✓' : i + 1}</span><span class="label-text">${esc(label)}</span><span class="sr-only">${i < current ? '(done)' : i === current ? '(current)' : ''}</span></li>${sep}`;
  }).join('')}</ol>`;
}

// ── Meter ───────────────────────────────────────────────────
export function meter(pct, tone = '') {
  const p = Math.max(0, Math.min(100, pct));
  const t = tone || (p >= 95 ? 'danger' : p >= 80 ? 'warn' : '');
  return `<div class="meter ${t}" role="presentation"><span style="width:${p}%"></span></div>`;
}

// ── Brief card ──────────────────────────────────────────────
export function briefCard(b, { href = `/brief.html?id=${b.id}`, saveable = false, showReason = true } = {}) {
  const blocked = b.fit && !b.fit.eligible;
  const rate = euro2(b.effective_hourly_cents);
  return `<article class="brief-card ${blocked ? 'is-blocked' : ''}">
  <div class="bc-top">
    <div class="bc-who">${avatar(b.client?.company_name, { verified: b.client?.verified })}
      <div><h3 class="bc-title"><a href="${href}">${esc(b.title)}</a></h3>
      <div class="bc-meta">${esc(b.client?.company_name || '')} · ${esc(b.location_mode)}${b.city ? ' · ' + esc(b.city) : ''}</div></div>
    </div>
    ${b.day_cap_safe && !blocked ? dayCapBadge() : b.jurisdiction !== 'Germany' ? `<span class="badge">${esc(b.jurisdiction)} · not live</span>` : ''}
  </div>
  <div class="tags">${b.practice_areas.map((a) => `<span class="tag">${esc(a)}</span>`).join('')}</div>
  ${blocked && showReason ? `<div class="bc-reason">${icon('ban', 15)}<span>${esc(b.fit.eligibleReason)}</span></div>` : ''}
  ${!blocked && b.fit && !b.fit.fits && showReason ? `<div class="bc-reason" style="color:var(--warning)">${icon('triangle-alert', 15)}<span>Over your remaining days or weekly hours at the scoped size.</span></div>` : ''}
  <div class="bc-foot">
    <span class="bc-fee">${euro(b.fee_cents)} <small>· ${hrs(b.scoped_hours)} · ${rate}/h</small></span>
    <span class="row" style="--gap:10px"><span class="small faint">${esc(dueIn(b.deadline))}</span>
    ${saveable ? `<button class="btn btn-ghost btn-sm bc-save" type="button" data-save="${b.id}" aria-pressed="${b.saved ? 'true' : 'false'}" aria-label="${b.saved ? 'Remove from saved' : 'Save brief'}">${icon('bookmark', 15)}${b.saved ? 'Saved' : 'Save'}</button>` : ''}</span>
  </div>
</article>`;
}

// ── Gates ───────────────────────────────────────────────────
export function gatesHtml(gates, flags = []) {
  return `<div class="gates" aria-live="polite">${gates.map((g) => `<div class="gate ${g.passed ? 'pass' : 'fail'}">
    <span class="gate-ico">${icon(g.passed ? 'check' : 'x', 15)}</span>
    <div><div class="gate-name">${g.id} · ${esc(g.name)} <span class="sr-only">${g.passed ? 'passed' : 'blocked'}</span></div><div class="gate-reason">${esc(g.reason)}</div></div></div>`).join('')}
    ${flags.map((f) => `<div class="gate flag"><span class="gate-ico">${icon('info', 15)}</span><div><div class="gate-name">Note · not a block</div><div class="gate-reason">${esc(f.text)}</div></div></div>`).join('')}</div>`;
}

// ── Toast ───────────────────────────────────────────────────
export function toast(text, { title = '', tone = 'ok', ms = 5200 } = {}) {
  let wrap = $('.toasts');
  if (!wrap) { wrap = document.createElement('div'); wrap.className = 'toasts'; wrap.setAttribute('aria-live', 'polite'); wrap.setAttribute('role', 'status'); document.body.appendChild(wrap); }
  const el = document.createElement('div');
  el.className = `toast ${tone === 'error' ? 'error' : ''}`;
  el.innerHTML = `${icon(tone === 'error' ? 'circle-alert' : 'circle-check', 18)}<div>${title ? `<strong>${esc(title)}</strong>` : ''}${esc(text)}</div><button class="toast-x" type="button" aria-label="Dismiss">×</button>`;
  el.querySelector('.toast-x').onclick = () => el.remove();
  wrap.appendChild(el);
  setTimeout(() => el.remove(), ms);
}
export const toastError = (e) => toast(e?.message || String(e), { tone: 'error', title: 'Not done' });

// ── Dialog (native <dialog>: focus trap and Escape for free) ──
export function openDialog({ eyebrow = '', title, body, actions = [], wide = false, onOpen }) {
  const d = document.createElement('dialog');
  d.className = `dialog ${wide ? 'dialog-wide' : ''}`;
  const tid = 'dlg-' + Math.random().toString(36).slice(2, 8);
  d.setAttribute('aria-labelledby', tid);
  d.innerHTML = `<div class="dialog-head">${eyebrow ? `<div class="label">${esc(eyebrow)}</div>` : ''}<h2 id="${tid}">${esc(title)}</h2></div>
  <div class="dialog-body">${body}</div>
  <div class="dialog-foot"></div>
  <button class="dialog-close" type="button" aria-label="Close">×</button>`;
  const foot = d.querySelector('.dialog-foot');
  const close = () => { d.close(); d.remove(); };
  for (const a of actions) {
    const b = document.createElement('button');
    b.type = 'button'; b.className = `btn ${a.variant ? 'btn-' + a.variant : ''}`; b.textContent = a.label;
    if (a.id) b.id = a.id;
    b.onclick = async () => { if (a.onClick) { const r = await a.onClick({ close, dialog: d, button: b }); if (r === false) return; } if (a.close !== false) close(); };
    foot.appendChild(b);
  }
  d.querySelector('.dialog-close').onclick = close;
  d.addEventListener('cancel', (e) => { e.preventDefault(); close(); });
  document.body.appendChild(d);
  d.showModal();
  onOpen && onOpen(d, close);
  return { dialog: d, close };
}

// ── Tabs (roving aria-selected buttons) ─────────────────────
export function tabs(el, items, value, onChange) {
  el.className = 'tabs'; el.setAttribute('role', 'tablist');
  el.innerHTML = items.map((t) => `<button class="tab" role="tab" type="button" data-v="${esc(t.value)}" aria-selected="${t.value === value}">${esc(t.label)}${t.count != null ? `<span class="count">${t.count}</span>` : ''}</button>`).join('');
  el.onclick = (e) => { const b = e.target.closest('[data-v]'); if (!b) return; $$('.tab', el).forEach((x) => x.setAttribute('aria-selected', x === b)); onChange(b.dataset.v); };
  el.onkeydown = (e) => {
    if (!['ArrowRight', 'ArrowLeft'].includes(e.key)) return;
    const all = $$('.tab', el); const i = all.indexOf(document.activeElement);
    const n = all[(i + (e.key === 'ArrowRight' ? 1 : -1) + all.length) % all.length]; n.focus(); n.click();
  };
}

// ── Forms ───────────────────────────────────────────────────
export function formData(form) {
  const o = {};
  for (const el of form.elements) {
    if (!el.name || el.disabled) continue;
    if (el.type === 'checkbox') { if (el.dataset.multi) { (o[el.name] ||= []); if (el.checked) o[el.name].push(el.value); } else o[el.name] = el.checked; }
    else if (el.type === 'radio') { if (el.checked) o[el.name] = el.value; }
    else o[el.name] = el.value;
  }
  return o;
}
export function busy(btn, on, label) {
  if (!btn) return;
  if (on) { btn.dataset.label = btn.innerHTML; btn.disabled = true; btn.setAttribute('aria-busy', 'true'); if (label) btn.textContent = label; }
  else { btn.disabled = false; btn.removeAttribute('aria-busy'); if (btn.dataset.label) btn.innerHTML = btn.dataset.label; }
}
export function showFormError(form, msg) {
  let box = form.querySelector('.form-error');
  if (!msg) { box?.remove(); return; }
  if (!box) { box = document.createElement('div'); box.className = 'form-error'; box.setAttribute('role', 'alert'); form.prepend(box); }
  box.textContent = msg;
  box.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}
export const empty = (ic, title, text = '', action = '') => `<div class="empty">${icon(ic, 24)}<div class="title">${esc(title)}</div>${text ? `<p class="small">${esc(text)}</p>` : ''}${action ? `<div class="mt-16">${action}</div>` : ''}</div>`;
export const loading = (text = 'Loading…') => `<div class="loading-row" role="status">${icon('hourglass', 16)} ${esc(text)}</div>`;
export const errorBox = (e) => `<div class="callout danger" role="alert">${icon('circle-alert')}<div>${esc(e?.message || e)}</div></div>`;
