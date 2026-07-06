# 03 — Visual Direction

## Status

**APPROVED VISUAL FOUNDATION — DIRECTION A (Surveyed Ground) SELECTED, with one borrowed element from Direction B (the artefact-plate feature treatment for the Derive flagship and case-page galleries).**

Approved after review of three explored directions (A · Surveyed Ground, B · The Assembler's Table, C · Plan and Threshold). Foundation for implementation planning and `04-voice-and-copy.md`.

Nothing from Direction C is imported.

---

## Locked decisions

- **Selected direction:** A — Surveyed Ground.
- **Governing visual rule:** atmosphere is the ground, evidence is the mark, and the two never occupy the same layer. Text never sits on imagery. Every image is either **terrain** (bounded, captionable atmosphere) or a **plate** (bordered, captioned evidence).
- **Two accents with fixed jobs:** ember marks evidence; moss marks interaction. One accent per section.
- **Homepage's defining moment:** the scroll from the throughline into the field — one dark landscape, survey lines drawn, seven labeled parcels, complete from the first frame.
- **Jigsaw's final visual role:** the site's single signature interaction and homepage's third movement. A completed, labeled, touchable map of the career. Referenced nowhere else as decoration.
- **How evidence appears:** exclusively as annotation — mono captions attached to artefacts and terrain, tabular numerals, ember accent, minimum 12px. Never as KPI cards. Never floating. Never repeated a third time.
- **Grid signature:** the recurring **annotation rail** (columns 10–12 on key sections) is the persistent structural device.
- **Borrowed from Direction B:** the artefact-plate feature treatment for the Derive flagship section and case-page galleries only.

---

## Provisional decisions

- **Typography — the serif question.** All three recorded fonts (Clash Display / Satoshi / IBM Plex Mono) remain, with jobs sharpened. If, after prototyping, the footer statement feels cold in Clash, the *single acceptable* concession is one serif display face confined to the footer statement and About essay pull-line only — and that decision should be made from a prototype, not taste memory. The current undocumented live-site serif carrying the whole site is NOT acceptable.
- **Terrain photography decision:** continue with existing field imagery, commission/shoot new ground, or consistently treat licensed photography — an explicit ruling pending. Recommendation (provisional): no generated imagery on a portfolio whose thesis is authenticity.
- **`public/fonts` directory:** does not yet exist in branch (aspirational per CLAUDE.md); must be created during implementation.

---

## Key rules

- **The layering rule:** if a section cannot say what its ground is and what its marks are, it is not designed yet.
- **Every asset must declare its class** — terrain or plate.
- **No text on imagery, ever.**
- **Never more than three plates per viewport.**
- **Full bleed is reserved for exactly two things:** the jigsaw field and route-level imagery on case pages.
- **Grain is on imagery and on the black ground at very low opacity; never on text.**
- **Halftone lives inside image treatment only.**
- **Glow is banned globally** (this reverses the current site's default).
- **Color never carries meaning alone;** every accent state has a text or border change with it.
- **Ember and moss are two accents with two jobs.** Ember marks numerals / active evidence annotations / focus rings. Moss marks hover / active nav / selected parcel border. Never both jobs in one element; never more than one accent per section.
- **The jigsaw metaphor is explained in words exactly once, on About.**
- **Jigsaw parcels are real buttons in DOM order with a visible 2px accent focus ring.** Arrow keys move between parcels.
- **Nothing below 12px anywhere, including captions.**
- **Per-word text animation is banned.**
- **Counting animations on numerals are explicitly banned (fabricated drama).**

---

## Implementation warnings

- The recorded font system is Clash / Satoshi / Plex Mono, but the live site is running an undocumented serif carrying its biggest statements. This drift must be reconciled during implementation before any redesign work compounds on top of it.
- The About-page hero (green text over field photo) and parts of mobile home currently fail contrast — the root cause of "atmosphere arriving before clarity." Fix during implementation, not after.
- The strongest existing visual asset (the annotated field on Community) is on a page that fails the evidence bar. Promote the asset; the page it currently sits on stays off nav until conditions are met.
- The Derive case page is the most usable page on the site — Derive artefacts are orange, which harmonizes with the ember accent. This is a gift; do not fight it.
- The Work page's white light-burst graphic belongs to no system and should not survive any direction.
- The floating sentiment labels on the current Community page ("little moments," "meaningful people," "beautiful communities") are exactly the vague language the strategy retired. The photos are real evidence; the captions around them are not.
- The current invisible hover-hotspot jigsaw model is dead. Do not attempt to preserve it.
- Cold blue is dropped as an accent (three accents is how the current site got noisy). Yellow is dropped (too close to ember to earn a separate job).
- **Prototype first, in this order:**
  1. Hero at 1440px and 360px, tested against the 10-second read with someone who has never heard of Desi.
  2. The jigsaw parcel interaction: touch, keyboard, bottom sheet, reduced motion, mobile band stack.
  3. The caption/annotation component with contrast verification for mono-on-black and both accents.
  4. The Derive flagship plate spread (the borrowed B element).

---

## Full approved content

### 0. What the current screenshots reveal (audit additions)

1. **Strongest existing visual asset is on the Community page.** The grass-field image with small annotated fragments (datamosh squares with numeric labels) is the single most distinctive, mature, and on-thesis visual on the site. It literally shows a field where small pieces of evidence are pinned to a shared ground. Today it decorates a page that fails the evidence bar. It should be promoted, not the page it sits on.
2. **Deployed type system does not match the system of record.** Screenshots show a serif display face carrying the biggest statements. The recorded system is Clash Display / Satoshi / IBM Plex Mono, and `public/fonts` does not exist. So the site is currently running on a de facto serif identity that nobody has formally approved. Must be reconciled in section 15.
3. **Text sits on top of imagery in two heroes and fails contrast.** The About hero and parts of the mobile home are below readable contrast. This is the root cause of "atmosphere arriving before clarity."
4. **Evidence discipline is violated by the current Community page.** Floating labels are exactly the vague emotional language the strategy retired.
5. **The Derive case page is the most usable page on the site, and its artefacts are orange.** This is a gift: the ember/amber accent will harmonize with Derive's own brand color rather than fighting it.

### 1. Inspiration reference analysis

- **Ref 1 — "Bloom Dimensional," halftone landscape collage.** Learn: layered rectangular image fragments as a compositional system; halftone/scan texture on imagery only; numbered marginal micro-lists as annotation register; tension between large expressive type and tiny technical notes. Do not copy: script-plus-pixel hybrid logotype; decorative arrows; collage density as the whole page. Helps: jigsaw visual language, texture rules, metadata register.
- **Ref 2 — Yellow glowing script over dark checkered image tiles.** Learn: a single accent color as the only signal; the checkerboard of embedded image tiles is the most mature "jigsaw without puzzle tabs" abstraction in the whole set. Do not copy: glow on type; centered poster composition; arrows. Helps: jigsaw form, accent strategy.
- **Ref 3 — Sigma lens product page.** Learn: proof that dark editorial can stay usable at production scale; spec tables treated as editorial content; artefact strip; disciplined rhythm. Do not copy: force-justified full-width display text; the starfield background; the pure product-marketing register. Helps: Derive flagship treatment, evidence integration, section rhythm, layout discipline.
- **Ref 4 — "Home Away From Home," gothic serif over grained green hillside.** Learn: one environmental image treated as ground; grain as material honesty; quadrant corner annotations; emotional register (grounded, mysterious, human). Do not copy: display text on image midtones; calligraphic signature logotype; poster-only composition. Helps: hero and About mood, image treatment.
- **Ref 5 — "Thoughts shape reality," night-green street scene with orange mono type.** Learn: restraint. One photo, few words, mono type in a warm accent doing small signal jobs. Do not copy: body text over full-bleed photo; the affirmation-poster voice. Helps: event photography treatment, caption system, accent on dark photographic ground.

**Shared principle across all five:** in every reference, the atmosphere is a ground and the information is a mark made on that ground. None let atmosphere and information compete in the same layer. That is the discipline the current site lacks.

### 2. Direction A — Surveyed Ground (SELECTED)

**Central visual principle.** Atmosphere is the ground, evidence is the mark, and the two never occupy the same layer. Every image is terrain (bounded, grained, environmental). Every claim is an annotation (mono, small but legible, carrying real data). Body and display text sit only on solid near-black, never on imagery. If a section cannot say what its ground is and what its marks are, it is not designed yet.

**Relationship to strategy.** Growth Through Gathering happens somewhere: a room, a field, a venue, a Discord. This direction makes *place* the visual subject — Desi's actual origin (spatial design) and actual method (designing conditions, i.e. environments). Participation engineering appears as the annotation layer. The assembler framing is direct: a surveyed field is by definition already complete; the surveyor divides and labels it, she is never a missing piece of it.

**Homepage composition (desktop).** Master grid: 12 columns, 1440px max content width, 80px outer margins, 24px gutters. Recurring **annotation rail** (columns 10–12) is the signature structural device. Reading direction: primary content left (columns 1–9), marks right.

1. **Hero.** Solid near-black. Top bar: nav. Columns 1–9: mono micro-label above two-line display statement of practical identity at largest scale on site. Columns 10–12: annotation rail carries availability line, the single anchor proof (Derive Discord 15k → 40k through TGE) with numerals in accent, and mailto CTA as underlined text link. Below the statement, one thin 1px hairline crosses the full grid: the first survey line, foreshadowing the field. Negative space generous; ~85vh; fewer than 40 words. Density: very low.
2. **Throughline.** Columns 2–8, left-aligned, static. Three or four sentences at a middle display size (not manifesto scale), ~55ch measure. Annotation rail carries one mark: the poetic thesis in mono, treated as a field note. Density: low.
3. **Jigsaw ("the plotted field").** Full-bleed-width terrain image (the field asset the site already owns, or successor photography), roughly 70vh, divided by fine 1px survey lines into seven irregular rectangular parcels. Each parcel carries a small solid-backed mono label (chapter name + index).
4. **Derive flagship.** Solid ground again. Mono section header across columns 1–9: "FLAGSHIP · DERIVE.XYZ · 2024 – FEB 2026 · GROWTH MARKETER." Columns 1–7: one large artefact plate (Framer landing screenshot). Columns 8–12: two stacked smaller plates (Traders Breakfast; Believe in SomETHing frame). Every plate has a mono caption beneath it on solid ground; caption is where the number lives (15k → 40k, 100+, 430+). 60-word role paragraph and "Read the full case" link close the section. Ember accent appears on numerals only. Density: densest section, deliberately.
5. **Now.** A ledger: three full-width rows (HUNCHR, Lemon Tree, Tago), each with mono index, name at small display size, one plain sentence of what is being tested, and a mono status tag ("ACTIVE · 2026 · EARLY"). HUNCHR's row roughly 1.3× the others with a second descriptor line signaling product-led participation direction. No images, no metrics. Density: low, typographic.
6. **Contact / footer.** Existing footer statement concept survives ("If people are part of the product, we should talk" register, final copy pending 04), set large on solid black, with availability, mailto, socials, mono colophon. The ghost background text ("Systems of Belonging") is removed.

**Hero design.** Name: top-left mono label, always the first readable element. Practical identity: display statement, columns 1–9. Derive anchor: annotation rail, right, numerals in accent. Availability: annotation rail, above the proof. CTA: annotation rail, underlined mailto text link. Media: none in the hero; the first image is earned at the jigsaw. Texture: grain at very low opacity on the black ground only. Jigsaw seam: the single hairline. Mobile: single column; mono name label, three-line max display statement, then proof as one annotated line, then availability + mailto as full-width tappable link; the hairline still crosses. The 10-second read (name, function, early-stage relevance, one Derive proof, availability, taste) is complete above the fold on both breakpoints.

**Throughline section.** Type at ~28–34px desktop, 55ch measure, left-aligned at columns 2–8 so it steps in from the hero's edge: the page narrows as it gets more personal. Static; no scroll-jacking, no per-word reveals. Poetic thesis sits in the rail in mono, quiet — a private note rather than a slogan. Last line of throughline should end within ~120px of the field's top edge so "conditions for people to find each other" and the ground itself are read in one eye movement.

**Jigsaw system.**
- Form: seven irregular rectangular parcels cut from one continuous terrain photograph by 1px survey lines. Geometric but organic in content; no interlocking tabs, ever; seams are the survey lines.
- Material: photographic terrain with film grain and a slight desaturation at rest.
- Size: about 70vh by full content width on desktop.
- Chapter labels: always-visible mono labels with solid near-black backing chips, one per parcel (Spatial Design, Events, Community, Sports Media, Growth, Partnerships, Product).
- Evidence labels: appear in the opened capsule, not scattered on the field.
- States: at rest, all parcels equally defined; the field is complete from the first frame. On focus/hover/tap, the selected parcel comes to full color and gains a 1px accent border; all others dim slightly. Opening a parcel docks a capsule panel to the rail on desktop (chapter, capability, one evidence line, one link) and opens a bottom sheet on mobile. Hover is preview only; tap and Enter are the real interactions.
- Focus: parcels are real buttons in DOM order with a visible 2px accent focus ring; arrow keys move between parcels.
- Click destinations: Community parcel → Derive case community section; Events → Derive case Breakfast section; Growth and Partnerships → Work index anchors; Spatial Design → About origin section; Sports Media → Work index (Bruce entry); Product → Now section (HUNCHR).
- Reduced motion: no scroll-linked definition; parcels swap opacity instantly.
- Mobile: field becomes vertical stack of full-width horizontal bands, each band a wide crop of the same terrain with its label chip; bands share continuous imagery so it still reads as one field cut into strips, not seven cards.
- Adding future chapters: re-parcel the field (survey lines move; composition remains complete).

**Derive flagship treatment.** Scale: Derive gets more vertical space than the jigsaw and roughly 3× the space of the entire Now section; dominance is spatial, not decorative. Artefacts: real, bordered plates (1px hairline border, small corner radius or none) on solid ground, captions beneath in mono. Image selection: Framer landing screenshot (proves shipping), Breakfast photograph (proves rooms), campaign frame (proves ecosystem reach); merch photography moves to case page gallery. Metric placement: inside captions, attached to the artefact that earned them, numerals in ember. Role framing: 60-word paragraph stating role, period, scope plainly. Transition to case: one text link, "Read the full case," plus whole large plate is clickable. Interaction: plates lift 2px on hover with border brighten; nothing else. Mobile: plates stack full-width in same order, captions stay attached.

**Now section.** Ledger rows. Hierarchy: HUNCHR first and larger; Lemon Tree and Tago equal beneath. "Current and early" is communicated by status tags and by total absence of artefacts and numbers: the visual restraint is the honesty. HUNCHR signals product-led participation through descriptor line (final wording in 04) and jigsaw-parcel link. Confidential work (Lemon Tree, Tago): name the domain, never clients/pipelines/terms; one sentence each. Verbs of testing ("testing distribution through…"), not outcomes.

**Work index and case studies.** Work index: numbered-row structure survives but is re-disciplined. Rows grouped in three labeled tiers: Flagship (Derive, largest row, artefact plate plus caption with one metric), Current (HUNCHR, Lemon Tree, Tago: text-led rows matching homepage ledger), Foundations (Bruce Media, Misura, RMIT, RISA: compact rows with one small artefact each). Role and dates: mono, always visible, right-aligned per row. The light-burst graphic is removed. Flagship case page (`/work/derive`): keeps current successful skeleton (title, artefact hero, meta row, intro, achievements, gallery) with three changes: achievements become prose-plus-annotation rather than raw bullet stack; gallery images each gain a mono caption; the gallery template's six-image silent drop is flagged for remediation. Standard case page: same skeleton, fewer sections, "what was tested" replacing "key achievements" where outcomes are unverified. Compact entry: index row only, no page. Page transitions: 150ms fade.

**About page.** Ground-and-mark applies to Desi herself. Top: bounded portrait or environmental photograph as a plate (not full-bleed, no text on it), with rail carrying mono marks: based in Jakarta, five languages listed, open to remote roles (as plain mono text: the glowing pill is removed). Body: existing personal essay register survives at 65ch on solid ground. Three-country upbringing and spatial-design origin told in the essay, with one RMIT thesis artefact as a captioned plate beside the relevant paragraph. Jigsaw explanation lives here and only here, in one paragraph. Current text-over-image hero and its contrast failure are removed. Future direction: one short closing paragraph pointing at product-led participation. Availability: repeated in the footer.

**Community and gatherings.** At launch, community evidence is distributed: the Community jigsaw parcel, the Breakfast plate in the flagship section, and one or two captioned gathering photographs on the About page. Photography treatment follows Ref 5: warm, grainy, honest, bounded plates. Captions carry event name, date, city, Desi's role, and attendance where known. No floating sentiment labels. Future Gatherings page: chronological ledger of captioned plates, shipping only when the approved evidence bar (three documented gatherings) is met.

**Navigation.** Fixed slim top bar on solid near-black with a hairline bottom rule. Left: DK wordmark, links home. Center-left: Jigsaw · Work · Community (conditional) · About, with mono index numbers (01–04). Active state: small accent underline tick, not a pill, not a glow. Right: EMAIL as an explicit mailto text item first, then LinkedIn and X icons; on mobile the email item stays visible outside the collapsed menu. Mobile menu: full-screen solid overlay, large type, same order. The jigsaw motif does not appear in the nav; the label "Jigsaw" plus hero's 10-second clarity carries it.

**Typography.** All three recorded fonts remain, jobs sharpened.
- Clash Display: display statements and section-scale headings only; never below 28px.
- Satoshi: body and interface, 16–18px, line-height 1.6, max 65ch.
- IBM Plex Mono: the entire annotation register (labels, captions, proof, dates, status tags, nav numbers), minimum 12px, uppercase with 0.08em tracking for labels, sentence case for captions, tabular numerals for all evidence figures.

Display scale desktop: ~72–96px hero, 40–56px section, 28–34px throughline. Mobile: 40–48px hero max. Evidence numerals may render in Clash within captions when a number is the point (15k → 40k), always with a mono qualifier line.

**Colour and material system.** Ground tones: near-black (around #0B0B09), a slightly warmer charcoal for alternating quiet zones. Moss and forest green live inside imagery, plus one desaturated moss tint permitted for interactive-state feedback. Text: bone white at full strength for display and body; secondary text no lower than 65% luminance contrast-checked to 4.5:1. Accents: exactly two. Ember/amber = evidence color (numerals, active evidence annotations, focus rings). Moss = interaction color (hover, active nav, selected parcel border). Never both jobs in one element; never more than one accent per section (Derive flagship is ember territory; the jigsaw is moss territory). Cold blue is dropped. Yellow is dropped. Borders: 1px hairlines at low-contrast bone. Grain: on imagery and on the black ground at very low opacity; never on text. Halftone: permitted inside image treatment only, sparingly. Glow: banned globally. Image treatment: slight desaturation and lifted blacks so photographs sit into the ground rather than punching holes in it; Derive's orange artefacts left native. Accessibility: color never carries meaning alone.

**Media and artefacts.** Two classes only:
- **Terrain (atmosphere):** environmental photography, bounded, grained, desaturated, never behind text, never uncaptioned for more than one viewport.
- **Plates (evidence):** screenshots, event photos, campaign assets, spatial work, product UI; hairline border, mono caption mandatory (what, where, when, role, figure if verified).

Cropping: plates keep native aspect where the artefact is the point; photography may crop to 3:2 or 4:3. Video: only with poster frames, never autoplay with sound, autoplay muted only for the terrain field if performance allows, with a static fallback. Loading: plates lazy-load with solid placeholder at correct aspect ratio (no layout shift). Sequencing: never more than three plates per viewport. Mobile fallback: terrain video becomes a still; plates stack with captions attached.

**Motion system.** Character: settling, not performing; things come to rest like marks being made. Durations 200–400ms, ease-out. Page entry: content fades up 8px, staggered by section, once. Scroll: the only scroll-linked effect on the site is the field's parcels gaining definition as the jigsaw enters the viewport (desaturated to defined), capped and cheap. Jigsaw transitions: capsule opens with a 250ms fade and 8px rise. Image reveals: opacity only, no masks, no parallax. Text reveals: none; text is simply there (per-word animation banned). Hover: border/label brighten, 150ms. Route transitions: 150ms fade. Reduced motion: everything instant; scroll-linked definition disabled and parcels render fully defined. Must remain static: hero, all body text, all captions, the footer statement.

**Spatial and grid system.** The grid is the direction's argument that Desi still thinks spatially. 12 columns desktop, 1440px max, 80px margins, 24px gutters; annotation rail (columns 10–12) is the persistent asymmetry (the margin where a surveyor writes). Text max 65ch. Section spacing: 160–200px desktop between major sections, 96–120px mobile; rhythm alternates dense (flagship) and quiet (throughline, Now) deliberately. Full bleed reserved for exactly two things: jigsaw field and route-level imagery on case pages. Tablet: 8 columns, rail collapses to a top-of-section annotation strip. Mobile: 4 columns, 20px margins; rail content becomes inline annotation blocks directly above or below what they mark (mark follows ground, always).

**Accessibility and usability.** Contrast risks: mono annotations on black (mitigated: 12px minimum, bone at 4.5:1 minimum, backing chips on imagery); moss on black is the riskiest pairing and must be contrast-tested before approval. Small type: nothing below 12px anywhere. Keyboard: parcels, plates, and nav are native focusable elements in logical DOM order; visible 2px focus ring sitewide; capsule/bottom-sheet traps focus and closes on Escape. Touch: 44px minimum targets; the invisible-hotspot model is dead. Reduced motion honored globally. Reading order: rail must follow its section in DOM order so screen readers hear ground then mark. Media alternatives: every plate has alt text derived from its caption; terrain images are decorative-marked when purely atmospheric. Performance: one large terrain image is the main cost; serve responsive sizes and a compressed placeholder. Discoverability: labels always visible and the jigsaw carries one plain mono instruction line, replacing "hover and click to explore."

**Memorability.** *About Desi:* "she maps how people gather, and she's been doing it since she designed rooms." *About the work:* Derive plates with numbers attached to real artefacts (the Breakfast photo with 100+ in the caption is the image that sticks). *Visually:* a dark field cut into labeled parcels; the annotated landscape. *About the interaction:* touching a piece of ground and having it answer with a chapter and a proof. *Forwarding sentence:* "Her whole career is laid out like one surveyed field, and every claim has a coordinate."

**Risks.** Generic: low-moderate; dark portfolios are common, annotated terrain systems are not. If terrain imagery is lazy stock it collapses into moodboard. Overdesigned: low; the system has two accents and one scroll effect. Childish: very low. Too artistic: the real risk; the hero rule (solid ground, one number, sub-10-second read) is the guardrail. Too corporate: low. Too dark: moderate; mitigated by warm charcoal alternation and warm photography. Too text-heavy: low. Motion-dependent: low by design. Maintenance: moderate-low; caption component and parcel data are simple; the terrain image is the one precious asset. Career-stage lock-in: low; re-parceling absorbs new chapters. Required discipline: never let text touch imagery, never add a third accent, never ship an uncaptioned plate, and source terrain photography deliberately.

### 3. Directions considered but not selected

**Direction B — The Assembler's Table.** Nothing on the page is decorative; every image is a document, and every document is captioned and placed by hand. Composition replaces atmosphere. Learns most from Refs 1 and 3. Its costs: heaviest maintenance burden; weakest mobile expression of its own idea; permanent tax on thin chapters (Lemon Tree and Tago will always look light on a table made of artefacts). **Borrowed element:** the artefact-plate feature treatment for the Derive flagship section and for case-page galleries.

**Direction C — Plan and Threshold.** Pages structured as rooms rather than stacked marketing sections; every transition is a marked threshold. The plan drawing (fine bone lines on black, mono room labels) is the governing artefact. Most original and least suitable. Coldest where brand promise is warmth; weakest on mobile where founders open links; poorest fit with uploaded references and existing assets; most expensive to maintain.

### 4. Direction comparison

Scores judged against the approved strategy, the recorded 10-second requirement, the current assets, and the uploaded references.

| Criterion | A · Surveyed Ground | B · Assembler's Table | C · Plan & Threshold |
|---|---|---|---|
| Immediate clarity | 7 | 8 | 6 |
| Distinctiveness | 8 | 7 | 9 |
| Evidence integration | 8 | 9 | 7 |
| Emotional depth | 9 | 7 | 7 |
| Jigsaw maturity | 8 | 8 | 9 |
| Founder relevance | 8 | 8 | 6 |
| Recruiter legibility | 7 | 9 | 6 |
| Collaborator appeal | 8 | 7 | 9 |
| Mobile strength | 8 | 6 | 5 |
| Accessibility | 7 | 8 | 6 |
| Maintainability | 8 | 6 | 5 |
| Longevity | 8 | 7 | 7 |
| Fit with current assets | 9 | 7 | 5 |
| Fit with uploaded inspiration | 9 | 7 | 5 |
| Evolves with HUNCHR / future roles | 8 | 8 | 6 |
| **Total** | **120** | **112** | **98** |

**Trade-off summary:** B beats A where it matters to a recruiter (fastest to parse, most evidence-dense, most accessible) but costs the heaviest maintenance burden and weakest mobile expression. A beats B on emotion, mobile, maintenance, and asset fit — builds on the single best thing the current site already owns (annotated field), keeps the moss/green world Desi is drawn to, holds up on a phone, and absorbs new chapters by re-parceling. C is the most original and least suitable — beautiful answer to a different brief.

### 5. What the direction preserves, removes, and transforms

**Preserves from current site:** dark editorial atmosphere; grain; mono metadata register; near-black ground; annotated-field imagery from Community page (promoted to homepage jigsaw); Derive case-page skeleton; statement footer concept; recorded font system; personal essay voice on About.

**Removes:** all glow (including the availability pill); ghost background text; white light-burst graphic on Work; text-over-image heroes; floating sentiment labels ("little moments"); invisible hover hotspots; repeated jigsaw explanations (explained once, on About); cold blue and multi-accent chaos; generic line icons; per-word text animation.

**Transforms:** jigsaw becomes the plotted field (seven labeled photographic parcels cut from one terrain, tap-first, keyboard-complete, stacking into continuous bands on mobile); Community content distributed as captioned gathering plates until evidence bar met; Now roles become an honest ledger; every metric moves into a mono caption attached to the artefact that earned it; annotation rail becomes the persistent structural signature.

**Learns from references:** ground-versus-mark layering (all five); environmental ground, grain, warm register (Refs 4, 5); annotation and numbered-margin register (Ref 1); parcels-set-into-dark-ground jigsaw abstraction (Ref 2); dark-editorial usability rhythm and fact-as-content (Ref 3).

**Refuses to copy:** glow on type; decorative arrows; script/pixel hybrid or calligraphic logotypes; text set over image midtones; justified display text; centered poster composition; the references' exact palettes, layouts, halftone patterns, and landscape images; any affirmation-poster voice.

### 6. Why it feels senior rather than merely stylish

Every aesthetic decision is a load-bearing rule (layering rule solves contrast failures; caption rule enforces evidence discipline; two-accent rule solves noise; parcel model solves touch, keyboard, and future chapters at once). Style that is also governance is what senior looks like.

### 7. Why it stays relevant as the career evolves

Re-parceling absorbs new chapters without redesign; caption schema absorbs new evidence without new components; the ledger graduates roles upward (a Now row becomes a Work entry becomes, with proof, a flagship) along a path the system already draws; ground metaphor is career-stage-agnostic in a way a masthead of artefacts or a fixed floor plan is not.

---

## Assets still missing or unverified

- Terrain photography decision: continue with existing field imagery, commission/shoot new ground, or consistently treat licensed photography; explicit ruling on whether generated imagery is acceptable (recommendation: it is not).
- Verified gathering documentation (name, date, city, role, attendance) for at least the Breakfast, plus the three gatherings needed to unlock the Community route.
- RMIT thesis artefacts (drawings, boards) scanned at usable resolution for the About origin plate and the Spatial Design parcel destination.
- Curated Derive artefact set: Framer landing capture, one strong Breakfast photograph, one Believe in SomETHing frame — selected and rights-checked.
- Any honest HUNCHR in-progress artefact, only if verifiable; confirmed title from the founder before the Now row's role line is finalized.
- Portrait or personal-environment photograph for About.
- Reconciliation of the live serif against the recorded Clash / Satoshi / Plex Mono system, and creation of `public/fonts` (currently aspirational per CLAUDE.md).

---

## Carried forward to 04 — Voice and Copy

- The throughline's three or four sentences and their end-at-the-field placement.
- The caption schema wording.
- The hero statement.
- The Now ledger's testing-verb sentences.
- The footer statement.
- The single mono instruction line on the jigsaw.
- The ruling that the jigsaw metaphor is explained in words exactly once, on About.
