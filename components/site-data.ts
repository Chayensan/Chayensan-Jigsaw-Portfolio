import type { CaptionContent } from "@/components/Caption";

export type JigsawChapterId =
  | "spatial-design"
  | "events"
  | "community"
  | "sports-media"
  | "growth"
  | "partnerships"
  | "product";

export type JigsawChapter = {
  id: JigsawChapterId;
  label: string;
  capability: string;
  activity: string;
  evidence: string;
  href: string;
  weight: number;
};

// Work index tiers (docs/implementation-roadmap.md Phase 8). Narrative
// weight, not chronology: Flagship (proven at scale) > Current (active,
// unproven) > Selected (documented, supporting) > Foundations (earlier work).
// RMIT is deliberately absent from this tier system: it is About material
// and a jigsaw piece, never a Work entry, per career-context-and-portfolio-
// evidence.md. RISA and JAU/Mr Yao are omitted entirely: no verified
// evidence/content exists for either yet, and the brief is explicit that
// they should only appear once that evidence is present.
export type WorkTier = "flagship" | "selected" | "foundations";

export type WorkItem = {
  number: string;
  slug: string;
  title: string;
  role: string;
  text: string;
  date: string;
  roleType: string;
  imageClass: string;
  caseHeroImage: string;
  tier: WorkTier;
  // Longer blurb for the full /work page's big-thumbnail cards, reusing
  // existing verified achievements/intro copy rather than the short
  // homepage tagline. Falls back to `text` when absent (components/
  // WorkSection.tsx).
  summary?: string;
};

export type WorkCaseStudy = {
  slug: string;
  logo?: string;
  title: string;
  // Natural-case company name for the "Visit [company]" button label
  // (study.title is styled ALL CAPS for the case-page header, which reads
  // wrong in a sentence-case button). Both fields optional together: the
  // generic fallback template in app/work/[slug]/page.tsx (for a WorkItem
  // with no full case-study entry) has no verified URL to link to, so the
  // button is omitted rather than guessed at.
  companyName?: string;
  // Public company URL, rendered as a "Visit [companyName]" button right
  // after the intro (components/WorkCaseTemplate.tsx). External, opens in
  // a new tab.
  companyUrl?: string;
  deck: string;
  heroImage: string;
  meta: Array<{
    label: string;
    value: string;
  }>;
  intro: string;
  // Public-safe confidentiality note, rendered near the intro, used by
  // Current-tier case pages (Lemon Tree, Tago) where domain-level
  // description is all that's public. Omitted where nothing needs flagging.
  confidentialityNote?: string;
  // All key achievements render as one flat bullet list (WorkCaseTemplate.tsx),
  // including any evidence figures (e.g. Derive's Discord growth) folded in
  // as their own bullet, rather than split across a separate prose+annotation
  // block. At least 5 points per case study, elaborated from the same
  // verified facts as elsewhere on the site, never invented.
  achievements: string[];
  galleryImages: Array<{
    src: string;
    alt: string;
  }>;
};

export const socialLinks = {
  gmail: "mailto:chayensan3@gmail.com",
  linkedin: "https://www.linkedin.com/in/desi-kamdrawati/",
  twitter: "https://x.com/chayensan",
  github: "https://github.com/Chayensan",
};

// Bare-domain placeholders used before real profile URLs are set. Links
// matching these exactly are hidden rather than rendered broken.
const placeholderSocialUrls = new Set([
  "https://www.linkedin.com/",
  "https://twitter.com/",
]);

export const isPlaceholderSocialUrl = (url: string) =>
  placeholderSocialUrls.has(url);

