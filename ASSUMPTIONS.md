# Assumptions and decisions

Where the sources were silent or disagreed, this is what the prototype does. The pitch (`reference/pitch/`) always won over the older prototype.

## A. Product and legal model

1. **Hero headline.** For a first-time student visitor, the hero uses "Paid legal work that fits your permit". It names the visitor's concern directly. The core message "Legality is the product. Matching is a feature." sits directly under it as a serif line.
2. **Work rules.** The data model listed three `work_rule` values. A §16b student has both limits, so a fourth value was added: `140/280 days + 20 h per week`, the default for §16b and §20. The other defaults are §16f → `20 h per week`, and EU/EEA → `no restriction`. Gate 2 applies the day account only when the rule contains "140/280" and the weekly cap only when it contains "20 h".
3. **Weekly cap all year.** By law the 20 h cap applies only in the lecture period. The prototype applies it year-round as a conservative default, because lecture periods vary by university. This is stated on the Day-Cap Checker page.
4. **Reserved days.** Gate 2 subtracts half days already reserved by signed, not-yet-logged work (`awaiting_signatures`, `signed`, `in_progress`). Without this, a student could over-book by bidding on several briefs at once. The sidebar shows the reserved days.
5. **Planned hours this week.** For each active engagement, the remaining hours are spread evenly from today to the deadline. This week's share counts against the weekly cap, together with the hours already logged this week.
6. **Work pattern.** `ceil(hours / 4)` is generalised to sessions of the chosen length (2 h, 4 h or 8 h). Full sessions plus one remainder session are counted. A session over 4 h is a full day, which uses two half-day units.
7. **Wage floor over the work period.** Gate 3 uses the highest minimum wage in force between today and the deadline. Work that runs into 2027 must reach €14.60.
8. **Minijob flag.** Monthly gross is estimated as the fee divided by the number of months between today and the deadline (minimum one). Above €603, the bid gets a flag. It is never blocked.
9. **Logging hours.** Logging is a hard gate too: an entry is refused if it would pass the day account, the weekly cap (logged hours in that ISO week) or the scoped hours. Entries are allowed for today or earlier, in the current year, from 0.25 to 10 h in quarter-hour steps. When a date's total passes 4 h, its earlier half day becomes a full day.
10. **Day account baseline.** Seeded day accounts include days worked for other employers, because the legal limit counts all employment. Students cannot edit the counters themselves; the note says to contact the team.
11. **Day-Cap Safe.** A brief is labelled Day-Cap Safe when its scoped hours fit 20 h a week across its timeline, its rate reaches the floor, and its jurisdiction is live. The student's own account is still checked at bid time.
12. **Gates re-run on acceptance.** When a client accepts a bid, the server runs all three gates again for that student. A student can change state between bidding and acceptance.
13. **Blocked bids are not stored as bids.** They are written to `audit_log` (`bid.blocked`, with the gate and reason). Allowed bids store the full gate result in `bids.gate_result`.
14. **Fee timing.** The fee is shown at contract creation and **recalculated at release**: 0% if the student's first job has not been released yet, 5% after that, plus 3% if the bid was boosted. `first_job_done` turns true on the first release. If a student has two engagements open at once, the first one released is the free one.
15. **Boost.** "Promote a bid" means the bid is labelled Boosted for the client. The 3% is charged only on payout, so nobody pays before earning.
16. **Engagement letter wording.** The parties are "the Employer" and "the Student Employee". The brief's example clause used "the Consultant", but that term suggests freelancing, which the pitch's legal model rules out. The letter carries the banner "Template for prototype purposes. Not reviewed by a lawyer." It does not claim to be lawful.
17. **Contract IDs.** Format `KTK-<year>-<nnnn>`. The seed starts at 0405 so the numbers look like a running system. New contracts continue from the highest number.
18. **Contract lifecycle.** `awaiting_signatures` → (both sign) `signed` → (client funds) `in_progress` → (student requests release) `delivered` → (client releases) `signed_off` → (both reviewed) `closed`. Hours can be logged only while `in_progress`, so escrow is funded before work starts.
19. **Non-live jurisdictions.** Clients may post Austria, Switzerland or EU-wide briefs. They are listed with "not live yet" and fail gate 1 for every student.
20. **Posting rules for clients.** Publishing needs a verified work email and a passed register check. Pending clients can look around but cannot publish or accept bids.
21. **Register check.** Numbers starting with `HRB` or `HRA` followed by digits pass. Anything else is `pending` for admin review. Changing the number re-runs the check.
22. **University email check.** The domain must look academic (`uni-`, `tu-`, `hs-`, `fh-`, `lmu`, `tum`, `rwth`, `stud`, `…universit…`, `…hochschule…` and similar). It must end in `.de`, `.at`, `.ch`, `.eu`, `.edu` or `.demo`. Client sign-up rejects free-mail domains.
23. **Messages are per contract.** Pre-contract threads were not built. Questions before acceptance go in the cover note. This keeps every message traceable to one contract ID.
24. **Saved briefs.** "Saved" needed storage that the data model did not list, so a `saved_briefs` sheet was added to `kontrak_work.xlsx`.
25. **Fee type filter.** Every brief is a fixed fee with scoped hours, so the old "fee type" filter would have done nothing. It became a **minimum hourly rate** filter.
26. **Market figures.** Only 209,000 (DAAD / DZHW 2025) is labelled as sourced. The figures 3,120, 25%, 780, 35%, 270 and 110 to 120 are labelled as assumptions, as in the pitch.
27. **No invented proof.** There are no testimonials, press logos, partner universities or user counts. The proof strip shows live counts from the Excel data with a "Demo data" tag while demo rows exist. Interview notes start empty: the pitch lists interviews as the next step.
28. **Comparison table.** Copied from the pitch, including "about 10% (variable)" for Upwork and the source line.

