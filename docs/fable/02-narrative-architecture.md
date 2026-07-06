# 02 — Narrative Architecture

## Status

**APPROVED FOUNDATION — ROUTES AND NAVIGATION FINALIZED.**

Approved: July 2026. Route and navigation decisions finalized by Desi on 6 July 2026. This document is the foundation for `03-visual-direction.md`.

**Core diagnosis:** the current site's failure is not visual. It asks visitors to appreciate a metaphor before it proves competence. Every decision below reverses that order without killing the metaphor.

---

## Locked decisions

- **Homepage:** Option C (Hybrid). Six sections in order: Hero → Throughline → Jigsaw → Derive flagship → Now → Contact/footer.
- **Jigsaw:** Model 1 — 6–8 career-chapter pieces forming ONE COMPLETED composition. Appears **once**, Home section 3. Work page does not repeat it.
- **Ground rule for jigsaw:** the composition is ALWAYS COMPLETE. Pieces distinguished by seams/tone/texture, never absence.
- **Navigation:** *Jigsaw (home) · Work · Community · About* — socials on the right, led by an explicit email item. No "Contact" label and no /contact page.
- **Community route:** stays as top-level route and nav item as a slim supporting page, **conditional** on evidence bar.
- **About:** the only personal-first page. Delete `/who` and `/about-me2` with redirects to `/about`.
- **Work hierarchy tiers:** Flagship (Derive) · Current/Now (HUNCHR, Lemon Tree, Tago) · Selected (Bruce Media, RISA) · Foundations (RMIT, Misura, JAU conditional).
- **Retired taxonomy:** the five categories (Events/Community/Growth/Web3/Exploration).
- **Retired language:** "Still Assembling," "The Clusters," WIP framing.
- **Testimonials:** case studies and About only, name + role attributed, one per surface max — none verified yet (pre-launch task).

---

## Provisional decisions

- **Sitemap (provisional):** `/` · `/work` · `/work/derive` · `/work/[slug]` reserved · `/about` · redirects: `/community` → `/work`, `/who` and `/about-me2` → `/about`.
- **Navigation (provisional wording):** Wordmark · Work · About · Contact (superseded in later section: see locked decisions above; the label "Jigsaw" is the label for the home link).
- Numbered nav labels are acceptable as typographic treatment in 03; naming stays as locked.
- The homepage's provisional sitemap is subject to how the Community route ships (see conditions below).

---

## Key rules

- **First 10 seconds must appear:** name; practical identity line (plain language: growth, community, partnerships, early-stage); availability; one anchor proof annotation (Derive Discord growth); email CTA; minimal nav; one restrained visual gesture.
- **First 10 seconds must NOT appear:** poetic thesis (belongs in section 2, Throughline); jigsaw interaction; puzzle vocabulary; HUNCHR or current-role logos; multiple CTAs; metric cards; animated text; signal cards.
- **Proof discipline:** never as three-up KPI cards with icons. Only annotated editorial figures (large fact + contextual caption inside the narrative column). Home shows only Discord growth (hero) + anchor set (flagship block). Everything deeper lives in the case study.
- **RMIT / earlier work never sits visually adjacent to Derive metrics.**
- **Jigsaw appears once.** Nowhere else on the site is it repeated. A quiet seam motif in section dividers is the metaphor's entire remaining footprint.
- **Ordering on Work:** narrative weight, not chronology. Chronology is preserved for recruiters in an experience index.
- **Do NOT use the public label "Archive"** — use "Foundations."
- **Compact entries are NOT pages.** Name, role, dates, two-sentence activity description, honest status marker. No links to nowhere.
- **Missing content types don't render** (no placeholders, no "coming soon").
- **Confidential work described at activity/domain level** with sparing "specifics under NDA."
- **One shared case-study template** — flagship status comes from depth, not a separate design system.

---

## Implementation warnings