// Seven-chapter surveyed-field model (docs/fable/04-voice-and-copy.md,
// §Approved Jigsaw labels). Replaces the retired five-category model
// (events/community/web3/growth/exploration) per Phase 5 of
// docs/implementation-roadmap.md. Labels, capability lines, and evidence
// lines are used verbatim; do not paraphrase.
export const jigsawChapters: JigsawChapter[] = [
  {
    id: "spatial-design",
    label: "Spatial Design",
    capability: "Environments that shape behaviour.",
    activity:
      "Trained in Interior Design at RMIT (Hons), where the whole practice started: studying how rooms, layouts, and spatial conditions change how people meet and behave. Everything since has been that idea at larger scale.",
    evidence: "RMIT Interior Design (Hons) · origin of the practice",
    href: "/about",
    weight: 13,
  },
  {
    id: "events",
    label: "Events",
    capability: "From invitation to follow-through.",
    activity:
      "Planning and producing gatherings from RISA student events in Melbourne to Derive's first live event: the Traders Breakfast at Coinfest Bali, 100+ attendees, produced end to end.",
    evidence: "Traders Breakfast, Coinfest Bali · 100+ attendees",
    href: "/work/derive-xyz",
    weight: 16,
  },
  {
    id: "community",
    label: "Community",
    capability: "Turning members into participants.",
    activity:
      "Ran Derive's community through its rebrand and token launch: Discord grown 15,000 → 40,000+ through the TGE period, with operations across Discord, Telegram, and X.",
    evidence: "Derive Discord · 15,000 → 40,000+",
    href: "/work/derive-xyz",
    weight: 14,
  },
  {
    id: "sports-media",
    label: "Sports Media",
    capability: "Writing for fans, by code and by platform.",
    activity:
      "Content research, planning, and briefs at Bruce Media across NFL, A-League, and PGA properties, learning how different fan cultures read, share, and react.",
    evidence: "Bruce Media · NFL, A-League, PGA",
    href: "/work/bruce-media",
    weight: 11,
  },
  {
    id: "growth",
    label: "Growth",
    capability: "Converting attention into activity.",
    activity:
      "Campaigns and launch communication at Derive, including contributing to Believe in SomETHing, an ecosystem campaign spanning 430+ protocols, and shipping a landing page end to end in Framer.",
    evidence: "Believe in SomETHing · 430+ protocols",
    href: "/work/derive-xyz",
    weight: 12,
  },
  {
    id: "partnerships",
    label: "Partnerships",
    capability: "Finding the overlap between two roadmaps.",
    activity:
      "Current BD and partnerships work at Lemon Tree Technology and Tago Capital: market research, prospect development, outreach, and commercial positioning across trading and emerging technology.",
    evidence: "Current: Lemon Tree, Tago Capital",
    href: "/work",
    weight: 17,
  },
  {
    id: "product",
    label: "Product",
    capability: "Early distribution and user research.",
    activity:
      "Founding-stage work at HUNCHR, a social sports competition app: distribution experiments, user conversations, onboarding-friction research, and community-led acquisition. Early, active, unproven.",
    evidence: "HUNCHR · founding stage, in progress",
    href: "/work",
    weight: 17,
  },
];

export const workItems: WorkItem[] = [
  {
    number: "01",
    slug: "derive-xyz",
    title: "Derive.xyz",
    role: "Growth Marketing & Community",
    text: "Onchain options growth across BTC, ETH, SOL, HYPE, and more markets.",
    summary:
      "Derive.xyz is an onchain options protocol trading BTC, ETH, SOL, HYPE, and more. I grew its community and led campaigns through a full rebrand and token launch, from Discord to Coinfest Bali.",
    date: "Sept 2024 - Feb 2026",
    roleType: "Full Time",
    imageClass: "image-derive",
    caseHeroImage: "/assets/work-cases/derive-main.png",
    tier: "flagship",
  },
  {
    number: "02",
    slug: "bruce-media",
    title: "Bruce Media",
    role: "Social Media & Creative Production Intern",
    text: "Sports-focused creative and social systems for live audiences.",
    summary:
      "Sports-focused creative and social systems for live audiences. Planned content and wrote client-tailored briefs across NFL, A-League, and PGA accounts, then joined production crews on game days for real-time content capture.",
    date: "Jul 2023 - Dec 2023",
    roleType: "Internship",
    imageClass: "image-bruce",
    caseHeroImage: "/assets/work-cases/bruce-main.jpg",
    tier: "selected",
  },
  {
    number: "03",
    slug: "misura",
    title: "Misura",
    role: "Sales & Design Consultant",
    text: "High-end Italian and Spanish furniture for design-led living.",
    summary:
      "High-end Italian and Spanish furniture for design-led living. Managed the full sales cycle from discovery to close, using 3D visualisation and design consultation to guide clients through high-consideration purchases.",
    date: "Oct 2023-Mar 2024",
    roleType: "Full Time",
    imageClass: "image-misura",
    caseHeroImage: "/assets/work-cases/misura-main.png",
    tier: "foundations",
  },
];

