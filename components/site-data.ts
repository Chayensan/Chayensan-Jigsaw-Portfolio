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

// Work index tiers — docs/implementation-roadmap.md Phase 8. Narrative
// weight, not chronology: Flagship (proven at scale) > Current (active,
// unproven) > Selected (documented, supporting) > Foundations (earlier work).
// RMIT is deliberately absent from this tier system — it is About material
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
};

export type WorkCaseStudy = {
  slug: string;
  logo?: string;
  title: string;
  deck: string;
  heroImage: string;
  meta: Array<{
    label: string;
    value: string;
  }>;
  intro: string;
  // Public-safe confidentiality note, rendered near the intro — used by
  // Current-tier case pages (Lemon Tree, Tago) where domain-level
  // description is all that's public. Omitted where nothing needs flagging.
  confidentialityNote?: string;
  achievements: string[];
  // Prose-plus-annotation achievements (docs/implementation-roadmap.md
  // Phase 8: "achievements become prose-plus-annotation rather than a raw
  // bullet stack"). When present, the template renders achievementsIntro as
  // a paragraph and achievementAnnotations as Caption-driven evidence lines,
  // instead of the plain achievements bullet list. Used by Derive only today
  // — reuses the exact locked captions from deriveFlagship rather than
  // inventing new copy.
  achievementsIntro?: string;
  achievementAnnotations?: CaptionContent[];
  galleryImages: Array<{
    src: string;
    alt: string;
  }>;
};

export const socialLinks = {
  gmail: "mailto:hello@desi.studio",
  linkedin: "https://www.linkedin.com/",
  twitter: "https://twitter.com/",
};

// Seven-chapter surveyed-field model — docs/fable/04-voice-and-copy.md
// §Approved Jigsaw labels. Replaces the retired five-category model
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
    weight: 17,
  },
  {
    id: "partnerships",
    label: "Partnerships",
    capability: "Finding the overlap between two roadmaps.",
    activity:
      "Current BD and partnerships work at Lemon Tree Technology and Tago Capital: market research, prospect development, outreach, and commercial positioning across trading and emerging technology.",
    evidence: "Current: Lemon Tree, Tago Capital",
    href: "/work",
    weight: 12,
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
    role: "Growth Marketer",
    text: "Onchain options growth across BTC, ETH, SOL, and HYPE markets.",
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
    role: "Social Media Intern",
    text: "Sports-focused creative and social systems for live audiences.",
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
    date: "Oct 2023-Mar 2024",
    roleType: "Full Time",
    imageClass: "image-misura",
    caseHeroImage: "/assets/work-cases/misura-main.png",
    tier: "foundations",
  },
];

