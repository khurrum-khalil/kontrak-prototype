# UI kit — Kontrak marketing site

Click-through recreation of the public site. `index.html` boots a tiny hash-free router over four screens:

| Screen | File | Notes |
| --- | --- | --- |
| Home | `Home.jsx` | Navy hero + live-briefs card, proof stat row, four-step explainer, visa hour-cap band, serif pull quote |
| Browse briefs | `BrowseWork.jsx` | Filter bar (Input/Select/Tag/Switch), underline Tabs, two-column GigCard grid |
| Brief detail | `GigDetail.jsx` | Sticky bid sidebar, Stepper, bid Dialog → success Toast |
| Sign-up | `SignUp.jsx` | Split navy/light layout, role choice, visa fields, Stepper |
| Shared chrome | `Chrome.jsx` | Sticky blurred header, navy four-column footer |

Everything is composed from `window.KontrakDesignSystem_5cbea0` — no primitives are re-implemented here.

Content note: copy, stats and client names are illustrative. The brand source we were given was a logo/identity sheet only, so product copy is written to the tone rules in `readme.md` rather than lifted from a live site.
