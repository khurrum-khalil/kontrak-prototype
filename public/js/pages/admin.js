// Admin: one page, tabs over the Excel tables. Changes write straight back to /data/*.xlsx.
import { boot, setTopActions } from '../chrome.js';
import { api, post, put } from '../api.js';
import { $, esc, icon, euro, fmtDateTime, statusBadge, tabs, empty, errorBox, openDialog, formData, toast, toastError, busy } from '../ui.js';

const me = await boot({ shell: 'admin', title: 'Admin', eyebrow: 'Kontrak team' });
setTopActions(`<a class="btn btn-secondary btn-sm" href="/api/admin/waitlist.csv">${icon('download', 14)} Waitlist CSV</a><button class="btn btn-danger btn-sm" id="reset" type="button">${icon('rotate-ccw', 14)} Reset demo data</button>`);
const view = $('#view');
view.innerHTML = '<div id="a-tabs" class="admin-tabs"></div><div id="a-body"></div>';
const demoTag = (r) => (r.is_demo === true || r.is_demo === 'true' ? ' <span class="badge">Demo data</span>' : '');
const cell = (v) => esc(v === true ? 'yes' : v === false ? 'no' : v ?? '');

const TABS = [
  ['overview', 'Overview'], ['users', 'Users'], ['briefs', 'Briefs'], ['contracts', 'Contracts'], ['escrow', 'Escrow'],
  ['waitlist', 'Waitlist'], ['university_requests', 'University requests'], ['interview_notes', 'Interview notes'], ['config', 'Config'], ['audit_log', 'Audit log'],
];
tabs($('#a-tabs'), TABS.map(([value, label]) => ({ value, label })), 'overview', show);
show('overview');

async function show(tab) {
  const body = $('#a-body');
  body.innerHTML = '<div class="skeleton"></div>';
  try {
    if (tab === 'overview') return overview(body);
    if (tab === 'users') return users(body);
    if (tab === 'config') return config(body);
    if (tab === 'interview_notes') return interviews(body);
    const { rows } = await api(`/api/admin/table/${tab}`);
    const COLS = {
      briefs: ['id', 'title', 'client_id', 'fee_cents', 'scoped_hours', 'jurisdiction', 'deadline', 'status'],
      contracts: ['id', 'brief_id', 'student_id', 'client_id', 'fee_cents', 'platform_fee_cents', 'status', 'student_signed_at', 'client_signed_at'],
      escrow: ['id', 'contract_id', 'amount_cents', 'status', 'method', 'funded_at', 'released_at'],
      waitlist: ['id', 'email', 'role', 'city_or_university', 'source', 'consent', 'created_at'],
      university_requests: ['id', 'university', 'contact_name', 'contact_email', 'role', 'message', 'created_at'],
      audit_log: ['at', 'actor_id', 'action', 'entity', 'entity_id', 'detail'],
    }[tab];
    const fmt = (k, v) => (k.endsWith('_cents') ? euro(v) : k === 'status' ? statusBadge(v) : /_at$|^at$/.test(k) && v ? esc(fmtDateTime(v)) : cell(v));
    body.innerHTML = `<div class="card card-flush mt-16">${rows.length ? `<div class="table-wrap"><table class="table table-dense"><thead><tr>${COLS.map((c) => `<th>${esc(c)}</th>`).join('')}${tab === 'briefs' ? '<th></th>' : ''}</tr></thead><tbody>
      ${rows.map((r) => `<tr>${COLS.map((c, i) => `<td>${fmt(c, r[c])}${i === 0 ? demoTag(r) : ''}</td>`).join('')}${tab === 'briefs' ? `<td><select class="select select-sm" data-brief="${r.id}" aria-label="Status of ${esc(r.id)}">${['open', 'awarded', 'in_progress', 'completed', 'cancelled'].map((s) => `<option ${s === r.status ? 'selected' : ''}>${s}</option>`).join('')}</select></td>` : ''}</tr>`).join('')}
      </tbody></table></div>` : empty('inbox', 'No rows yet')}</div>
      <p class="xs faint mt-12">${rows.length} row(s) from the ${tab} sheet.${tab === 'waitlist' ? ' Use Waitlist CSV above to export.' : ''}</p>`;
    body.querySelectorAll('[data-brief]').forEach((s) => (s.onchange = async () => { try { await put(`/api/admin/briefs/${s.dataset.brief}`, { status: s.value }); toast(`${s.dataset.brief} set to ${s.value}.`); } catch (e) { toastError(e); } }));
  } catch (e) { body.innerHTML = errorBox(e); }
}

