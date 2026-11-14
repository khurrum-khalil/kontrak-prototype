# UI kit — Kontrak student app

Signed-in product surface at 1440×900. `index.html` renders the navy sidebar shell plus one of four screens.

| Screen | File | Notes |
| --- | --- | --- |
| Shell | `Shell.jsx` | Navy 236px sidebar with gold active icons, visa-hours meter pinned to the bottom; serif page title bar |
| Dashboard | `Dashboard.jsx` | Stat row, active-work list with Steppers, matched-briefs rail, visa-hours nudge |
| Find briefs | `Briefs.jsx` | Sticky filter card, search row, GigCard list |
| Contract & escrow | `ContractDetail.jsx` | Engagement letter header, time log, clause excerpt, escrow release Dialog → Toast |
| Messages | `Messages.jsx` | Thread list with gold active rail, navy outbound bubbles, composer |

`payments` in the sidebar intentionally reuses the contract/escrow screen — no payments design existed in the source material, so nothing new was invented for it.
