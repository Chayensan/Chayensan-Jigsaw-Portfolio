# 07 — Implementation Roadmap

## Status

**PLANNING DOCUMENT — NOT IMPLEMENTATION.** No app files, components, CSS, routes, package files, config files, or existing docs were touched to produce this roadmap. It turns the approved Surveyed Ground design system into a phased, build-sequenced plan. It invents no new visual direction, no new copy, and no new strategy.

---

## Source-of-truth hierarchy

In order of authority, per `docs/design.md` (06 — BuilderOS Design System) and confirmed across `docs/fable/`:

1. `01-audience-and-positioning.md` — why, positioning.
2. `02-narrative-architecture.md` — structure, routes, navigation.
3. `03-visual-direction.md` — visual system (Surveyed Ground).
4. `04-voice-and-copy.md` — words. Locked copy; do not paraphrase.
5. `docs/design.md` — build rules derived from 01–04. If it ever contradicts 03 or 04, 03 and 04 win.
6. `career-context-and-portfolio-evidence.md` — factual substrate; every number and claim traces back here.
7. `AGENT.md` ("JIGSAW — WORLD SYSTEM") — superseded wherever it conflicts with 03, 04, or `docs/design.md`. Its glow, cobalt accent, Ivy Presto-carries-everything type system, and "alive / vibrant / resonance" vocabulary are retired. Kept only as origin context.

This roadmap adds no new authority. Where a phase needs a decision not covered by 01–04 or `docs/design.md`, the phase says so and routes it to Desi rather than guessing.

## Non-negotiable design rules (quick reference)

Atmosphere is the ground; evidence is the mark; the two never occupy the same layer. Text never sits directly on imagery. Every image is either Terrain or Plate. Ember/amber is for evidence only. Moss is for interaction only. One accent per section. No glow. No neon Web3 styling. No KPI cards. No childish puzzle tabs or interlocking pieces. The jigsaw appears exactly once, as a completed surveyed field, and the metaphor is explained in words exactly once, on About. Derive is flagship proof; HUNCHR is a current-direction signal, never proof. No new copy is invented — `04-voice-and-copy.md` is used verbatim, and anything missing is escalated.

## How this roadmap works

Thirteen phases, Phase 0 through Phase 12, each independently committable. Phases move roughly in order: hygiene → tokens → CSS cleanup → first visual build (nav/hero) → shared components → the jigsaw → the Derive flagship → the Now ledger → Work index/case template → About → Community decision → QA → final critique. Each phase lists what it touches, what it must leave alone, how to know it's done, what could go wrong, what to check by hand, what commands to run, and the specific moments to stop and ask Desi rather than guess. Phase 0 is unusually detailed because it also records the actual current state of this repository as of the audit behind this document (6 July 2026) — nothing in Phase 0 is hypothetical.

---

## Phase 0 — Repo hygiene and branch safety

**Goal.** Establish a safe, known starting point before any redesign work begins, and record every piece of pre-existing drift so later phases aren't surprised by it.

**Findings from this audit (already true today, not hypothetical):**

- The repository is on branch **`redesign/fable-5`**. The Fable strategy docs (`docs/fable/01`–`04` and `career-context-and-portfolio-evidence.md`) and the build-rules pair `docs/design.md` / `docs/design.html` have already been committed and pushed. The repo was clean before this roadmap task began — the only new, uncommitted file introduced by producing this roadmap is `docs/implementation-roadmap.md` itself. Phase 0's job is therefore to confirm that clean baseline is still intact immediately before phase-by-phase implementation commits begin, not to create one from scratch.
- `app/globals.css` (4,299 lines) already defines `--font-display: IvyPresto, "Cormorant Garamond", Georgia, serif` — the exact undocumented serif drift `03-visual-direction.md` and `docs/design.md` flag as needing reconciliation against Clash Display / Satoshi / IBM Plex Mono.
- `app/globals.css` contains active glow usage: `drop-shadow(0 0 18px rgba(var(--layer-glow), 0.78))`, a radial-gradient glow background, and `box-shadow: 0 0 18px rgba(var(--layer-glow), 0.68)` on what reads as the availability pill / active state. Glow is banned globally per `03` and `docs/design.md` §0.4.
- `public/fonts` does not exist. It must be created, not assumed.
- `components/site-data.ts` still encodes the **retired** five-category taxonomy — `Piece["id"]: "events" | "community" | "web3" | "growth" | "exploration"` with the old subtext copy ("Layers of energy. Designed to be felt.", etc.) feeding `components/PuzzlePiece.tsx` / `JigsawCluster.tsx`. This is the invisible-hotspot, five-category jigsaw model `03` explicitly declares dead.
- Routes exist for `app/who/page.tsx` and `app/about-me2/page.tsx`, both slated for deletion with redirects to `/about` per `02` §9 and `docs/design.md` §10.
- `app/community/page.tsx` exists as a live route today; per `02` §8 / Phase 10 below, it may not ship at `/community` unless the three-gathering evidence bar is met.
- Legacy static-site files sit at the repo root alongside the Next.js app: `index.html`, `about.html`, `work.html`, `styles.css`, `script.js`. Their relationship to the current Next app is unclear from the docs reviewed. Do not delete or edit them in this phase — flag them to Desi and confirm whether they are dead prototype artifacts before any phase removes them.
- Duplicate-looking assets exist in both `assets/` (repo root) and `public/assets/` (e.g. `brand-board.png`, `overview.png`, `work-grid.png`). Flag for Desi rather than assuming which copy is canonical.
- `package.json` dependencies (`next@14.2.32`, `react@18.3.1`, `framer-motion`, `@phosphor-icons/react`, Tailwind 3.4) are unremarkable and not part of the drift; no action needed in Phase 0 beyond noting them.

**Files likely touched.** None. This phase is inspection and confirmation only — the branch (`redesign/fable-5`) and the committed baseline (Fable docs, `docs/design.md`, `docs/design.html`) already exist; no source files are edited in this phase.

**What must not be changed.** Any app/component/CSS/route/config content. This phase is inspection and git-state confirmation only.

**Acceptance criteria.** `redesign/fable-5` is confirmed as the current branch. The working tree is confirmed clean apart from the newly added `docs/implementation-roadmap.md`. Every drift item above is written down before Phase 1 starts touching tokens, so later phases have a record of what was already true before implementation began.