export const workCaseStudies: WorkCaseStudy[] = [
  {
    slug: "tago-capital",
    title: "TAGO CAPITAL",
    deck: "Early-stage BD and partnership work across robotics, AI, and emerging technology.",
    heroImage: "/assets/work-cases/tago-main.png",
    meta: [
      { label: "Role", value: "Business Development" },
      { label: "Timeline", value: "Apr 2026 - Present" },
      { label: "Location", value: "Australia · Remote" },
    ],
    intro:
      "Tago Capital is a product studio working across robotics, AI, and cross-border opportunities in emerging technology. Desi supports early-stage business development for companies entering new markets.",
    confidentialityNote:
      "Public details confidential: prospects, targets, and partnership terms are described at a domain level only.",
    achievements: [
      "Researching prospects and markets across robotics, AI, and emerging technology, and identifying companies entering new markets.",
      "Coordinating founder and company outreach, and connecting operators and potential partners across cross-border opportunities.",
      "Supporting commercial positioning and partnership exploration, helping communicate complex, technical offerings to new audiences.",
    ],
    galleryImages: [],
  },
  {
    slug: "lemon-tree-tech",
    title: "LEMON TREE TECHNOLOGY",
    deck: "An early-stage trading, liquidity, and market-structure company.",
    heroImage: "/assets/work-cases/lemon-main.png",
    meta: [
      { label: "Role", value: "Partnerships & Growth" },
      { label: "Timeline", value: "Apr 2026 - Present" },
      { label: "Location", value: "Remote" },
    ],
    intro:
      "Lemon Tree operates within trading, liquidity, market structure, and digital assets. Desi supports partnerships and growth: venue and market research, outreach strategy, and commercial positioning.",
    confidentialityNote:
      "Public details confidential: client names, targets, and financial terms are not shared here.",
    achievements: [
      "Supporting partnerships and business development across trading, liquidity, and market-structure relationships.",
      "Conducting venue and market research, and target identification, to inform outreach strategy.",
      "Producing pitch decks and marketing assets for partnership outreach and commercial positioning.",
      "Compiling partnership and pipeline updates to support growth communication and early-stage go-to-market thinking.",
    ],
    galleryImages: [],
  },
  {
    slug: "misura",
    title: "MISURA",
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
      "Managed the full sales cycle for premium European furniture: discovery, quote, close, and follow-up.",
      "Consulted with clients using 3D visualisation and design advice, translating taste into decisions across a high-consideration purchase.",
      "Built long-term customer relationships through a consultative, design-led selling approach.",
    ],
    galleryImages: [
      {
        src: "/assets/work-cases/misura-gallery-01.png",
        alt: "Misura dining room interior",
      },
      {
        src: "/assets/work-cases/misura-gallery-02.png",
        alt: "Misura materials and samples",
      },
      {
        src: "/assets/work-cases/misura-gallery-03.jpg",
        alt: "Misura kitchen and dining interior",
      },
      {
        src: "/assets/work-cases/misura-gallery-04.jpg",
        alt: "Misura lounge interior",
      },
      {
        src: "/assets/work-cases/misura-gallery-05.png",
        alt: "Misura showroom product display",
      },
      {
        src: "/assets/work-cases/misura-gallery-06.jpg",
        alt: "Misura design presentation board",
      },
      {
        src: "/assets/work-cases/misura-gallery-07.png",
        alt: "Misura client consultation and showroom",
      },
    ],
  },
  {
    slug: "derive-xyz",
    title: "DERIVE.XYZ",
    deck:
      "Derive (prev. Lyra) | The Leading Onchain Options Platform w/BTC, ETH, SOL & HYPE",
    heroImage: "/assets/work-cases/derive-main.png",
    meta: [
      { label: "Role", value: "Growth Marketer" },
      { label: "Timeline", value: "Sept 2024-Feb 2026" },
      { label: "Location", value: "Australia · Remote" },
    ],
    intro:
      "A leading DeFi options and perpetuals protocol. Desi worked across Discord community management, event production, multi-channel growth campaigns, design assets, and brand narrative through a full rebrand and token launch.",
    achievementsIntro:
      "Derive.xyz, 2024 to February 2026. Desi worked across community growth, events, campaigns, and partnerships through a full rebrand and token launch. She grew Discord across the TGE period, produced Derive's first live event at Coinfest Bali, contributed to the Believe in SomETHing ecosystem campaign, and built the Framer landing page end to end. Product and brand communication, ecosystem development.",
    achievementAnnotations: [
      {
        kind: "evidence",
        project: "Discord",
        figure: "15,000 → 40,000+ members through the TGE period",
        verb: "community growth across Discord, Telegram, and X",
      },
      {
        kind: "evidence",
        project: "Believe in SomETHing",
        figure: "ecosystem campaign, 430+ protocols",
        verb: "contributor",
      },
      {
        kind: "event",
        name: "Traders Breakfast",
        place: "Coinfest Bali",
        attendance: "Derive's first live event, 100+ attendees",
        verb: "produced",
      },
    ],
    achievements: [
      "Supported the Lyra Finance to Derive.xyz rebrand narrative through the token launch, keeping voice and tone consistent across every community-facing channel.",
      "Built Derive.xyz's landing page from scratch in Framer: designed, learned, and shipped end to end.",
      "Produced design assets and co-marketing assets, content, and merch.",
    ],
    galleryImages: [
      {
        src: "/assets/work-cases/derive-gallery-01.png",
        alt: "Derive campaign creative",
      },
      {
        src: "/assets/work-cases/derive-gallery-02.png",
        alt: "Derive growth asset",
      },
      {
        src: "/assets/work-cases/derive-gallery-03.jpg",
        alt: "Derive mobile app mockup",
      },
      {
        src: "/assets/work-cases/derive-gallery-04.png",
        alt: "Derive Chinese community campaign",
      },
      {
        src: "/assets/work-cases/derive-gallery-05.png",
        alt: "Derive basis trade announcement",
      },
      {
        src: "/assets/work-cases/derive-gallery-06.png",
        alt: "Derive product packaging and merch",
      },
    ],
  },
  {
    slug: "bruce-media",
    title: "BRUCE MEDIA",
    deck: "Sports-focused creative and social systems for live audiences.",
    heroImage: "/assets/work-cases/bruce-main.jpg",
    meta: [
      { label: "Role", value: "Social Media Intern" },
      { label: "Timeline", value: "Jul 2023-Dec 2023" },
      { label: "Location", value: "Australia · On-site" },
    ],
    intro:
      "A boutique Australian sports media agency covering NFL, A-League, PGA, and a range of different industries. Desi's first hands-on exposure to professional content strategy and real-time live coverage.",
    achievements: [
      "Supported social content planning and asset design (graphics, thumbnails, story templates, and video) across sports and lifestyle client accounts.",
      "Wrote and developed content briefs tailored to each client's brand voice, audience, and campaign objectives.",
      "Adapted content across different sporting audiences, building an understanding of sports-media tone and fan behaviour.",
      "Joined production crew on game days and live shoots, supporting real-time content capture and digital publishing workflows.",
    ],
    galleryImages: [
      {
        src: "/assets/work-cases/bruce-gallery-01.jpg",
        alt: "Beauty brand product shoot on a beach",
      },
      {
        src: "/assets/work-cases/bruce-gallery-02.jpeg",
        alt: "Luxury watch display content capture",
      },
      {
        src: "/assets/work-cases/bruce-gallery-03.png",
        alt: "Sports social media content grid",
      },
      {
        src: "/assets/work-cases/bruce-gallery-04.png",
        alt: "Dandenong City promoted team graphic",
      },
      {
        src: "/assets/work-cases/bruce-gallery-05.png",
        alt: "Beauty Block social media visual system",
      },
      {
        src: "/assets/work-cases/bruce-gallery-06-replacement.jpg",
        alt: "Bruce Media live content capture",
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

// Derive flagship homepage section — docs/implementation-roadmap.md Phase 6.
// Captions are locked verbatim in docs/fable/04-voice-and-copy.md
// §Approved Derive captions. Do not paraphrase or round the figures.
export type DeriveEvidencePlate = {
  id: string;
  image?: { src: string };
  aspectRatio: string;
  caption: CaptionContent;
  content?: { kicker: string; statement: string };
};

// Now ledger — docs/implementation-roadmap.md Phase 7. Current direction,
// not flagship proof: HUNCHR, Lemon Tree Technologies, Tago Capital.
// Testing verbs only, no metrics, no invented outcomes — every line traces
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
  // Optional case-page link — used only by the Work index's Current-tier
  // rows (components/WorkSection.tsx), never by the homepage NowLedger,
  // which deliberately carries no links (see NowLedger.tsx's own comment).
  slug?: string;
};

export const nowLedger: NowLedgerRow[] = [
  {
    id: "hunchr",
    index: "01",
    name: "HUNCHR",
    role: "Founding-stage BD & Growth",
    description:
      "A free social sports competition app: private leagues, predictions, virtual bankrolls, and leaderboards, with no real-money betting. Desi is running early distribution experiments: warm invites, football and community outreach, and onboarding-friction research.",
    direction: "An early signal toward product-led, social-competition growth.",
    status: "ACTIVE · 2026 · EARLY",
    primary: true,
  },
  {
    id: "lemon-tree",
    index: "02",
    name: "Lemon Tree Technologies",
    role: "Partnerships & Growth",
    description:
      "An early-stage trading, liquidity, and market-structure company; public details stay confidential. Desi supports partnerships and growth: venue and market research, and outreach strategy.",
    status: "ACTIVE · 2026 · BD",
    slug: "lemon-tree-tech",
  },
  {
    id: "tago-capital",
    index: "03",
    name: "Tago Capital",
    role: "Business Development",
    description:
      "A product studio working across robotics, AI, and cross-border opportunities in emerging technology. Desi researches prospects and markets, and coordinates founder and partner outreach.",
    status: "ACTIVE · 2026 · BD",
    slug: "tago-capital",
  },
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
    "Derive.xyz, 2024 to February 2026. Desi worked across community growth, events, campaigns, and partnerships through a full rebrand and token launch. She grew Discord across the TGE period, produced Derive's first live event at Coinfest Bali, contributed to the Believe in SomETHing ecosystem campaign, and built the Framer landing page end to end. Product and brand communication, ecosystem development.",
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



