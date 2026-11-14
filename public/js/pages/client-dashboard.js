import { boot, setTitle, setTopActions } from '../chrome.js';
import { api } from '../api.js';
import { $, esc, icon, euro, relTime, statusBadge, empty, errorBox, dueIn } from '../ui.js';

const me = await boot({ shell: 'client', title: 'Dashboard', eyebrow: 'Client dashboard' });
setTitle(me.profile.company_name);
setTopActions(`<a class="btn btn-accent btn-sm" href="/client/post-brief.html">${icon('plus', 14)} Post a brief</a>`);
const view = $('#view');

try {
  const [b, bd, c, p, n] = await Promise.all([api('/api/client/briefs'), api('/api/bids'), api('/api/contracts'), api('/api/payments'), api('/api/notifications')]);
  const open = b.briefs.filter((x) => x.status === 'open');
  const waiting = bd.bids.filter((x) => x.status === 'submitted');
  const done = c.contracts.filter((x) => ['signed_off', 'closed'].includes(x.status));
  const todo = c.contracts.filter((x) => (x.status === 'awaiting_signatures' && !x.client_signed_at) || (x.status === 'signed' && x.escrow?.status === 'awaiting_funding') || x.escrow?.status === 'release_requested');
  const todoLabel = (x) => (x.status === 'awaiting_signatures' ? ['Sign the engagement letter', 'file-signature'] : x.status === 'signed' ? ['Fund escrow', 'wallet'] : ['Review delivery and release', 'circle-check']);
  const draft = sessionStorage.getItem('kt_brief_draft');

  view.innerHTML = `
  ${me.user.status !== 'verified' ? `<div class="callout warn">${icon('mail')}<div><b>Verify your work email.</b> Use the link shown after sign-up before you publish briefs or accept bids.</div></div>` : ''}
  ${me.profile.register_check !== 'passed' ? `<div class="callout warn">${icon('landmark')}<div><b>Company register check ${esc(me.profile.register_check)}.</b> ${me.profile.register_check === 'failed' ? 'Update your Handelsregister number on the Company page.' : 'The Kontrak team reviews numbers that are not HRB or HRA. You can publish once it passes.'} <a href="/client/company.html">Company details</a></div></div>` : ''}
  ${draft ? `<div class="callout info">${icon('file-text')}<div>You started a brief on the public site. <a href="/client/post-brief.html?draft=1">Finish and publish it</a>.</div></div>` : ''}
  <div class="grid-4">
    <div class="stat"><span class="label">Open briefs</span><span class="value">${open.length}</span><span class="delta neutral">Visible to eligible students</span></div>
    <div class="stat"><span class="label">Bids waiting</span><span class="value">${waiting.length}</span><span class="delta neutral">${waiting.length ? 'Review and accept or decline' : 'No bids to review'}</span></div>
    <div class="stat"><span class="label">Funded escrow</span><span class="value">${euro(p.totals.in_escrow_cents)}</span><span class="delta neutral">Released on your sign-off</span></div>
    <div class="stat navy"><span class="label">Completed engagements</span><span class="value">${done.length}</span><span class="delta">Signed off and released</span></div>
  </div>
  <div class="split">
    <div class="stack" style="--gap:20px">
      <section class="card card-md"><div class="card-head"><h2 class="label">Needs your action</h2><a class="small" href="/client/contracts.html">All contracts</a></div>
        ${todo.length ? todo.map((x) => { const [l, ic] = todoLabel(x); return `<a class="row" style="flex-wrap:nowrap;padding:12px 0;border-top:1px solid var(--border-hairline);color:inherit" href="/client/contract.html?id=${x.id}">${icon(ic, 18)}<span class="grow"><b class="title" style="font-size:14px">${l}</b><br><span class="small muted">${esc(x.brief?.title)} · ${esc(x.student.name)} · ${esc(x.id)}</span></span>${statusBadge(x.escrow?.status === 'release_requested' ? 'release_requested' : x.status)}</a>`; }).join('') : empty('circle-check', 'Nothing waiting on you')}
      </section>
      <section class="card card-md"><div class="card-head"><h2 class="label">Bids waiting</h2><a class="small" href="/client/bids.html">Review bids</a></div>
        ${waiting.length ? waiting.slice(0, 5).map((x) => `<a class="row" style="flex-wrap:nowrap;padding:12px 0;border-top:1px solid var(--border-hairline);color:inherit" href="/client/bids.html?brief=${x.brief_id}"><span class="grow"><b class="title" style="font-size:14px">${esc(x.student.name)}</b> <span class="small muted">on ${esc(x.brief_title)}</span><br><span class="small muted">${x.remaining.appliesDays ? `${x.remaining.days} days left` : 'No day account'} · ${x.remaining.appliesWeekly ? `${x.remaining.weekly} h left this week` : 'no weekly cap'}</span></span><span class="num">${euro(x.proposed_fee_cents)}</span></a>`).join('') : empty('users', 'No bids waiting', 'Bids on your open briefs appear here.')}
      </section>
    </div>
    <section class="card card-md"><h2 class="label">Activity</h2>
      ${n.notifications.length ? n.notifications.slice(0, 10).map((x) => `<a href="${esc(x.link || '#')}" style="display:block;padding:12px 0;border-top:1px solid var(--border-hairline);color:var(--text-body)" class="small">${esc(x.text)}<span class="xs faint" style="display:block;margin-top:3px">${esc(relTime(x.created_at))}</span></a>`).join('') : empty('bell', 'No activity yet')}
      <div class="mt-16">${open.slice(0, 3).map((x) => `<div class="small muted mt-8">${icon('briefcase', 14)} ${esc(x.title)} · ${esc(dueIn(x.deadline, me.today))}</div>`).join('')}</div>
    </section>
  </div>`;
} catch (e) { view.innerHTML = errorBox(e); }