**Risks.** Committing `node_modules/` or `.next/` by accident once implementation commits begin (both currently untracked and must stay untracked — verify `.gitignore` covers them before the first implementation commit). Assuming the tree is clean without actually confirming it, since Phase 1 depends on starting from a known-clean state.

**Manual checks.** Read `.gitignore` and confirm `node_modules/` and `.next/` are excluded. Open `app/globals.css` and confirm the IvyPresto and glow lines noted above still match reality (drift may have moved). Open `components/site-data.ts` and confirm the five-category `pieces` array is still present. Click through `/who`, `/about-me2`, and `/community` locally to see what they currently render.

**Commands to run.**
```
git status
git branch --show-current
git log --oneline -10
git check-ignore -v node_modules .next
```
(The last command should print a match for both paths; if it prints nothing, `.gitignore` needs fixing before any commit.)

**When to stop and ask Desi.**
- Before treating `index.html` / `about.html` / `work.html` / `styles.css` / `script.js` as legacy — confirm whether they're dead weight, a reference, or still linked from somewhere.
- Before treating either `assets/` or `public/assets/` as canonical for the duplicate filenames.

---

## Phase 1 — Font and token reconciliation

**Goal.** Resolve the live serif drift against the approved Clash Display / Satoshi / IBM Plex Mono system and land the token values from `docs/design.md` §1 as the single source of truth, without touching layout.

