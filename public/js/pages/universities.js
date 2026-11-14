import { boot } from '../chrome.js';
import { post } from '../api.js';
import { $, formData, busy, toast, showFormError } from '../ui.js';

await boot({ shell: 'site' });
$('#uni-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const f = e.currentTarget, btn = f.querySelector('button[type=submit]');
  showFormError(f, null); busy(btn, true, 'Sending…');
  try { const r = await post('/api/university-requests', formData(f)); f.reset(); toast(r.message, { title: 'Enquiry sent' }); }
  catch (err) { showFormError(f, err.message); }
  finally { busy(btn, false); }
});