- The "Jigsaw" nav label works ONLY because the wordmark also links home AND the hero delivers 10-second clarity. If 03 or implementation weakens hero clarity, this label is the first thing that breaks.
- If the Community evidence bar cannot be met at launch, the route and nav item **wait**; they do not ship thin.
- The Now section must NOT look like three unfinished case studies. Refuses the case-study form entirely: no images, no galleries, no achievement lists. A ledger of active files.
- On mobile: no reordering. Same sequence. Email always one tap outside the collapsed menu. Video only if short, muted, poster-framed.
- Do not introduce a "Contact" page or nav label. Contact lives in the social row (email first).
- Do not import or invent testimonials at launch — none verified yet.

---

## Full approved content

### 1. Visitor journeys

**Cold founder.**
- 0–10s: hero delivers name, practical identity line, one anchor proof fragment (Derive Discord growth), availability, one CTA. No riddle. Jigsaw exists only as a quiet motif.
- 10–45s: Throughline passage (3–4 sentences) ending on the poetic thesis. Intrigue arrives *after* clarity.
- 45–90s: jigsaw composition + Derive flagship block (15k → 40k+ Discord during TGE, Coinfest Bali breakfast 100+, Believe in SomETHing 430+ protocols, rebrand/TGE comms).
- 90s+: Now strip (HUNCHR, Lemon Tree, Tago) honestly framed. Calibrated claims earn founder trust.
- Contact: footer restates availability and desired work; email/Twitter one tap away.
- Exit prevention: practical identity leads the hero; puzzle language used exactly once; Work page shows visible hierarchy (flagship vs current vs foundations), never six equal cards.

**Warm lead.**
- Hero confirms the person they met. The Throughline upgrades their read from "community/events person" to "operator who connects community to commercial outcomes."
- Depth: Derive case + About (spatial-design origin, multi-country upbringing).
- Memorability: jigsaw interaction + editorial voice that sounds like her.
- Exit risk: site sounding less alive than she is in person. Prevention: About carries voice; Now proves motion.

**Recruiter / hiring manager.**
- Compact reverse-chronological experience index at the top of the Work page: employer, role, dates, one outcome line each. Curated case hierarchy below.
- Misclassification prevented by: hero identity line naming all lanes; capability tags on Work index entries; Derive case explicitly structured as cross-functional workstreams.
- Non-linear career framed by one sentence at top of Work index ("different industries, same question") plus the jigsaw on Home.

### 2. Homepage: Option C (Hybrid) — APPROVED

Sequence (desktop ≈ 5.5–6 viewports):

