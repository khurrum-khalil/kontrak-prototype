// Contract detail, shared by students (/app/contract.html) and clients (/client/contract.html).
// Everything hangs off one contract ID: letter, signatures, escrow, hour log, messages.
import { boot, updateMeters, setTitle, setTopActions } from '../chrome.js';
import { api, post } from '../api.js';
import * as C from '../compliance-client.js';
import { $, esc, icon, qs, euro, euro2, hrs, fmtDate, fmtDateTime, avatar, stepper, statusBadge, errorBox, openDialog, formData, toast, toastError, busy } from '../ui.js';

const shell = document.body.dataset.shell;
const me = await boot({ shell, title: 'Contract', eyebrow: 'Engagement' });
const isStudent = shell === 'student';
const base = isStudent ? '/app' : '/client';
const id = qs('id');
const view = $('#view');
const css = document.createElement('link'); css.rel = 'stylesheet'; css.href = '/css/letter.css'; document.head.appendChild(css);

async function load() {
  try { render(await api(`/api/contracts/${encodeURIComponent(id || '')}`)); }
  catch (e) { view.innerHTML = errorBox(e) + `<a class="btn btn-secondary mt-16" href="${base}/contracts.html">All contracts</a>`; }
}

function render(c) {
  setTitle(c.brief?.title || c.id);
  setTopActions(`<a class="btn btn-secondary btn-sm" href="/api/contracts/${c.id}/letter" target="_blank" rel="noopener">${icon('download', 14)} PDF</a>`);
  const other = isStudent ? { name: c.client.name, org: c.client.company, role: c.client.role, verified: c.client.verified } : { name: c.student.name, org: c.student.university, role: 'Student employee', verified: true };
  const mySig = isStudent ? c.student_signed_at : c.client_signed_at;
  const e = c.escrow || {};
  const pctLogged = c.scoped_hours ? Math.min(100, (c.logged_hours / c.scoped_hours) * 100) : 0;

  view.innerHTML = `
  <div class="split-wide">
    <div class="stack" style="--gap:20px">
      <section class="card" aria-labelledby="c-title">
        <div class="between" style="align-items:flex-start">
          <div><span class="label">Engagement letter · ${esc(c.id)}</span>
            <h2 class="h3 mt-8" id="c-title">${esc(c.brief?.title)}</h2>
            <div class="row mt-8">${statusBadge(c.status)}${e.status ? statusBadge(e.status) : ''}${c.client_signed_at && c.student_signed_at ? `<span class="badge badge-navy">Signed ${esc(fmtDate(c.student_signed_at > c.client_signed_at ? c.student_signed_at : c.client_signed_at))}</span>` : ''}</div></div>
        </div>
        <div class="mt-24">${stepper(c.step)}</div>
        <hr class="divider">
        <div class="kv">
          <div><div class="k">Fee</div><div class="v num">${euro(c.fee_cents)} fixed</div></div>
          <div><div class="k">Hours logged</div><div class="v num">${hrs(c.logged_hours)} of ${hrs(c.scoped_hours)}</div></div>
          <div><div class="k">Effective rate</div><div class="v num">${euro2(c.effective_hourly_cents)} / h</div></div>
          <div><div class="k">Deadline</div><div class="v">${esc(fmtDate(c.deadline))}</div></div>
          <div><div class="k">Jurisdiction</div><div class="v">${esc(c.brief?.jurisdiction)}</div></div>
          <div><div class="k">Governing law</div><div class="v">${esc(c.governing_law)}</div></div>
        </div>
      </section>

      ${c.status === 'awaiting_signatures' ? `<section class="card" aria-labelledby="sign-h">
        <span class="label">Signatures · simulated e-signature</span><h2 class="title mt-8" id="sign-h">${mySig ? 'You have signed' : 'Your signature is needed'}</h2>
        <div class="rows mt-12 small">
          <div><span>${esc(c.client.company)} · ${esc(c.client.name)}</span>${c.client_signed_at ? `<span class="row" style="--gap:6px">${icon('circle-check', 15)} Signed ${esc(fmtDateTime(c.client_signed_at))}</span>` : '<span class="muted">Awaiting signature</span>'}</div>
          <div><span>${esc(c.student.name)} · student employee</span>${c.student_signed_at ? `<span class="row" style="--gap:6px">${icon('circle-check', 15)} Signed ${esc(fmtDateTime(c.student_signed_at))}</span>` : '<span class="muted">Awaiting signature</span>'}</div>
        </div>
        ${mySig ? '' : `<form id="sign-form" class="form-stack mt-16" novalidate>
          <div class="field"><label for="sig-name">Type your full name to sign</label><input class="input" id="sig-name" name="full_name" autocomplete="name" placeholder="${esc(me.user.first_name + ' ' + me.user.last_name)}" style="font:300 22px var(--font-serif)"></div>
          <label class="check"><input type="checkbox" name="consent"><span>I have read the engagement letter below and agree to it. I understand this prototype records my name and a timestamp as a simulated electronic signature.</span></label>
          <button class="btn btn-accent" type="submit">${icon('file-signature', 16)} Sign engagement letter</button>
        </form>`}
      </section>` : ''}

      <details class="card card-flush" ${c.status === 'awaiting_signatures' ? 'open' : ''}>
        <summary class="between" style="padding:20px 24px;cursor:pointer"><span class="title">${icon('file-text', 17)} Engagement letter</span><span class="small muted">Under German law · template</span></summary>
        <div class="letter" style="border-top:1px solid var(--border-hairline)">${c.letter_html || '<p>Letter not generated yet.</p>'}</div>
      </details>

      <section class="card" aria-labelledby="log-h">
        <div class="between"><h2 class="label" id="log-h">Time log</h2><span class="small muted">${hrs(c.logged_hours)} of ${hrs(c.scoped_hours)}</span></div>
        <div class="meter mt-12">${`<span style="width:${pctLogged}%"></span>`}</div>
        <div class="mt-12">${c.hours.length ? c.hours.map((h) => `<div class="time-row"><span class="small faint">${esc(fmtDate(h.work_date, { year: false }))}</span><span>${esc(h.note)}</span><span class="badge tr-type">${esc(h.day_type)} day</span><span class="num">${hrs(h.hours)}</span></div>`).join('') : `<p class="small muted">No hours logged yet.${isStudent && c.status === 'in_progress' ? ' Add your first entry below.' : ''}</p>`}</div>
        ${isStudent && c.status === 'in_progress' ? `<form id="log-form" class="mt-16" novalidate>
          <div class="form-grid" style="grid-template-columns:150px 110px 1fr auto;align-items:end">
            <div class="field"><label for="lg-date">Date</label><input class="input" id="lg-date" name="work_date" type="date" value="${me.today}" max="${me.today}" min="${me.today.slice(0, 4)}-01-01"></div>
            <div class="field"><label for="lg-h">Hours</label><input class="input" id="lg-h" name="hours" type="number" min="0.25" max="10" step="0.25" value="3"></div>
            <div class="field"><label for="lg-note">What you did</label><input class="input" id="lg-note" name="note" maxlength="200" placeholder="First-pass mark-up"></div>
            <button class="btn" type="submit">${icon('plus', 15)} Log time</button>
          </div>
          <p class="small muted mt-8" id="log-preview" aria-live="polite"></p>
        </form>` : ''}
        ${!isStudent ? '<p class="xs faint mt-12">Hours are logged by the student against the same day account the counter reads from.</p>' : ''}
      </section>

      <section class="card card-sunken"><span class="label">Clause 3 · Scope of work</span><p class="body mt-12" style="line-height:1.75">${esc(c.brief?.scope_deliverable)}</p>
        ${c.delivery_note ? `<hr class="divider"><span class="label">Delivery note</span><p class="small mt-8">${esc(c.delivery_note)}</p>` : ''}</section>

      ${['signed_off', 'closed'].includes(c.status) ? `<section class="card"><span class="label">Reviews</span>
        ${c.reviews.length ? c.reviews.map((r) => `<div class="mt-12"><span class="row" style="--gap:2px" role="img" aria-label="${r.stars} of 5 stars"><span class="gold-text">${icon('star', 15).repeat(Number(r.stars))}</span><span class="faint">${icon('star', 15).repeat(5 - Number(r.stars))}</span></span><p class="small mt-4">${esc(r.text)}</p></div>`).join('') : '<p class="small muted mt-8">No reviews yet.</p>'}
        ${c.my_review ? '' : `<form id="review-form" class="form-stack mt-16" novalidate><div class="field"><label for="rv-stars">Your rating</label><select class="select" id="rv-stars" name="stars"><option value="5">5 · excellent</option><option value="4">4 · good</option><option value="3">3 · acceptable</option><option value="2">2 · below expectations</option><option value="1">1 · poor</option></select></div>
          <div class="field"><label for="rv-text">Review</label><textarea class="textarea" id="rv-text" name="text" rows="2" placeholder="What went well, in one or two sentences."></textarea></div><button class="btn btn-secondary" type="submit">Leave review</button></form>`}</section>` : ''}
    </div>

    <aside class="stack" style="--gap:16px;position:sticky;top:120px">
      <section class="card" aria-labelledby="esc-h">
        <span class="label" id="esc-h">Escrow · simulated</span>
        <div class="num mt-12" style="font-size:36px">${euro(e.amount_cents || c.fee_cents)}</div>
        <p class="small muted mt-8">${escrowLine(c)}</p>
        <div class="rows small mt-16">
          <div><span class="muted">Kontrak fee (${c.fees.pct}%)</span><b>${euro2(c.fees.feeCents)}</b></div>
          <div><span class="muted">Student receives</span><b class="num">${euro2(c.fees.netCents)}</b></div>
        </div>
        ${!['signed_off', 'closed'].includes(c.status) ? `<p class="xs faint mt-8">${c.fees.pct === 0 ? 'First job: no Kontrak fee.' : `5% from the second job${c.boost ? ', plus 3% boost' : ''}.`} Recalculated at release.</p>` : ''}
        <div class="mt-16">${escrowAction(c)}</div>
      </section>
      <section class="card card-sm"><span class="label">${isStudent ? 'Client' : 'Student'}</span>
        <div class="row mt-12" style="flex-wrap:nowrap">${avatar(other.name, { verified: other.verified })}<div><div class="title">${esc(other.name)}</div><div class="small muted">${esc(other.org || '')}${other.role ? ' · ' + esc(other.role) : ''}</div></div></div>
        <a class="btn btn-secondary btn-sm btn-block mt-16" href="${base}/messages.html?contract=${c.id}">${icon('message-square', 14)} Message${c.unread ? ` · ${c.unread} new` : ''}</a>
      </section>
      ${isStudent && c.state ? `<section class="card card-sm"><span class="label">Your limits today</span><div class="rows small mt-8">
        ${c.state.appliesDays ? `<div><span class="muted">Day account</span><b>${c.state.remainingDays} of ${c.state.caps.fullDays} days left</b></div>` : ''}
        ${c.state.appliesWeekly ? `<div><span class="muted">This week</span><b>${c.state.remainingWeekly} h left of ${c.state.caps.weekly} h</b></div>` : ''}
        ${!c.state.appliesDays && !c.state.appliesWeekly ? '<div><span class="muted">No day account or weekly cap applies.</span></div>' : ''}</div></section>` : ''}
    </aside>
  </div>`;
  wire(c);
}

