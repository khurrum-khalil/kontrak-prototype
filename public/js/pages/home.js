import { boot } from '../chrome.js';
import { api, post } from '../api.js';
import * as C from '../compliance-client.js';
import { $, esc, icon, briefCard, gatesHtml, formData, busy, toast, toastError, showFormError, euro2 } from '../ui.js';
import { mountChecker } from '../checker-widget.js';
import { mountRoadmap } from '../roadmap.js';

mountChecker($('#hero-checker'));
mountRoadmap($('#roadmap'));
await boot({ shell: 'site' });

// Proof strip: live counts from the Excel data.
api('/api/stats/public').then((s) => {
  $('#st-open').textContent = s.open_briefs;
  $('#st-students').textContent = s.verified_students;
  $('#st-placements').textContent = s.compliant_placements;
  if (s.demo_data) $('#demo-flag').hidden = false;
}).catch(() => {});

// Live briefs preview: six open briefs.
api('/api/briefs?sort=newest').then(({ briefs }) => {
  const el = $('#home-briefs');
  el.innerHTML = briefs.length ? briefs.slice(0, 6).map((b) => briefCard(b)).join('') : '<p class="muted">No open briefs right now. New briefs appear here as soon as clients publish them.</p>';
}).catch((e) => { $('#home-briefs').innerHTML = `<p class="muted">${esc(e.message)}</p>`; });

// Mini-demo of the three gates (runs the same engine the server uses).
let rules = C.DEFAULT_RULES, today = new Date().toISOString().slice(0, 10);
const gd = $('#gate-demo');
gd.permit.innerHTML = C.PERMIT_TYPES.map((p) => `<option>${esc(p)}</option>`).join('');
function runDemo() {
  const v = formData(gd);
  const weeks = Number(v.weeks);
  const deadline = C.addDays(C.mondayOf(today), weeks * 7 + 4); // Friday of the chosen week
  const used = Math.min(140, Math.max(0, Number(v.used) || 0));
  const res = C.checkBid({
    student: { status: 'verified', permit_type: v.permit },
    state: { workRule: C.DEFAULT_WORK_RULE[v.permit], fullUsed: used, halfUsed: 0, reservedHalf: 0, loggedThisWeek: Number(v.week) || 0, plannedThisWeek: 0 },
    brief: { status: 'open', jurisdiction: v.jur, min_permit_types: C.PERMIT_TYPES.join('|') },
    bid: { feeCents: Math.round((Number(v.fee) || 0) * 100), hours: Number(v.hours) || 0, pattern: '4 h sessions', deadline },
  }, { rules, today });
  $('#gate-out').innerHTML = gatesHtml(res.gates, res.flags) + `<div class="callout ${res.allowed ? 'success' : 'danger'} mt-12">${icon(res.allowed ? 'circle-check' : 'ban')}<div><b>${res.allowed ? 'Bid allowed.' : 'Bid blocked.'}</b> ${res.allowed ? 'All three gates pass.' : 'The button stays disabled until every gate passes.'}</div></div>`;
}
gd.addEventListener('input', runDemo);
api('/api/rules').then((r) => { rules = r.rules; today = r.today; document.querySelectorAll('.js-floor').forEach((e) => (e.textContent = euro2(C.minWageFor(today, rules)))); runDemo(); }).catch(runDemo);
runDemo();

// University partnership form.
$('#uni-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const f = e.currentTarget, btn = f.querySelector('button[type=submit]');
  showFormError(f, null); busy(btn, true, 'Sending…');
  try { const r = await post('/api/university-requests', formData(f)); f.reset(); toast(r.message, { title: 'Enquiry sent' }); }
  catch (err) { showFormError(f, err.message); }
  finally { busy(btn, false); }
});

// Waitlist.
$('#waitlist').addEventListener('submit', async (e) => {
  e.preventDefault();
  const f = e.currentTarget, btn = f.querySelector('button[type=submit]');
  busy(btn, true, 'Joining…');
  try { const r = await post('/api/waitlist', { ...formData(f), source: 'homepage' }); f.reset(); toast(r.message, { title: 'On the waitlist' }); }
  catch (err) { toastError(err); }
  finally { busy(btn, false); }
});