1. **Hero** (~1 viewport, minimal interactivity). Job: identity, credibility, availability in one glance. Name, practical identity line, one anchor proof annotation (not a KPI card), availability, primary CTA (email), secondary (view Derive). One quiet jigsaw-seam motif, no puzzle vocabulary.
2. **The Throughline** (~0.6 viewport, static). Job: convert "varied CV" into "one practice." 3–4 sentence editorial passage merged from IntroSection + NarrativeSection, closing on the poetic thesis, set once. No proof, deliberately.
3. **The Jigsaw** (~1–1.5 viewports; the site's one signature interaction). Career chapters as pieces of one COMPLETED composition (Model 1, see §6). Tap/focus opens capsule: chapter, capability, one evidence line, link.
4. **Flagship: Derive** (~1.25 viewports). Role framing, three anchor outcomes as annotated editorial figures, 2–3 artefacts, link to full case.
5. **Now** (~0.75 viewport, static). HUNCHR, Lemon Tree, Tago as compact honest entries, no metrics. HUNCHR gets one extra direction sentence (sports, social competition, product-led community).
6. **Contact / footer** (~0.5 viewport). Availability, desired work, email, socials, location/timezone.

**Rejected:** Option A (evidence-first: safe but forgettable, personality back-loaded) and Option B (narrative-first: repeats current failure, proof arrives too late for cold visitors).

**Removed from Home:** IntroSection panels 02–05 as blocks, duplicate thesis statements, "Still Assembling," five-category taxonomy, WIP framing, signal cards, side-note card, animated fragments.

### 3. First viewport

Must appear (desktop/tablet): name; practical identity line (plain language); availability; one anchor proof annotation (Derive Discord growth); email CTA; minimal nav (Work, About, Contact); one restrained visual gesture.

Mobile: name, identity line, availability, CTA on first screen; proof annotation may drop just below fold; email CTA stays outside collapsed menu.

Must NOT appear in viewport one: poetic thesis (lands in section 2), jigsaw interaction, puzzle vocabulary, HUNCHR or current-role logos, multiple CTAs, metric cards, animated text, signal cards.

### 4. Proof architecture

**Hierarchy (highest → lowest):**
1. Anchor (Home + case): Derive Discord ~15,000 → 40,000+ during TGE.
2. Anchor (flagship block + case): Believe in SomETHing 430+ protocols; Coinfest Bali Traders Breakfast 100+ attendees.
3. Supporting (case only): rebrand/TGE comms scope, Framer landing page, cross-channel ownership.
4. Qualitative (cases + About): testimonials, community screenshots, event photography.
5. Foundational (About + compact entries): RMIT, RISA, Misura, Bruce Media.
6. Contextual signal (Now only): HUNCHR, Lemon Tree, Tago — activity descriptions only, never outcomes, until verified.

**Form.** Annotated editorial figures (large fact + contextual caption inside the narrative column). Never three-up KPI cards with icons. Home shows only the Discord growth (hero) plus the anchor set (flagship block); everything deeper lives in the case study. RMIT/earlier work never sits visually adjacent to Derive metrics. Testimonials: case studies and About only, name + role attributed, one per surface max — none verified yet (pre-launch task). Artefacts carry the visual bulk of case studies.

### 5. Work architecture

**Ordering.** Narrative weight, not chronology. Chronology preserved in the experience index for recruiters.

**Taxonomy.**
- **Flagship:** Derive.xyz — Home flagship block; ~3× visual weight on Work page; full flagship case page.
- **Current chapter ("Now"):** HUNCHR, Lemon Tree, Tago — Now strip on Home; compact Work entries; NO case pages until verified outcomes/titles exist.
- **Selected work:** Bruce Media, RISA — compact entries; RISA upgradeable to standard case once documented; Bruce Media edited to remove overstated internship claims.
- **Foundations:** RMIT (About material + jigsaw piece, NOT a Work entry), Misura (compact entry or About evidence; remove repeated 3D/referral points), JAU (only if 2–3 strong visuals exist, else omit).

Avoid the public label "Archive" — use "Foundations."

### 6. Jigsaw: Model 1 — APPROVED

**Ground rule:** the composition is ALWAYS COMPLETE. Pieces distinguished by seams/tone/texture, never absence. A missing piece says "unfinished person"; a completed picture with visible joins says "assembled system."

**Model 1.** 6–8 career-chapter pieces (Spatial Design, Events, Community, Sports Media, Growth, Partnerships, Product) form one abstract composition. Whole-but-muted on load; pieces gain definition in career order on scroll. Tap/click/keyboard-focus opens inline capsule: chapter name, one-line capability (borrowed from Model 2 — e.g. "Event production, RISA to Coinfest Bali"), one evidence line, link. Works with zero instructions, zero motion, all input methods. Mobile: vertical connected sequence of tappable pieces, accordion capsules, no scroll-linked animation.

**Appears ONCE**, Home section 3. Work page does not repeat it; a quiet seam motif in section dividers is the metaphor's entire remaining footprint.

**Rejected:** Model 2 (capabilities-as-pieces with drawn connections — degrades on mobile, high complexity), Model 3 (proof-fragment composite — starves non-Derive roles, low longevity), and the current invisible-hotspot model.

### 7. Intro / manifesto content

- Merge IntroSection + NarrativeSection into ONE 3–4 sentence Throughline passage on Home.
- **Keep:** the question-set (why people gather, care, participate, stay, return); the spatial-design-to-community bridge; community-as-part-of-product.
- **Move to About:** longer worldview material, multi-country upbringing, fuller jigsaw meaning, reflective panel content.
- **Integrate into jigsaw capsules:** chapter-specific panel content.
- **Remove:** duplicate thesis statements, "Still Assembling," WIP language, meta-commentary about the site itself.
- "Resonance over noise": keep once, in About only.
- Five-category taxonomy (Events/Community/Growth/Web3/Exploration): **RETIRED.** "Web3" is an industry, "Exploration" a disposition; the system fragments what the site must unify. Replaced by jigsaw chapter-capability structure.

### 8. Community — FINAL: slim supporting page, top-level route

Desi's decision: `/community` remains a live top-level route and nav item as a slim supporting page.

**Conditions (non-negotiable):**
- **Evidence bar before launch:** minimum THREE gatherings documented, each with event name, date, Desi's role, and at least one photo or artefact. Candidates: Coinfest Bali Traders Breakfast, one RISA event, one more.
- The page is a short documented record of gatherings produced, NOT a philosophy page — the philosophy lives in About. Anything below the evidence bar stays off the page.
- If the bar cannot be met at launch, the route and nav item wait; they do not ship thin.

**Distribution still applies alongside the page:** Coinfest breakfast + Discord growth also appear in the Derive case; RISA in its Work entry and About; HUNCHR community experiments in Now framing.

### 9. About architecture

**Unique job:** explain how Desi thinks and where she comes from. The only personal-first page. Not résumé #2, not a homepage restatement.

**Sequence:**
1. Opening portrait + two-line personal framing (voice-forward)
2. Origin: Australia/Malaysia/Indonesia and what movement taught her about belonging
3. Spatial design: RMIT, environments shaping behaviour, birth of the question
4. The practice: how the question travelled through events, community, growth, partnerships (compressed)
5. The jigsaw, explained once, briefly (the only verbal explanation on the site)
6. Direction: consumer, social, sports, product-led participation — framed as direction, not claim
7. Now: status, location, availability, contact

Delete `/who` and `/about-me2` with redirects to `/about`.

### 10. Navigation — FINAL

**Jigsaw (home) · Work · Community · About — socials on the right, led by an explicit email item.**

- "Jigsaw" labels the home link. Dependency on record: this works only because the wordmark ALSO links home and the hero delivers 10-second clarity. Nobody meets the label before meeting the person. If 03 weakens hero clarity, this label is the first thing that breaks.
- Community appears in nav only if the §8 evidence bar is met at launch.
- No "Contact" label and no `/contact` page. The contact path is the social row: email first position, visibly distinct from the icon set, mailto on tap.
- Mobile: the four labels collapse into the menu; the email item stays OUTSIDE the menu, always one tap away. Socials may collapse into the menu; email may not.
- Numbered labels acceptable as typographic treatment in 03; naming stays as above.

### 11. Case-study architecture

**Flagship (Derive):**
1. Opening: name, one-line framing, role, dates, hero artefact — role/dates visible without scrolling.
2. Context (rebrand, TGE stakes).
3. Scope: workstreams named plainly.
4. The work as 3–4 EPISODES (Discord growth through TGE; Believe in SomETHing; Coinfest breakfast; rebrand comms) — metrics embedded in episodes, never a stat bar.
5. Artefact gallery.
6. Collaboration honesty note pattern ("delivered with the Derive team; Desi's ownership covered X").
7. Reflection (3–4 sentences).
8. Testimonial if obtained.
9. Onward link + contact.

**Standard (RISA, Bruce Media if expanded):** same template, fewer episodes, no gallery requirement.

**Compact entry (Lemon Tree, Tago, HUNCHR, Misura):** not a page. Name, role, dates, two-sentence activity description, honest status marker. No links to nowhere.

**Rules:** missing content types don't render (no placeholders, no "coming soon"); confidential work described at activity/domain level with sparing "specifics under NDA"; one shared template — flagship status comes from depth, not a separate design system.

### 12. Emotional pacing

Recognition (Hero) → Curiosity (Throughline) → Coherence (Jigsaw) → Trust (Derive flagship) → Momentum & candour (Now) → Warmth (About) → Invitation (Footer).

Deliberately absent: awe/spectacle. The differentiator is calibrated substance with warmth.

### 13. Mobile narrative

- Same sequence; no reordering needed.
- First screen: name, identity line, availability, email CTA.
- Flagship block trims to three anchor facts + one artefact + case link.
- Jigsaw: static-first, then vertical tappable sequence with accordion capsules; no scroll-linked animation.
- Proof keeps annotation form, sized down; never full-width stacked cards.
- Home text does not grow; About keeps its length (opt-in readers).
- Video only if short, muted, poster-framed; nothing autoplaying above flagship.
- Nav: wordmark + menu; email always one tap.
- Homepage feel: six to seven confident swipes (~30–45s).

### 14. Content relocation map

| Current element | Decision |
|---|---|
| Hero statement | Rewrite: practical identity leads; thesis → Throughline |
| Hero signal cards | Remove |
| Hero side-note card | Remove |
| Animated text fragments | Remove |
| IntroSection panel 01 | Merge into Throughline |
| IntroSection panels 02–05 | Split: chapter content → jigsaw capsules; reflective → About; residue removed |
| "Resonance over noise" | About, once |
| NarrativeSection intro | Merge into Throughline; duplicates removed |
| Five jigsaw categories | Retired |
| Interactive hotspots | Removed; replaced by Model 1 |
| Work cards | Rewritten into tiered architecture + experience index |
| Community gallery | Distributed (Derive case, RISA entry, About); route redirected |
| About narrative | Rewritten per §9; `/who` and `/about-me2` deleted with redirects |
| Footer | Rewritten as invitation |
| "Still Assembling" | Removed everywhere |
| "Systems of Belonging" | About only, one supporting phrase |
| "The Clusters" | Removed |
| WIP language | Removed; "early-stage" framing replaces it |
| HUNCHR | Added: Now strip, compact Work entry, direction paragraph in About |

### 15. Final recommendation summary

- **Sitemap [PROVISIONAL]:** `/` · `/work` · `/work/derive` · `/work/[slug]` reserved · `/about` · redirects: `/community` → `/work`, `/who` and `/about-me2` → `/about`.
- **Navigation [PROVISIONAL]:** Wordmark · Work · About · Contact.
- **Homepage:** Hero → Throughline → Jigsaw → Derive flagship → Now → Contact.
- **Jigsaw:** once, Home section 3, Model 1, completed composition, seam motif elsewhere only.
- **Hierarchy:** Flagship Derive; Current HUNCHR/Lemon Tree/Tago; Selected Bruce Media/RISA; Foundations RMIT (About)/Misura/JAU (conditional).
- **Community:** distributed; documented flagship page held as future upgrade.
- **About:** the only personal-first page.

---

## Unresolved before implementation

1. HUNCHR public title, launch status, publicly sayable scope (founder confirmation required)
2. Lemon Tree and Tago titles, start months, confidentiality boundaries
3. Current location and availability line
4. RISA documentation: event names, dates, attendance, photos
5. Testimonials: none verified; target 2–3 (Derive, RISA or Misura)
6. Derive artefact inventory: publishable campaign assets, photos, Framer page
7. Bruce Media: publicly shareable work?
8. Defensible public source for the 40,000+ Discord figure

**Next stage:** `03-visual-direction.md` (seam motif form, jigsaw visual language, annotation typography, translating "dark editorial, human, composed" into a system).