function escrowLine(c) {
  const e = c.escrow || {};
  return {
    awaiting_funding: c.status === 'awaiting_signatures' ? 'Funded by the client once both sides have signed.' : 'Both sides signed. Waiting for the client to fund escrow.',
    funded: `Held since ${fmtDate(e.funded_at)} · ${esc(e.method || '')} · releases on client sign-off.`,
    release_requested: `Release requested ${fmtDate(e.release_requested_at)}. Waiting for the client to sign off.`,
    released: `Released ${fmtDate(e.released_at)} · payout simulated.`,
    refunded: 'Refunded to the client.',
  }[e.status] || '';
}
function escrowAction(c) {
  const e = c.escrow || {};
  if (isStudent) {
    if (c.status === 'in_progress' && e.status === 'funded') return `<button class="btn btn-accent btn-block" id="req-release" type="button">Request release</button>`;
    if (e.status === 'release_requested') return '<button class="btn btn-accent btn-block" disabled>Release requested</button>';
    if (e.status === 'released') return '<button class="btn btn-secondary btn-block" disabled>Released</button>';
    return '<p class="xs faint">You can request release once escrow is funded and the work is done.</p>';
  }
  if (c.status === 'signed' && e.status === 'awaiting_funding') return '<button class="btn btn-accent btn-block" id="fund" type="button">Fund escrow</button>';
  if (e.status === 'release_requested') return '<button class="btn btn-accent btn-block" id="release" type="button">Sign off and release</button>';
  if (e.status === 'funded') return '<p class="xs faint">The student requests release when the work is delivered. You then review and sign off.</p>';
  if (e.status === 'released') return '<button class="btn btn-secondary btn-block" disabled>Released</button>';
  return '<p class="xs faint">Both sides sign first. Then you fund escrow.</p>';
}

