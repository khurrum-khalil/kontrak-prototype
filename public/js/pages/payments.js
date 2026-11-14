// Payments ledger (simulated), shared by students and clients. Students also export the hour log.
import { boot, setTopActions } from '../chrome.js';
import { api } from '../api.js';
import { $, esc, icon, euro, euro2, fmtDate, statusBadge, empty, errorBox } from '../ui.js';

const shell = document.body.dataset.shell;
const me = await boot({ shell, title: 'Payments', eyebrow: 'Simulated payouts' });
const isStudent = shell === 'student';
const base = isStudent ? '/app' : '/client';
const view = $('#view');
if (isStudent) setTopActions(`<a class="btn btn-secondary btn-sm" href="/api/me/hour-log.csv">${icon('file-spreadsheet', 14)} Hour log CSV</a><a class="btn btn-secondary btn-sm" href="/api/me/hour-log.html" target="_blank" rel="noopener">${icon('printer', 14)} Printable hour log</a>`);

try {
  const { rows, totals } = await api('/api/payments');
  const y = me.today.slice(0, 4);
  view.innerHTML = `
  <div class="callout warn">${icon('triangle-alert')}<div><b>Simulated payouts.</b> No money moves in this prototype. Escrow, card and SEPA steps are labelled as simulations.</div></div>
  <div class="grid-4">
    <div class="stat"><span class="label">In escrow</span><span class="value">${euro(totals.in_escrow_cents)}</span><span class="delta neutral">Funded, not yet released</span></div>
    <div class="stat"><span class="label">${isStudent ? `Paid out (${y})` : `Released (${y})`}</span><span class="value">${euro(totals.released_year_cents)}</span><span class="delta neutral">${isStudent ? 'After Kontrak fees' : 'Signed off and released'}</span></div>
    <div class="stat"><span class="label">${isStudent ? `Fees deducted (${y})` : 'Awaiting your funding'}</span><span class="value">${euro(isStudent ? totals.fees_year_cents : totals.awaiting_cents)}</span><span class="delta neutral">${isStudent ? '0% first job, 5% after' : 'Signed contracts to fund'}</span></div>
    <div class="stat navy"><span class="label">${isStudent ? 'Pending funding' : 'Kontrak fees on your briefs'}</span><span class="value">${euro(isStudent ? totals.awaiting_cents : totals.fees_year_cents)}</span><span class="delta">${isStudent ? 'Signed, client to fund' : 'Paid from student payouts'}</span></div>
  </div>
  <section class="card card-flush" aria-labelledby="ledger-h">
    <div style="padding:20px 24px"><h2 class="label" id="ledger-h">Ledger</h2></div>
    ${rows.length ? `<div class="table-wrap"><table class="table"><thead><tr><th>Contract</th><th>Escrow</th><th>Date</th><th class="num">Amount</th><th class="num">Fee</th><th class="num">${isStudent ? 'You receive' : 'Student receives'}</th></tr></thead><tbody>
    ${rows.map((c) => `<tr><td><a href="${base}/contract.html?id=${c.id}">${esc(c.brief?.title)}</a><div class="xs faint mt-4">${esc(c.id)} · ${esc(isStudent ? c.client.company : c.student.name)}</div></td>
      <td>${c.escrow ? statusBadge(c.escrow.status) : ''}</td><td class="nowrap small">${esc(fmtDate(c.escrow?.released_at || c.escrow?.funded_at || c.created_at))}</td>
      <td class="num">${euro2(c.fee_cents)}</td><td class="num">${c.fees.pct}% · ${euro2(c.fees.feeCents)}</td><td class="num"><b>${euro2(c.fees.netCents)}</b></td></tr>`).join('')}
    </tbody></table></div>` : empty('wallet', 'No payments yet', 'Escrow records appear here once a contract is created.')}
  </section>
  ${isStudent ? `<section class="card card-sm"><span class="label">Hour log for the Ausländerbehörde</span><p class="small muted mt-8">Export every logged hour with date, contract ID, employer and day type. Your day account also includes days you entered for other employers.</p>
    <div class="row mt-12"><a class="btn btn-secondary btn-sm" href="/api/me/hour-log.csv">${icon('download', 14)} Download CSV</a><a class="btn btn-secondary btn-sm" href="/api/me/hour-log.html" target="_blank" rel="noopener">${icon('printer', 14)} Print or save as PDF</a></div></section>` : ''}`;
} catch (e) { view.innerHTML = errorBox(e); }
