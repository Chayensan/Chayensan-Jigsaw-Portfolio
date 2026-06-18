export type Piece = {
  id: "events" | "community" | "web3" | "growth" | "exploration";
  label: string;
  subtext: string;
  rotation: number;
  positionClass: string;
  cardClass: string;
};

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
  featured: boolean;
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
  achievements: string[];
  achievementSections?: Array<{
    title: string;
    bullets: string[];
  }>;
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

export const pieces: Piece[] = [
  {
    id: "events",
    label: "Events",
    subtext: "Layers of energy. Designed to be felt.",
    rotation: -8,
    positionClass: "left-[8%] top-[13%] md:left-[10%] md:top-[15%]",
    cardClass: "left-[8%] top-[34%] md:left-[18%] md:top-[20%]",
  },
  {
    id: "community",
    label: "Community",
    subtext: "From chaos to signal.",
    rotation: 5,
    positionClass: "right-[7%] top-[12%] md:right-[12%] md:top-[16%]",
    cardClass: "right-[5%] top-[34%] md:right-[23%] md:top-[22%]",
  },
  {
    id: "web3",
    label: "Web3",
    subtext: "Invisible systems. Real impact.",
    rotation: -3,
    positionClass: "left-[37%] top-[42%] md:left-[42%] md:top-[39%]",
    cardClass: "left-[18%] top-[57%] md:left-[54%] md:top-[38%]",
  },
  {
    id: "growth",
    label: "Growth",
    subtext: "Loops that compound.",
    rotation: 10,
    positionClass: "left-[7%] bottom-[12%] md:left-[15%] md:bottom-[14%]",
    cardClass: "left-[10%] bottom-[34%] md:left-[24%] md:bottom-[22%]",
  },
  {
    id: "exploration",
    label: "Exploration",
    subtext: "Not every question needs an answer yet.",
    rotation: -6,
    positionClass: "right-[4%] bottom-[10%] md:right-[10%] md:bottom-[13%]",
    cardClass: "right-[5%] bottom-[32%] md:right-[21%] md:bottom-[20%]",
  },
];

export const workItems: WorkItem[] = [
  {
    number: "01",
    slug: "tago-capital",
    title: "Tago Capital",
    role: "BD",
    text: "A full-stack product studio for high-agency founders.",
    date: "Apr 2026 - Present",
    roleType: "Part Time",
    imageClass: "image-tago",
    caseHeroImage: "/assets/work-cases/tago-main.png",
    featured: true,
  },
  {
    number: "02",
    slug: "lemon-tree-tech",
    title: "Lemon Tree Technology",
    role: "Partnerships & Growth",
    text: "Early-stage crypto market making fund",
    date: "Apr 2024 - Present",
    roleType: "Part Time",
    imageClass: "image-lemon",
    caseHeroImage: "/assets/work-cases/lemon-main.png",
    featured: true,
  },
  {
    number: "03",
    slug: "derive-xyz",
    title: "Derive.xyz",
    role: "Growth Marketer",
    text: "Onchain options growth across BTC, ETH, SOL, and HYPE markets.",
    date: "Sept 2024 - Feb 2026",
    roleType: "Full Time",
    imageClass: "image-derive",
    caseHeroImage: "/assets/work-cases/derive-main.png",
    featured: true,
  },
  {
    number: "04",
    slug: "bruce-media",
    title: "Bruce Media",
    role: "Social Media Intern",
    text: "Sports-focused creative and social systems for live audiences.",
    date: "Jul 2023 - Dec 2023",
    roleType: "Internship",
    imageClass: "image-bruce",
    caseHeroImage: "/assets/work-cases/bruce-main.jpg",
    featured: false,
  },
  {
    number: "05",
    slug: "misura",
    title: "Misura",
    role: "Sales & Design Consultant",
    text: "High-end Italian and Spanish furniture for design-led living.",
    date: "Oct 2023-Mar 2024",
    roleType: "Full Time",
    imageClass: "image-misura",
    caseHeroImage: "/assets/work-cases/misura-main.png",
    featured: false,
  },
  {
    number: "06",
    slug: "rmit",
    title: "RMIT University",
    role: "Interior Design · Event Planner · Liaison",
    text: "Interior design and campus event liaison work.",
    date: "Feb 2018-Dec 2022",
    roleType: "On-site",
    imageClass: "image-rmit",
    caseHeroImage: "/assets/work-cases/rmit-main.png",
    featured: false,
  },
];

