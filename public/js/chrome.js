// One source of truth for the header, footer, cookie notice and app sidebar.
// Usage in a page module:  const me = await boot({ shell: 'site' | 'student' | 'client' | 'admin', active, title, eyebrow });
import { api, post, isDemoMode } from './api.js';
import { esc, icon, $, $$, avatar, meter, toast, relTime, toastError } from './ui.js';

export const logo = (onNavy = false, { tagline = true, cls = '' } = {}) =>
  `<a class="logo ${onNavy ? 'on-navy' : ''} ${cls}" href="/" aria-label="Kontrak home"><img src="/assets/${onNavy ? 'logo-mark-on-navy.svg' : 'logo-mark.svg'}" alt="" width="38" height="38"><span class="logo-div" aria-hidden="true"></span><span class="wm-stack"><span class="wm">KONTR<span>AK</span></span>${tagline ? '<span class="wm-tag">Work legal · Work smart</span>' : ''}</span></a>`;

// ── i18n (public pages only; the app stays in English, as in the pitch) ──
let dict = null;
export const getLang = () => localStorage.getItem('kt_lang') || 'en';
export async function applyI18n(lang = getLang()) {
  try { dict = await (await fetch(`/js/i18n/${lang}.json`)).json(); } catch { return; }
  document.documentElement.lang = lang;
  for (const el of $$('[data-i18n]')) { const v = dict[el.dataset.i18n]; if (typeof v === 'string') el.textContent = v; }
  for (const el of $$('[data-i18n-html]')) { const v = dict[el.dataset.i18nHtml]; if (typeof v === 'string') el.innerHTML = v; }
  for (const el of $$('[data-i18n-ph]')) { const v = dict[el.dataset.i18nPh]; if (typeof v === 'string') el.placeholder = v; }
  $$('.lang-toggle button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  document.dispatchEvent(new CustomEvent('kt:lang', { detail: lang }));
}
export const t = (key, fallback) => (dict && dict[key]) || fallback;

// ── Public site ─────────────────────────────────────────────
const NAV = [['/find-work.html', 'nav.work', 'Find work'], ['/for-clients.html', 'nav.clients', 'For clients'], ['/visa-rules.html', 'nav.rules', 'Visa and rules'], ['/pricing.html', 'nav.pricing', 'Pricing'], ['/universities.html', 'nav.unis', 'University partners']];

function siteHeader(me) {
  const here = location.pathname;
  const links = NAV.map(([href, key, label]) => `<a href="${href}" data-i18n="${key}" ${here === href ? 'aria-current="page"' : ''}>${label}</a>`).join('');
  const home = me?.user ? { student: '/app/dashboard.html', client: '/client/dashboard.html', admin: '/admin/' }[me.user.role] : null;
  const actions = home
    ? `<a class="btn btn-sm" href="${home}">${icon('layout-dashboard', 15)}<span data-i18n="nav.dashboard">Open dashboard</span></a>`
    : `<a class="btn btn-ghost btn-sm hide-sm" href="/login.html" data-i18n="nav.login">Log in</a><a class="btn btn-sm btn-primary-cta" href="/signup.html?role=student" data-i18n="nav.join">Join as a student</a>`;
  return `<header class="site-header" role="banner"><div class="bar">
    ${logo(false)}
    <nav class="site-nav" aria-label="Main">${links}</nav>
    <div class="header-actions">
      <div class="lang-toggle" role="group" aria-label="Language"><button type="button" data-lang="en" aria-pressed="true">EN</button><button type="button" data-lang="de" aria-pressed="false">DE</button></div>
      ${actions}
      <button class="btn icon-btn menu-btn" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Menu">${icon('menu', 18)}</button>
    </div></div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile">${links}${home ? '' : '<a href="/login.html" data-i18n="nav.login">Log in</a><a href="/signup.html?role=student" data-i18n="nav.join">Join as a student</a>'}</nav>
  </header>`;
}

function siteFooter() {
  const col = (key, title, items) => `<div><h2 data-i18n="${key}">${title}</h2><ul>${items.map(([h, k, l]) => `<li><a href="${h}" data-i18n="${k}">${l}</a></li>`).join('')}</ul></div>`;
  return `<footer class="site-footer" role="contentinfo"><div class="container">
    <div class="cols">
      <div>${logo(true)}<p class="about" data-i18n="footer.about">The legal work platform for non-EU students in Germany. Students are employees, every brief is checked, every fee sits in escrow.</p></div>
      ${col('footer.students', 'For students', [['/find-work.html', 'nav.work', 'Find work'], ['/day-cap-checker.html', 'footer.checker', 'Day-Cap Checker'], ['/visa-rules.html', 'nav.rules', 'Visa and rules'], ['/signup.html?role=student', 'nav.join', 'Join as a student']])}
      ${col('footer.clients', 'For clients', [['/for-clients.html', 'nav.clients', 'For clients'], ['/signup.html?role=client', 'footer.post', 'Post a brief'], ['/pricing.html', 'nav.pricing', 'Pricing'], ['/legal-notes.html', 'footer.legalnotes', 'How compliance works']])}
      ${col('footer.company', 'Company', [['/about.html', 'footer.aboutlink', 'About and roadmap'], ['/universities.html', 'nav.unis', 'University partners'], ['/impressum.html', 'footer.impressum', 'Impressum'], ['/datenschutz.html', 'footer.privacy', 'Datenschutz'], ['/agb.html', 'footer.terms', 'AGB']])}
    </div>
    <div class="legal">
      <span>© 2026 Kontrak · Universität Passau · PATEC</span>
      <span class="proto" data-i18n="footer.proto">Prototype. Payments and signatures are simulated.</span>
      <span data-i18n="footer.advice">Information, not legal advice.</span>
    </div></div></footer>`;
}

function cookieNotice() {
  if (localStorage.getItem('kt_cookie_ok')) return;
  const el = document.createElement('div');
  el.className = 'cookie'; el.setAttribute('role', 'region'); el.setAttribute('aria-label', 'Cookie notice');
  el.innerHTML = `<div data-i18n="cookie.text">We use only strictly necessary storage: a session cookie when you log in, and your language and this notice in your browser. No tracking, no analytics cookies.</div>
  <div class="row"><button class="btn btn-sm" type="button" data-i18n="cookie.ok">Understood</button><a class="small" href="/datenschutz.html" data-i18n="cookie.more">Read the Datenschutz page</a></div>`;
  el.querySelector('button').onclick = () => { localStorage.setItem('kt_cookie_ok', '1'); el.remove(); };
  document.body.appendChild(el);
}

async function demoBanner() {
  if (await isDemoMode()) {
    const b = document.createElement('div');
    b.className = 'demo-banner'; b.setAttribute('role', 'status');
    b.textContent = 'Read-only demo mode: no server is running, so data comes from a snapshot. Run npm start for the full app.';
    document.body.prepend(b);
  }
}

// ── App shell (student, client, admin) ──────────────────────
const APP_NAV = {
  student: [['/app/dashboard.html', 'layout-dashboard', 'Dashboard'], ['/app/briefs.html', 'search', 'Find briefs'], ['/app/contracts.html', 'file-signature', 'Contracts'], ['/app/messages.html', 'message-square', 'Messages'], ['/app/payments.html', 'wallet', 'Payments'], ['/app/profile.html', 'user', 'Profile']],
  client: [['/client/dashboard.html', 'layout-dashboard', 'Dashboard'], ['/client/post-brief.html', 'plus', 'Post a brief'], ['/client/my-briefs.html', 'briefcase', 'My briefs'], ['/client/bids.html', 'users', 'Bids'], ['/client/contracts.html', 'file-signature', 'Contracts'], ['/client/messages.html', 'message-square', 'Messages'], ['/client/payments.html', 'wallet', 'Payments'], ['/client/company.html', 'building-2', 'Company']],
  admin: [['/admin/', 'layout-dashboard', 'Admin'], ['/', 'globe', 'Public site']],
};
const HOME = { student: '/app/dashboard.html', client: '/client/dashboard.html', admin: '/admin/' };

export function metersHtml(s) {
  if (!s) return '';
  const out = [];
  if (s.appliesDays) {
    const pct = (s.usedDays / s.caps.fullDays) * 100;
    out.push(`<div class="side-meter"><span class="label">Day account · ${s.year}</span><div class="figs"><b>${s.usedDays} ${s.usedDays === 1 ? 'day' : 'days'}</b><span>of ${s.caps.fullDays}</span></div>${meter(pct)}<div class="note">${s.remainingDays} days left${s.reservedDays ? ` · ${s.reservedDays} reserved for signed work` : ''}</div></div>`);
  }
  if (s.appliesWeekly) {
    const pct = (s.weekCommitted / s.caps.weekly) * 100;
    out.push(`<div class="side-meter"><span class="label">Hours this week</span><div class="figs"><b>${s.weekCommitted} h</b><span>of ${s.caps.weekly} h</span></div>${meter(pct)}<div class="note">${s.loggedThisWeek} h logged · ${s.plannedThisWeek} h planned</div></div>`);
  }
  if (!s.appliesDays && !s.appliesWeekly) out.push('<div class="side-meter"><span class="label">Work limits</span><div class="note" style="margin:0">No day account or weekly cap applies to your work rule.</div></div>');
  return out.join('');
}
export function updateMeters(state) { const m = $('.side-meters'); if (m) m.innerHTML = metersHtml(state); }

function appShell(me, { shell, title, eyebrow }) {
  const nav = APP_NAV[shell];
  const here = location.pathname.replace(/index\.html$/, '');
  const active = (href) => here === href || (here.endsWith('/contract.html') && href.endsWith('/contracts.html'));
  const unreadMsgs = me.unread?.messages || 0;
  const name = `${me.user.first_name} ${me.user.last_name}`;
  const org = shell === 'client' ? me.profile?.company_name : shell === 'student' ? me.profile?.university : 'Kontrak team';
  const main = $('main');
  const content = main.innerHTML;
  const wrap = document.createElement('div');
  wrap.className = 'app';
  wrap.innerHTML = `
  <div class="side-col"><aside class="sidebar" id="sidebar" aria-label="App navigation">
    ${logo(true, { tagline: false })}
    <nav class="side-nav">${nav.map(([href, ic, label]) => `<a href="${href}" ${active(href) ? 'aria-current="page"' : ''}>${icon(ic, 17)}${label}${label === 'Messages' && unreadMsgs ? `<span class="unread" aria-label="${unreadMsgs} unread"></span>` : ''}</a>`).join('')}</nav>
    <div class="side-meters">${shell === 'student' ? metersHtml(me.state) : ''}</div>
    <div class="side-foot">Prototype. Payments and signatures are simulated.</div>
  </aside></div>
  <div class="app-main">
    <div class="app-mobile-bar">${logo(true, { tagline: false })}<button class="btn icon-btn" type="button" id="side-toggle" aria-controls="sidebar" aria-expanded="false" aria-label="Open navigation">${icon('menu', 18)}</button></div>
    <header class="topbar">
      <div>${eyebrow ? `<span class="label">${esc(eyebrow)}</span>` : ''}<h1 id="page-title">${esc(title)}</h1></div>
      <div class="tb-actions">
        <div id="tb-extra" class="row"></div>
        <div class="notif-wrap"><button class="btn icon-btn" type="button" id="notif-btn" aria-haspopup="true" aria-expanded="false" aria-label="Notifications">${icon('bell', 18)}${me.unread?.notifications ? '<span class="notif-dot" aria-hidden="true"></span>' : ''}</button></div>
        <div class="notif-wrap"><button class="user-chip" type="button" id="user-btn" aria-haspopup="true" aria-expanded="false">${avatar(name, { verified: me.user.status === 'verified' })}<span class="who"><b>${esc(name)}</b><span>${esc(org || '')}</span></span></button></div>
      </div>
    </header>
    <main id="main" class="app-content" tabindex="-1"></main>
    <footer class="app-foot"><span>Kontrak · Prototype. Payments and signatures are simulated.</span><span>Information, not legal advice.</span></footer>
  </div>`;
  main.replaceWith(wrap);
  $('#main').innerHTML = content;

  $('#side-toggle').onclick = (e) => { const s = $('#sidebar'); const open = !s.classList.contains('open'); s.classList.toggle('open', open); e.currentTarget.setAttribute('aria-expanded', open); };
  wireNotifications();
  wireUserMenu(me, shell);
}

function popover(btn, html) {
  const existing = btn.parentElement.querySelector('.notif-panel');
  $$('.notif-panel').forEach((p) => p.remove());
  $$('[aria-expanded="true"]', $('.topbar')).forEach((b) => b.setAttribute('aria-expanded', 'false'));
  if (existing) return null;
  const p = document.createElement('div');
  p.className = 'notif-panel'; p.innerHTML = html;
  btn.parentElement.appendChild(p);
  btn.setAttribute('aria-expanded', 'true');
  const off = (e) => { if (!p.contains(e.target) && e.target !== btn && !btn.contains(e.target)) { p.remove(); btn.setAttribute('aria-expanded', 'false'); document.removeEventListener('click', off); } };
  setTimeout(() => document.addEventListener('click', off));
  p.addEventListener('keydown', (e) => { if (e.key === 'Escape') { p.remove(); btn.setAttribute('aria-expanded', 'false'); btn.focus(); } });
  return p;
}

function wireNotifications() {
  const btn = $('#notif-btn');
  btn.onclick = async () => {
    const p = popover(btn, '<div class="np-head"><span class="label">Notifications</span></div><div class="loading-row" style="padding:16px">Loading…</div>');
    if (!p) return;
    try {
      const { notifications } = await api('/api/notifications');
      p.innerHTML = `<div class="np-head"><span class="label">Notifications</span><button class="link-btn small" type="button" id="np-read">Mark all read</button></div>` +
        (notifications.length ? notifications.map((n) => `<a href="${esc(n.link || '#')}" class="${n.read_at ? '' : 'unread'}">${esc(n.text)}<time>${esc(relTime(n.created_at))}</time></a>`).join('') : '<div class="empty small">No notifications yet.</div>');
      $('#np-read', p).onclick = async () => { await post('/api/notifications/read'); $$('.unread', p).forEach((a) => a.classList.remove('unread')); $('.notif-dot')?.remove(); };
    } catch (e) { p.innerHTML = `<div class="empty small">${esc(e.message)}</div>`; }
  };
}

function wireUserMenu(me, shell) {
  const btn = $('#user-btn');
  btn.onclick = () => {
    const links = shell === 'student' ? [['/app/profile.html', 'Profile and verification']] : shell === 'client' ? [['/client/company.html', 'Company and verification']] : [];
    const p = popover(btn, `<div class="np-head"><span class="small">${esc(me.user.email)}</span></div>${links.map(([h, l]) => `<a href="${h}">${l}</a>`).join('')}<a href="/">View public site</a><a href="#" id="logout">Log out</a>`);
    if (!p) return;
    $('#logout', p).onclick = async (e) => { e.preventDefault(); try { await post('/api/auth/logout'); } catch { /* ignore */ } location.href = '/login.html?out=1'; };
  };
}

export const setTopActions = (html) => { const el = $('#tb-extra'); if (el) el.innerHTML = html; };
export const setTitle = (title) => { const h = $('#page-title'); if (h) h.textContent = title; document.title = `${title} · Kontrak`; };

// ── Boot ────────────────────────────────────────────────────
export async function boot(opts = {}) {
  const shell = opts.shell || document.body.dataset.shell || 'site';
  window.addEventListener('unhandledrejection', (e) => { toastError(e.reason); });
  if (shell === 'site') {
    let me = null;
    try { me = await api('/api/me'); } catch { me = null; }
    const h = $('#site-header'); if (h) h.outerHTML = siteHeader(me);
    const f = $('#site-footer'); if (f) f.outerHTML = siteFooter();
    $$('.lang-toggle button').forEach((b) => (b.onclick = () => { localStorage.setItem('kt_lang', b.dataset.lang); applyI18n(b.dataset.lang); }));
    const mb = $('.menu-btn'); if (mb) mb.onclick = () => { const n = $('#mobile-nav'); const open = !n.classList.contains('open'); n.classList.toggle('open', open); mb.setAttribute('aria-expanded', open); };
    cookieNotice();
    demoBanner();
    await applyI18n();
    return me;
  }
  if (await isDemoMode()) {
    document.body.innerHTML = `<main id="main" class="container section narrow"><div class="card"><div class="label">Read-only demo mode</div><h1 class="h2 mt-8">The app needs the server</h1><p class="body mt-12">Run <code>npm start</code> in the project folder, then open <a href="http://localhost:3000">http://localhost:3000</a>. Live Server can show the public pages only.</p><a class="btn btn-secondary mt-16" href="/">Back to the homepage</a></div></main>`;
    await new Promise(() => {});
  }
  const me = await api('/api/me');
  if (!me.user) { location.replace(`/login.html?next=${encodeURIComponent(location.pathname + location.search)}`); await new Promise(() => {}); }
  if (me.user.role !== shell) { location.replace(HOME[me.user.role]); await new Promise(() => {}); }
  appShell(me, { shell, title: opts.title || document.title.split(' · ')[0], eyebrow: opts.eyebrow });
  if (new URLSearchParams(location.search).get('verified') === '1') toast('Your email is verified. You now have full access.', { title: 'Verified' });
  return me;
}