## B. Conflicts resolved in favour of the pitch

| Old prototype | Now |
|---|---|
| £ and "England & Wales" | € and Germany; engagement letter under German law |
| Client fee 8%, "Chambers" €490 subscription, "students keep their full fee" | €0 to find work, 0% first job, 5% after (from the student's payout), +3% optional boost, posting free for clients |
| "Visa-safe", "Visa hours" | "Day-Cap Safe" badge, "Day account" and "Hours this week" meters, "Fits my remaining days" toggle |
| Werkvertrag wording | Employment contract and engagement letter under German law. "Werkvertrag" appears only in the About page milestone ("Legal model corrected") |
| Invented stats (2,400+ students, €2.1M paid, 0 breaches) and a testimonial | Removed. Live counts from the data, sourced pitch figures |
| "Legal freelancing" positioning | Employment positioning: freelancing needs separate permission |
| Scroll reveal and count-up animations on the homepage | Removed (brand rule: no slide-in on scroll) |
| "Kontrak Ltd." in the footer | "© 2026 Kontrak · Universität Passau · PATEC" |
| Social security claims in the visa page | Simplified and labelled as simplified; payroll is not modelled |

## C. Technical decisions

1. **Node.** The build machine had no Node installed, so a portable Node 20 was used to build and test. The team needs Node 18 or newer (see README).
2. **Server size.** The brief suggested about 300 lines of backend. The full API, with validation, role checks and messages that follow the voice rules, needed more. It is split across `server.js` and five small modules in `server/`.
3. **Lucide icons.** The design system pinned lucide-static 0.474.0, which does not exist on npm. The icons came from lucide-static 1.72.0, outline style, with the stroke set to 1.5. They are stored offline in `public/assets/icons/` and coloured through a CSS mask, so they inherit the text colour.
4. **Logo.** The mark SVGs from the design system are used unchanged. The lockup SVGs render their wordmark with SVG text, which cannot load web fonts when used as an image. The wordmark is therefore HTML in Syne Bold with the gold "AK", following the proportions in `Logo/Logo.html`: icon, fading divider, wordmark, and the tagline in 8 to 9 px with 3 px tracking. On navy, "AK" uses gold-light `#E4B35A`, as on the identity sheet.
5. **Fonts** load from Google Fonts with `display=swap`. Offline, the system fonts take over.
6. **Sessions** use random tokens. Only the SHA-256 hash is stored in `sessions`, so a leaked workbook does not leak live sessions.
7. **CSRF.** API mutations must be sent as JSON. With SameSite=Lax cookies, this blocks cross-site form posts.
8. **Excel edits while running.** The config workbook is watched and reloaded. Other workbooks are read once at start; edit them with the server stopped, or the server's next write overwrites the edit.
9. **German copy.** The German strings are a draft written without a native speaker and are marked `_review` in `de.json`. The app interface stays in English, as in the pitch.
10. **Placeholder domain.** Canonical, Open Graph and sitemap URLs use `https://kontrak.example` until the team has a domain.
11. **Briefs.** The seed has 19 briefs (12 open, 7 in progress or completed) rather than 12 to 16. Every contract status needs a brief behind it.

## D. What the team must validate before anything goes live

- Engagement letter wording, the employment classification and every legal statement, with a qualified lawyer.
- Permit practice per Ausländerbehörde and per Bundesland: wording variants, the lecture-period rule and exempt work.
- Payroll, tax and social-insurance handling for each engagement, including Werkstudent and Minijob status.
- German translations, with a native speaker.
- Real Handelsregister checks (for example through a register data provider).
- A licensed payment or escrow provider, and a qualified e-signature provider.
- Real verification emails and a privacy notice under Art. 13 GDPR; Impressum, Datenschutz and AGB are drafts.
- Market assumptions (3,120 reachable, 25% sign-up, 35% active) through the pilot and user interviews.
