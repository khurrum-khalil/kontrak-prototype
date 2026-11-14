# Kontrak Design System

**Kontrak — Work Legal, Work Smart.** Legal freelancing for international students: a marketplace where law students take on paid, scoped contract work from vetted clients, with the engagement letter, the hour cap and the escrow payment all handled inside the platform. Positioned against Fiverr and Upwork, but for a regulated field and a user group whose right to work is conditional — so the brand reads like a law firm, not a gig app.

## Sources we were given

| Source | Path | What it contained |
| --- | --- | --- |
| Brand identity sheet | `uploads/kontrak-final-logo.html` | The final logo system: split-K mark, KONTRAK wordmark with gold "AK", tagline lockup, on-white / on-navy / on-gold variants, app-icon sizes, the four brand colours, and the two typefaces |

That was the only source. **No codebase, Figma file, live site, deck or product screenshot was provided.** Everything in this system is therefore either (a) lifted verbatim from the identity sheet — colours, type, radii, shadow values, tracking, the fade-divider motif — or (b) an extrapolation built on those values and flagged below.

### What was extrapolated (and needs your sign-off)
- **Colour scales.** The sheet gives four colours. Navy, gold, warm-neutral and status scales were derived from them.
- **Component inventory.** With no component source to enumerate, the standard set was authored: Button, IconButton, Card, Badge, Tag, Avatar, Icon, Field, Input, Textarea, Select, Checkbox, Radio, Switch, Tabs, Stepper, Dialog, Toast, Tooltip.
- **Intentional additions.** `Icon` (wrapper for the substituted Lucide set), and three domain components the marketplace can't be shown without: `GigCard`, `Rating`, `StatTile`.
- **Product copy.** All UI-kit copy, stats, client names and figures are illustrative, written to the tone rules below.
- **Iconography.** Substituted — see ICONOGRAPHY.

---

## CONTENT FUNDAMENTALS

**Vibe.** Chambers, not startup. The reader is a smart law student who is anxious about two things: money and immigration status. Copy earns trust by being precise and unhedged. Confidence comes from specificity, never from adjectives.

**Person.** Address the reader as **you**; the company is **we** and appears sparingly. Never "I". Never the product's own name as a subject where "we" would do — write "We enforce your cap", not "Kontrak enforces your cap", except in legal or explanatory contexts where the platform is an actor ("Kontrak generates the engagement letter").

**Casing.**
- Headlines and body: **sentence case.** "Paid legal work that fits your visa."
- Eyebrows, labels, badges, section markers: **UPPERCASE with 2.5–4px tracking.** "OPEN BRIEFS", "ESCROW", "ON WHITE".
- Never title case. Never ALL CAPS in a sentence.

**Register.** British-leaning legal English where a choice exists ("adviser", "£", "practice area", "engagement letter"). Money always carries its symbol and thousands separator: £420, £1,240, £1.9M.

**Sentence shape.** One idea per sentence, 12–22 words. Lead with the concrete noun. Prefer the active voice everywhere except contract-clause text, where passive legal register is correct and deliberate:
- UI: "The client funds escrow before you start."
- Clause: "The Consultant shall deliver a marked-up copy of the Reseller Agreement…"

**Numbers as proof.** Where a claim can be a number, make it one — "0 visa breaches", "7.5 hours left this week", "£380 average fee". Never round a real figure up for effect.

**What we never write.** No exclamation marks. No emoji. No "unlock", "supercharge", "seamless", "revolutionise", "hustle", "side gig". The word *gig* is avoided in user-facing copy — the unit of work is a **brief**, the relationship is an **engagement**, the person is a **student** or a **client**, never a "seller" or "talent".

**Examples, verbatim from this system.**
- Hero: "Paid legal work that fits your visa"
- Sub: "Kontrak matches law students with real contract work from vetted clients. Every brief is hour-capped, every fee sits in escrow, every engagement is a signed contract."
- Reassurance: "Your hour cap is a hard limit, not a warning"
- Empty-hand honesty: "Once released, this payment can't be reversed."
- Consent: "I confirm my visa allows paid work" / "Kontrak enforces your cap and keeps an exportable hour log."
- Toast: "Bid sent — Northlane Studio usually replies within a day."

**Error and risk copy.** Say what happened and what to do, in that order, with no apology: "Enter a valid university email." For irreversible actions, state the irreversibility in the dialog body, not in a warning banner.

---

## VISUAL FOUNDATIONS

**The idea.** Legal paper, modernised. Warm off-white stock, ink-black text, deep navy for authority, and a single gold accent standing in for the seal or signature. The split K in the mark — white upper arm, gold lower arm — reads as the two sides of a contract; gold is always "the student's side".