async function overview(body) {
  const o = await api('/api/admin/overview');
  const max = Math.max(1, ...o.funnel.map((f) => f[1]));
  const m = o.market;
  body.innerHTML = `
  <div class="grid-4 mt-16">
    <div class="stat"><span class="label">Students</span><span class="value">${o.counts.students}</span><span class="delta neutral">${o.counts.pending_users} account(s) pending</span></div>
    <div class="stat"><span class="label">Clients</span><span class="value">${o.counts.clients}</span><span class="delta neutral">${o.counts.pending_registers} register check(s) pending</span></div>
    <div class="stat"><span class="label">Open briefs</span><span class="value">${o.counts.open_briefs}</span><span class="delta neutral">${o.counts.bids} bids · ${o.counts.contracts} contracts</span></div>
    <div class="stat navy"><span class="label">In escrow</span><span class="value">${euro(o.counts.in_escrow_cents)}</span><span class="delta">Simulated</span></div>
  </div>
  <div class="split mt-16">
    <section class="card"><span class="label">Funnel · sign-up to compliant placement</span>
      <div class="stack mt-16" style="--gap:12px">${o.funnel.map(([l, n]) => `<div><div class="between small"><span>${esc(l)}</span><b class="num">${n}</b></div><div class="meter mt-4"><span style="width:${(n / max) * 100}%"></span></div></div>`).join('')}</div></section>
    <section class="card"><span class="label">Gate blocks (bids, hour logs, briefs)</span>
      <div class="rows small mt-12"><div><span>1 · Eligible?</span><b class="num">${o.gate_blocks[1]}</b></div><div><span>2 · Within the cap?</span><b class="num">${o.gate_blocks[2]}</b></div><div><span>3 · Above the floor?</span><b class="num">${o.gate_blocks[3]}</b></div></div>
      <p class="xs faint mt-12">Gate 1 mostly filters before anyone can bid, so its count stays low. Every block is in the audit log.</p>
      <div class="rows small mt-16"><div><span>Waitlist sign-ups</span><b>${o.counts.waitlist}</b></div><div><span>University requests</span><b>${o.counts.university_requests}</b></div><div><span>Day-Cap Checker runs</span><b>${o.counts.checker_runs}</b></div></div></section>
  </div>
  <section class="card mt-16"><div class="between"><span class="label">Our numbers · market logic</span><span class="badge badge-warning">Assumptions labelled</span></div>
    <div class="table-wrap mt-12"><table class="table table-dense"><tbody>
      <tr><td>Non-EU students in Germany</td><td class="num">${m.sourced.toLocaleString('en-GB')}</td><td><span class="badge badge-success">Sourced</span> DAAD / DZHW 2025</td></tr>
      <tr><td>Reachable through 3 university deals</td><td class="num">${m.reachable.toLocaleString('en-GB')}</td><td><span class="badge badge-warning">Assumption</span></td></tr>
      <tr><td>Sign up at ${m.signup_pct}%</td><td class="num">${m.signups}</td><td><span class="badge badge-warning">Assumption</span></td></tr>
      <tr><td>Active monthly at ${m.active_pct}%</td><td class="num">${m.active}</td><td><span class="badge badge-warning">Assumption</span></td></tr>
      <tr class="is-highlight"><td>Break-even</td><td class="num">${m.break_even_low} to ${m.break_even_high}</td><td>Active students per month</td></tr>
    </tbody></table></div></section>
  <section class="card mt-16"><span class="label">Recent audit events</span>
    <div class="table-wrap mt-12"><table class="table table-dense"><tbody>${o.recent.map((a) => `<tr><td class="nowrap small">${esc(fmtDateTime(a.at))}</td><td>${esc(a.action)}</td><td>${esc(a.entity_id)}</td><td class="small muted">${esc(String(a.detail).slice(0, 120))}</td></tr>`).join('')}</tbody></table></div></section>`;
}

async function users(body) {
  const [{ rows: us }, { rows: cs }, { rows: ss }] = await Promise.all([api('/api/admin/table/users'), api('/api/admin/table/clients'), api('/api/admin/table/students')]);
  const co = Object.fromEntries(cs.map((c) => [c.user_id, c])), st = Object.fromEntries(ss.map((s) => [s.user_id, s]));
  body.innerHTML = `<div class="card card-flush mt-16"><div class="table-wrap"><table class="table table-dense"><thead><tr><th>User</th><th>Role</th><th>Details</th><th>Status</th><th>Actions</th></tr></thead><tbody>
  ${us.map((u) => { const c = co[u.id], s = st[u.id]; return `<tr><td><b>${esc(u.first_name)} ${esc(u.last_name)}</b>${demoTag(u)}<div class="xs faint">${esc(u.id)} · ${esc(u.email)}</div></td><td>${esc(u.role)}</td>
    <td class="small">${s ? `${esc(s.university)}<br><span class="faint">${esc(s.permit_type)} · ${esc(s.work_rule)}</span>` : c ? `${esc(c.company_name)} · ${esc(c.register_number)}<br>${statusBadge(c.register_check)}` : ''}</td>
    <td>${statusBadge(u.status)}</td>
    <td class="nowrap">${u.id === me.user.id ? '<span class="xs faint">You</span>' : `${u.status !== 'verified' ? `<button class="btn btn-ghost btn-sm" data-user="${u.id}" data-status="verified">Verify</button>` : ''}${u.status !== 'suspended' ? `<button class="btn btn-ghost btn-sm" data-user="${u.id}" data-status="suspended">Suspend</button>` : `<button class="btn btn-ghost btn-sm" data-user="${u.id}" data-status="verified">Reinstate</button>`}
      ${c && c.register_check !== 'passed' ? `<button class="btn btn-ghost btn-sm" data-client="${u.id}" data-check="passed">Pass register</button>` : ''}${c && c.register_check !== 'failed' ? `<button class="btn btn-ghost btn-sm" data-client="${u.id}" data-check="failed">Fail register</button>` : ''}`}</td></tr>`; }).join('')}
  </tbody></table></div></div>`;
  body.onclick = async (e) => {
    const b = e.target.closest('[data-user],[data-client]'); if (!b) return;
    try {
      if (b.dataset.user) await put(`/api/admin/users/${b.dataset.user}`, { status: b.dataset.status });
      else await put(`/api/admin/clients/${b.dataset.client}`, { register_check: b.dataset.check });
      toast('Saved to kontrak_users.xlsx.'); users(body);
    } catch (err) { toastError(err); }
  };
}