export const workCaseStudies: WorkCaseStudy[] = [
  {
    slug: "hunchr",
    title: "HUNCHR",
    companyName: "HUNCHR",
    companyUrl: "https://www.hunchr.app/r/desi",
    deck: "A free social sports competition app: private leagues, predictions, and leaderboards.",
    heroImage: "/assets/work-cases/hunchr.png",
    meta: [
      { label: "Role", value: "Early-Stage BD" },
      { label: "Timeline", value: "2026 - Present" },
      { label: "Location", value: "Remote" },
    ],
    intro:
      "HUNCHR is a free social sports competition app: private leagues, predictions, virtual bankrolls, and leaderboards, with no real-money betting. I'm running early distribution experiments and go-to-market research at the founding stage.",
    achievements: [
      "Tested early distribution routes across football, sports, private groups, referrals, and warm community invitations.",
      "Gathered user feedback on signup friction, onboarding, social competition, and product positioning.",
      "Explored club, community, and event-led partnerships to support HUNCHR's early growth experiments.",
      "Helped position HUNCHR as social sports competition, separating the product from real-money betting language.",
    ],
    galleryImages: [],
  },
  {
    slug: "tago-capital",
    title: "TAGO CAPITAL",
    companyName: "Tago Capital",
    companyUrl: "https://www.tago.capital/",
    deck: "Early-stage BD and partnership work across robotics, AI, and emerging technology.",
    heroImage: "/assets/work-cases/tago-main.png",
    meta: [
      { label: "Role", value: "Business Development" },
      { label: "Timeline", value: "Apr 2026 - Present" },
      { label: "Location", value: "Australia · Remote" },
    ],
    intro:
      "Tago Capital is a product studio working across robotics, AI, and cross-border opportunities in emerging technology. I support early-stage business development for companies entering new markets.",
    confidentialityNote:
      "Public details confidential: prospects, targets, and partnership terms are described at a domain level only.",
    achievements: [
      "Researched robotics, AI, and emerging-technology companies expanding into new markets and cross-border opportunities.",
      "Mapped founder, investor, and operator landscapes to identify stronger commercial entry points.",
      "Reframed technical offerings into clearer language for prospective partners, buyers, and non-technical audiences.",
      "Prepared outreach materials, talking points, and prospect notes ahead of business development conversations.",
      "Connected founders and operators around market-entry, product, partnership, and commercial opportunities.",
    ],
    galleryImages: [],
  },
  {
    slug: "lemon-tree-tech",
    title: "LEMON TREE TECHNOLOGIES",
    companyName: "Lemon Tree Technologies",
    companyUrl: "https://lemontree.technology/",
    deck: "An early-stage trading, liquidity, and market-structure company.",
    heroImage: "/assets/work-cases/lemon-main.png",
    meta: [
      { label: "Role", value: "Partnerships & Growth" },
      { label: "Timeline", value: "Apr 2026 - Present" },
      { label: "Location", value: "Remote" },
    ],
    intro:
      "Lemon Tree operates within trading, liquidity, market structure, and digital assets. I support partnerships and growth: venue and market research, outreach strategy, and commercial positioning.",
    confidentialityNote:
      "Public details confidential: client names, targets, and financial terms are not shared here.",
    achievements: [
      "Built market and venue research across trading, liquidity, DEX, hedge fund, and market-structure opportunities.",
      "Mapped early-stage DEX targets to help prioritise Lemon Tree's outreach, positioning, and commercial focus.",
      "Created pitch decks, partner materials, and marketing assets for venue conversations and commercial positioning.",
      "Translated market research into outreach angles, follow-up notes, and pipeline updates for founder-led business development.",
      "Coordinated prospective partner outreach from first contact toward clearer commercial conversations and next steps.",
    ],
    galleryImages: [],
  },
  {
    slug: "misura",
    title: "MISURA",
    companyName: "Misura",
    companyUrl: "https://misura.com.au/",
    deck: "High-end Italian and Spanish furniture for design-led living.",
    heroImage: "/assets/work-cases/misura-main.png",
    meta: [
      { label: "Role", value: "Sales & Design Consultant" },
      { label: "Timeline", value: "Oct 2023-Mar 2024" },
      { label: "Location", value: "Australia · On-site" },
    ],
    intro:
      "Misura has sourced the finest contemporary furniture from Italy and Spain, bringing together renowned artisan brands to create elegant, functional, and customisable pieces for modern Australian interiors.",
    achievements: [
      "Managed full-cycle sales for premium Italian and Spanish furniture, from client discovery and quotation to close and after-sale follow-up.",
      "Guided clients through custom materials, finishes, and specifications across seven European furniture and design brands.",
      "Used 3D visualisation to help clients make confident decisions across layouts, finishes, materials, and high-consideration purchases.",
      "Designed Melbourne showroom layouts across seven brands, balancing product storytelling, display flow, and walk-in customer experience.",
      "Built repeat client relationships through design-led consultation, product knowledge, and high-trust customer service.",
    ],
    galleryImages: [
      {
        src: "/assets/work-cases/misura-gallery-01.png",
        alt: "Misura material palette: LAGO laminate, marble, and glass finishes",
      },
      {
        src: "/assets/work-cases/misura-gallery-02.png",
        alt: "Misura dining and kitchen interior",
      },
      {
        src: "/assets/work-cases/misura-gallery-03.jpg",
        alt: "Misura material palette: LAGO wood veneer, wool, and stone finishes",
      },
      {
        src: "/assets/work-cases/misura-gallery-04.jpg",
        alt: "Misura cabinetry detail: LAGO drawer lining",
      },
      {
        src: "/assets/work-cases/misura-gallery-05.png",
        alt: "Misura showroom fit-out, Melbourne",
      },
      {
        src: "/assets/work-cases/misura-gallery-06.jpg",
        alt: "Misura material palette: LAGO glass, fabric, and marble finishes",
      },
      {
        src: "/assets/work-cases/misura-gallery-07.png",
        alt: "Misura lounge interior",
      },
      {
        src: "/assets/work-cases/misura-main.png",
        alt: "Misura open-plan living, dining, and wine display interior",
      },
    ],
  },
  {
    slug: "derive-xyz",
    title: "DERIVE.XYZ",
    companyName: "Derive.xyz",
    companyUrl: "https://www.derive.xyz/",
    deck:
      "Onchain options protocol. Community, events, and campaigns through a full rebrand and token launch.",
    heroImage: "/assets/work-cases/derive-main.png",
    meta: [
      { label: "Role", value: "Growth Marketing & Community" },
      { label: "Timeline", value: "Sept 2024-Feb 2026" },
      { label: "Location", value: "Australia · Remote" },
    ],
    intro:
      "A leading DeFi options and perpetuals protocol. I worked across Discord community management, event production, multi-channel growth campaigns, design assets, and brand narrative through a full rebrand and token launch.",
    achievements: [
      "Scaled Derive's Discord from 15,000 to 40,000+ members through the TGE period, managing activity across Discord, Telegram, and X.",
      "Produced Derive's first Traders Breakfast at Coinfest Bali, coordinating planning, guest experience, and on-site execution for 100+ attendees.",
      "Coordinated Believe in SomETHing across 430+ protocols, helping turn an ecosystem groupchat into a public Ethereum campaign. Also created the aftermovie.",
      "Led community-facing communication through the Lyra Finance to Derive rebrand, keeping tone consistent across every launch channel.",
      "Shipped Derive's Framer landing page independently, learning the tool end to end to deliver a live marketing asset.",
      "Created campaign assets, social content, merch, and co-marketing materials across token, brand, and ecosystem initiatives.",
    ],
    galleryImages: [
      {
        src: "/assets/work-cases/derive-gallery-01.png",
        alt: "Derive merch line: T-shirt, lanyard, pouch, and tote design mockup",
      },
      {
        src: "/assets/work-cases/derive-gallery-02.png",
        alt: "Believe in SomETHing campaign creative",
      },
      {
        src: "/assets/work-cases/derive-gallery-03.jpg",
        alt: "Derive landing page, mobile mockup",
      },
      {
        src: "/assets/work-cases/derive-gallery-04.png",
        alt: "Derive merch unboxing: pouch, tote, and travel case",
      },
      {
        src: "/assets/work-cases/derive-gallery-05.png",
        alt: "Derive Chinese WeChat community launch campaign",
      },
      {
        src: "/assets/work-cases/derive-gallery-06.png",
        alt: "Derive Basis Trade Vaults and b-Tokens announcement",
      },
      {
        src: "/assets/work-cases/derive-highsignalpodcast-.png",
        alt: "Derive's High Signal Podcast cover art",
      },
      {
        src: "/assets/work-cases/derive-hypurrco.png",
        alt: "Derive x Hypurrcollective trading competition announcement",
      },
    ],
  },
  {
    slug: "bruce-media",
    title: "BRUCE MEDIA",
    companyName: "Bruce Media",
    companyUrl: "https://brucemediaco.com/",
    deck: "Sports-focused creative and social systems for live audiences.",
    heroImage: "/assets/work-cases/bruce-main.jpg",
    meta: [
      { label: "Role", value: "Social Media & Creative Production Intern" },
      { label: "Timeline", value: "Jul 2023-Dec 2023" },
      { label: "Location", value: "Australia · On-site" },
    ],
    intro:
      "A boutique Australian sports media agency covering NFL, A-League, PGA, and a range of different industries. My first hands-on exposure to professional content strategy and real-time live coverage.",
    achievements: [
      "Designed sports, lifestyle, and luxury content for client accounts including IWC Schaffhausen and Dandenong City Soccer Club.",
      "Wrote content briefs that translated brand strategy into shootable, platform-ready creative for social, video, and campaign rollouts.",
      "Adapted voice and format across NFL, A-League, PGA, beauty, lifestyle, and luxury audiences.",
      "Captured and published live game-day content under deadline, working with production crews across shoots and match coverage.",
      "Supported Beauty Block and Sunescape campaign rollouts, including product direction, content planning, and social grid structure.",
    ],
    galleryImages: [
      {
        src: "/assets/work-cases/bruce-gallery-01.jpg",
        alt: "Luxury watch display, IWC Schaffhausen",
      },
      {
        src: "/assets/work-cases/bruce-gallery-02.jpeg",
        alt: "Dandenong City Soccer Club, promoted graphic",
      },
      {
        src: "/assets/work-cases/bruce-gallery-03.png",
        alt: "Beauty brand product shoot, beachside",
      },
      {
        src: "/assets/work-cases/bruce-gallery-04.png",
        alt: "Beauty Block social media content grid",
      },
      {
        src: "/assets/work-cases/bruce-gallery-05.png",
        alt: "Dandenong City Soccer Club, gameday content grid",
      },
      {
        src: "/assets/work-cases/bruce-gallery-06-replacement.jpg",
        alt: "Sunescape body butter product shoot",
      },
      {
        src: "/assets/work-cases/bruce-football-bts.jpg",
        alt: "Behind the scenes, football broadcast interview at AAMI Park, Melbourne",
      },
      {
        src: "/assets/work-cases/bruce-gallery-06.png",
        alt: "Melbourne Cup Carnival event setup, Australian Hotels Association",
      },
    ],
  },
];

