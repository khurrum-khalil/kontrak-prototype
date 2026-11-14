import { boot } from '../chrome.js';
import { api } from '../api.js';
import { $, esc, icon, qs, euro, euro2, hrs, fmtDate, dueIn, avatar, dayCapBadge, statusBadge, errorBox } from '../ui.js';

const me = await boot({ shell: 'site' });
const id = qs('id');
const root = $('#brief-view');

try {
  if (!id) throw new Error('No brief selected. Go back to the feed and choose a brief.');
  const { brief: b } = await api(`/api/briefs/${encodeURIComponent(id)}`);
  document.title = `${b.title} · Kontrak`;
  const role = me?.user?.role;
  const action = role === 'student'
    ? `<a class="btn btn-accent btn-block" href="/app/briefs.html?brief=${b.id}">Bid on this brief</a>`
    : role === 'client' ? `<a class="btn btn-secondary btn-block" href="/client/dashboard.html">Open your client dashboard</a>`
    : `<a class="btn btn-accent btn-block" href="/signup.html?role=student">Join as a student to bid</a><a class="btn btn-ghost btn-block mt-8" href="/login.html?next=${encodeURIComponent('/app/briefs.html?brief=' + b.id)}">Log in</a>`;
  root.innerHTML = `
  <nav class="small mb-16" aria-label="Breadcrumb"><a href="/find-work.html">${icon('arrow-left', 14)} All open briefs</a></nav>
  <div class="detail-grid">
    <div class="stack" style="--gap:20px">
      <article class="card">
        <div class="row mb-16">${b.day_cap_safe ? dayCapBadge() : ''}${statusBadge(b.status)}${b.jurisdiction !== 'Germany' ? `<span class="badge">${esc(b.jurisdiction)} · not live yet</span>` : ''}</div>
        <h1 class="h1" style="font-size:clamp(28px,3.4vw,40px)">${esc(b.title)}</h1>
        <div class="row mt-16">${avatar(b.client?.company_name, { verified: b.client?.verified })}<div><div class="title">${esc(b.client?.company_name)}</div><div class="small muted">${esc(b.client?.legal_form || '')} · ${esc(b.client?.city || '')}</div></div></div>
        <hr class="divider">
        <span class="label">The brief</span><p class="body mt-8">${esc(b.description)}</p>
        <div class="card card-sunken mt-24"><span class="label">Scope and deliverable</span><p class="body mt-8" style="line-height:1.75">${esc(b.scope_deliverable)}</p></div>
        <div class="tags mt-16">${b.practice_areas.map((a) => `<span class="tag">${esc(a)}</span>`).join('')}</div>
      </article>
      <div class="card"><span class="label">Who can take this brief</span>
        <ul class="small mt-12" style="padding-left:18px;line-height:1.9">${b.min_permit_types.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
        <p class="small muted mt-8">Your remaining days and weekly hours are checked when you bid. Bids over your limit are blocked automatically.</p></div>
    </div>
    <aside class="sticky-side">
      <div class="card">
        <span class="label">Fee</span>
        <div class="num mt-8" style="font-size:40px">${euro(b.fee_cents)}</div>
        <div class="rows mt-16">
          <div><span class="muted">Scoped hours</span><b>${hrs(b.scoped_hours)}</b></div>
          <div><span class="muted">Effective hourly rate</span><b>${euro2(b.effective_hourly_cents)}</b></div>
          <div><span class="muted">Statutory floor</span><b>${euro2(b.floor_cents)}</b></div>
          <div><span class="muted">Deadline</span><b>${esc(fmtDate(b.deadline))}</b></div>
          <div><span class="muted">Spread</span><b>${b.weeks} week${b.weeks === 1 ? '' : 's'} · ${Math.round((b.scoped_hours / b.weeks) * 10) / 10} h a week</b></div>
          <div><span class="muted">Jurisdiction</span><b>${esc(b.jurisdiction)}</b></div>
          <div><span class="muted">Work mode</span><b>${esc(b.location_mode)}${b.city ? ' · ' + esc(b.city) : ''}</b></div>
          <div><span class="muted">Client check</span><b>${b.client?.verified ? `<span class="gold-text">${icon('badge-check', 14)}</span> Company register` : 'Pending'}</b></div>
        </div>
        <div class="mt-24">${b.status === 'open' ? action : '<p class="small muted">This brief is no longer open for bids.</p>'}</div>
        <p class="xs faint mt-12">${esc(dueIn(b.deadline))} · ${b.bids_count} bid${b.bids_count === 1 ? '' : 's'} so far</p>
      </div>
      <div class="callout info">${icon('file-signature')}<div>If your bid is accepted, you sign an employment engagement letter under German law. Fees are held in escrow until the client signs off.</div></div>
    </aside>
  </div>`;
} catch (e) { root.innerHTML = errorBox(e) + '<a class="btn btn-secondary mt-16" href="/find-work.html">Back to all briefs</a>'; }