export const workCaseStudies: WorkCaseStudy[] = [
  {
    slug: "tago-capital",
    title: "TAGO CAPITAL",
    deck: "A full-stack product studio for high-agency founders.",
    heroImage: "/assets/work-cases/tago-main.png",
    meta: [
      { label: "Role", value: "Business Development" },
      { label: "Timeline", value: "Apr 2026 - Present" },
      { label: "Location", value: "Australia · Remote ( Commission-based )" },
    ],
    intro:
      "Tago Capital operates where capital meets execution, an embedded growth partner for early-stage founders who know what they're building but need the relationships and strategic clarity to get it to market.",
    achievements: [
      "Identifying and converting BD opportunities with early-stage founders across Web3 and emerging tech.",
      "Managing end-to-end relationship pipeline from initial outreach through deal close. Bridging the gap between creative product vision and market-ready BD strategy.",
      "Operating autonomously in a commission-based structure, owning pipeline and outcomes.",
    ],
    galleryImages: [],
  },
  {
    slug: "lemon-tree-tech",
    title: "LEMON TREE TECHNOLOGY",
    deck: "Early-stage crypto market making fund",
    heroImage: "/assets/work-cases/lemon-main.png",
    meta: [
      { label: "Role", value: "Partnerships & Growth" },
      { label: "Timeline", value: "Apr 2026 - Present" },
      { label: "Location", value: "London · Remote ( Part Time )" },
    ],
    intro:
      "Early-stage crypto market making fund building protocol relationships and institutional pipeline across DeFi.",
    achievements: [
      "Sourcing and managing strategic partnerships to accelerate client acquisition across DeFi protocols, trading desks, and institutional contacts.",
      "Building and maintaining outbound pipeline targeting exchanges and protocols including Derive.xyz, Ethereal, Thalex, and others.",
      "Leveraging existing Web3 network to surface high-impact growth opportunities and warm introductions.",
      "Produced pitch decks for partnership outreach and fund positioning, translating technical market making concepts into clear, compelling narratives.",
      "Compiled and delivered monthly reports tracking partnership progress, pipeline status, and growth metrics for internal review.",
      "Designed marketing assets to support outbound campaigns and brand presence.",
      "Operating at the intersection of BD, growth, and communications in a lean, early-stage environment.",
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
      "Consulted across 7 premium brands using 3D modelling and rendering support, converting clients through design storytelling.",
      "Built repeat client relationships and drove referral business through relationship-led selling in a high-consideration purchase environment.",
      "Developed a consultative selling approach combining design sensibility with sales discipline, achieving strong conversion rates by leading with aesthetic storytelling and lifestyle fit rather than product specs alone.",
      "Converted clients through design storytelling and 3D modelling and rendering support rather than feature-based selling.",
      "Built a strong repeat and referral client base through relationship-led selling in a high-consideration purchase environment.",
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
      "A leading DeFi options and perpetuals protocol. I wore every hat on purpose: Discord community management, event production, multi-channel growth campaigns, design assets and brand narrative through a full rebrand and TGE. The role that brought the puzzle together.",
    achievements: [
      "Ran community and social media operations across Twitter, Discord, and Telegram, driving retention and word-of-mouth growth through market cycles.",
      "Grew Discord from 15,000 to 40,000+ during TGE, keeping traders, developers, and contributors engaged across time zones.",
      "Produced Derive.xyz's first-ever Traders Breakfast at Coinfest Bali 2025 end to end, concept, campaign, venue, execution, 100+ attendees, institutional partners.",
      "Co-led the Believe in SomETHing campaign, turning Ethereum's birthday into a CT moment. 430+ protocols joined including Ethereum Foundation, Aave, and Consensys. Produced the aftermovie end to end.",
      "Led the Lyra Finance to Derive.xyz rebrand narrative through TGE, consistent voice and tone across every community-facing channel.",
      "Built Derive.xyz's landing page from scratch in Framer, designed, learned, and shipped end to end.",
      "Produced design assets and co-marketing assets, contents and merch.",
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
      "A boutique Australian sports media agency covering NFL, A-League, PGA, and a range of different industries. My first hands-on exposure to professional content strategy, multi-client account management, and real-time live coverage.",
    achievements: [
      "Designed social assets across graphics, thumbnails, story templates, and video for brands including Panerai, Beauty Block, and major sports leagues (NFL, A-League, PGA), managing the end-to-end content pipeline from ideation through scheduling and publishing.",
      "Developed content briefs tailored to each client's brand voice, audience, and campaign objectives.",
      "Produced short and long-form video and visual content using Adobe, CapCut, and Canva, consistently hitting engagement KPIs across client accounts.",
      "Joined production crew on game days and live shoots: hands-on experience in real-time content capture and live sports coverage.",
      "Built content briefs aligned with each client's brand voice and target audience.",
      "Contributed to creative direction and visual storytelling, enhancing content quality through strong narrative, pacing, and editing techniques.",
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
  {
    slug: "rmit",
    title: "RMIT UNIVERSITY",
    deck: "Bachelor of Interior Design with a research focus on micro-communities and spatial design.",
    heroImage: "/assets/work-cases/rmit-main.png",
    meta: [
      { label: "Role", value: "Interior Design · Event Planner · Liaison" },
      { label: "Timeline", value: "Feb 2018-Dec 2022" },
      { label: "Location", value: "Australia · On-site" },
    ],
    intro:
      "Bachelor of Interior Design with a research focus on micro-communities and spatial design. During my studies, I also took on two active roles in the RMIT Indonesian Student Association, first as Event Planner, producing large-scale cultural events, and later as Liaison Officer, serving as the bridge between the association and RMIT administration. I also worked as a freelance interior designer for clients.",
    achievements: [],
    achievementSections: [
      {
        title: "Event Planner, Societal Project · Dec 2018 – May 2019",
        bullets: [
          "Ran full-cycle production for cultural events before I knew what 'full-cycle' meant.",
          "Concept to wrap-up, with zero template to follow. Produced cultural showcases, fundraisers, and networking events connecting hundreds of Indonesian students and diaspora across Melbourne.",
          "Managed end-to-end event logistics: concept development, vendor coordination, volunteer management, and post-event reporting.",
          "Built community programming from scratch inside a university system not designed for it.",
        ],
      },
      {
        title: "Liaison Officer, INDONATION · Aug 2019 – Oct 2019",
        bullets: [
          "First taste of institutional navigation, translating between a student community and a bureaucracy that didn't always speak the same language.",
          "Served as official bridge between the Indonesian student association and RMIT administration, handling cross-departmental approvals and institutional coordination for hundreds of students.",
          "Led on-the-ground operations for a fundraiser concert featuring Indonesian artists: artist hospitality, transport, accommodation, and full on-site logistics.",
          "Championed student needs in a foreign environment, building trust across cultural and institutional lines.",
        ],
      },
      {
        title: "Graphic Designer, Jau Cook · Jul 2021 – Jan 2022",
        bullets: [
          "Where I learned that good design is really just clear communication with a visual layer.",
          "Produced brand-consistent visual content for a food brand across digital and print formats.",
          "Developed foundational design skills that now directly inform how community content, event materials, and campaign assets are conceived and executed.",
        ],
      },
      {
        title: "Freelance Interior Designer, Private Clients · Nov 2019 – Dec 2020",
        bullets: [
          "Two projects. Two completely different briefs.",
          "Delivered a residential master bedroom remodel and a dual-purpose barbershop and cafe end-to-end: client briefs, spatial planning, material sourcing, vendor coordination.",
          "Built core competencies in client management, creative problem-solving, and project delivery under real constraints, skills that underpin every community and events role since.",
        ],
      },
    ],
    galleryImages: [
      {
        src: "/assets/work-cases/rmit-gallery-01.png",
        alt: "RMIT interior design maquette",
      },
      {
        src: "/assets/work-cases/rmit-gallery-02.jpg",
        alt: "RMIT Indonesian Student Association group photo",
      },
      {
        src: "/assets/work-cases/rmit-gallery-03.png",
        alt: "RMIT event performance on stage",
      },
      {
        src: "/assets/work-cases/rmit-gallery-04.png",
        alt: "RMIT fundraiser and community event group shot",
      },
      {
        src: "/assets/work-cases/rmit-gallery-05.png",
        alt: "RMIT interior design bedroom concept",
      },
      {
        src: "/assets/work-cases/rmit-gallery-06.png",
        alt: "RMIT architectural installation concept",
      },
    ],
  },
];

export const getWorkCaseStudy = (slug: string) =>
  workCaseStudies.find((study) => study.slug === slug);