// RMIT is deliberately not a workCaseStudies entry. Per career-context-and-
// portfolio-evidence.md: "RMIT is About material + a jigsaw piece. It is NOT
// a Work entry." Its thesis artefact and RMIT-ISA event history belong to
// the About page (Phase 9), not the Work index or case template.

export const getWorkCaseStudy = (slug: string) =>
  workCaseStudies.find((study) => study.slug === slug);

// Derive flagship homepage section (docs/implementation-roadmap.md Phase 6).
// Captions are locked verbatim in docs/fable/04-voice-and-copy.md
// §Approved Derive captions. Do not paraphrase or round the figures.
export type DeriveEvidencePlate = {
  id: string;
  image?: { src: string };
  aspectRatio: string;
  caption: CaptionContent;
  content?: { kicker: string; statement: string };
};

// Now ledger (docs/implementation-roadmap.md Phase 7). Current direction,
// not flagship proof: HUNCHR, Lemon Tree Technologies, Tago Capital.
// Testing verbs only, no metrics, no invented outcomes: every line traces
// back to docs/fable/career-context-and-portfolio-evidence.md.
export type NowLedgerRow = {
  id: string;
  index: string;
  name: string;
  role: string;
  description: string;
  direction?: string;
  status: string;
  primary?: boolean;
  // Optional case-page link, used only by the Work index's Current-tier
  // rows (components/WorkSection.tsx), never by the homepage NowLedger,
  // which deliberately carries no links (see NowLedger.tsx's own comment).
  slug?: string;
  // Existing, already-public case-hero asset, used only by the full /work
  // page's Current-tier rows (components/WorkSection.tsx). Omit rather than
  // invent one; rows without a verified asset fall back to thumbnailPlaceholder.
  thumbnail?: string;
  // Restrained text-plate stand-in (Plate.tsx's kicker/statement variant)
  // for rows with no verified thumbnail asset, e.g. HUNCHR. Not a fake image.
  thumbnailPlaceholder?: { kicker: string; statement: string };
};

