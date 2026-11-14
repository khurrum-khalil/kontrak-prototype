import { boot, updateMeters } from '../chrome.js';
import { put } from '../api.js';
import { $, esc, icon, fmtDate, statusBadge, formData, busy, toast, showFormError } from '../ui.js';

const AREAS = ['Commercial', 'Data protection', 'Employment', 'Corporate', 'IP & licensing', 'AI & regulation', 'Fintech', 'Regulatory', 'Competition', 'Tax', 'Due diligence', 'Research', 'Drafting', 'SaaS & IT'];
const me = await boot({ shell: 'student', title: 'Profile', eyebrow: 'Your account' });
const p = me.profile, s = me.state;
const areas = new Set(String(p.practice_areas || '').split('|').filter(Boolean));
const yes = (ok, text) => `<div class="row" style="flex-wrap:nowrap;align-items:flex-start">${icon(ok ? 'circle-check' : 'hourglass', 17)}<span>${text}</span></div>`;

$('#view').innerHTML = `
<div class="split">
  <form class="card form-stack" id="profile" novalidate>
    <span class="label">Profile clients see with your bids</span>
    <div class="field"><label for="p-uni">University</label><input class="input" id="p-uni" name="university" value="${esc(p.university)}"></div>
    <div class="field"><label for="p-bio">Bio</label><textarea class="textarea" id="p-bio" name="bio" rows="4" maxlength="600">${esc(p.bio)}</textarea><span class="hint">Two or three sentences on your focus and experience.</span></div>
    <div class="field"><span class="field-label" id="pa-l">Practice areas</span><div class="tags" role="group" aria-labelledby="pa-l">${AREAS.map((a) => `<label class="check tag" style="gap:6px"><input type="checkbox" name="practice_areas" value="${esc(a)}" data-multi="1" ${areas.has(a) ? 'checked' : ''} style="width:14px;height:14px;margin:0">${esc(a)}</label>`).join('')}</div></div>
    <div class="field"><label for="p-lang">Languages</label><input class="input" id="p-lang" name="languages" value="${esc(p.languages)}"></div>
    <div class="form-grid">
      <div class="field"><label for="p-valid">Permit valid until</label><input class="input" id="p-valid" name="permit_valid_until" type="date" value="${esc(String(p.permit_valid_until || '').slice(0, 10))}"></div>
      <div class="field"><label>Permit type</label><input class="input" value="${esc(p.permit_type)}" disabled></div>
    </div>
    <div class="field"><label for="p-note">Permit wording</label><textarea class="textarea" id="p-note" name="permit_wording_note" rows="3">${esc(p.permit_wording_note)}</textarea><span class="hint">To change your permit type, contact the Kontrak team so your eligibility can be checked again.</span></div>
    <button class="btn" type="submit">Save profile</button>
  </form>
  <div class="stack" style="--gap:20px">
    <section class="card"><span class="label">Verification status</span>
      <div class="stack mt-12 small" style="--gap:12px">
        ${yes(me.user.status === 'verified', `University email ${me.user.status === 'verified' ? 'verified' : 'not verified yet'}: ${esc(p.university_email)}`)}
        ${yes(p.permit_confirmed === true || p.permit_confirmed === 'true', 'You confirmed that your permit allows paid employment')}
        ${yes(!!p.permit_wording_note || p.permit_type === 'EU/EEA citizen', p.permit_wording_note ? 'Permit wording recorded' : 'Permit wording not needed for EU/EEA citizens')}
        ${yes(true, `Work rule: ${esc(p.work_rule)}`)}
      </div>
      <div class="row mt-16">${statusBadge(me.user.status)}${p.verified_at ? `<span class="small muted">since ${esc(fmtDate(p.verified_at))}</span>` : ''}</div>
    </section>
    <section class="card"><span class="label">Your limits · ${s.year}</span>
      <div class="rows small mt-8">
        ${s.appliesDays ? `<div><span class="muted">Day account used</span><b>${s.usedDays} of ${s.caps.fullDays} days</b></div><div><span class="muted">Reserved for signed work</span><b>${s.reservedDays} days</b></div><div><span class="muted">Left</span><b>${s.remainingDays} days</b></div>` : '<div><span class="muted">Day account</span><b>Does not apply</b></div>'}
        ${s.appliesWeekly ? `<div><span class="muted">This week</span><b>${s.weekCommitted} of ${s.caps.weekly} h</b></div>` : '<div><span class="muted">Weekly cap</span><b>Does not apply</b></div>'}
        <div><span class="muted">First job fee</span><b>${p.first_job_done === true || p.first_job_done === 'true' ? 'Used · 5% from now on' : '0% on your next payout'}</b></div>
      </div>
      <p class="xs faint mt-12">Days worked for other employers count too. Tell the Kontrak team if your account needs correcting.</p>
    </section>
  </div>
</div>`;

$('#profile').addEventListener('submit', async (e) => {
  e.preventDefault();
  const f = e.currentTarget, btn = f.querySelector('button[type=submit]');
  showFormError(f, null); busy(btn, true, 'Saving…');
  try { const r = await put('/api/me/profile', formData(f)); updateMeters(r.state); toast('Profile saved.'); }
  catch (err) { showFormError(f, err.message); }
  finally { busy(btn, false); }
});
