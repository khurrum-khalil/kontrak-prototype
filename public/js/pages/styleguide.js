import { boot } from '../chrome.js';
import { $, briefCard, openDialog, toast } from '../ui.js';

await boot({ shell: 'site' });
$('#sg-brief').innerHTML = briefCard({ id: 'B-0001', title: 'Review a SaaS reseller agreement', client: { company_name: 'Aurelis Studio', verified: true }, location_mode: 'Remote', city: 'Berlin', practice_areas: ['Commercial', 'SaaS & IT'], fee_cents: 48000, scoped_hours: 14, effective_hourly_cents: 3429, day_cap_safe: true, jurisdiction: 'Germany', deadline: new Date(Date.now() + 864e5 * 27).toISOString().slice(0, 10) });
$('#sg-dialog').onclick = () => openDialog({ eyebrow: 'Escrow', title: 'Release €480 to Aisha Rahman?', body: '<p>Once released, this payment can\'t be reversed.</p>', actions: [{ label: 'Not yet', variant: 'ghost' }, { label: 'Sign off and release', variant: 'accent' }] });
$('#sg-toast').onclick = () => toast('Northlane Studio usually replies within a day.', { title: 'Bid sent' });
$('#sg-toast-err').onclick = () => toast('Enter a valid university email.', { tone: 'error', title: 'Not done' });
