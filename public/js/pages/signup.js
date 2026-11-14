import { boot } from '../chrome.js';
import { post } from '../api.js';
import * as C from '../compliance-client.js';
import { $, $$, esc, icon, qs, formData, busy, showFormError } from '../ui.js';

export const AREAS = ['Commercial', 'Data protection', 'Employment', 'Corporate', 'IP & licensing', 'AI & regulation', 'Fintech', 'Regulatory', 'Competition', 'Tax', 'Due diligence', 'Research', 'Drafting', 'SaaS & IT'];
const LEGAL_FORMS = ['GmbH', 'UG (haftungsbeschränkt)', 'AG', 'GmbH & Co. KG', 'KG', 'OHG', 'e.K.', 'Rechtsanwaltsgesellschaft mbH', 'PartG mbB', 'Einzelunternehmen', 'Other'];

const me = await boot({ shell: 'site' });
if (me?.user) location.replace({ student: '/app/dashboard.html', client: '/client/dashboard.html', admin: '/admin/' }[me.user.role]);
const next = qs('next');
const form = $('#signup');
let role = qs('role') === 'client' ? 'client' : 'student';
$$('input[name="role-pick"]').forEach((r) => { r.checked = r.value === role; r.onchange = () => { role = r.value; render(); }; });

const field = (id, label, input, hint = '') => `<div class="field"><label for="${id}">${label}</label>${input}${hint ? `<span class="hint">${hint}</span>` : ''}</div>`;
const inp = (id, name, attrs = '') => `<input class="input" id="${id}" name="${name}" ${attrs}>`;