export const nowLedger: NowLedgerRow[] = [
  {
    id: "hunchr",
    index: "01",
    name: "HUNCHR",
    role: "Early-Stage BD",
    description:
      "A free social sports competition app: private leagues, predictions, virtual bankrolls, and leaderboards, with no real-money betting. I'm running early distribution experiments: warm invites, football and community outreach, and onboarding-friction research.",
    direction: "An early signal toward product-led, social-competition growth.",
    status: "ACTIVE · 2026 · EARLY",
    primary: true,
    slug: "hunchr",
    thumbnail: "/assets/work-cases/hunchr.png",
  },
  {
    id: "lemon-tree",
    index: "02",
    name: "Lemon Tree Technologies",
    role: "Partnerships & Growth",
    description:
      "An early-stage trading, liquidity, and market-structure company; public details stay confidential. I support partnerships and growth: venue and market research, and outreach strategy.",
    status: "ACTIVE · 2026 · BD",
    slug: "lemon-tree-tech",
    thumbnail: "/assets/work-cases/lemon-main.png",
  },
  {
    id: "tago-capital",
    index: "03",
    name: "Tago Capital",
    role: "Business Development",
    description:
      "A product studio working across robotics, AI, and cross-border opportunities in emerging technology. I research prospects and markets, and coordinate founder and partner outreach.",
    status: "ACTIVE · 2026 · BD",
    slug: "tago-capital",
    thumbnail: "/assets/work-cases/tago-main.png",
  },
];

