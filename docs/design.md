# 06 — BuilderOS Design System

## Status

**IMPLEMENTABLE DESIGN SYSTEM — derived from the approved Surveyed Ground direction (`03-visual-direction.md`) and the approved copy foundation (`04-voice-and-copy.md`).**

This document translates the approved visual and copy strategy into rules an implementer can build against. It invents no new visual direction and no new copy. Where a value is unresolved in strategy, it is marked `PROVISIONAL` and the open decision is named rather than guessed.

Source hierarchy, in order of authority: `01-audience-and-positioning.md` (why) → `02-narrative-architecture.md` (structure) → `03-visual-direction.md` (visual system) → `04-voice-and-copy.md` (words) → this document (build rules). If this document ever contradicts `03` or `04`, `03` and `04` win.

`AGENT.md` (the original "JIGSAW — WORLD SYSTEM") is **superseded** for every point where it conflicts with `03`/`04`. Its glow, cobalt accent, Ivy Presto serif-carries-everything, "alive/vibrant/resonance" vocabulary, and equal-accent usage are retired. It is retained only as origin context, not as a build reference.

---

## 0. The one rule everything else serves

**Atmosphere is the ground. Evidence is the mark. The two never occupy the same layer.**

Operationally this means: text never sits on imagery; every image is either **Terrain** or a **Plate**; every claim is an annotation attached to the artefact that earned it. If a section cannot state what its ground is and what its marks are, it is not designed yet.

Nine non-negotiables carried from `03`/`04`, restated as build constraints:

1. Text never sits directly on imagery.
2. Every image declares its class — Terrain or Plate — before it ships.
3. Ember/amber is for evidence only. Moss is for interaction only. One accent per section.
4. No glow, anywhere. (This reverses the current live default.)
5. No neon / generic-crypto Web3 styling.
6. No KPI cards. Evidence appears only as annotation.
7. No childish puzzle tabs; no interlocking pieces. The jigsaw is a surveyed field cut by survey lines.
8. The jigsaw appears exactly once, as a completed field. The metaphor is explained in words exactly once, on About.
9. Derive is flagship proof. HUNCHR is a current-direction signal, never proof.

---

## 1. Design tokens

