import { boot } from '../chrome.js';
import { post } from '../api.js';
import { $, esc, icon, qs, formData, busy, showFormError, toast } from '../ui.js';

const HOME = { student: '/app/dashboard.html', client: '/client/dashboard.html', admin: '/admin/' };
const DEMOS = [
  ['lina.haddad@uni-passau.demo', 'Lina Haddad', 'Student · new, 0 days used, first job pending'],
  ['aisha.rahman@hu-berlin.demo', 'Aisha Rahman', 'Student · 86 of 140 days used, active work'],
  ['mehmet.yilmaz@lmu.demo', 'Mehmet Yılmaz', 'Student · 138 days used, cap blocks shown'],
  ['priya.nandra@uni-hamburg.demo', 'Priya Nandra', 'Student · language-course permit, 20 h a week only'],
  ['elena.popescu@uni-passau.demo', 'Elena Popescu', 'Student · EU/EEA citizen, no caps'],
  ['dana.krueger@aurelis.demo', 'Dana Krüger', 'Client · Aurelis Studio, bids to review'],
  ['clara.ostwald@ostwald-economics.demo', 'Clara Ostwald', 'Client · Ostwald Economics, escrow to fund'],
  ['felix.brandt@kelvin-analytics.demo', 'Felix Brandt', 'Client · Kelvin Analytics, release requested'],
  ['ben.mor@studiomor.demo', 'Ben Mor', 'Client · Studio Mor, register check pending'],
  ['admin@kontrak.demo', 'Kontrak admin', 'Admin · users, config, audit log'],
];

const me = await boot({ shell: 'site' });
const next = qs('next');
const safeNext = next && /^\/(app|client|admin)\//.test(next) ? next : null;
const go = (user) => { location.href = safeNext && safeNext.startsWith({ student: '/app/', client: '/client/', admin: '/admin/' }[user.role]) ? safeNext : HOME[user.role]; };
if (me?.user) go(me.user);
if (qs('out')) toast('You are logged out.');
if (qs('error') === 'link') showFormError($('#login'), 'This verification link is not valid any more. Log in, or sign up again.');

$('#demo-logins').innerHTML = DEMOS.map(([email, name, note]) => `<button type="button" data-email="${esc(email)}"><span><b class="title" style="font-size:14px">${esc(name)}</b><br><span class="small muted">${esc(note)}</span></span>${icon('arrow-right', 15)}</button>`).join('');
$('#demo-logins').addEventListener('click', async (e) => {
  const b = e.target.closest('[data-email]'); if (!b) return;
  busy(b, true);
  try { const r = await post('/api/auth/demo-login', { email: b.dataset.email }); go(r.user); }
  catch (err) { busy(b, false); toast(err.message, { tone: 'error' }); }
});

$('#login').addEventListener('submit', async (e) => {
  e.preventDefault();
  const f = e.currentTarget, btn = f.querySelector('button[type=submit]');
  showFormError(f, null); busy(btn, true, 'Logging in…');
  try { const r = await post('/api/auth/login', formData(f)); go(r.user); }
  catch (err) { showFormError(f, err.message); busy(btn, false); }
});
