# Testing

## 1. Automated tests

```
npm test
```

Runs `test/compliance.test.js` with Node's built-in test runner (16 tests). They cover:

- Exactly 140 full days used: any bid is blocked.
- 139.5 days used and a bid needing one full day: blocked.
- 138 days used and a 44 h brief: blocked with "This bid needs 11 half days. You have 4 left in 2026."
- A 20.5 hour week is blocked; 20 hours passes.
- Hours logged and planned this week count against the cap.
- €13.89 per hour is blocked, €13.90 passes.
- The 2027 floor: work running into 2027 must reach €14.60.
- EU/EEA citizens: no day account, no weekly cap.
- First job 0%, later jobs 5%, boost +3%.
- €480 for 14 h = €34.29 per hour.
- Gate 1: permit type, jurisdiction, verification and duplicate bids.
- Day account moves from half to full day when a date passes 4 h.
- Rules read from config rows.
- **Mirror check:** `public/js/compliance-client.js` returns exactly the same results as `server/compliance.js`.

The full demo walkthrough below was also run end to end in headless Chrome during the build, with no browser errors. Every page was opened as a guest, a student, a client and an admin, with no console errors.

## 2. Manual checklist

Run `npm run reset`, then `npm start`.

**Public site**
- [ ] Homepage: all 16 sections render. The hero checker updates as you type and shows "Briefs you could take today".
- [ ] Proof strip shows live counts and the "Demo data" tag.
- [ ] Gate mini-demo: set the fee to 98 for 10 h; gate 3 turns red with the €13.90 reason.
- [ ] EN / DE toggle switches the header, hero, FAQ, waitlist and footer. The choice persists on reload.
- [ ] Waitlist: submitting without the consent box shows an error; with it, a toast. The row appears in `kontrak_site.xlsx` → waitlist.
- [ ] University form posts to `university_requests`.
- [ ] Find work: filters, practice-area chips, sort, "Posted today" and "Fits my remaining days" all change the list.
- [ ] Day-Cap Checker page: "See the briefs you could take" opens Find work filtered to your numbers.
- [ ] Visa and rules: the estimator sliders update the gross figure. The Minijob tab warns above €603.
- [ ] Pricing: the fee calculator shows €0 on a first job and €24 on a later €480 job.
- [ ] Cookie notice appears once and stays dismissed.
- [ ] Mobile widths 360, 768, 1024 and 1440 px: no horizontal scroll, menu button works.
- [ ] Keyboard: Tab through the header, use the skip link, open and close a dialog with Escape.

**Student app** (Aisha)
- [ ] Sidebar meters show the day account (86 of 140) and hours this week.
- [ ] Dashboard tabs: Active work, My bids (withdraw works), Completed.
- [ ] Find briefs: Matched hides the Austria and EU-only briefs; All open shows them greyed with a reason; Save adds to Saved.
- [ ] Contract KTK-2026-0410: log 2 h today; the meters and the time log update.
- [ ] Payments: the CSV downloads, and the printable hour log opens.
- [ ] Profile: edit the bio and practice areas, then save.

**Client app** (Dana)
- [ ] Post a brief: €100 for 10 h is blocked with the floor reason. €480 for 14 h shows "Publish to N verified students".
- [ ] Bids: each bid shows the student's days and hours left. Decline works.
- [ ] Company: change the register number to `ABC 1`; the check turns pending.

**Admin**
- [ ] Overview funnel, gate-block counts, market logic labelled as assumptions.
- [ ] Users: verify, suspend, pass or fail a register check.
- [ ] Config: change `weekly_cap_hours` to 18; the student sidebar shows "of 18 h" after a reload. Change it back.
- [ ] Waitlist CSV downloads. An interview note saves.
- [ ] Reset demo data logs you out and restores the seed.

**Persistence**
- [ ] Stop the server (Ctrl+C), start it again: the new sign-ups, bids and contracts are still there.
- [ ] Open each `.xlsx` in Excel: navy header row, frozen, filters on, readable columns.

## 3. Live demo script (about 8 minutes)

Before the demo, run `npm run reset` and `npm start`. Use two browser windows: a normal one for the student and a private one for the client.

| # | Time | Who | Do this | Say this |
|---|---|---|---|---|
| 1 | 0:00 | Guest | Open http://localhost:3000. In the hero checker, type 86 days and 12.5 h. | "Before anyone signs up, a student can see how many days they have left. 54 days, 7.5 hours this week." |
| 2 | 0:45 | Student | Click **Join as a student**. Fill in Sara Karimi, `sara.karimi@uni-passau.de`, §16b, the permit wording, Commercial and Data protection, a password, and tick "I confirm my permit allows paid employment". Click **Create student account**, then **Open verification link**. | "University email and permit wording are checked. The verification email is simulated." |
| 3 | 1:45 | Student | Open **Find briefs**. Point at the sidebar meters. Switch to **All open**. | "Matched shows only briefs Sara can legally take. The Austria brief and the EU-only sprint are greyed out with the reason." |
| 4 | 2:30 | Student | Back on Matched, open **Supplier-contract red-flag summary, 30 contracts** (44 h, due in under a week). | "Gate 2 is red: this bid adds more than 20 hours a week. The button is disabled. Even if someone bypasses the button, the server refuses it." |
| 5 | 3:15 | Student | Open **Review a SaaS reseller agreement**. Write a cover note and click **Send bid**. | "€480 for 14 hours is €34.29 an hour, well above the €13.90 floor. All three gates are green, and this is her first job, so the fee is 0%." |
| 6 | 3:45 | Client | Private window: **Log in** → Try the demo → **Dana Krüger**. Go to **Bids** and pick the SaaS brief. | "Each bid shows the student's remaining days and hours, as promised to clients." |
| 7 | 4:15 | Client | **Accept bid** on Sara's card and confirm. Type "Dana Krüger", tick the box, **Sign engagement letter**. Open the letter. | "One contract ID ties the letter, escrow, messages and hour log together." |
| 8 | 5:00 | Student | Open the contract from the dashboard. Type "Sara Karimi", tick, **Sign**. | "Both sides sign in the app. Employment contract, German law." |
| 9 | 5:20 | Client | Reload. **Fund escrow** → SEPA (simulated) → **Fund escrow**. | "The money sits in escrow before work starts." |
| 10 | 5:45 | Student | Reload. Log 3 h, then 2.5 h for today. Watch the sidebar. | "The day account moves: 3 plus 2.5 hours on one date is a full day, and the meter shows 1 of 140." |
| 11 | 6:30 | Student | **Request release**, tick the box, confirm. | "The student says the deliverable is done." |
| 12 | 6:50 | Client | Reload. **Sign off and release**. Read the dialog line aloud, tick, confirm. | "Once released, this payment can't be reversed. First job: Kontrak fee 0%. Sara receives the full €480." |
| 13 | 7:20 | Student | Open **Find briefs** → **Cookie consent and banner audit**. Point at the fee preview. | "From the second job, Kontrak takes 5%, from money already paid out. €280 becomes €266. Nobody pays before they earn." |
| 14 | 7:45 | Any | Optional: log in as **Mehmet Yılmaz** and open the 44 h brief. | "138 days used: 'This bid needs 11 half days. You have 4 left in 2026.' A hard gate, not a warning." |

If something goes wrong on stage, log in as admin and click **Reset demo data**, or run `npm run reset`.
