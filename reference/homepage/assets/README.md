# Kontrak website — HTML project

Open `index.html` in a browser. It works straight from disk (double-click) and over a server.

```bash
python3 -m http.server 8000     # optional: http://localhost:8000
```

## Structure

```
index.html                 the page you open — screens embedded, ready to run
index.template.html        page shell (head, router, motion keyframes) with a <!-- SCREENS --> marker
build.py                   rebuilds index.html from the template + js/*.jsx
css/styles.css             single stylesheet entry (@imports the tokens)
css/tokens/*.css           colours, type, spacing, radius/shadow, motion, base reset
lib/kontrak-ds.js          compiled Kontrak component library (window.KontrakDesignSystem_5cbea0)
js/chrome.jsx              sticky header + navy footer
js/home.jsx                landing page (staggered hero, scroll reveals, counters)
js/browse-work.jsx         briefs feed with filters
js/gig-detail.jsx          brief detail, bid dialog
js/visa-rules.jsx          German §16b rules, minimum wage, earnings estimator
js/for-clients.jsx         client-side pitch, post-a-brief, vetting
js/pricing.jsx             plans, fee table, worked example, FAQ
assets/*.svg               logo lockups, marks, app icon
```

## Editing

`js/*.jsx` are the sources. Change one, then run `python3 build.py` to regenerate `index.html`.
(Without the rebuild step, opening over `file://` shows a blank page, because browsers refuse
to fetch the separate `.jsx` files from disk — that is why they are embedded.)

Layout, routing and the animation keyframes live in `index.template.html`.

## Routes

A small state router: `home`, `work`, `gig`, `visa`, `clients`, `pricing`, `signup`. Header and footer links call `go(route)`.

## External dependencies (network required)

| What | Why |
| --- | --- |
| React 18.3.1 + ReactDOM (unpkg) | rendering |
| Babel standalone 7.29.0 (unpkg) | transpiles the embedded JSX in the browser |
| Google Fonts (Syne, DM Sans, Cormorant Garamond) | brand typefaces, via `css/tokens/fonts.css` |
| Lucide 0.474.0 icon SVGs (unpkg) | iconography, masked to `currentColor` |

To go fully offline: self-host the fonts as `@font-face` in `css/tokens/fonts.css`, drop the Lucide
SVGs into `assets/icons/`, and precompile the JSX with a real build step so Babel is not needed at runtime.

## Notes

- Product copy, fees and client names are illustrative. The German legal figures on the Visa & rules page are real and sourced (§16b(3) AufenthG · MiLoV5 · Geringfügigkeitsgrenze), but the page is information, not legal advice.
- Styling is token-driven: change a value in `css/tokens/colors.css` and it propagates across every screen.
- Screen file names are kebab-case so this folder can sit inside the design-system project without its screens being compiled as design-system components.
