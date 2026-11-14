import { boot } from '../chrome.js';
import { put } from '../api.js';
import { $, esc, icon, statusBadge, formData, busy, toast, showFormError } from '../ui.js';

const me = await boot({ shell: 'client', title: 'Company', eyebrow: 'Your company' });
const render = (p, user) => {
  $('#view').innerHTML = `
  <div class="split">
    <form class="card form-stack" id="co" novalidate>
      <span class="label">Company data</span>
      <div class="field"><label for="c-name">Company name</label><input class="input" id="c-name" name="company_name" value="${esc(p.company_name)}"></div>
      <div class="form-grid">
        <div class="field"><label for="c-form">Legal form</label><input class="input" id="c-form" name="legal_form" value="${esc(p.legal_form)}"></div>
        <div class="field"><label for="c-reg">Handelsregister number</label><input class="input" id="c-reg" name="register_number" value="${esc(p.register_number)}"><span class="hint">Changing it runs the simulated check again.</span></div>
        <div class="field"><label for="c-vat">VAT ID</label><input class="input" id="c-vat" name="vat_id" value="${esc(p.vat_id)}"></div>
        <div class="field"><label for="c-city">City</label><input class="input" id="c-city" name="city" value="${esc(p.city)}"></div>
        <div class="field"><label for="c-role">Your role</label><input class="input" id="c-role" name="contact_role" value="${esc(p.contact_role)}"></div>
        <div class="field"><label for="c-web">Website</label><input class="input" id="c-web" name="website" value="${esc(p.website)}"></div>
      </div>
      <button class="btn" type="submit">Save company</button>
    </form>
    <section class="card"><span class="label">Verification status</span>
      <div class="stack mt-12 small" style="--gap:12px">
        <div class="row" style="flex-wrap:nowrap">${icon(user.status === 'verified' ? 'circle-check' : 'hourglass', 17)}<span>Work email ${user.status === 'verified' ? 'verified' : 'not verified yet'}: ${esc(user.email)}</span></div>
        <div class="row" style="flex-wrap:nowrap">${icon(p.register_check === 'passed' ? 'circle-check' : p.register_check === 'failed' ? 'circle-x' : 'hourglass', 17)}<span>Company register check: ${esc(p.register_check)}</span></div>
        <div class="row" style="flex-wrap:nowrap">${icon('receipt', 17)}<span>Plan: pay per brief. Posting is free.</span></div>
      </div>
      <div class="mt-16">${statusBadge(p.register_check)}</div>
      <p class="xs faint mt-16">Simulated check: numbers starting HRB or HRA followed by digits pass. Anything else goes to manual review by the Kontrak team. A live version would query the Handelsregister.</p>
    </section>
  </div>`;
  $('#co').addEventListener('submit', async (e) => {
    e.preventDefault();
    const f = e.currentTarget, btn = f.querySelector('button[type=submit]');
    showFormError(f, null); busy(btn, true, 'Saving…');
    try { const r = await put('/api/me/company', formData(f)); toast(`Company saved. Register check: ${r.profile.register_check}.`); render(r.profile, r.user); }
    catch (err) { showFormError(f, err.message); busy(btn, false); }
  });
};
render(me.profile, me.user);