**Colour.**
- Backgrounds are **warm**, never pure white and never grey: `--warm-white #F7F5F0` for pages, `--parchment #EDE9E0` for sunken bands, `#FFFFFF` reserved for cards so they lift off the page without a shadow doing the work.
- `--navy-900 #0D1B2A` carries authority: hero, footer, sidebar, primary buttons, message bubbles, tooltips, modal scrim.
- `--gold-600 #C8922A` is an **accent, never a surface for reading.** Legal uses: the AK in the wordmark, the one highest-intent button per screen, active tab underlines, the "on" state of a Switch, completed Stepper steps, verification dots, stars, and active-nav icons. Body text never sits on gold; only short white labels do.
- Status colours are deliberately desaturated and document-like (`#1F7A5C`, `#B8801C`, `#A32B22`). No neon, no traffic-light saturation.
- Two background colours per surface, maximum: warm-white plus one of parchment or navy.

**Type.** Three families, each with one job.
- **Cormorant Garamond Light (300)** — display and editorial: page H1s, dialog titles, pull quotes. Set at 26–64px, line-height 1.1–1.35, letter-spacing −0.01em at the largest sizes. This is what makes the brand feel like a legal document rather than a SaaS dashboard.
- **Syne Bold/SemiBold (600–700)** — the wordmark, UI headings, card titles, and **all numbers that matter** (fees, hours, stats). Uppercase Syne carries 2–3px tracking.
- **DM Sans Light/Regular (300–500)** — everything else: body at 16px/1.6 light, UI at 14px regular, labels at 9–10px.
- The **eyebrow/label system is the brand's signature**: 9–10px, uppercase, 2.5–4px tracking, `--text-faint`, never bold. Every section, card and field is introduced by one.

**Spacing & layout.** Content maxes at 1200px with 40px page gutters. Cards use a 36px gutter (20px in dense contexts). Section rhythm is 64–96px vertical. The app shell is a fixed 236px navy sidebar with a sticky serif title bar; the marketing header is sticky, 76px, translucent. Sticky sidebars (bid panel, filters) at `top: 24–100px`.

**Backgrounds.** Flat colour only. **No gradients as decoration** — the only gradients in the system are functional: the fade-out hairline rules (`--rule-fade`, `--rule-fade-h`) taken from the divider in the logo lockup, and `--scrim-navy`, a bottom-up navy protection gradient for text over photography. No patterns, no textures, no noise, no hand-drawn illustration. No decorative SVG shapes. Imagery, when it exists, should be cool-toned, low-contrast documentary photography of workspaces and paper; sat behind `--scrim-navy` when it carries text. **This system ships no photography** — none was provided.

**Borders & hairlines.** 1px, and quiet: `--border-hairline #DDD` inside cards, `--border-subtle #E5E2D9` between warm surfaces, `--border-strong #D8D3C8` on inputs and secondary buttons, `rgba(255,255,255,0.12)` on navy. Dividers inside a card are flat 1px; standalone dividers use the fading rule.

**Shadows.** Almost none. `--shadow-card 0 1px 4px rgba(0,0,0,0.05)` is the default card lift and comes straight from the identity sheet. `--shadow-raised` (2px/7%) on hover, `--shadow-pop` (12px/12%) for dialogs and toasts, and `--shadow-lift` (4px 16px navy 18%) exclusively for the logo mark at large sizes. No inner shadows anywhere. Never stack two shadowed cards.

**Corner radii.** 6px is the system: cards, buttons, inputs, modals, toasts. 4px for swatches, badges and checkboxes. 12–16px for the app-icon tile only (it scales with icon size, exactly as the identity sheet specifies). Pill radius belongs to Tag alone. Radius never increases with element size.

**Cards.** White, 6px, 36px padding, `--shadow-card`, no border. Nested or secondary cards drop the shadow and take a 1px `--border-subtle` instead. `tone="navy"` cards use a translucent white border rather than a shadow. **No coloured left-border accent cards.**

**Motion.** Restrained and short. 180ms `cubic-bezier(0.2,0.6,0.2,1)` on colour, border, shadow and opacity; 120ms for micro-states; 240ms for overlays. No bounce, no spring, no slide-in-on-scroll, no parallax. Overlays fade in only. `prefers-reduced-motion` zeroes every duration.

**Hover.** Fills **darken**, they never lighten: navy-900 → navy-800, gold-600 → gold-700. Ghost controls acquire a parchment fill. White cards gain `--shadow-raised` plus a `--border-strong` hairline. Links go gold → navy on hover (the inverse of the usual pattern, and deliberate). Nav items on navy lift to `rgba(255,255,255,0.09)`.

**Press.** `translateY(1px)`. No scale-down, no ripple.

**Focus.** `--ring-focus`: a 2px warm-white gap then a 4px `--gold-500` ring. Inputs additionally take a navy-500 border plus a soft `rgba(200,146,42,0.18)` glow. Focus is never removed.