function render() {
  const side = role === 'student'
    ? ['Legal work that fits your permit', ['Only briefs you can legally take reach your feed', 'Your 140-day account and weekly hours on every screen', 'An employment contract under German law, signed in the app', 'Nothing to pay before you earn. Your first job is free.']]
    : ['Hire verified students, compliantly', ['Posting a brief is free', 'Every bid shows the student\'s remaining days and hours', 'Engagement letter generated, signed by both sides', 'Fees held in escrow until you sign off']];
  $('#side-title').textContent = side[0];
  $('#side-points').innerHTML = side[1].map((t) => `<li class="row" style="align-items:flex-start">${icon('check', 16)}<span>${esc(t)}</span></li>`).join('');
  const names = `<div class="form-grid">${field('s-first', 'First name', inp('s-first', 'first_name', 'autocomplete="given-name" required'))}${field('s-last', 'Last name', inp('s-last', 'last_name', 'autocomplete="family-name" required'))}</div>`;
  const pw = field('s-pw', 'Password', inp('s-pw', 'password', 'type="password" autocomplete="new-password" minlength="10" required'), 'At least 10 characters.');
  form.innerHTML = role === 'student' ? `${names}
    ${field('s-uni', 'University', inp('s-uni', 'university', 'required placeholder="Universität Passau"'))}
    ${field('s-email', 'University email', inp('s-email', 'email', 'type="email" autocomplete="email" required placeholder="name@uni-passau.de"'), 'We send a verification link to this address. In the prototype, the link is shown on screen.')}
    <div class="form-grid">${field('s-nat', 'Nationality', inp('s-nat', 'nationality', 'required autocomplete="country-name"'))}
      ${field('s-permit', 'Permit type', `<select class="select" id="s-permit" name="permit_type">${C.PERMIT_TYPES.map((p) => `<option>${esc(p)}</option>`).join('')}</select>`)}</div>
    <div class="form-grid">${field('s-rule', 'Work allowance', `<select class="select" id="s-rule" name="work_rule">${C.WORK_RULES.map((w) => `<option>${esc(w)}</option>`).join('')}</select>`, 'Set from your permit type. Change it only if your permit says otherwise.')}
      ${field('s-valid', 'Permit valid until', inp('s-valid', 'permit_valid_until', 'type="date"'))}</div>
    ${field('s-note', 'Permit wording', '<textarea class="textarea" id="s-note" name="permit_wording_note" rows="3" placeholder="Copy the work clause from your permit, for example: Beschäftigung bis 140 Tage oder 280 halbe Tage im Jahr erlaubt."></textarea>', 'We record it so your eligibility can be checked. Leave empty only for EU/EEA citizens.')}
    <div class="field"><span class="field-label" id="areas-l">Practice areas</span><div class="tags" role="group" aria-labelledby="areas-l">${AREAS.map((a) => `<label class="check tag" style="gap:6px"><input type="checkbox" name="practice_areas" value="${esc(a)}" data-multi="1" style="width:14px;height:14px;margin:0">${esc(a)}</label>`).join('')}</div></div>
    ${field('s-lang', 'Languages', inp('s-lang', 'languages', 'placeholder="English, German (B2)"'))}
    ${pw}
    <label class="check"><input type="checkbox" name="permit_confirmed" required><span>I confirm my permit allows paid employment.</span></label>
    <button class="btn btn-accent btn-block" type="submit">Create student account</button>
    <p class="xs faint">Kontrak enforces your caps and keeps an exportable hour log. Information, not legal advice.</p>`
    : `${names}
    <div class="form-grid">${field('c-email', 'Work email', inp('c-email', 'email', 'type="email" autocomplete="email" required placeholder="name@company.de"'))}${field('c-role', 'Your role', inp('c-role', 'contact_role', 'required placeholder="General Counsel"'))}</div>
    ${field('c-co', 'Company name', inp('c-co', 'company_name', 'required autocomplete="organization"'))}
    <div class="form-grid">${field('c-form', 'Legal form', `<select class="select" id="c-form" name="legal_form">${LEGAL_FORMS.map((l) => `<option>${esc(l)}</option>`).join('')}</select>`)}
      ${field('c-reg', 'Handelsregister number', inp('c-reg', 'register_number', 'required placeholder="HRB 123456"'), 'Simulated check: HRB and HRA numbers pass. Others go to manual review.')}</div>
    <div class="form-grid">${field('c-vat', 'VAT ID', inp('c-vat', 'vat_id', 'placeholder="DE123456789"'))}${field('c-city', 'City', inp('c-city', 'city', 'required autocomplete="address-level2"'))}</div>
    ${field('c-web', 'Website', inp('c-web', 'website', 'placeholder="company.de"'))}
    ${pw}
    <button class="btn btn-accent btn-block" type="submit">Create client account</button>`;
  const permit = $('#s-permit');
  if (permit) permit.onchange = () => { $('#s-rule').value = C.DEFAULT_WORK_RULE[permit.value]; };
}
render();

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type=submit]');
  const data = formData(form);
  showFormError(form, null); busy(btn, true, 'Creating account…');
  try {
    const r = await post('/api/auth/signup', { ...data, role, permit_confirmed: data.permit_confirmed === true });
    const nextQ = next && /^\/(app|client)\//.test(next) ? `&next=${encodeURIComponent(next)}` : '';
    $('#signup-root').innerHTML = `
      <span class="label">Step 2 of 2</span><h2 class="h3 mt-8">Check your email</h2>
      <div class="callout info mt-16">${icon('mail')}<div><b>Verification email sent (simulated).</b> In the live product this link goes to ${esc(r.user.email)}. In the prototype, open it here.</div></div>
      ${role === 'client' ? `<div class="callout ${r.register_check === 'passed' ? 'success' : 'warn'} mt-12">${icon(r.register_check === 'passed' ? 'circle-check' : 'hourglass')}<div>${r.register_check === 'passed' ? '<b>Company register check passed (simulated).</b> You can publish briefs once your email is verified.' : '<b>Company register check pending.</b> The Kontrak team reviews numbers that are not HRB or HRA. You can explore the dashboard meanwhile.'}</div></div>` : ''}
      <a class="btn btn-accent btn-block mt-24" href="${esc(r.verify_url + nextQ)}">Open verification link</a>
      <p class="xs faint mt-12">Until you verify, you can look around but cannot ${role === 'student' ? 'bid' : 'publish or accept bids'}.</p>`;
  } catch (err) { showFormError(form, err.message); busy(btn, false); }
});