Token values reconcile the intent stated in `03` (near-black ground ~#0B0B09, bone-white text, ember = evidence, moss = interaction) with the values already present in `app/globals.css`. Implementers should promote these to the single source of truth and delete competing ad-hoc values. **Do not edit `globals.css` as part of reading this document** — this table is the target state for the implementation phase.

### 1.1 Colour — ground

| Token | Value | Role |
|---|---|---|
| `--ground` | `#0B0B09` | Primary near-black. Every section's default ground. (`03` target; current `--bg` `#030303` is darker — raise to the warmer near-black.) |
| `--ground-quiet` | `#141310` | Warmer charcoal for alternating quiet zones (Throughline, Now). Prevents "too dark." |
| `--panel` | `#11110E` | Plate placeholder / capsule backing / label chips. |
| `--line` | `rgba(232,228,214,0.16)` | 1px hairline (survey lines, plate borders, nav rule). |
| `--line-strong` | `rgba(232,228,214,0.28)` | Hairline at emphasis (hover border brighten). |

### 1.2 Colour — text

| Token | Value | Role | Contrast rule |
|---|---|---|---|
| `--bone` | `#E8E4D6` | Display and body at full strength. | ≥ 7:1 on ground |
| `--bone-secondary` | `#B7B2A9` | Supporting / body-secondary. | ≥ 4.5:1 on ground |
| `--meta` | `#858173` | Mono metadata at rest (dates, colophon) where it is not carrying a live number. | ≥ 4.5:1 on ground, verify at 12px |

Secondary text never drops below 4.5:1. Nothing renders below 12px.

### 1.3 Colour — the two accents

Exactly two accents, each with one fixed job. Colour never carries meaning alone: every accent state ships with a text change or a border change beside it.

| Token | Value | Accent | Job (only these) |
|---|---|---|---|
| `--ember` | `#C8A95B` | Ember / amber | **Evidence.** Verified numerals, active evidence annotations, focus rings on evidence. |
| `--moss` | `#9CAA69` | Moss | **Interaction.** Hover, active nav tick, selected-parcel border. |
| `--moss-deep` | `#4E5A44` | Moss (deep) | Pressed / active interactive state only. |

Section accent ownership is fixed: **Derive flagship is ember territory. The jigsaw is moss territory.** Never both jobs in one element. Never a third accent. Cold blue and yellow are dropped and must not return. Derive's own orange artefacts render **native** inside their plates — they are content, not an accent, and they harmonize with ember rather than fighting it.

Moss-on-ground is the riskiest pairing in the system and **must be contrast-tested before approval**. If `--moss` fails 4.5:1 for any text use, moss is used for borders/ticks only and the accompanying text uses `--bone`.

### 1.4 Typography — families

Recorded system, jobs sharpened (`03 §Typography`). The current live build runs Ivy Presto serif carrying every statement; that is the drift `03` orders reconciled. Target:

| Token | Family | Job |
|---|---|---|
| `--font-display` | Clash Display | Display statements and section-scale headings only. Never below 28px. |
| `--font-sans` | Satoshi | Body and interface. 16–18px, line-height 1.6, max 65ch. |
| `--font-mono` | IBM Plex Mono | The entire annotation register: labels, captions, proof, dates, status tags, nav numbers. Minimum 12px. |

`public/fonts` does not yet exist and must be created during implementation. Fallback stacks stay dark-safe.

**The serif question (`PROVISIONAL`).** The single acceptable concession `03` allows is *one* serif display face confined to the footer statement and the About essay pull-line only — and that decision must be made from a prototype, not from taste memory. Until that prototype exists, build display in Clash. Do not let a serif carry the whole site again.

### 1.5 Typography — scale

Desktop display: hero ~72–96px; section 40–56px; throughline 28–34px. Mobile: hero 40–48px max. Evidence numerals may render in Clash *within a caption* when the number is the point (e.g. `15,000 → 40,000+`), always paired with a mono qualifier line.

| Token | Size | Family | Notes |
|---|---|---|---|
| `--type-hero` | `clamp(2.5rem, 6vw, 6rem)` | display | ≤ 3 lines mobile |
| `--type-section` | `clamp(2.25rem, 4vw, 3.5rem)` | display | section headings |
| `--type-throughline` | `clamp(1.75rem, 2.4vw, 2.125rem)` | display | 55ch measure |
| `--type-body` | `1rem–1.125rem` | sans | line-height 1.6, ≤ 65ch |
| `--type-label` | `0.75rem` | mono | uppercase, tracking `0.08em` |
| `--type-caption` | `0.75rem` | mono | sentence case, tabular numerals |

Mono labels: uppercase, `letter-spacing: 0.08em`. Mono captions: sentence case. All evidence figures use **tabular numerals**. Nothing below 12px (`0.75rem`), including captions.

### 1.6 Spacing and grid

| Token | Value | Role |
|---|---|---|
| `--grid-cols` | `12` | Desktop columns |
| `--content-max` | `1440px` | Max content width |
| `--margin-outer` | `80px` | Desktop outer margins (20px mobile) |
| `--gutter` | `24px` | Column gutter |
| `--measure` | `65ch` | Max text measure |
| `--section-y` | `clamp(96px, 12vw, 200px)` | Between major sections (160–200 desktop, 96–120 mobile) |
| `--rail` | `columns 10–12` | The annotation rail — persistent structural signature |

Spacing steps stay on an 8px base. Section rhythm alternates dense (flagship) and quiet (throughline, Now) deliberately; density is a composition tool, not an accident.

### 1.7 Motion tokens

| Token | Value | Role |
|---|---|---|
| `--dur-hover` | `150ms` | Border/label brighten |
| `--dur-enter` | `200–400ms` | Section fade-up 8px, ease-out, once |
| `--dur-capsule` | `250ms` | Jigsaw capsule fade + 8px rise |
| `--dur-route` | `150ms` | Page transition fade |
| `--ease` | `ease-out` | Global easing |

Character: settling, not performing. Marks come to rest; nothing bounces, pulses, or glows.

---

## 2. Grain and texture

Grain is material honesty, applied sparingly and only in two places: **on imagery**, and **on the black ground at very low opacity**. Grain is **never on text**. Halftone lives **inside image treatment only**, used sparingly. Glow is banned globally — including the old availability pill, section glows, and any text-shadow bloom.

Build guidance: ground grain via a fixed, low-opacity (~2–4%) noise overlay behind content, never above text layers; image grain baked into the Terrain/Plate treatment (see §4). Grain overlays must be `pointer-events: none` and excluded from focus/hit areas.

---

## 3. Two image classes — the whole media system

Every asset declares its class before it ships. There are only two.

### 3.1 Terrain (atmosphere)

Environmental photography treated as ground: bounded, grained, slightly desaturated, blacks lifted so the photo sits *into* the page rather than punching a hole in it. Terrain is never placed behind text and is never left uncaptioned for more than one viewport. Photography may crop to 3:2 or 4:3. Full bleed is reserved for exactly two things sitewide: the jigsaw field and route-level imagery on case pages.

Recommendation carried from `03` (`PROVISIONAL` until Desi rules): no generated imagery on a portfolio whose thesis is authenticity. Terrain is real field/venue photography, deliberately sourced.

### 3.2 Plates (evidence)

Screenshots, event photos, campaign assets, spatial work, product UI. A plate has a **1px hairline border** (`--line`), small-or-no corner radius, sits on solid ground, and carries a **mandatory mono caption beneath it** on solid ground. Native aspect is kept where the artefact is the point. Plates lazy-load against a solid placeholder at the correct aspect ratio (no layout shift). **Never more than three plates per viewport.** Derive's orange artefacts stay native inside their plates.

Every plate has alt text derived from its caption. Purely atmospheric Terrain is marked decorative for assistive tech.

---

## 4. Evidence annotations

Evidence appears **exclusively as annotation** — never as a KPI card, never floating, never repeated a third time. An annotation is mono, minimum 12px, tabular numerals, ember accent on the *verified number only*, attached to the artefact or terrain it describes.

Rules (from `04`): every number needs context; one proof per artefact (no stacking); ember on verified numbers only; if a number cannot travel with its artefact and caption, it does not appear. Counting/odometer animations on numerals are **banned** (fabricated drama). Per-word text animation is banned.

The annotation lives structurally in the **annotation rail** (columns 10–12) on desktop key sections, and inline directly above/below what it marks on mobile — mark follows ground, always, in DOM order.

---

## 5. Caption system

Captions are the annotation register applied to a specific artefact. Schema from `04`; do not invent new caption copy.

**Evidence caption:** `project · artefact or figure · Desi's verb`. Mono, tabular numerals, one proof per artefact, ember on the verified number only.

**Event caption:** name, place, attendance if verified, role verb. No atmosphere adjectives.

**Artefact caption:** what it is, what it was for, Desi's contribution — under 15 words where possible.

**Confidential work:** name the domain only; never expose clients, targets, pipelines, or financial terms.

**Early-stage work:** describe the question being tested; do not claim outcomes before they exist.

Approved Derive captions (locked in `04` — use verbatim):

- Discord · `15,000 → 40,000+` members through the TGE period · community growth across Discord, Telegram, and X
- Believe in SomETHing · ecosystem campaign, `430+` protocols · contributor
- Traders Breakfast, Coinfest Bali · Derive's first live event, `100+` attendees · produced

No exclamation marks. No sentences beginning "I believe." No "let's connect." Retired vocabulary (passionate, journey, storyteller, vibrant, resonance, alive, etc.) stays retired, even in captions. The old "little moments / meaningful people / beautiful communities" labels do not return at any scale.

---

## 6. Jigsaw interaction

The site's single signature interaction and the homepage's third movement. It appears **once**; it is referenced nowhere else as decoration. A quiet seam motif in section dividers is the metaphor's entire remaining footprint.

**Form.** Seven irregular rectangular parcels cut from **one continuous Terrain photograph** by 1px survey lines. Geometric but organic in content. **No interlocking tabs, ever.** Seams are the survey lines. About 70vh by full content width on desktop; full-bleed is permitted here (one of the two allowed exceptions).

**Ground rule.** The field is **complete from the first frame.** Parcels are distinguished by seam, tone, and texture — never by absence. A missing piece would say "unfinished person"; the completed, labelled field says "assembled system." This inverts the metaphor: Desi is the surveyor who divides and labels the field, never a piece missing from it.

**Chapter labels.** Always-visible mono labels on solid near-black backing chips, one per parcel. Seven chapters, locked in `04`:

| Chapter | Capability line | Evidence line | Destination |
|---|---|---|---|
| Spatial Design | Environments that shape behaviour. | RMIT Interior Design (Hons) · origin of the practice | About |
| Events | From invitation to follow-through. | Traders Breakfast, Coinfest Bali · 100+ attendees | Derive |
| Community | Turning members into participants. | Derive Discord · 15,000 → 40,000+ | Derive |
| Sports Media | Writing for fans, by code and by platform. | Bruce Media · NFL, A-League, PGA | — |
| Growth | Converting attention into activity. | Believe in SomETHing · 430+ protocols | Derive |
| Partnerships | Finding the overlap between two roadmaps. | Current: Lemon Tree, Tago Capital | Now |
| Product | Early distribution and user research. | HUNCHR · founding stage, in progress | Now |

**States.** At rest, all parcels equally defined. On focus/hover/tap, the selected parcel comes to full colour and gains a **1px moss border**; others dim slightly. Hover is **preview only**; tap and Enter are the real interactions. Opening a parcel docks a capsule to the rail on desktop (chapter, capability, one evidence line, one link) and opens a bottom sheet on mobile. Evidence labels appear *in the opened capsule*, not scattered on the field.

**Keyboard and focus.** Parcels are **real buttons in DOM order** with a visible **2px moss focus ring**. Arrow keys move between parcels. The capsule/bottom-sheet traps focus and closes on Escape. One plain mono instruction line accompanies the field (replacing "hover and click to explore"); the invisible-hotspot model is dead.

**Motion.** The only scroll-linked effect on the whole site is parcels gaining definition (desaturated → defined) as the field enters the viewport — capped and cheap. Capsule opens with a 250ms fade + 8px rise. Reduced motion: no scroll-linked definition; parcels render fully defined and swap opacity instantly.

**Mobile.** The field becomes a vertical stack of full-width horizontal bands, each a wide crop of the **same** terrain with its label chip, sharing continuous imagery so it still reads as one field cut into strips — not seven cards. Accordion capsules. 44px minimum targets.

**Destinations** (from `03`): Community → Derive case community section; Events → Derive case Breakfast section; Growth & Partnerships → Work index anchors; Spatial Design → About origin; Sports Media → Work index (Bruce entry); Product → Now (HUNCHR).

**Future chapters** are absorbed by re-parcelling the field: survey lines move, composition stays complete. No redesign required.

---

## 7. Derive flagship treatment

Derive is the flagship proof and the densest section on the site — deliberately. Dominance is **spatial, not decorative**: Derive gets more vertical space than the jigsaw and roughly 3× the space of the entire Now section. This section is **ember territory**.

**Layout.** Solid ground. Mono section header across columns 1–9. One large artefact **plate** (Framer landing screenshot — proves shipping) in columns 1–7; two stacked smaller plates in columns 8–12 (Traders Breakfast photograph — proves rooms; Believe in SomETHing frame — proves ecosystem reach). Every plate carries a mono caption beneath it on solid ground; the caption is **where the number lives**, attached to the artefact that earned it, numerals in ember. A ~60-word role paragraph states role, period, scope plainly. Close with "Read the full case" text link; the whole large plate is also clickable.

**Interaction.** Plates lift 2px on hover with a border brighten (`--line` → `--line-strong`); nothing else. No glow, no parallax.

**Mobile.** Plates stack full-width in the same order; captions stay attached. Never more than three plates per viewport.

Merch photography moves to the case-page gallery, not the flagship block. One proof per artefact — no stacking metrics on a single plate.

---

## 8. Now ledger

A ledger of active files, not three unfinished case studies. It **refuses the case-study form**: no images, no galleries, no achievement lists, no metrics. The visual restraint *is* the honesty.

Three full-width rows: **HUNCHR, Lemon Tree, Tago.** Each row: mono index, name at small display size, one plain sentence of what is being tested, and a mono status tag (e.g. `ACTIVE · 2026 · EARLY`). HUNCHR's row is ~1.3× the others with a second descriptor line signalling product-led participation direction, and links to the Product jigsaw parcel.

Copy discipline (from `01`/`04`/career context): HUNCHR is written as **current experimentation, not traction** — verbs of testing, never verbs of achievement. Lemon Tree and Tago are **current commercial/BD range with confidentiality respected** — name the domain only. Final HUNCHR title, Lemon Tree wording, and Tago wording are `PROVISIONAL` pending confirmation; if implementation hits an unconfirmed fact, **escalate rather than invent**.

This section is quiet, typographic, low-density — a deliberate contrast to the Derive block above it.

---

## 9. Work hierarchy

Ordering is by **narrative weight, not chronology.** Chronology is preserved separately for recruiters in a compact reverse-chronological experience index at the top of the Work page (employer, role, dates, one outcome line each), introduced by one sentence framing the non-linear career ("different industries, same question").

Rows group into labelled tiers:

- **Flagship** — Derive: largest row, ~3× visual weight, artefact plate plus a caption carrying one metric. Full flagship case page.
- **Current** — HUNCHR, Lemon Tree, Tago: text-led rows matching the homepage ledger. **No case pages until verified outcomes/titles exist.**
- **Selected** — Bruce Media, RISA: compact rows, one small artefact each. RISA upgradeable to a standard case once documented; Bruce Media edited to remove overstated internship claims.
- **Foundations** — RMIT (About material + jigsaw piece, **not** a Work entry), Misura, JAU (only if 2–3 strong visuals exist). Use the label **"Foundations,"** never "Archive."

Role and dates are mono, always visible, right-aligned per row. The white light-burst graphic is removed and belongs to no system. RMIT / earlier work **never sits visually adjacent to Derive metrics.** Compact entries are **not pages** (name, role, dates, two-sentence activity, honest status marker; no links to nowhere). Missing content types don't render — no placeholders, no "coming soon." One shared case-study template; flagship status comes from depth, not a separate design system.

**Case pages.** Flagship (`/work/derive`) keeps the working skeleton (title, artefact hero, meta row, intro, episodes, gallery) with three changes: achievements become prose-plus-annotation rather than a raw bullet stack; every gallery image gains a mono caption; the gallery template's silent six-image drop is flagged for remediation. Standard case pages use the same skeleton with fewer sections and "what was tested" replacing "key achievements" where outcomes are unverified. Route-level imagery on case pages is the second permitted full-bleed use. Page transitions: 150ms fade.

---

## 10. About page

The only personal-first page. Ground-and-mark applies to Desi herself.

**Top.** A bounded portrait or environmental photograph as a **plate** (not full-bleed, no text on it), with the rail carrying mono marks: based in Jakarta (`PROVISIONAL` location line), five languages listed, open to remote roles — as plain mono text. The glowing availability pill is removed. The current text-over-image hero and its contrast failure are removed.

**Body.** The existing personal-essay register survives at 65ch on solid ground. Three-country upbringing and spatial-design origin are told in the essay, with **one RMIT thesis artefact** as a captioned plate beside the relevant paragraph. "Systems of Belonging" survives here as *one* supporting phrase only — not a hero, subhead, or nav label. "Resonance over noise" appears once, here only.

**The jigsaw explanation lives here and only here**, in one paragraph — the single verbal explanation of the metaphor on the entire site.

**Direction.** One short closing paragraph points at product-led participation, framed as direction, not claim. Availability repeats in the footer. Delete `/who` and `/about-me2` with redirects to `/about`.

---

## 11. Navigation

Fixed slim top bar on solid near-black with a hairline bottom rule. Left: DK wordmark, links home. Centre-left: **Jigsaw · Work · Community (conditional) · About**, with mono index numbers (01–04). Active state: a small **moss** underline tick — not a pill, not a glow. Right: **EMAIL** as an explicit mailto text item first, visibly distinct from the icon set, then LinkedIn and X icons.

The "Jigsaw" home label works **only** because the wordmark also links home and the hero delivers 10-second clarity. If hero clarity weakens, this label is the first thing that breaks. The jigsaw motif does not appear in the nav.

Community appears in nav **only if** its evidence bar is met at launch (three documented gatherings). If not, the route and nav item wait — they do not ship thin. There is no "Contact" label and no `/contact` page; contact is the email-first social row.

**Mobile.** Four labels collapse into a full-screen solid overlay menu, large type, same order. The **email item stays outside the collapsed menu, always one tap away.** Socials may collapse in; email may not.

---

## 12. Mobile behaviour

Same sequence as desktop; **no reordering.** First screen: name, identity line, availability, email CTA. The Derive block trims to three anchor facts + one artefact + case link. Jigsaw is static-first, then the vertical band stack with accordion capsules; no scroll-linked animation on mobile. Proof keeps annotation form, sized down — never full-width stacked cards. Home text does not grow; About keeps its length for opt-in readers.

Grid: 4 columns, 20px margins. The rail collapses to inline annotation blocks directly above/below what they mark (mark follows ground). Section spacing 96–120px. Terrain video becomes a still; plates stack with captions attached. Video only if short, muted, poster-framed; nothing autoplaying above the flagship. Touch targets ≥ 44px. Target feel: six-to-seven confident swipes, ~30–45s.

---

## 13. Accessibility

Colour never carries meaning alone — every accent state ships with a text or border change beside it. Contrast: bone at ≥ 4.5:1 minimum (display/body target ≥ 7:1); mono annotations on black mitigated by 12px minimum, bone-level contrast, and backing chips on imagery. **Moss-on-black is the riskiest pairing and must be contrast-tested before approval;** if it fails, moss is borders/ticks only.

Nothing below 12px anywhere. Parcels, plates, and nav are native focusable elements in logical DOM order with a visible **2px focus ring** sitewide. Capsule and bottom sheet trap focus and close on Escape. Touch targets ≥ 44px; the invisible-hotspot model is dead. Reading order: the rail follows its section in DOM order so screen readers hear **ground then mark.** Every plate has alt text derived from its caption; purely atmospheric Terrain is marked decorative. Reduced motion is honoured globally: scroll-linked definition disabled, parcels render fully defined, all entrance motion becomes instant.

Known current failures to fix during implementation (not after): the About hero green-on-photo contrast, parts of mobile home contrast, and the "atmosphere arriving before clarity" root cause.

---

## 14. Motion

Character: settling, not performing — things come to rest like marks being made. Durations 200–400ms, ease-out.

- **Page entry:** content fades up 8px, staggered by section, once.
- **Scroll:** the *only* scroll-linked effect on the site is the jigsaw field's parcels gaining definition as it enters the viewport, capped and cheap.
- **Jigsaw capsule:** 250ms fade + 8px rise.
- **Image reveals:** opacity only. No masks, no parallax.
- **Text reveals:** none. Text is simply there. Per-word animation is banned.
- **Hover:** border/label brighten, 150ms.
- **Route transitions:** 150ms fade.
- **Numerals:** no counting/odometer animation, ever.
- **Reduced motion:** everything instant; scroll-linked definition off; parcels fully defined.

Must remain static under all conditions: the hero, all body text, all captions, the footer statement.

---

## 15. Approved copy anchors (do not invent; use verbatim)

These are locked in `04` and reproduced here so implementers copy rather than paraphrase.

**Hero identity line:** "I help early-stage teams turn attention into users, members, and partners."
**Hero proof annotation:** "Grew Derive's Discord from 15,000 → 40,000+ through its token launch."
**Availability:** "Available now · [location line pending]" (`PROVISIONAL`).

**Throughline (set once, static):** "Interior design taught me that behaviour follows environment. I've applied that everywhere since: rooms, events, Discord servers, campaigns, partnerships. At Derive it carried a rebrand, a token launch, and an ecosystem that grew past 40,000 members. The through-line is simple: I design the conditions for people to find each other."

**Footer:** "Currently open to early-stage work. The fastest way to reach me is email. Tell me what you're building and where it's stuck." The ghost "Systems of Belonging" background text is removed.

If a section needs a headline not covered by `04`, **escalate — do not invent.**

---

## 16. Provisional decisions (do not lock)

Carried unresolved from `03`/`04`/career context. If implementation reaches one of these and it is unconfirmed, escalate rather than shipping a guess:

- The serif concession (footer statement + About pull-line only), to be decided from a prototype.
- Terrain photography decision: continue existing field imagery, commission/shoot, or consistently treat licensed photography; recommendation is no generated imagery.
- Exact availability line and location line; whether "Available now" is the exact phrase.
- HUNCHR public title; Lemon Tree and Tago public-safe wording, titles, start months, confidentiality boundaries.
- Final About-page essay.
- Whether "token launch" or "TGE" is used in each location.
- Defensible public source for the 40,000+ Discord figure.
- Community route: ships only when three gatherings are documented.

---

## 17. Prototype order before full build

From `03`, build and test in this order before anything compounds on top:

1. Hero at 1440px and 360px, tested against the 10-second read with someone who has never heard of Desi.
2. The jigsaw parcel interaction: touch, keyboard, bottom sheet, reduced motion, mobile band stack.
3. The caption/annotation component, with contrast verification for mono-on-black and both accents.
4. The Derive flagship plate spread (the borrowed Direction B treatment).

Reconcile the live Ivy Presto serif against the recorded Clash / Satoshi / Plex Mono system, and create `public/fonts`, *before* any redesign work builds on the current drift.

---

## Definition of done (per section)

A section is designed when it can answer, in one line each: **What is the ground?** **What are the marks?** **Which single accent owns it?** **Does any text touch imagery?** (must be no) **Is every number attached to the artefact that earned it?** If any answer is missing, the section is not done.