function wire(c) {
  $('#sign-form')?.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const f = ev.currentTarget, btn = f.querySelector('button'), v = formData(f);
    busy(btn, true, 'Signing…');
    try { await post(`/api/contracts/${c.id}/sign`, { full_name: v.full_name, consent: v.consent }); toast('Engagement letter signed. Name and timestamp recorded.', { title: 'Signed' }); load(); }
    catch (err) { busy(btn, false); toastError(err); }
  });

  const lf = $('#log-form');
  if (lf) {
    const preview = () => {
      const v = formData(lf); const h = Number(v.hours) || 0;
      const sameDay = c.hours.filter((x) => x.work_date === v.work_date).reduce((s, x) => s + Number(x.hours), 0);
      const after = sameDay + h;
      const type = C.dayCost(after, me.rules);
      $('#log-preview').textContent = h > 0 ? `${fmtDate(v.work_date)} will count as a ${type} day (${after} h on that date). ${sameDay && C.dayCost(sameDay, me.rules) !== type ? 'The earlier half day on that date becomes a full day.' : ''}` : '';
    };
    lf.addEventListener('input', preview); preview();
    lf.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const btn = lf.querySelector('button');
      busy(btn, true, 'Logging…');
      try {
        const r = await post(`/api/contracts/${c.id}/hours`, formData(lf));
        updateMeters(r.state);
        toast(`${r.entry.hours} h logged as a ${r.entry.day_type} day. Day account: ${r.state.usedDays} of ${r.state.caps.fullDays} days used.`, { title: 'Hours logged' });
        load();
      } catch (err) { busy(btn, false); toastError(err); }
    });
  }

  $('#req-release')?.addEventListener('click', () => openDialog({
    eyebrow: 'Escrow', title: `Request release of ${euro(c.escrow.amount_cents)}?`,
    body: `<div class="form-stack"><p>${esc(c.client.company)} reviews your delivery and signs off. Once the client releases it, this payment can't be reversed.</p>
      <div class="field"><label for="dn">Delivery note</label><input class="input" id="dn" name="note" maxlength="300" value="${esc(c.brief?.title)}: deliverable complete and shared with the client."></div>
      <label class="check"><input type="checkbox" id="dn-ok"><span>The deliverable is complete and matches clause 3.</span></label></div>`,
    actions: [{ label: 'Not yet', variant: 'ghost' }, { label: 'Request release', variant: 'accent', onClick: async ({ dialog, button, close }) => {
      if (!dialog.querySelector('#dn-ok').checked) { toast('Tick the box to confirm the deliverable is complete.', { tone: 'error' }); return false; }
      busy(button, true);
      try { const r = await post(`/api/contracts/${c.id}/request-release`, { note: dialog.querySelector('#dn').value, confirm: true }); close(); toast(r.message, { title: 'Release requested' }); load(); }
      catch (err) { busy(button, false); toastError(err); }
      return false;
    } }],
  }));

  $('#fund')?.addEventListener('click', () => openDialog({
    eyebrow: 'Escrow · simulation', title: `Fund ${euro(c.escrow.amount_cents)} into escrow`,
    body: `<div class="form-stack"><div class="callout warn">${icon('triangle-alert')}<div><b>Simulation.</b> No money moves and no card is charged. A live version would use a licensed payment provider.</div></div>
      <fieldset style="border:0;padding:0;margin:0" class="stack"><legend class="field-label mb-8">Payment method</legend>
        <label class="check"><input type="radio" name="method" value="sepa" checked><span>SEPA transfer (simulated) · reference ${esc(c.escrow.reference)}</span></label>
        <label class="check"><input type="radio" name="method" value="card"><span>Card (simulated) · test card ending 4242</span></label></fieldset>
      <p class="small muted">Funds are held until you sign off the delivered work. The student can start once escrow is funded.</p></div>`,
    actions: [{ label: 'Cancel', variant: 'ghost' }, { label: 'Fund escrow', variant: 'accent', onClick: async ({ dialog, button, close }) => {
      busy(button, true);
      try { await post(`/api/contracts/${c.id}/fund`, { method: dialog.querySelector('input[name=method]:checked').value }); close(); toast(`Escrow funded with ${euro(c.escrow.amount_cents)}. The student can start work.`, { title: 'Escrow funded' }); load(); }
      catch (err) { busy(button, false); toastError(err); }
      return false;
    } }],
  }));

  $('#release')?.addEventListener('click', () => openDialog({
    eyebrow: 'Sign off', title: `Release ${euro(c.escrow.amount_cents)} to ${c.student.name}?`,
    body: `<div class="form-stack"><p>Once released, this payment can't be reversed.</p>
      <div class="rows small"><div><span class="muted">Released from escrow</span><b>${euro2(c.escrow.amount_cents)}</b></div><div><span class="muted">Kontrak fee (${c.fees.pct}%), from the student's payout</span><b>${euro2(c.fees.feeCents)}</b></div><div><span class="muted">Student receives</span><b class="num">${euro2(c.fees.netCents)}</b></div></div>
      ${c.delivery_note ? `<div class="card card-sunken card-sm"><span class="label">Delivery note</span><p class="small mt-4">${esc(c.delivery_note)}</p></div>` : ''}
      <label class="check"><input type="checkbox" id="rl-ok"><span>I have reviewed the delivered work and sign it off.</span></label></div>`,
    actions: [{ label: 'Not yet', variant: 'ghost' }, { label: 'Sign off and release', variant: 'accent', onClick: async ({ dialog, button, close }) => {
      if (!dialog.querySelector('#rl-ok').checked) { toast('Tick the box to confirm you reviewed the work.', { tone: 'error' }); return false; }
      busy(button, true);
      try { const r = await post(`/api/contracts/${c.id}/release`, { confirm: true }); close(); toast(`${euro2(r.fees.netCents)} released to ${c.student.name}. Kontrak fee ${r.fees.pct}%. Payout simulated.`, { title: 'Payment released' }); load(); }
      catch (err) { busy(button, false); toastError(err); }
      return false;
    } }],
  }));

  $('#review-form')?.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const f = ev.currentTarget, btn = f.querySelector('button');
    busy(btn, true);
    try { await post(`/api/contracts/${c.id}/review`, formData(f)); toast('Review saved.'); load(); }
    catch (err) { busy(btn, false); toastError(err); }
  });
}

load();