**Include:**
- Reconcile `--font-display: IvyPresto...` in `app/globals.css` against the approved system: Clash Display carries display statements and section-scale headings only, never below 28px; Satoshi carries body/interface at 16–18px; IBM Plex Mono carries the entire annotation register at a 12px minimum. Per `03`'s provisional ruling, the only acceptable serif concession is one serif face confined to the footer statement and the About essay pull-line only, and only after a prototype — not by default, and not because the live site already has one. Until a prototype exists and Desi rules on it, build display in Clash Display everywhere.
- Create `public/fonts` (it does not exist yet) and source/self-host Clash Display, Satoshi, and IBM Plex Mono, or confirm the intended delivery method (self-hosted files vs. a font-service `@import`) with Desi if unclear.
- Define the token set from `docs/design.md` §1.1–1.7 as CSS custom properties: `--ground`, `--ground-quiet`, `--panel`, `--line`, `--line-strong`, `--bone`, `--bone-secondary`, `--meta`, `--ember`, `--moss`, `--moss-deep`, `--font-display`, `--font-sans`, `--font-mono`, the type-scale tokens, the spacing/grid tokens, and the motion-duration tokens.
- Remove or quarantine conflicting old tokens — in particular `--layer-glow` / `--layer-glow-soft` (glow is banned globally) and any color tokens outside the two-accent system (cold blue, yellow, cobalt, burnt orange as an accent — Derive's own orange stays as native artefact color inside plates only, never as a UI accent token).
- Do not redesign layout, spacing, or component structure in this phase — token values only.

**Files likely touched.** `app/globals.css` (token block only), a new `public/fonts/` directory and font files, possibly a `next.config.mjs` or font-loading utility if self-hosting via `next/font`.

**What must not be changed.** Component markup, section order, the jigsaw model, nav structure, any copy. This is a token substitution layer underneath the existing (still old) layout.

**Acceptance criteria.** Every token in `docs/design.md` §1 exists in `app/globals.css` with the specified value or a documented, Desi-approved substitute. `--layer-glow` and any box-shadow/drop-shadow glow declarations tied to it are removed or explicitly quarantined behind a to-be-deleted legacy block, not silently left active. The site still builds and renders (however visually rough) with the new tokens in place. No visual redesign has happened yet — this phase is plumbing.

**Risks.** Swapping `--font-display` to Clash Display before self-hosted files exist, causing a fallback-font flash or silent fallback to system serif that looks like "nothing changed." Accidentally deleting a token still referenced by dozens of `font-family: var(--font-label)` call sites (confirmed present in `app/globals.css` at 50+ locations) without a rename pass.

**Manual checks.** Grep for every remaining reference to `IvyPresto`, `Ivy Presto`, `Cormorant Garamond`, and `--layer-glow` after the change and confirm each is either removed or intentionally quarantined. Load the homepage locally and confirm no console 404s for font files.

**Commands to run.**
```
grep -rn "IvyPresto\|Ivy Presto\|layer-glow" app/ components/
npm run build
npm run lint
```

**When to stop and ask Desi.**
- Before choosing a font delivery method (self-hosted in `public/fonts` vs. a font CDN) if licensing terms for Clash Display / Satoshi are unclear.
- Before making any serif concession decision — that requires the Phase 3 hero prototype per `03`, not a Phase 1 guess.
- If removing `--layer-glow` breaks a component that has no non-glow fallback designed yet — escalate rather than inventing a replacement treatment.

---

## Phase 2 — Global CSS cleanup strategy

**Goal.** Make `app/globals.css` legible and safe to build on, without a destructive rewrite that has no visual checkpoint.

**Include:**
- Audit `app/globals.css` section by section (it is 4,299 lines) and classify each block as: current/keep, legacy/retire, or drift-needs-reconciliation (the font and glow items from Phase 0/1 belong here).
- Identify which blocks belong to components being rebuilt in Phases 3–9 (hero, nav, jigsaw/puzzle piece, work case template, footer) versus components with no planned rebuild — the latter should not be touched yet.
- Propose a safe cleanup order: token layer first (done in Phase 1), then dead/unused selectors tied to retired components (`PuzzlePiece.tsx`'s five-category styling, once that component is actually replaced in Phase 5 — not before), then consolidation of duplicated spacing/color literals into the Phase 1 tokens.
- Create reusable utility classes or tokens only where a genuine repeated pattern exists (e.g. a `.plate` base class per `docs/design.md` §3.2, a `.terrain` base class per §3.1, a `.annotation` mono-caption base class per §5) — not a speculative utility library ahead of need.
- Avoid large destructive rewrites without a visual checkpoint: any removal of more than roughly one screen's worth of CSS should be followed by a local visual diff (screenshot before/after) before committing.

**Files likely touched.** `app/globals.css` only, plus new component-scoped class definitions if introduced (still inside `globals.css` unless Desi/implementation later decides on CSS modules).

**What must not be changed.** Any component `.tsx` file's markup or logic in this phase — this is a CSS-only phase. Do not delete selectors tied to components that haven't been rebuilt yet, even if they look legacy, until the owning phase actually replaces that component.

**Acceptance criteria.** A written classification of `globals.css` (current / legacy / drift) exists, either as a comment block at the top of the file or as an accompanying note, so future phases know what they're allowed to touch. No selector is deleted that is still referenced by a live, unrebuilt component. The site builds and the current (pre-redesign) UI still renders without new breakage after cleanup.

**Risks.** Deleting a selector that a not-yet-rebuilt component still depends on, breaking pages that Phase 3+ hasn't touched yet. Treating "looks messy" as license for a wholesale rewrite instead of the incremental, checkpointed approach the docs call for.

**Manual checks.** Grep each candidate-for-removal class name against `components/*.tsx` and `app/**/*.tsx` before deleting it. Take before/after screenshots of every route (`/`, `/work`, `/work/[slug]`, `/about`, `/community`) at 1440px and 360px after any non-trivial cleanup pass.

**Commands to run.**
```
grep -rn "class-name-candidate" app/ components/
npm run build
npm run lint
```

**When to stop and ask Desi.** If a legacy-looking block turns out to still be load-bearing for a component with no replacement design yet (e.g. something in `WorkCaseTemplate.tsx` not addressed until Phase 8) — confirm whether to leave it alone or fast-track that component's rebuild.

---

## Phase 3 — Navbar and hero prototype

This is the first visual build.

**Goal.** Ship a solid-ground, no-imagery hero and nav that passes the 10-second read, at both the widest and narrowest supported breakpoints, before any other section is touched.

**Include:**
- Solid near-black ground (`--ground`, per Phase 1 tokens) — no imagery behind text, ever, per the governing layering rule.
- Content per `docs/design.md` §15 and `04`'s locked hero copy, used verbatim: name (Desi Kamdrawati) as a top-left mono label; identity line ("I help early-stage teams turn attention into users, members, and partners."); one proof annotation only ("Grew Derive's Discord from 15,000 → 40,000+ through its token launch.") in the annotation rail with ember numerals; availability line (provisional pending Desi's confirmation — see stop condition below); primary CTA (Work) and secondary CTA (Email/mailto).
- Exactly one proof annotation in the hero — do not add a second metric or a KPI-card treatment.
- Navigation per `02` §10 / `docs/design.md` §11: Jigsaw (home) · Work · Community (conditional on Phase 10) · About, mono index numbers, EMAIL as an explicit mailto item first in the social row, then LinkedIn/X icons. No "Contact" label, no `/contact` route.
- 1440px acceptance criteria: full hero content (name, identity line, proof annotation, availability, CTA) visible without scrolling; nav visible and legible; no text touching imagery (there is no imagery in the hero by design).
- 360px acceptance criteria: name, identity line, availability, and email CTA visible on first screen without scrolling; the proof annotation may sit just below the fold per `02` §3; email CTA stays outside any collapsed nav menu.
- 10-second stranger test: have someone with no prior context view the hero at both breakpoints and confirm they can state, unprompted, Desi's name, what she does, that she's available, and one piece of evidence — this is the actual acceptance test, not a subjective design opinion.
- Jigsaw nav-label dependency check: confirm the "Jigsaw" home-nav label only works because (a) the wordmark also links home and (b) this hero delivers 10-second clarity on its own. If the hero fails the stranger test, the "Jigsaw" label is the first thing to reconsider — per `02` §10's explicit dependency note.

**Files likely touched.** `components/Navbar.tsx`, `components/HeroSection.tsx`, `components/site-data.ts` (only the parts feeding nav/hero — not the five-category `pieces` array, which belongs to Phase 5), `app/layout.tsx` if nav mounting changes, `app/globals.css` (hero/nav-scoped classes only).

**What must not be changed.** The jigsaw section, Derive flagship section, Now section, Work/About pages, or any copy not already locked in `04`. Do not invent an availability or location line if Desi hasn't confirmed one.

**Acceptance criteria.** Passes both the 1440px and 360px checks above. Passes the 10-second stranger test with at least one person unfamiliar with Desi's background. No glow, no KPI card, no text on imagery, no second proof point. Nav shows the four (or three, pending Community) approved labels with the email-first social row.

**Risks.** Filling the availability/location line with an invented placeholder that then ships by accident. Treating the hero as "done" from a designer's eye without running the actual stranger test. Breaking the "Jigsaw" label's stated dependency by shipping a hero that needs the jigsaw section to make sense first.

**Manual checks.** View at exactly 1440px and 360px viewport widths. Tab through the nav and hero CTA with keyboard only and confirm visible focus states. Run the stranger test with a real person, not a self-assessment.

**Commands to run.**
```
npm run dev
npm run build
npm run lint
```

**When to stop and ask Desi.**
- The availability line and location line are explicitly provisional in `04` and `docs/design.md` §16 ("Available now · [location line pending]") — do not finalize wording without Desi's confirmation.
- Whether "TGE" or "token launch" is used in the hero proof annotation is also listed provisional in `04` — the locked hero copy already resolves this specific instance ("through its token launch"), so use that exact wording; escalate only if Desi wants it changed.
- If the stranger test fails, stop before proceeding to Phase 4 and bring the result back to Desi rather than iterating alone indefinitely.

---

## Phase 4 — Caption / annotation / plate components

**Goal.** Build the shared evidence-display primitives once, correctly, so every later phase (jigsaw, Derive, Work, About) consumes the same components instead of reinventing caption styling per section.

**Include:**
- **Caption component:** implements the schema from `04`/`docs/design.md` §5 exactly — evidence captions as `project · artefact or figure · Desi's verb`, mono, tabular numerals, ember on the verified number only; event captions as name / place / attendance-if-verified / role verb, no atmosphere adjectives; artefact captions as what-it-is / what-it-was-for / Desi's contribution, under 15 words where possible. The component should not allow a second accent color or a KPI-style layout to be passed in.
- **Plate component:** 1px hairline border (`--line`), small-or-no corner radius, sits on solid ground, mandatory mono caption slot beneath it (no plate may render without a caption), lazy-loads against a solid placeholder at the correct aspect ratio to avoid layout shift, 2px lift + border-brighten on hover per `docs/design.md` §7, never rendered more than three-per-viewport (enforce via a section-level guard or documented convention, not just a hope).
- **Terrain component or treatment rules:** environmental photography treated as ground — bounded, grained, slightly desaturated, lifted blacks, never placed behind text, never left uncaptioned for more than one viewport, full-bleed reserved for exactly two uses sitewide (the jigsaw field in Phase 5, and route-level case-page imagery in Phase 8).
- **Evidence numeral styling:** tabular numerals, ember accent, minimum 12px, always paired with a mono qualifier line — never a bare large number, never a counting/odometer animation (explicitly banned).
- **Ember proof rules:** ember is evidence-only; it must not appear on interactive/hover states (that is moss's job); every accent state ships with a text or border change alongside the color, never color alone.
- **Accessibility requirements:** every plate has alt text derived from its caption; purely atmospheric terrain is marked decorative; nothing renders below 12px; contrast-check bone-on-ground (target ≥7:1 for display/body, ≥4.5:1 minimum for secondary text) and moss-on-ground specifically, since `docs/design.md` flags moss-on-black as the riskiest pairing in the system — if moss fails 4.5:1 in any text use, restrict it to borders/ticks only and use bone for the accompanying text.
- **No KPI cards** — this phase is the exact place that discipline gets enforced or lost; if a design pushes toward a three-up icon-and-number card, that is the retired pattern and should be re-routed into an annotation instead.

**Files likely touched.** New shared components, e.g. `components/Caption.tsx`, `components/Plate.tsx`, `components/Terrain.tsx` (naming Desi's/implementer's call), plus `app/globals.css` additions for their base classes.

**What must not be changed.** Section-level layout of hero, jigsaw, Derive, Now, Work, or About — this phase produces building blocks, not finished sections. Do not wire these into the actual homepage sections yet if that work belongs to a later phase; a small isolated test/story page is an acceptable way to verify the components before Phase 5–8 consume them.

**Acceptance criteria.** Caption, Plate, and Terrain components exist, pass the accessibility checks above, and contrast-test cleanly for mono-on-black and both accents (per `03`'s explicit "prototype the caption/annotation component with contrast verification" instruction). No KPI-card pattern exists anywhere in the new components.

**Risks.** Building these components already coupled to one section's specific content (e.g. hard-coding Derive's captions into the Plate component) instead of keeping them generic and data-driven. Skipping the moss-on-black contrast test because it "looks fine" on one monitor.

**Manual checks.** Run an automated contrast checker against `--bone`/`--bone-secondary`/`--meta` on `--ground` and `--ground-quiet`, and against `--moss` on `--ground` for any text use. Verify keyboard focus rings render at 2px and are visible against the near-black ground.

**Commands to run.**
```
npm run build
npm run lint
```

**When to stop and ask Desi.** If moss-on-ground fails contrast for any planned text use and the fallback (moss as border/tick only, bone for text) changes a design intention Desi cared about — confirm before locking it in.

---

## Phase 5 — Jigsaw surveyed-field prototype

**Goal.** Replace the current five-category, invisible-hotspot jigsaw (`components/PuzzlePiece.tsx`, `JigsawCluster.tsx`, and the `pieces` array in `components/site-data.ts`) with the approved Model 1 — one completed, seven-parcel surveyed field — as the site's single signature interaction.

**Include:**
- **Completed field:** one continuous terrain photograph cut by 1px survey lines into seven irregular rectangular parcels, complete from the first frame — no missing pieces, no "unfinished" states, ever. No interlocking puzzle tabs.
- **Seven parcel labels**, locked in `04`/`docs/design.md` §6, used verbatim — Spatial Design, Events, Community, Sports Media, Growth, Partnerships, Product — each with its capability line, evidence line, and destination exactly as tabled in those documents. This directly replaces the current five categories (Events, Community, Web3, Growth, Exploration) in `site-data.ts`, which must be retired, not extended.
- **No childish puzzle tabs** — confirm the new geometry uses straight survey-line seams, not interlocking jigsaw-piece silhouettes, anywhere in the implementation (SVG clip-paths, CSS clip-path, or image crops should be checked against this rule specifically, since the current component name `PuzzlePiece.tsx` suggests the old interlocking-tab model).
- **Tap / keyboard / focus / reduced motion:** parcels are real buttons in DOM order with a visible 2px moss focus ring; arrow keys move between parcels; tap and Enter open the capsule (hover is preview-only); reduced-motion users get parcels fully defined instantly with no scroll-linked animation.
- **Mobile band stack:** the field becomes a vertical stack of full-width horizontal bands, each a wide crop of the same terrain sharing continuous imagery (so it still reads as one field cut into strips, not seven cards), with accordion capsules and 44px minimum touch targets.
- **Capsule / bottom sheet:** desktop opens a capsule docked to the annotation rail (chapter, capability line, one evidence line, one link); mobile opens a bottom sheet; both trap focus and close on Escape.
- **Destination mapping**, per `03`/`docs/design.md` §6, used as-is: Community → Derive case community section; Events → Derive case Breakfast section; Growth and Partnerships → Work index anchors; Spatial Design → About origin section; Sports Media → Work index (Bruce entry); Product → Now section (HUNCHR). These destinations depend on Phases 6–9 existing — if this phase ships before those sections/anchors exist, the links should point at placeholders that are tracked, not silently broken.
- **What assets are needed:** one continuous terrain photograph suitable for seven-way division at roughly 70vh by full content width, real (not generated) per `03`'s recommendation, sourced or commissioned — this is listed as a missing/unverified asset in `03`; if no such photograph exists yet, escalate rather than substituting a stock or generated image without Desi's sign-off.

**Files likely touched.** `components/JigsawCluster.tsx`, `components/PuzzlePiece.tsx` (likely renamed/rebuilt entirely), `components/site-data.ts` (the `pieces`/`Piece` type and array — replace the five-category model with the seven-chapter model), `app/globals.css` (jigsaw-scoped classes), a new terrain image asset.

**What must not be changed.** Any other homepage section, the hero built in Phase 3, or the shared Plate/Caption/Terrain components from Phase 4 (consume them, don't fork them).

**Acceptance criteria.** Seven parcels, correctly labeled, one completed field, no interlocking-tab geometry, full keyboard/touch/reduced-motion support per the checks above, mobile band-stack behavior confirmed at 360px, destinations wired to real anchors or explicitly tracked placeholders.

**Risks.** Reusing `PuzzlePiece.tsx`'s existing interlocking-tab visual assumptions under a new label instead of actually rebuilding the geometry. Shipping the field before the terrain photograph decision is made, defaulting to a placeholder that then ships to production. Wiring destinations to sections that don't exist yet without flagging it.

**Manual checks.** Tab through all seven parcels keyboard-only and confirm DOM order matches the intended reading order. Test with `prefers-reduced-motion` enabled. Resize to 360px and confirm the band stack reads as one continuous field, not seven disconnected cards.

**Commands to run.**
```
npm run build
npm run lint
```

**When to stop and ask Desi.**
- Before sourcing or committing to a terrain photograph if the existing field asset (the Community-page grass image `03` calls out as the site's strongest existing visual) isn't confirmed as the one to reuse.
- Before wiring a destination link to a section that doesn't exist yet in the current phase sequence.
- If seven irregular parcels can't be cut cleanly from the confirmed terrain image without looking like generic rectangles — that's a visual-direction judgment call, escalate rather than freelancing a new treatment.

---

## Phase 6 — Derive flagship homepage section

**Goal.** Build the homepage's densest, ember-territory section: Derive as flagship proof, using the borrowed Direction B plate-spread treatment, with the locked captions from `04` and no invented metrics.

**Include:**
- **One large plate plus two smaller plates**, per `docs/design.md` §7: one large artefact plate (Framer landing screenshot) in columns 1–7 proving shipping; two stacked smaller plates in columns 8–12 (Traders Breakfast photograph; Believe in SomETHing frame) proving rooms and ecosystem reach respectively.
- **Locked Derive captions**, used verbatim from `04`/`docs/design.md` §5 — no paraphrasing:
  - Discord · `15,000 → 40,000+` members through the TGE period · community growth across Discord, Telegram, and X
  - Believe in SomETHing · ecosystem campaign, `430+` protocols · contributor
  - Traders Breakfast, Coinfest Bali · Derive's first live event, `100+` attendees · produced
- **15,000 → 40,000+**, **430+ protocols**, and **100+ attendees** each attached to their specific artefact's caption, ember numerals, tabular figures — never stacked on one plate, never presented as a standalone stat.
- **Role/context paragraph:** roughly 60 words stating role, period, and scope plainly, per `docs/design.md` §7 — pull directly from the career-context document's Derive entry (2024 – February 2026, community growth, events, campaigns, partnerships, product/brand communication, ecosystem development) rather than freehand summarizing.
- **Full case CTA:** a "Read the full case" text link, with the entire large plate also clickable through to `/work/derive`.
- **No KPI cards:** confirm the three metrics render as three separate mono captions attached to their three separate plates, not as a three-up card row with icons.

**Files likely touched.** A new or rebuilt Derive-flagship section component (currently likely folded into `components/WorkSection.tsx` or `NarrativeSection.tsx` — confirm which and extract if needed), `components/site-data.ts` (Derive entry data), `app/globals.css` (flagship-section-scoped classes), consumes `Plate`/`Caption` from Phase 4.

**What must not be changed.** RMIT/earlier-work content must never sit visually adjacent to Derive's metrics, per `02` §4 and `03` — keep the flagship section free of any Foundations-tier content. Merch photography moves to the case-page gallery (Phase 8), not into this homepage block.

**Acceptance criteria.** Three plates, three locked captions verbatim, ember-only accent usage in this section, role paragraph within roughly 60 words and sourced from the career-context doc, working case-page link, never more than three plates in the viewport.

**Risks.** Rounding or rephrasing the locked numbers ("15k → 40k" vs. the exact "15,000 → 40,000+" wording) — captions must match `04` exactly. Pulling role-paragraph language from the old site's copy instead of writing fresh 60 words grounded in the career-context facts.

**Manual checks.** Diff the rendered captions character-for-character against `04-voice-and-copy.md` §Approved Derive captions. Confirm the section's total plate count per viewport is ≤3 at all breakpoints.

**Commands to run.**
```
npm run build
npm run lint
```

**When to stop and ask Desi.** If the Framer landing screenshot, Breakfast photograph, or Believe in SomETHing frame aren't yet available/rights-checked (listed as a missing asset in `03`) — escalate rather than substituting a placeholder image that might ship.

---

## Phase 7 — Now ledger

**Goal.** Build the Now section as an honest ledger of active files — HUNCHR, Lemon Tree, Tago — that explicitly refuses the case-study form.

**Include:**
- **HUNCHR / Lemon Tree / Tago** as three full-width rows: mono index, name at small display size, one plain sentence of what is being tested, mono status tag (e.g. `ACTIVE · 2026 · EARLY`). HUNCHR's row ~1.3× the others with a second descriptor line signaling product-led participation direction and linking to the Product jigsaw parcel.
- **Honest current status:** verbs of testing, never verbs of achievement, per `01`/`04`/career-context. Draw the actual activity descriptions from the career-context document (e.g. HUNCHR: distribution experiments, warm-invitation testing, onboarding-friction identification, WhatsApp/private-group acquisition testing, football-club partnership exploration; Lemon Tree: partnerships, BD, venue/market research, outreach strategy; Tago: prospect/market research, founder outreach, partnership exploration) rather than writing new characterizations.
- **No metrics, no images, no galleries, no achievement lists** — the visual restraint is the honesty, per `docs/design.md` §8. If a temptation arises to add a number here, that number belongs in a case study once verified, not in the Now ledger.
- **No fake outcomes:** do not imply HUNCHR, Lemon Tree, or Tago have shipped results, secured partnerships, or hit any target. Career-context is explicit that user numbers, traction, activation/conversion/retention rates, revenue, confirmed partnerships, and successful experiments must not be invented or overstated for any of these three.
- **HUNCHR as product-led participation signal only:** frame HUNCHR's descriptor line around direction (sports, social competition, product-led community, early-stage distribution) rather than proof — it is explicitly not a flagship and must not read as one.
- **Confidentiality boundaries:** Lemon Tree and Tago are named only at the domain level (trading/liquidity/market structure/digital assets for Lemon Tree; robotics/AI/product development/emerging technology for Tago) — never client names, targets, pipelines, financial terms, or partnership specifics.

**Files likely touched.** A new or rebuilt Now-section component, `components/site-data.ts` (Now-ledger data), `app/globals.css` (section-scoped classes, deliberately quiet/typographic per the docs).

**What must not be changed.** Do not give this section a Plate/Terrain treatment — it explicitly has none. Do not reuse Derive's ember accent here; this section carries no accent-worthy verified numbers at all.

**Acceptance criteria.** Three rows, HUNCHR visually ~1.3× the others, testing-language throughout, zero numbers, zero images, confidentiality boundaries respected for Lemon Tree/Tago, HUNCHR's descriptor line reads as direction not proof.

**Risks.** Drifting into achievement language ("grew," "launched," "secured") instead of testing language ("testing," "exploring," "identifying"). Naming a Lemon Tree or Tago client or deal detail that was only ever discussed internally.

**Manual checks.** Read every sentence in this section and confirm each verb is a testing verb, not an achievement verb. Confirm no Lemon Tree/Tago sentence names a client, target company, or financial figure.

**Commands to run.**
```
npm run build
npm run lint
```

**When to stop and ask Desi.** HUNCHR's public title, Lemon Tree's and Tago's exact public-safe wording/titles/start months are all explicitly provisional in `04`/career-context — do not finalize this section's copy without Desi confirming these facts first; if implementation reaches this phase before they're confirmed, stop and escalate rather than shipping a working title as final.

---

## Phase 8 — Work index and case-study template

**Goal.** Build the tiered Work index (Flagship / Current / Selected / Foundations) and the shared case-study template, starting with the Derive case page.

**Include:**
- **Work hierarchy:** Flagship (Derive — largest row, ~3× visual weight, artefact plate plus one-metric caption, full case page); Current (HUNCHR, Lemon Tree, Tago — text-led rows matching the homepage Now ledger, no case pages until verified outcomes/titles exist); Selected (Bruce Media, RISA — compact rows, one small artefact each; RISA upgradeable to a standard case once documented; Bruce Media edited to remove overstated internship claims per career-context); Foundations (RMIT — About material and jigsaw piece only, not a Work entry; Misura — compact entry with repeated 3D-modelling/referral/repeat-customer points removed per career-context; JAU — only if 2–3 strong visuals exist, otherwise omitted). Use the label "Foundations," never "Archive."
- **Derive case page** (`/work/derive`): keep the current working skeleton (title, artefact hero, meta row, intro, episodes, gallery) with three specific changes — achievements become prose-plus-annotation rather than a raw bullet stack; every gallery image gains a mono caption; the gallery template's silent six-image drop (an existing bug/limitation to flag and fix, not carry forward) is remediated.
- **Compact entries:** name, role, dates, two-sentence activity description, honest status marker — explicitly not pages. No links to nowhere.
- **Empty gallery slot suppression:** missing content types don't render at all — no placeholders, no "coming soon" states, anywhere in the Work index or case template.
- **No links to nowhere:** every link on the Work index resolves to a real destination; a Current-tier entry with no case page yet must not link to a dead or stub route.
- **Case-page captions:** every gallery image, artefact, and event photo uses the Phase 4 Caption component with the same schema as the homepage (evidence / event / artefact caption forms) — no separate, looser caption style for case pages.
- **Standard case template:** same skeleton as flagship, fewer sections, "what was tested" replacing "key achievements" wherever outcomes are unverified (this applies to RISA and any Selected/Foundations entry that gets a standard case page).

**Files likely touched.** `app/work/page.tsx`, `app/work/[slug]/page.tsx`, `components/WorkSection.tsx`, `components/WorkCaseTemplate.tsx`, `components/DetailCard.tsx` if it's part of the compact-entry rendering, `components/site-data.ts` (`WorkItem`/`WorkCaseStudy` data, retiering into Flagship/Current/Selected/Foundations).

**What must not be changed.** RMIT stays out of the Work index entirely (About + jigsaw piece only). Do not create case pages for HUNCHR, Lemon Tree, or Tago in this phase — they stay compact entries until outcomes/titles are verified.

**Acceptance criteria.** Work index renders four labeled tiers with the correct membership above. Derive case page shows prose-plus-annotation achievements, captioned gallery images, and no silent image drop. Compact entries render as index rows, not pages, with no dead links. No entry uses the word "Archive."

**Risks.** Accidentally shipping a case page for a Current-tier item because the template makes it easy to generate one from existing data. Missing the gallery six-image-drop bug because it doesn't reproduce with a smaller test dataset.

**Manual checks.** Click every link on the Work index and confirm none 404s or points at an unfinished stub. Load the Derive case page's full gallery and count rendered images against the source data to confirm none silently drop.

**Commands to run.**
```
npm run build
npm run lint
```

**When to stop and ask Desi.** RISA's event names, dates, attendance figures, and photos are listed as unconfirmed in career-context — do not upgrade RISA to a standard case page with invented specifics; escalate if documentation isn't available when this phase is reached. Same for Bruce Media's publicly shareable work and JAU's visual-material sufficiency.

---

## Phase 9 — About page

**Goal.** Build the only personal-first page on the site, applying the ground-and-mark rule to Desi herself, with the jigsaw explained in words exactly once.

**Include:**
- **Personal-first page:** the unique job of this page is explaining how Desi thinks and where she comes from — not a résumé repeat, not a homepage restatement.
- **Bounded portrait / environmental plate:** a portrait or environmental photograph rendered as a Plate (Phase 4 component) — bounded, not full-bleed, no text on it — with the annotation rail carrying mono marks (location, languages, availability as plain mono text, not a glowing pill).
- **Spatial design origin:** RMIT, environments shaping behavior, told in the essay register at 65ch, with one RMIT thesis artefact as a captioned plate beside the relevant paragraph.
- **Three-country upbringing:** Australia / Malaysia / Indonesia, per `02` §9 and career-context — told as part of the essay, not as a separate stat block.
- **Five languages if confirmed:** `03`/`docs/design.md` list "five languages" as rail content, but this is not confirmed in any reviewed source document as a specific list — treat as a fact to verify with Desi before publishing, not to assume or invent.
- **Jigsaw explanation exactly once:** the single verbal explanation of the jigsaw metaphor on the entire site lives here, in one paragraph, per `02`, `03`, and `docs/design.md` — do not also explain it in the jigsaw section's own copy, the hero, or anywhere else.
- **No text over image:** the current About hero (green text over a field photo) fails contrast today per `03`'s audit findings and must be removed as part of this phase, not patched.
- **No glowing availability pill:** availability renders as plain mono text per the token/glow rules from Phase 1.
- **Redirects from `/who` and `/about-me2`:** both routes are deleted and redirected to `/about`, per `02` §9 and `docs/design.md` §10.

**Files likely touched.** `app/about/page.tsx`, deletion of `app/who/page.tsx` and `app/about-me2/page.tsx` (replaced with redirects), `next.config.mjs` (redirect rules) or route-level redirect files, a portrait/environmental photograph asset, `components/site-data.ts` if About content is data-driven.

**What must not be changed.** Do not re-explain the jigsaw metaphor anywhere else on the site once it's written here. Do not add a second jigsaw interaction to this page — the jigsaw appears exactly once, on the homepage (Phase 5).

**Acceptance criteria.** About renders with a bounded, captioned portrait/environmental plate (no text on it), the essay content at 65ch, one jigsaw explanation paragraph (and only one on the whole site — verify by searching all other pages for jigsaw/puzzle explanatory language), no glow, `/who` and `/about-me2` both correctly redirect to `/about`.

**Risks.** Publishing "five languages" or a specific language list without Desi confirming it — this is not sourced in any of 01–04 or career-context and must not be invented. Leaving the old text-over-image hero in place because removing it feels like the "easy" part to defer.

**Manual checks.** Test both redirect routes (`/who`, `/about-me2`) resolve to `/about`. Search the full site for any second occurrence of jigsaw-explanation language after this phase ships.

**Commands to run.**
```
npm run build
npm run lint
grep -rn "jigsaw\|puzzle" app/ components/ --include="*.tsx" -i
```

**When to stop and ask Desi.**
- Before publishing a specific "five languages" list or any specific location/availability line — none of these are confirmed in the reviewed source documents.
- Before finalizing the About essay itself — `04` explicitly lists "final About-page essay" as not yet locked; use the existing essay register/voice as a base but do not invent new factual claims beyond career-context.
- Before choosing which portrait/environmental photograph to use, since none is confirmed as selected in `03`'s asset-status notes.

---

## Phase 10 — Community route decision

**Goal.** Apply the evidence bar honestly: either ship a real, documented `/community` page, or distribute the evidence elsewhere and retire the route — never ship something thin in between.

**Include:**
- **Evidence bar:** only ship `/community` as a live route and nav item if at least three documented gatherings exist, each with event name, date, city, Desi's role, and at least one photo or artefact. Per `02` §8, current candidates include the Coinfest Bali Traders Breakfast and one RISA event, with at least one more still needed — this bar is not met as of the source documents reviewed for this roadmap.
- **Otherwise distribute community evidence into Derive, About, Work:** per `03`, at launch community evidence should live as the Community jigsaw parcel (Phase 5), the Breakfast plate in the Derive flagship section (Phase 6), and one or two captioned gathering photographs on the About page (Phase 9) — with RISA represented in its own Work entry (Phase 8) and HUNCHR's community experiments folded into its Now framing (Phase 7).
- **No thin mood-board route:** the existing `/community` page's floating sentiment labels ("little moments," "meaningful people," "beautiful communities") are retired vocabulary per `04` and must not survive in any form, distributed or not.
- **Captions required if the page ships:** event name, date, city, role, and attendance if verified — no atmosphere adjectives, matching the Phase 4 event-caption schema exactly.

**Files likely touched.** Either `app/community/page.tsx` is built out to the evidence-bar standard, or it is removed with a redirect (to `/work`, per `02`'s provisional sitemap) and the nav item is dropped from `components/Navbar.tsx`; either way, `components/site-data.ts` gains whatever gathering records are used.

**What must not be changed.** Do not leave `/community` live in its current form (the floating-sentiment-label version) under any circumstance — that version fails the evidence bar and uses retired vocabulary regardless of this phase's outcome.

**Acceptance criteria.** Either: (a) `/community` ships with three-plus documented gatherings, each fully captioned, nav item present; or (b) `/community` redirects to `/work`, the nav item is removed, and the same evidence is confirmed present across Derive/About/Work per the distribution list above. No third outcome (a route with fewer than three documented gatherings, or with any un-captioned/floating-label content) is acceptable.

**Risks.** Shipping the route because "it already exists" rather than because the evidence bar is actually met. Distributing evidence but forgetting to actually remove the nav item and route, leaving a dead or thin page reachable by URL.

**Manual checks.** Count actual documented gatherings against the evidence bar before deciding. If retiring the route, confirm `/community` returns a working redirect, not a 404, and that the nav no longer lists it.

**Commands to run.**
```
npm run build
npm run lint
```

**When to stop and ask Desi.** This entire phase is a stop-and-ask phase by design: confirm with Desi (a) how many gatherings are actually documented with name/date/city/role/photo today, and (b) if the bar isn't met, whether to proceed with distribution-only and route removal now, or hold the decision open. Do not decide unilaterally which path to take.

---

## Phase 11 — Mobile, accessibility, and performance QA

**Goal.** Verify the whole site, not just individual sections, against the mobile/accessibility/performance rules the earlier phases were each built against individually.

**Include:**
- **360px hero check:** re-verify the Phase 3 hero still passes at 360px after all subsequent sections/tokens have been added, in case later CSS changes regressed it.
- **No text under 12px:** sweep every page for any computed font-size below 12px, including captions, labels, and status tags.
- **Contrast checks:** re-verify bone/bone-secondary/meta on both ground tones, and moss-on-ground specifically, across every section now that real content (not just the Phase 4 test harness) is in place.
- **Keyboard navigation:** tab through the entire site — nav, hero CTA, jigsaw parcels, Derive plates, Work index rows, case-page galleries, About plate, footer — confirming a visible focus ring at every stop and no keyboard trap outside the jigsaw capsule/bottom sheet (which should trap intentionally and release on Escape).
- **Reduced motion:** verify `prefers-reduced-motion` disables the jigsaw's scroll-linked definition sitewide and renders all entrance motion instantly, on every page, not just the jigsaw section tested in isolation during Phase 5.
- **No layout shift:** verify plates and terrain images reserve their aspect ratio before load across slow-network conditions, sitewide.
- **Image optimisation:** confirm responsive image sizes/formats are served for all Terrain and Plate assets, and that video (About hero, if used) is short, muted, poster-framed, and never autoplaying above the Derive flagship section.
- **Mobile jigsaw behaviour:** re-verify the band-stack behavior from Phase 5 alongside the rest of the now-complete mobile homepage sequence, confirming no reordering has crept in relative to desktop.
- **Email one tap away:** confirm on every page's mobile nav that the email CTA remains outside the collapsed menu at all times, per `02` §10 and §13.

**Files likely touched.** Potentially small fixes across any component touched in Phases 1–10, plus `next.config.mjs` for image optimisation settings if not already configured. This phase should mostly find and report issues, fixing only what's small and clearly in-scope; larger fixes route back to the owning phase.

**What must not be changed.** New features or copy — this phase verifies and patches, it does not design.

**Acceptance criteria.** A written QA pass covering every item above, across every route, at both 1440px and 360px, with issues either fixed (if small) or logged with the owning phase/component named (if not).

**Risks.** Treating this as a single quick pass instead of the full sitewide sweep it's meant to be — regressions introduced in Phase 8 or 9 can easily break something Phase 3 or 5 already verified in isolation.

**Manual checks.** Full keyboard-only pass, full `prefers-reduced-motion` pass, full 360px pass, all on every route — not spot-checks.

**Commands to run.**
```
npm run build
npm run lint
```
(Plus a Lighthouse or axe accessibility scan per route, if available in the environment.)

**When to stop and ask Desi.** If a sitewide issue is found that requires reopening a phase already "signed off" (e.g. the hero regresses at 360px because of a later CSS change) — report it and get direction on whether to fix in this phase or reopen the owning phase's commit.

---

## Phase 12 — Final design critique and polish

**Goal.** One last structured check against the approved direction before merge, using real screenshots rather than memory or a final subjective pass.

**Include:**
- **Screenshot checklist:** capture every route at 1440px and 360px, plus the jigsaw at rest/hover/focused-parcel-open states, the Derive flagship section, the Now ledger, and the About plate — a complete visual record to check against `docs/design.md`'s "definition of done" (what is the ground, what are the marks, which single accent owns it, does any text touch imagery, is every number attached to its artefact).
- **When to use Design Better:** if a design-review tool/skill is available and Desi wants an independent structured critique pass before the final one, this is the point to use it — after the build is functionally complete, not mid-phase.
- **When to use Fable for one final critique only:** per this document's own naming convention (07 following 01–06), a single final narrative/voice-consistency pass against `04`'s locked copy and retired-word list is appropriate here — once, not iteratively throughout the build, to avoid re-litigating copy that's already locked.
- **What screenshots to capture:** every route × both breakpoints; every accent-bearing element (to confirm one accent per section, no third accent, no color-alone meaning); every plate (to confirm captions and hairline borders); the nav (to confirm the email-first social row and correct label set); the footer (to confirm the locked footer copy and no ghost background text).
- **What must be fixed before merge:** any remaining glow, any KPI-card pattern, any text-on-imagery instance, any uncaptioned plate, any numeral without ember/mono-qualifier pairing, any copy that doesn't trace back to `04`, any second jigsaw explanation, any dead link, any route below the Community evidence bar shipping live.

**Files likely touched.** Small polish fixes only, informed by the screenshot review — no new sections or copy.

**What must not be changed.** Do not use this phase to introduce new visual ideas or new copy "while we're in here" — it is a conformance check against already-approved decisions, not a design-exploration pass.

**Acceptance criteria.** Every item in the "what must be fixed before merge" list above is confirmed clean via screenshot evidence, not asserted from memory. Design Better and/or Fable passes (if used) are documented as complete with their findings resolved or explicitly deferred with Desi's sign-off.

**Risks.** Letting a "final polish" pass quietly reopen settled decisions (font choice, accent usage, copy wording) without going back through the proper source-of-truth hierarchy.

**Manual checks.** Walk the full screenshot set against the `docs/design.md` "Definition of done" checklist line by line.

**Commands to run.**
```
npm run build
npm run lint
```

**When to stop and ask Desi.** Before merging: present the screenshot set and a summary of any deferred items, and get explicit sign-off rather than merging on the assumption that "it looks right."

---

## Implementation rules

- Never use `git add -A`. Stage specific files per phase so unrelated drift can't ride along in a commit.
- Commit by phase. Each phase in this roadmap corresponds to roughly one commit (or a small, clearly-related cluster of commits), not a mega-commit spanning multiple phases.
- One visual checkpoint per phase — a screenshot or local render check before committing, especially for any phase touching CSS or layout.
- Do not mix docs, tokens, hero, jigsaw, and case-study work in one commit. Each of those is a different phase and a different commit boundary.
- Show `git status` before and after each phase, so exactly what changed is visible and reviewable.
- Run build/lint before committing implementation phases (`npm run build && npm run lint`). Do not commit on a red build.
- If build fails, stop and report the exact error — do not paper over it with an unrelated workaround.
- If copy or facts are missing (an unconfirmed title, an unverified figure, an unfinished essay), stop and ask Desi rather than drafting a placeholder that might ship.
- If a visual decision contradicts `docs/design.md` (or, transitively, `03`/`04`), stop and ask Desi — do not resolve the contradiction by guessing which side "feels right."

## Output requirements (for whoever executes a phase)

At the end of each phase, show: the files actually changed (diff or `git status`), a one-paragraph summary of what shipped against that phase's acceptance criteria, confirmation of which "what must not be changed" items were left untouched, and the `git status` immediately before and after the phase's commit. At the end of the full roadmap, the same four items should be assembled into a single before/after record covering all twelve implementation phases (Phase 0 through Phase 12).

---

## This document's own output record

1. **File created:** `docs/implementation-roadmap.md` — this file. Nothing else was created or modified.
2. **Roadmap summary:** thirteen phases (0–12) taking the approved Surveyed Ground system from repo hygiene through font/token reconciliation, CSS cleanup, hero/nav, shared evidence components, the seven-parcel jigsaw, the Derive flagship, the Now ledger, Work index/case template, About, the Community route decision, sitewide QA, and final critique — each phase scoped, acceptance-tested, and gated with explicit stop-and-ask-Desi conditions wherever a fact, asset, or copy decision is unconfirmed in 01–04 or career-context.
3. **Implementation files modified:** none. No app files, components, CSS, routes, package files, config files, or existing docs were edited to produce this roadmap.
4. **Git status:** the repository is on branch `redesign/fable-5`. The Fable strategy docs (`docs/fable/01`–`04`, `career-context-and-portfolio-evidence.md`) and `docs/design.md` / `docs/design.html` are already committed and pushed. The repo was clean before this roadmap task; the only new, uncommitted file is `docs/implementation-roadmap.md`. Phase 0 above addresses confirming that clean baseline is still intact immediately before phase-by-phase implementation commits begin.