// Full ordering of every /work case-page slug, matching the /work index's
// visual tier order (Flagship, then Current, then Selected, then
// Foundations): used only for Prev/Next pagination (app/work/[slug]/
// page.tsx), so cycling through a case page always reaches all six pages,
// not just the three that happen to be in workItems.
export const workPageSlugOrder: string[] = [
  ...workItems.filter((item) => item.tier === "flagship").map((item) => item.slug),
  ...nowLedger.map((row) => row.slug).filter((slug): slug is string => Boolean(slug)),
  ...workItems.filter((item) => item.tier === "selected").map((item) => item.slug),
  ...workItems.filter((item) => item.tier === "foundations").map((item) => item.slug),
];

export const deriveFlagship: {
  kicker: string;
  heading: string;
  role: string;
  href: string;
  primary: DeriveEvidencePlate;
  secondary: DeriveEvidencePlate[];
} = {
  kicker: "Flagship proof",
  heading: "Derive: one role, the clearest proof.",
  role:
    "Derive.xyz, 2024 to February 2026. I worked across community growth, events, and campaigns through a full rebrand and token launch, growing Discord from 15,000 to 40,000+ members and producing Derive's first live event at Coinfest Bali.",
  href: "/work/derive-xyz",
  primary: {
    id: "discord",
    image: { src: "/assets/work-cases/derive-main.png" },
    aspectRatio: "16 / 10",
    caption: {
      kind: "evidence",
      project: "Discord",
      figure: "15,000 → 40,000+ members through the TGE period",
      verb: "community growth across Discord, Telegram, and X",
    },
  },
  secondary: [
    {
      id: "believe-in-something",
      image: { src: "/assets/work-cases/derive-gallery-02.png" },
      aspectRatio: "16 / 9",
      caption: {
        kind: "evidence",
        project: "Believe in SomETHing",
        figure: "ecosystem campaign, 430+ protocols",
        verb: "contributor",
      },
    },
    {
      id: "traders-breakfast",
      image: { src: "/assets/work-cases/derive-traders-breakfast.png" },
      aspectRatio: "16 / 9",
      caption: {
        kind: "event",
        name: "Traders Breakfast",
        place: "Coinfest Bali",
        attendance: "Derive's first live event, 100+ attendees",
        verb: "produced",
      },
    },
  ],
};