**Disabled.** 42% opacity, shadow dropped, cursor not-allowed. No grey-out repaint.

**Transparency & blur.** Two places only: the sticky marketing header (`rgba(247,245,240,0.88)` + 10px blur) and the dialog scrim (navy at 44% + 3px blur). On navy, translucent white (0.04 / 0.08 / 0.09 / 0.12) replaces lighter tints entirely — never mix a lighter navy into a navy surface.

**Density.** Generous on marketing (16px light body, 1.6 line-height, 64–96px sections); compact but not cramped in the app (40px controls, 14px UI text, 20–24px card padding).

---

## ICONOGRAPHY

The identity sheet contains **no icon set** — only the logo mark. Nothing was drawn to fill the gap.

**Substitution (flagged).** [Lucide](https://lucide.dev) **0.474.0**, outline style, native stroke weight 1.5, pulled from `unpkg.com/lucide-static` and masked to `currentColor` by the `Icon` component. It was chosen because its 1.5px hairline outlines match the brand's 1px-border, no-fill discipline; a filled or duotone set (Material, Phosphor Fill) would fight the paper aesthetic. **If Kontrak has or wants its own set, this is the first thing to replace** — everything routes through one component.

**Rules.**
- Sizes: 14–15px inline with text, 17–18px in buttons and list rows, 20–24px as standalone glyphs. Never below 14px.
- Colour: inherits text colour by default. On navy, active icons take `--gold-400`, inactive `rgba(255,255,255,0.55)`. On light, `--navy-500`/`--navy-700` for informational glyphs, `--gold-700` for reassurance callouts.
- Icons never carry their own background chip or circle.
- **No emoji, ever** — not in UI, not in copy, not in decks.
- Unicode is used as an icon in exactly three places, all inherited from the source sheet's own restraint: `▾` for the Select chevron, `×` for dismiss affordances, `✓` for completed Stepper steps and the Checkbox tick (the tick is a hand-authored 2-point path, not a glyph).
- The recurring vocabulary: `file-signature` (contracts), `shield-check` (visa safety), `wallet` (escrow), `scale`/`gavel` (legal), `clock` (hours), `badge-check` (verification), `search`, `message-square`, `bookmark`, `globe`, `graduation-cap`.

**Offline note.** Icons load from a CDN. For print, PDF or offline decks, download the SVGs you need into `assets/icons/` and reference them directly.

**Logo files** (extracted from the identity sheet, not redrawn):
`assets/logo-lockup.svg`, `assets/logo-lockup-light.svg`, `assets/logo-mark.svg`, `assets/logo-mark-on-navy.svg`, `assets/logo-mark-on-gold.svg`, `assets/app-icon.svg`.

---

## Typefaces

| Role | Family | Weights | Source |
| --- | --- | --- | --- |
| Display / editorial | Cormorant Garamond | 300, 400, 600 | Google Fonts |
| Headings / wordmark / numbers | Syne | 400, 600, 700, 800 | Google Fonts |
| Body / UI | DM Sans | 200–700 | Google Fonts |

All three are the exact families named in the identity sheet and all three are Google Fonts, so **no substitution was necessary**. They are loaded via `@import` in `tokens/fonts.css` rather than self-hosted `@font-face` — **if you want them self-hosted, send the woff2 files and we'll swap the rules.**

---

## Index

**Root**
- `styles.css` — the only file consumers link; `@import`s everything below
- `readme.md` — this document
- `SKILL.md` — Agent Skills manifest for use in Claude Code
- `thumbnail.html` — homepage tile

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius-shadow.css`, `motion.css`, `base.css`

**`assets/`** — six logo SVGs (lockup, light lockup, mark, mark-on-navy, mark-on-gold, app icon). No photography or illustration was provided.

**`components/`** — each directory has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one card HTML
| Group | Components |
| --- | --- |
| `brand/` | Logo |
| `core/` | Button, IconButton, Card, Badge, Tag, Avatar, Icon |
| `forms/` | Field, Input, Textarea, Select, Checkbox, Radio, Switch |
| `navigation/` | Tabs, Stepper |
| `feedback/` | Dialog, Toast, Tooltip |
| `marketplace/` | GigCard, Rating, StatTile |

**`ui_kits/`**
- `website/` — marketing site: Home, BrowseWork, GigDetail, SignUp, Chrome
- `app/` — student app: Shell, Dashboard, Briefs, ContractDetail, Messages

**`guidelines/`** — 19 foundation specimen cards across the Colors, Type, Spacing and Brand groups

**Not built** (no source material existed): slide template, email templates, client-side app surfaces (post-a-brief flow, vetting), payments/payout screens, photography and illustration libraries, marketing pages beyond the four above.
