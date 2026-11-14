import { boot } from '../chrome.js';
import { api } from '../api.js';
import * as C from '../compliance-client.js';
import { $, icon, euro2, formData } from '../ui.js';

const me = await boot({ shell: 'site' });
let rules = C.DEFAULT_RULES, today = new Date().toISOString().slice(0, 10);
const f = $('#quick-brief');
f.deadline.value = C.addDays(today, 21);

function render() {
  const v = formData(f);
  const res = C.aboveFloor({ feeCents: Math.round(Number(v.fee) * 100), hours: Number(v.scoped_hours), deadline: v.deadline || today }, { rules, today });
  const live = rules.liveJurisdictions.includes(v.jurisdiction);
  $('#qb-rate').innerHTML = `<div class="callout ${res.passed ? 'success' : 'danger'}">${icon(res.passed ? 'circle-check' : 'ban')}<div>${res.reason}${live ? '' : `<br>${v.jurisdiction} is not live yet. Students cannot bid until that country module launches.`}</div></div>`;
  $('#qb-submit').disabled = !res.passed;
}
f.addEventListener('input', render);
f.addEventListener('submit', (e) => {
  e.preventDefault();
  sessionStorage.setItem('kt_brief_draft', JSON.stringify(formData(f)));
  location.href = me?.user?.role === 'client' ? '/client/post-brief.html?draft=1' : '/signup.html?role=client&next=' + encodeURIComponent('/client/post-brief.html?draft=1');
});
if (me?.user?.role === 'client') $('#qb-submit').textContent = 'Continue to the full brief';
else $('#qb-submit').textContent = 'Continue: create a client account';

const [r, s] = await Promise.all([api('/api/rules').catch(() => null), api('/api/stats/public').catch(() => null)]);
if (r) { rules = r.rules; today = r.today; f.deadline.value = C.addDays(today, 21); $('#cs-floor').textContent = euro2(C.minWageFor(today, rules)); }
if (s) { $('#cs-students').textContent = s.verified_students; $('#cs-open').textContent = s.open_briefs; }
render();
