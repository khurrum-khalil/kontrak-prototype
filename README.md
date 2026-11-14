# Kontrak prototype

**Work legal, work smart.** A working, clickable prototype of Kontrak, the compliance-first legal work platform for non-EU students in Germany.

> Legality is the product. Matching is a feature.

Everything you enter is saved in Excel files in `/data`. Payments, escrow, e-signatures, verification emails and the Handelsregister check are **simulated**, and the site says so in its footer.

---

## 1. Run it

You need **Node.js 18 or newer** ([nodejs.org](https://nodejs.org), LTS version). Check with `node -v`.

| System | Steps |
|---|---|
| **Windows** | Double-click `start.bat`. |
| **Mac / Linux** | In a terminal: `./start.sh` |
| **Any, by hand** | `npm install`, then `npm start` |

Open **http://localhost:3000**. Stop the server with `Ctrl+C`; it saves all workbooks before it exits.

On the first start, the server creates `/data/*.xlsx` with demo data.

### Demo logins

The login page has a **Try the demo** panel with one-click logins. Every demo account uses the password **`Kontrak2026`**.

| Account | Email | Scenario |
|---|---|---|
| Lina Haddad | `lina.haddad@uni-passau.demo` | New student, 0 days used, first job pending |
| Aisha Rahman | `aisha.rahman@hu-berlin.demo` | 86 of 140 days used, active work, 5% fee applies |
| Mehmet Yılmaz | `mehmet.yilmaz@lmu.demo` | 138 days used, so the cap block is easy to show |
| Priya Nandra | `priya.nandra@uni-hamburg.demo` | §16f language course: 20 h a week, no day account |
| Elena Popescu | `elena.popescu@uni-passau.demo` | EU/EEA citizen: no caps |
| Dana Krüger | `dana.krueger@aurelis.demo` | Client with bids to review |
| Clara Ostwald | `clara.ostwald@ostwald-economics.demo` | Client with escrow to fund |
| Felix Brandt | `felix.brandt@kelvin-analytics.demo` | Client with a release request waiting |
| Ben Mor | `ben.mor@studiomor.demo` | Client whose register check is pending |
| Admin | `admin@kontrak.demo` | Admin: users, config, audit log |

### Reset the data

- Terminal: `npm run reset` (stop the server first, or restart it afterwards).
- In the app: log in as admin and click **Reset demo data**.

Run a reset before every live demo. Seed dates are relative to today, so deadlines always look current.

### Tests

`npm test` runs the compliance engine tests with Node's built-in test runner. See `TESTING.md`.

---

## 2. VS Code

- **Run and debug:** open the Run panel and choose **Kontrak: start server**, **Kontrak: run tests** or **Kontrak: reset demo data** (`.vscode/launch.json`).
- **Live Server (front-end only):** `.vscode/settings.json` sets Live Server's root to `/public`. Right-click `public/index.html` and choose *Open with Live Server*. Without the Node server, public pages run in a **read-only demo mode** from `public/js/demo-data.json`, with a yellow banner at the top. The student, client and admin apps need `npm start`.

---

## 3. Folder map

```
kontrak/
  server.js              Express app: static files + JSON API (all routes, validation, role checks)
  server/
    store.js             Excel store: load once, keep in memory, one write queue, 200 ms debounce, flush on exit
    compliance.js        The three gates and day-account maths. Pure functions. Unit-tested.
    domain.js            Student state (day account, week), brief views, audit log, notifications
    contracts.js         Engagement letter generator + printable page
    auth.js              scrypt password hashing, hashed session tokens, login rate limit
    seed.js              Demo data (npm run reset)
  data/                  The Excel workbooks (created on first run, ignored by git)
  test/                  npm test
  public/
    index.html …         Public pages (one HTML file each)
    app/                 Student app
    client/              Client app
    admin/               Admin
    css/tokens/          Design tokens copied from the design system
    css/components.css   Buttons, cards, badges, forms, tabs, stepper, dialog, toast, brief card, gates
    css/site.css         Marketing shell     css/app.css   App shell     css/letter.css   Letter typography
    js/api.js            fetch wrapper + Live Server demo fallback
    js/ui.js             Toast, dialog, tabs, stepper, brief card, formatting
    js/chrome.js         Injects header, footer, cookie notice and the app sidebar
    js/compliance-client.js   Browser mirror of server/compliance.js (instant feedback only)
    js/i18n/en.json, de.json  EN and DE strings for the public pages
    js/pages/*.js        One small module per page
    assets/              Logos (from the design system), favicon, Lucide icons (offline)
  styleguide.html        Every component once (http://localhost:3000/styleguide.html)
```

### The workbooks

| File | Sheets |
|---|---|
| `kontrak_users.xlsx` | users, students, clients, sessions |
| `kontrak_work.xlsx` | briefs, bids, contracts, escrow, hour_log, day_account, saved_briefs |
| `kontrak_comms.xlsx` | messages, notifications, reviews |
| `kontrak_site.xlsx` | waitlist, university_requests, checker_runs, interview_notes |
| `kontrak_config.xlsx` | config, audit_log |

Money is stored as integer cents (`48000` = €480). Dates are ISO. Demo rows have `is_demo = TRUE`.

**Windows note:** Excel locks a file while it is open. If you keep a workbook open, the server keeps the change in memory and retries every 3 seconds. Close the file in Excel to let it save.

---

## 4. Change the rules in Excel

Every rule is read from `data/kontrak_config.xlsx` → sheet `config`. Nothing is hard-coded in the routes.

| key | value | meaning |
|---|---|---|
| `min_wage_hourly_cents` | 1390 (valid from 2026-01-01), 1460 (valid from 2027-01-01) | Statutory minimum wage |
| `weekly_cap_hours` | 20 | Weekly cap |
| `annual_full_days` / `annual_half_days` | 140 / 280 | Day account |
| `full_day_threshold_hours` | 4 | More than this on a date is a full day |
| `platform_fee_pct` / `first_job_fee_pct` / `boost_fee_pct` | 5 / 0 / 3 | Fees |
| `minijob_ceiling_cents` | 60300 | Minijob flag (never blocks) |
| `live_jurisdictions` | Germany | Comma list of live country modules |

There are two ways to change a rule:

- **In Excel:** edit the value, save, and the running server reloads the config within about 2 seconds.
- **In the app:** log in as admin, open **Config**, edit and save. This takes effect immediately.

Every change is written to `audit_log`.

## 5. Edit copy

- **Public page text** lives in the HTML files in `public/`. Pages are plain HTML with no build step.
- **Header, footer, hero, FAQ and waitlist strings** come from `public/js/i18n/en.json` and `de.json`. Elements carry `data-i18n="key"`. The German file starts with a `_review` note: a native speaker must check it.
- **App screens** are built in `public/js/pages/*.js`.
- **Voice rules:** address the reader as *you*, sentence case, no exclamation marks, no emoji, money with symbol and separator (€1,240). Say *brief*, *engagement*, *students*, *clients*. Never *gig*, *seller* or *talent*.

## 6. Add a country module later

The model is **one platform with country-specific compliance modules**, not three marketplaces.

1. **Rules:** add the country's limits to the `config` sheet with a prefix (for example `at_weekly_cap_hours`). Extend `rulesFromConfig()` in `server/compliance.js` to read them into `rules.byCountry.Austria`.
2. **Gates:** in `compliance.js`, pick the rule set by `brief.jurisdiction` inside `withinCap()` and `aboveFloor()`. Austria needs an employment-permit step through the AMS, generally an employer application. That becomes a new pre-contract status, not a change to the gates.
3. **Permit types:** add the country's permit types to `PERMIT_TYPES` and `DEFAULT_WORK_RULE`.
4. **Letter:** add a governing-law variant in `server/contracts.js`.
5. **Go live:** add the country to `live_jurisdictions`. Until then, its briefs stay visible but fail gate 1 ("Austria briefs are not live yet").
6. **Mirror:** copy the changes to `public/js/compliance-client.js` and add test cases. `npm test` checks that both files agree.

## 7. Security notes (prototype level)

- Passwords are hashed with scrypt and a random salt. Plain-text passwords are never stored.
- Sessions use a random token in an HttpOnly, SameSite=Lax cookie. Only its SHA-256 hash is stored.
- Login is rate-limited in memory to 5 failed attempts per 10 minutes.
- Every API mutation requires JSON, every route checks the role, all output is escaped, and CSV exports neutralise formula injection.
- No secrets are in the repository. `/data` and `node_modules` are in `.gitignore`.