async function config(body) {
  const { rows } = await api('/api/admin/table/config');
  body.innerHTML = `<div class="callout info mt-16">${icon('info')}<div>Every rule the platform enforces is read from this sheet. Changes take effect immediately. You can also edit <code>data/kontrak_config.xlsx</code> in Excel while the server runs; it reloads within two seconds of saving.</div></div>
  <div class="card card-flush mt-16"><div class="table-wrap"><table class="table table-dense"><thead><tr><th>Key</th><th>Value</th><th>Valid from</th><th>Note</th><th></th></tr></thead><tbody>
  ${rows.sort((a, b) => String(a.key).localeCompare(String(b.key))).map((r) => `<tr><td><code>${esc(r.key)}</code></td><td><input class="input input-sm" style="width:120px" value="${esc(r.value)}" data-v="${r.id}" aria-label="Value for ${esc(r.key)}"></td>
    <td><input class="input input-sm" type="date" style="width:150px" value="${esc(String(r.valid_from).slice(0, 10))}" data-f="${r.id}" aria-label="Valid from for ${esc(r.key)}"></td><td class="small muted">${esc(r.note)}</td>
    <td><button class="btn btn-secondary btn-sm" data-save="${r.id}">Save</button></td></tr>`).join('')}</tbody></table></div></div>`;
  body.onclick = async (e) => {
    const b = e.target.closest('[data-save]'); if (!b) return;
    const id = b.dataset.save;
    busy(b, true);
    try { await put(`/api/admin/config/${id}`, { value: body.querySelector(`[data-v="${id}"]`).value, valid_from: body.querySelector(`[data-f="${id}"]`).value }); toast('Rule saved. The platform uses it from now on.'); }
    catch (err) { toastError(err); }
    finally { busy(b, false); }
  };
}

async function interviews(body) {
  const { rows } = await api('/api/admin/table/interview_notes');
  body.innerHTML = `<div class="split mt-16">
    <div class="card card-flush">${rows.length ? `<div class="table-wrap"><table class="table table-dense"><thead><tr><th>Date</th><th>Interviewee</th><th>Key quote</th><th>Insight</th></tr></thead><tbody>${rows.map((r) => `<tr><td class="nowrap">${esc(r.date)}</td><td>${esc(r.interviewee_type)}</td><td class="small">“${esc(r.key_quote)}”</td><td class="small">${esc(r.insight)}</td></tr>`).join('')}</tbody></table></div>`
      : empty('book-open', 'No interviews recorded yet', 'The pitch lists two or more user interviews as the next step. Record each one here.')}</div>
    <form class="card form-stack" id="iv" novalidate><span class="label">Add interview note · admin only</span>
      <div class="form-grid"><div class="field"><label for="iv-t">Interviewee</label><select class="select" id="iv-t" name="interviewee_type"><option>student</option><option>client</option><option>university</option><option>authority</option><option>other</option></select></div>
        <div class="field"><label for="iv-d">Date</label><input class="input" id="iv-d" name="date" type="date" value="${me.today}"></div></div>
      <div class="field"><label for="iv-q">Key quote</label><textarea class="textarea" id="iv-q" name="key_quote" rows="2"></textarea></div>
      <div class="field"><label for="iv-i">Insight</label><textarea class="textarea" id="iv-i" name="insight" rows="3"></textarea></div>
      <button class="btn" type="submit">Save note</button></form></div>`;
  $('#iv').onsubmit = async (e) => {
    e.preventDefault();
    try { await post('/api/admin/interview-notes', formData(e.currentTarget)); toast('Interview note saved.'); interviews(body); } catch (err) { toastError(err); }
  };
}

$('#reset').onclick = () => openDialog({ eyebrow: 'Admin', title: 'Reset all demo data?',
  body: '<p>This wipes every workbook in <code>/data</code> and restores the seed data. All sign-ups, bids, contracts and waitlist entries made since are deleted. This can\'t be undone, and you will be logged out.</p>',
  actions: [{ label: 'Cancel', variant: 'ghost' }, { label: 'Reset demo data', variant: 'danger', onClick: async ({ button }) => {
    busy(button, true);
    try { await post('/api/admin/reset'); location.href = '/login.html?out=1'; } catch (err) { busy(button, false); toastError(err); }
    return false;
  } }] });
