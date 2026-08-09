"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const COORDS = "S 06 12' 26.5\"  /  E 106 48' 37.0\"";
const PLACE_ROOM_COPY =
  "Australia, Malaysia, Indonesia, growing up between all three. I used to think that just meant I packed a lot of suitcases as a kid. Took me way longer than it should have to realise it actually rewired something, how I read people, how fast I clock what a room needs before anyone says it out loud.";
const SHARED_SPACE_COPY =
  "I studied interior design at RMIT. Wrote my thesis on how a space turns strangers into regulars, which sounds academic but really I was just trying to figure out why some rooms make people stay and some don't. Same question now, just different furniture. A Discord server. A campaign. A group chat that somehow becomes a whole friendship.";
const APHANTASIA_COPY =
  'Found out recently I have aphantasia, no mental images, ever. Turns out most people have been watching an actual movie in their head this whole time and I thought "picture it" was just a saying. Wild discovery. Honestly one of my favourite ones. It\'s become this great icebreaker too, people get so curious and start asking questions, and every question teaches me something new about how my own brain\'s been running the whole time.';
const METHOD_COPY =
  "Whatever it is, it's not visual. It's more like I feel when something's off before I can say why. A room that's too cold. A campaign with no pulse. A community that has people but no glue holding them there yet. I can't picture the fix. I just know when I've found it.";
const SURVEYED_GROUND_COPY =
  "I don't think I'm unfinished, even on the days it feels that way. Just one whole thing, seen from a lot of angles I haven't all stood in yet. The field on the homepage works the same way: not missing pieces, one ground, cut into seven ways of looking at it, spatial design, events, community, sports media, growth, partnerships, product.";
const SYSTEMS_BELONGING_COPY =
  "If you want a name for it, maybe systems of belonging. What I've noticed, over and over, is the thing that makes someone stay is almost never the loudest thing happening. It's smaller than that. Quieter.";
const OFF_CLOCK_COPY =
  "Raves. Knitting. Weightlifting. Wandering a museum with zero plan. Whatever weird object has taken over my brain this week. I like watching people come alive, doesn't matter where, a dance floor, in front of a painting, under a bar that's a bit too heavy. And incense, aloeswood specifically, in a way I probably don't need to explain but will anyway if you ask.";

const PARCELS = [
  { n: "01", label: "Spatial Design", x: 7, y: 15 },
  { n: "02", label: "Events", x: 35, y: 13 },
  { n: "03", label: "Community", x: 60, y: 16 },
  { n: "04", label: "Sports Media", x: 84, y: 20 },
  { n: "05", label: "Growth", x: 16, y: 66 },
  { n: "06", label: "Partnerships", x: 43, y: 69 },
  { n: "07", label: "Product", x: 69, y: 72 },
];

const METHOD_SIGNALS = [
  "Pattern",
  "Emotion",
  "Rhythm",
  "Language",
  "Body feeling",
  "Atmosphere",
  "Recognition",
];

const COMMUNITY_BOARD_CARDS = [
  {
    src: "/assets/about/fitlife1.PNG",
    gallery: [
      "/assets/about/fitlife1.PNG",
      "/assets/about/fitlife2.PNG",
      "/assets/about/fitlife3.JPG",
      "/assets/about/fitlife4.jpg",
      "/assets/about/fitlife5.JPG",
    ],
    alt: "Fitlife community and local fitness brand moment",
    caption: "Shoots, training, small gatherings",
    title: "Fitlife",
    location: "Jakarta, Indonesia",
    date: "2020-2021",
    description:
      "During Covid in Jakarta, the gym became one of my first local communities. What started as training led to a Fitlife ambassador role, a connection with Neveres, a local gym apparel brand, and friendships with gym regulars, models, and brand owners. I began turning brand promos into community moments: shoots, outdoor activities, and small gatherings that brought people together while helping the brands feel more lived-in and real.",
  },
  {
    src: "/assets/about/community-ravebendoors1.png",
    gallery: [
      { src: "/assets/about/ravebendoors1-hd.jpg" },
      { src: "/assets/about/ravebendoors2-hd.jpg", position: "center 62%" },
      { src: "/assets/about/ravebendoors3-hd.jpg" },
      { src: "/assets/about/ravebendoors4-hd.jpg" },
      { src: "/assets/about/ravebendoors5-hd.jpg", fit: "contain" },
    ],
    alt: "Community group gathered at an outdoor music event",
    caption: "Field trip energy, unmatched",
    title: "Ravebendoors",
    location: "Melbourne, Australia",
    date: "2023-2026",
    description:
      "Built from a small group of friends into an 80+ person rave community that kept finding reasons to show up for each other beyond the dance floor. What started around music became dinners, Christmas parties, outdoor days, pre-rave rituals, post-rave recovery, and a shared rhythm of gathering. Most meetups brought 20+ people together, not because they had to, but because the room had become part of their lives.",
  },
  {
    src: "/assets/about/community-ppia1.png",
    gallery: [
      "/assets/about/community-ppia1.png",
      "/assets/about/community-ppia2.JPG",
      "/assets/about/community-ppia3.png",
      "/assets/about/community-ppia4.PNG",
      "/assets/about/community-ppia5.PNG",
    ],
    alt: "Performers sharing a stage at a community event",
    caption: "Ideas on stage, minds wide open",
    title: "PPIA",
    location: "Melbourne, Australia",
    date: "2019-2021",
    description:
      "Supported events production and student liaison for RMIT's Indonesian student association, helping bridge the gap between arriving in a new country and feeling held by something familiar. The work was about more than logistics: it was creating small points of comfort, connection, and recognition for Indonesian students finding their place in Australia.",
  },
  {
    src: "/assets/about/community-traders-breakfast1.png",
    gallery: ["/assets/about/community-traders-breakfast1.png"],
    alt: "People gathering around shared tables",
    caption: "Good food, better company",
    title: "Traders Breakfast",
    location: "Bali, Indonesia",
    date: "2025",
    description:
      "Produced Derive.xyz's first-ever live event at Coinfest Bali 2025 after four years of being fully digital: a morning breakfast gathering for institutional traders during Coinfest Bali. Across the morning, 100+ traders moved through the space over food, coffee, conversation, and merch. It became a physical meeting point for the options community.",
  },
  {
    src: "/assets/about/mahindharama1.JPG",
    gallery: [
      "/assets/about/mahindharama1.JPG",
      "/assets/about/mahindharama2.JPG",
      "/assets/about/mahindharama3.JPG",
      "/assets/about/mahindharama4.JPG",
      "/assets/about/mahindharama5.JPG",
      "/assets/about/mahindharama6.JPG",
    ],
    alt: "Community members making a shared light painting",
    caption: "Different roles, same vision",
    title: "Mahindharama",
    location: "Penang, Malaysia",
    date: "2011-2013",
    description:
      "The origin piece. Before the portfolio, before growth, before events became work, there was Mahindharama: a youth community built around learning, service, and showing up. Through educational camps, volunteering, and fundraiser causes, it became one of the first places I understood how much care goes into building a room where young people feel useful, connected, and part of something bigger than themselves.",
  },
];

function SurveyLabel({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <p className="about-editorial-label" id={id}>
      {children}
      <span aria-hidden="true">+</span>
    </p>
  );
}

export default function AboutPage() {
  const [activeCommunityCard, setActiveCommunityCard] = useState<number | null>(null);
  const [activeCommunityImage, setActiveCommunityImage] = useState(0);
  const [placeRoomVisible, setPlaceRoomVisible] = useState(false);
  const [sharedSpaceVisible, setSharedSpaceVisible] = useState(false);
  const [aphantasiaVisible, setAphantasiaVisible] = useState(false);
  const [methodVisible, setMethodVisible] = useState(false);
  const [groundVisible, setGroundVisible] = useState(false);
  const [systemsVisible, setSystemsVisible] = useState(false);
  const [offClockVisible, setOffClockVisible] = useState(false);
  const communityDialogRef = useRef<HTMLDivElement>(null);
  const communityCloseRef = useRef<HTMLButtonElement>(null);
  const communityOpenerRef = useRef<HTMLElement | null>(null);
  const placeRoomRef = useRef<HTMLElement>(null);
  const sharedSpaceRef = useRef<HTMLElement>(null);
  const aphantasiaRef = useRef<HTMLElement>(null);
  const methodRef = useRef<HTMLElement>(null);
  const groundRef = useRef<HTMLElement>(null);
  const systemsRef = useRef<HTMLElement>(null);
  const offClockRef = useRef<HTMLElement>(null);
  const communityModalOpen = activeCommunityCard !== null;

  useEffect(() => {
    const placeRoom = placeRoomRef.current;
    if (!placeRoom) return;

    if (!("IntersectionObserver" in window)) {
      setPlaceRoomVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPlaceRoomVisible(entry.isIntersecting && entry.intersectionRatio >= 0.3);
      },
      {
        rootMargin: "-8% 0px -8% 0px",
        threshold: [0, 0.15, 0.3, 0.5, 0.75],
      },
    );

    observer.observe(placeRoom);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const placeRoom = placeRoomRef.current;
    if (!placeRoom) return;

    let frame = 0;

    const updateMapScale = () => {
      frame = 0;
      const rect = placeRoom.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const sectionCenter = rect.top + rect.height / 2;
      const distance = Math.min(
        1,
        Math.abs(sectionCenter - viewportCenter) / (window.innerHeight * 0.9),
      );
      const scale = 1.025 - distance * 0.055;

      placeRoom.style.setProperty("--place-room-map-scale", scale.toFixed(4));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateMapScale);
    };

    updateMapScale();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const sharedSpace = sharedSpaceRef.current;
    if (!sharedSpace) return;

    if (!("IntersectionObserver" in window)) {
      setSharedSpaceVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setSharedSpaceVisible(entry.isIntersecting && entry.intersectionRatio >= 0.3);
      },
      {
        rootMargin: "-8% 0px -8% 0px",
        threshold: [0, 0.15, 0.3, 0.5, 0.75],
      },
    );

    observer.observe(sharedSpace);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sharedSpace = sharedSpaceRef.current;
    if (!sharedSpace) return;

    let frame = 0;

    const updateImageScale = () => {
      frame = 0;
      const rect = sharedSpace.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const sectionCenter = rect.top + rect.height / 2;
      const distance = Math.min(
        1,
        Math.abs(sectionCenter - viewportCenter) / (window.innerHeight * 0.9),
      );
      const scale = 1.025 - distance * 0.055;

      sharedSpace.style.setProperty("--shared-space-image-scale", scale.toFixed(4));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateImageScale);
    };

    updateImageScale();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const aphantasia = aphantasiaRef.current;
    if (!aphantasia) return;

    if (!("IntersectionObserver" in window)) {
      setAphantasiaVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAphantasiaVisible(entry.isIntersecting && entry.intersectionRatio >= 0.3);
      },
      {
        rootMargin: "-8% 0px -8% 0px",
        threshold: [0, 0.15, 0.3, 0.5, 0.75],
      },
    );

    observer.observe(aphantasia);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const aphantasia = aphantasiaRef.current;
    if (!aphantasia) return;

    let frame = 0;

    const updateVisualScale = () => {
      frame = 0;
      const rect = aphantasia.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const sectionCenter = rect.top + rect.height / 2;
      const distance = Math.min(
        1,
        Math.abs(sectionCenter - viewportCenter) / (window.innerHeight * 0.9),
      );
      const scale = 1.025 - distance * 0.055;

      aphantasia.style.setProperty("--aphantasia-visual-scale", scale.toFixed(4));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateVisualScale);
    };

    updateVisualScale();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const method = methodRef.current;
    if (!method) return;

    if (!("IntersectionObserver" in window)) {
      setMethodVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setMethodVisible(entry.isIntersecting && entry.intersectionRatio >= 0.3);
      },
      {
        rootMargin: "-8% 0px -8% 0px",
        threshold: [0, 0.15, 0.3, 0.5, 0.75],
      },
    );

    observer.observe(method);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const method = methodRef.current;
    if (!method) return;

    let frame = 0;

    const updateVisualScale = () => {
      frame = 0;
      const rect = method.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const sectionCenter = rect.top + rect.height / 2;
      const distance = Math.min(
        1,
        Math.abs(sectionCenter - viewportCenter) / (window.innerHeight * 0.9),
      );
      const scale = 1.025 - distance * 0.055;

      method.style.setProperty("--method-visual-scale", scale.toFixed(4));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateVisualScale);
    };

    updateVisualScale();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const scenes = [
      { element: groundRef.current, setVisible: setGroundVisible },
      { element: systemsRef.current, setVisible: setSystemsVisible },
      { element: offClockRef.current, setVisible: setOffClockVisible },
    ];

    if (!("IntersectionObserver" in window)) {
      scenes.forEach(({ setVisible }) => setVisible(true));
      return;
    }

    const sceneByElement = new Map<HTMLElement, typeof setGroundVisible>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sceneByElement.get(entry.target as HTMLElement)?.(
            entry.isIntersecting && entry.intersectionRatio >= 0.3,
          );
        });
      },
      {
        rootMargin: "-8% 0px -8% 0px",
        threshold: [0, 0.15, 0.3, 0.5, 0.75],
      },
    );

    scenes.forEach(({ element, setVisible }) => {
      if (!element) return;
      sceneByElement.set(element, setVisible);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scenes = [groundRef.current, systemsRef.current, offClockRef.current]
      .filter((scene): scene is HTMLElement => Boolean(scene));
    let frame = 0;

    const updateVisualScales = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;

      scenes.forEach((scene) => {
        const rect = scene.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.min(
          1,
          Math.abs(sectionCenter - viewportCenter) / (window.innerHeight * 0.9),
        );
        const scale = 1.025 - distance * 0.055;

        scene.style.setProperty("--scene-visual-scale", scale.toFixed(4));
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateVisualScales);
    };

    updateVisualScales();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!communityModalOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    communityCloseRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCommunityCard(null);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = communityDialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      communityOpenerRef.current?.focus();
    };
  }, [communityModalOpen]);

  const openCommunityCard = (index: number) => {
    communityOpenerRef.current = document.activeElement as HTMLElement;
    setActiveCommunityCard(index);
    setActiveCommunityImage(0);
  };

  const stepCommunityCard = (direction: -1 | 1) => {
    setActiveCommunityCard((current) => {
      if (current === null) return null;
      const next = (current + direction + COMMUNITY_BOARD_CARDS.length) %
        COMMUNITY_BOARD_CARDS.length;
      setActiveCommunityImage(0);
      return next;
    });
  };

  const activeCommunityEvent =
    activeCommunityCard === null ? null : COMMUNITY_BOARD_CARDS[activeCommunityCard];
  const activeCommunityEntryNumber =
    activeCommunityCard === null ? "00" : String(activeCommunityCard + 1).padStart(2, "0");
  const activeCommunityImageEntry =
    activeCommunityEvent?.gallery[activeCommunityImage] ?? null;

  const stepCommunityImage = (direction: -1 | 1) => {
    if (!activeCommunityEvent) return;

    setActiveCommunityImage((current) =>
      (current + direction + activeCommunityEvent.gallery.length) %
      activeCommunityEvent.gallery.length
    );
  };

  return (
    <>
      <Navbar active="about" />
      <main className="about-page about-editorial">
        <section className="about-editorial-hero" aria-labelledby="about-title">
          <span className="about-editorial-side-index" aria-hidden="true">
            03
          </span>

          <div className="about-editorial-hero-copy">
            <span className="about-editorial-registration" aria-hidden="true">
              +
            </span>
            <h1 id="about-title" className="about-editorial-heading">
              <span>Where this</span>
              <span>practice</span>
              <span>comes from.</span>
            </h1>
            <ul
              className="about-editorial-meta"
              aria-label="Location, languages, and availability"
            >
              <li>Based in Jakarta</li>
              <li>Five languages</li>
              <li>Open to remote roles</li>
            </ul>

            <div className="about-editorial-hero-ledger" aria-hidden="true">
              <span className="about-editorial-mini-map">
                <i />
                <i />
                <i />
              </span>
              <span className="about-editorial-dash" />
              <span>03 - 19.11.25</span>
            </div>
          </div>

          <figure className="about-editorial-hero-figure">
            <div className="about-editorial-hero-terrain">
              <Image
                src="/assets/about/hero-bg.png"
                alt="Abstract topographic field in moss green and ember orange"
                fill
                sizes="100vw"
                priority
                unoptimized
              />
              <span className="about-editorial-terrain-grid" aria-hidden="true" />
              <span className="about-editorial-cross about-editorial-cross--hero" aria-hidden="true" />
            </div>
            <figcaption className="about-editorial-hero-caption">
              <span>{COORDS}</span>
              <span>Terrain study / 09</span>
            </figcaption>
            <span className="about-editorial-hero-side-note" aria-hidden="true">
              Field survey / 09
            </span>
          </figure>
        </section>

        <div className="about-editorial-story">
          <section
            className={`about-editorial-place-room${
              placeRoomVisible ? " about-editorial-place-room--visible" : ""
            }`}
            ref={placeRoomRef}
            aria-labelledby="place-room-title"
          >
            <div className="about-editorial-place-room-copy">
              <h2 id="place-room-title">
                Place<span aria-hidden="true">+</span>
              </h2>
              <p aria-label={PLACE_ROOM_COPY}>
                {PLACE_ROOM_COPY.split(" ").map((word, index) => (
                  <span
                    className="about-editorial-place-room-word"
                    style={{ "--word-index": index } as CSSProperties}
                    aria-hidden="true"
                    key={`${word}-${index}`}
                  >
                    {word}{" "}
                  </span>
                ))}
              </p>
            </div>

            <figure className="about-editorial-place-room-map">
              <div className="about-editorial-place-room-map-stage">
                <Image
                  src="/assets/about/map.png"
                  alt="Map tracing Australia, Malaysia, and Indonesia"
                  fill
                  sizes="(max-width: 760px) 94vw, 48vw"
                  priority
                />
                <svg
                  className="about-editorial-place-room-route"
                  viewBox="0 0 1254 1254"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                >
                  <path
                    className="about-editorial-place-room-route-line"
                    d="M299 501 C367 506 437 571 475 652 C613 653 779 737 853 876"
                    pathLength="100"
                  />
                  <g className="about-editorial-place-room-point about-editorial-place-room-point--malaysia">
                    <circle className="about-editorial-place-room-point-halo" cx="299" cy="501" r="18" />
                    <circle className="about-editorial-place-room-point-ring" cx="299" cy="501" r="9" />
                    <circle cx="299" cy="501" r="3.5" />
                  </g>
                  <g className="about-editorial-place-room-point about-editorial-place-room-point--indonesia">
                    <circle className="about-editorial-place-room-point-halo" cx="475" cy="652" r="18" />
                    <circle className="about-editorial-place-room-point-ring" cx="475" cy="652" r="9" />
                    <circle cx="475" cy="652" r="3.5" />
                  </g>
                  <g className="about-editorial-place-room-point about-editorial-place-room-point--australia">
                    <circle className="about-editorial-place-room-point-halo" cx="853" cy="876" r="18" />
                    <circle className="about-editorial-place-room-point-ring" cx="853" cy="876" r="9" />
                    <circle cx="853" cy="876" r="3.5" />
                  </g>
                </svg>
              </div>
            </figure>
          </section>

          <section
            className={`about-editorial-shared-space${
              sharedSpaceVisible ? " about-editorial-shared-space--visible" : ""
            }`}
            ref={sharedSpaceRef}
            aria-labelledby="shared-space-title"
          >
            <div className="about-editorial-shared-space-copy">
              <h2 id="shared-space-title">
                Shared Space<span aria-hidden="true">+</span>
              </h2>
              <p aria-label={SHARED_SPACE_COPY}>
                {SHARED_SPACE_COPY.split(" ").map((word, index) => (
                  <span
                    className="about-editorial-shared-space-word"
                    style={{ "--word-index": index } as CSSProperties}
                    aria-hidden="true"
                    key={`${word}-${index}`}
                  >
                    {word}{" "}
                  </span>
                ))}
              </p>
            </div>

            <figure className="about-editorial-shared-space-image">
              <div className="about-editorial-shared-space-image-stage">
                <Image
                  src="/assets/work-cases/rmit-gallery-01.png"
                  alt="Architectural model of a shared interior space"
                  fill
                  sizes="(max-width: 760px) 92vw, 38vw"
                />
                <span className="about-editorial-cross about-editorial-cross--plate" aria-hidden="true" />
              </div>
            </figure>
          </section>

          <section
            className={`about-editorial-aphantasia${
              aphantasiaVisible ? " about-editorial-aphantasia--visible" : ""
            }`}
            ref={aphantasiaRef}
            aria-labelledby="aphantasia-title"
          >
            <div className="about-editorial-aphantasia-inner">
              <h2 id="aphantasia-title">
                Aphantasia<span aria-hidden="true">+</span>
              </h2>
              <p aria-label={APHANTASIA_COPY}>
                {APHANTASIA_COPY.split(" ").map((word, index) => (
                  <span
                    className="about-editorial-aphantasia-word"
                    style={{ "--word-index": index } as CSSProperties}
                    aria-hidden="true"
                    key={`${word}-${index}`}
                  >
                    {word}{" "}
                  </span>
                ))}
              </p>
            </div>
            <div className="about-editorial-aphantasia-visual">
              <Image
                src="/assets/about/aphantasia.png"
                alt="Visual comparison between picturing an apple and experiencing aphantasia"
                fill
                sizes="(max-width: 760px) 92vw, 44vw"
                unoptimized
              />
            </div>
            <span className="about-editorial-aphantasia-side" aria-hidden="true">
              Not a movie
            </span>
            <span className="about-editorial-cross about-editorial-cross--ember" aria-hidden="true" />
          </section>

          <section
            className={`about-editorial-method${
              methodVisible ? " about-editorial-method--visible" : ""
            }`}
            ref={methodRef}
            aria-labelledby="method-title"
          >
            <div className="about-editorial-method-copy">
              <h2 id="method-title">
                Method<span aria-hidden="true">+</span>
              </h2>
              <p aria-label={METHOD_COPY}>
                {METHOD_COPY.split(" ").map((word, index) => (
                  <span
                    className="about-editorial-method-word"
                    style={{ "--word-index": index } as CSSProperties}
                    aria-hidden="true"
                    key={`${word}-${index}`}
                  >
                    {word}{" "}
                  </span>
                ))}
              </p>
            </div>

            <div className="about-editorial-method-figure">
              <svg viewBox="0 0 260 220" fill="none" aria-hidden="true">
                <path d="M28 76 112 76 112 160 28 160Z" />
                <path d="m28 76 38-32h84l-38 32" />
                <path d="m112 76 38-32v84l-38 32" />
                <path className="about-editorial-method-faint" d="M66 44v84l-38 32m38-32h84" />
                <circle className="about-editorial-method-ring about-editorial-method-ring--one" cx="28" cy="160" r="10" />
                <circle className="about-editorial-method-ring about-editorial-method-ring--two" cx="112" cy="160" r="10" />
                <circle className="about-editorial-method-ring about-editorial-method-ring--three" cx="150" cy="44" r="10" />
                <circle className="about-editorial-method-point about-editorial-method-point--one" cx="28" cy="160" r="4.75" />
                <circle className="about-editorial-method-point about-editorial-method-point--two" cx="112" cy="160" r="4.75" />
                <circle className="about-editorial-method-point about-editorial-method-point--three" cx="150" cy="44" r="4.75" />
              </svg>
              <ul aria-label="What I build from">
                {METHOD_SIGNALS.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>
          </section>

          <section
            className={`about-editorial-ground about-editorial-scroll-scene${
              groundVisible ? " about-editorial-scroll-scene--visible" : ""
            }`}
            ref={groundRef}
            aria-labelledby="ground-title"
          >
            <div className="about-editorial-scene-copy about-editorial-ground-copy">
              <h2 id="ground-title">
                One Complete Picture<span aria-hidden="true">+</span>
              </h2>
              <p aria-label={SURVEYED_GROUND_COPY}>
                {SURVEYED_GROUND_COPY.split(" ").map((word, index) => (
                  <span
                    className="about-editorial-scene-word"
                    style={{ "--word-index": index } as CSSProperties}
                    aria-hidden="true"
                    key={`${word}-${index}`}
                  >
                    {word}{" "}
                  </span>
                ))}
              </p>
            </div>

            <div
              className="about-editorial-parcels about-editorial-scene-visual"
              role="img"
              aria-label="Seven surveyed parcels: spatial design, events, community, sports media, growth, partnerships, and product"
            >
              <Image
                src="/assets/about/about-terrain-parcels.png"
                alt=""
                fill
                sizes="(max-width: 760px) 100vw, 58vw"
                unoptimized
              />
              <svg viewBox="0 0 100 56" preserveAspectRatio="none" aria-hidden="true">
                <g className="about-editorial-parcel-cells">
                  <path d="M0 0H29L24 31L0 35Z" />
                  <path d="M29 0H54L48 33L36 32L24 31Z" />
                  <path d="M54 0H78L70 31L62 32L48 33Z" />
                  <path d="M78 0H100V35L70 31Z" />
                  <path d="M0 35L24 31L36 32L29 56H0Z" />
                  <path d="M36 32L62 32L58 56H29Z" />
                  <path d="M62 32L70 31L100 35V56H58Z" />
                </g>
                <g className="about-editorial-parcel-lines">
                  <path d="M0 35L24 31L36 32L48 33L62 32L70 31L100 35" />
                  <path d="M29 0L24 31" />
                  <path d="M54 0L48 33" />
                  <path d="M78 0L70 31" />
                  <path d="M29 56L36 32" />
                  <path d="M58 56L62 32" />
                </g>
              </svg>
              {PARCELS.map((parcel) => (
                <span
                  key={parcel.n}
                  className="about-editorial-parcel"
                  style={{ left: `${parcel.x}%`, top: `${parcel.y}%` }}
                >
                  <b>{parcel.n}</b>
                  <small>{parcel.label}</small>
                </span>
              ))}
              <span className="about-editorial-ground-side" aria-hidden="true">
                One field / seven cuts
              </span>
            </div>
          </section>

          <section
            className={`about-editorial-systems about-editorial-scroll-scene${
              systemsVisible ? " about-editorial-scroll-scene--visible" : ""
            }`}
            ref={systemsRef}
            aria-labelledby="systems-title"
          >
            <div className="about-editorial-scene-copy about-editorial-systems-copy">
              <h2 id="systems-title">
                Systems of Belonging<span aria-hidden="true">+</span>
              </h2>
              <p aria-label={SYSTEMS_BELONGING_COPY}>
                {SYSTEMS_BELONGING_COPY.split(" ").map((word, index) => (
                  <span
                    className="about-editorial-scene-word"
                    style={{ "--word-index": index } as CSSProperties}
                    aria-hidden="true"
                    key={`${word}-${index}`}
                  >
                    {word}{" "}
                  </span>
                ))}
              </p>
            </div>

            <figure
              className="about-editorial-systems-plate about-editorial-scene-visual"
              aria-label="Three hands reaching toward a shared point of light"
            >
              <Image
                src="/assets/about/systems.png"
                alt="Three painted hands reaching toward a shared point of light"
                fill
                sizes="(max-width: 760px) 92vw, 44vw"
                unoptimized
              />
            </figure>
          </section>

          <section
            className={`about-editorial-offclock about-editorial-scroll-scene${
              offClockVisible ? " about-editorial-scroll-scene--visible" : ""
            }`}
            ref={offClockRef}
            aria-labelledby="off-clock-title"
          >
            <div className="about-editorial-scene-copy about-editorial-offclock-copy">
              <h2 id="off-clock-title">
                Off the Clock<span aria-hidden="true">+</span>
              </h2>
              <p aria-label={OFF_CLOCK_COPY}>
                {OFF_CLOCK_COPY.split(" ").map((word, index) => (
                  <span
                    className="about-editorial-scene-word"
                    style={{ "--word-index": index } as CSSProperties}
                    aria-hidden="true"
                    key={`${word}-${index}`}
                  >
                    {word}{" "}
                  </span>
                ))}
              </p>
            </div>

            <figure className="about-editorial-hobby-plate about-editorial-scene-visual">
              <Image
                src="/assets/about/my-hobby.jpg"
                alt="Personal hobby archive"
                fill
                sizes="(max-width: 760px) 92vw, 38vw"
              />
            </figure>
          </section>

          <section className="about-editorial-community-board" aria-label="Community Building">
            <figure className="about-editorial-community-board-figure">
              <div
                className="community-board-canvas"
                role="group"
                aria-label="Editable editorial visual board exploring community through rooms, meals, critiques, and shared spaces"
              >
                <div className="community-board-panel">
                  <span className="community-board-coordinates">
                    S 06 12&apos; 26.5&quot;&nbsp;&nbsp; E 106 48&apos; 37.0&quot;
                  </span>
                  <div className="community-board-title">
                    <h2>
                      Community
                      <br />
                      Building
                    </h2>
                    <p>Collaborate. Share. Learn. Grow.</p>
                  </div>

                  <div className="community-board-cards">
                    {COMMUNITY_BOARD_CARDS.map((card, index) => (
                      <button
                        type="button"
                        className={`community-board-card community-board-card--${index + 1}`}
                        key={card.src}
                        onClick={() => openCommunityCard(index)}
                        aria-haspopup="dialog"
                        aria-label={`Open details for ${card.title}`}
                      >
                        <span className="community-board-tape" aria-hidden="true" />
                        <div className="community-board-photo">
                          <Image
                            src={card.src}
                            alt={card.alt}
                            fill
                            sizes="(max-width: 760px) 18vw, 16vw"
                            quality={90}
                          />
                        </div>
                        <p>{card.caption}</p>
                        <small aria-hidden="true">CB-{String(index + 1).padStart(2, "0")}</small>
                      </button>
                    ))}
                  </div>

                  <span className="community-board-panel-cross" aria-hidden="true" />
                </div>
              </div>
            </figure>
          </section>

          {activeCommunityEvent &&
            createPortal(
              <div
                className="community-event-backdrop"
                onMouseDown={(event) => {
                  if (event.currentTarget === event.target) setActiveCommunityCard(null);
                }}
              >
                <div
                  className="community-event-dialog"
                  ref={communityDialogRef}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="community-event-title"
                  aria-describedby="community-event-description"
                >
                  <header className="community-event-dialog-head">
                    <span>
                      ({activeCommunityEntryNumber}) / Community log
                    </span>
                    <button
                      type="button"
                      className="community-event-close"
                      ref={communityCloseRef}
                      onClick={() => setActiveCommunityCard(null)}
                      aria-label="Close community event details"
                    >
                      &times;
                    </button>
                  </header>

                <div className="community-event-dialog-grid">
                  <div className="community-event-media">
                    <div className="community-event-main-photo">
                      <Image
                        src={
                          typeof activeCommunityImageEntry === "string"
                            ? activeCommunityImageEntry
                            : activeCommunityImageEntry?.src ?? ""
                        }
                        alt={`${activeCommunityEvent.title} archive photo ${activeCommunityImage + 1}`}
                        fill
                        sizes="(max-width: 760px) 92vw, 44rem"
                        quality={92}
                        unoptimized
                        style={
                          typeof activeCommunityImageEntry === "string"
                            ? undefined
                            : {
                                objectFit:
                                  activeCommunityImageEntry?.fit === "contain"
                                    ? "contain"
                                    : "cover",
                                objectPosition: activeCommunityImageEntry?.position ?? "center",
                              }
                        }
                      />
                      {activeCommunityEvent.gallery.length > 1 && (
                        <div className="community-event-carousel-controls">
                          <button
                            type="button"
                            onClick={() => stepCommunityImage(-1)}
                            aria-label="Show previous photo"
                          >
                            &larr;
                          </button>
                          <span aria-live="polite">
                            {String(activeCommunityImage + 1).padStart(2, "0")} /{" "}
                            {String(activeCommunityEvent.gallery.length).padStart(2, "0")}
                          </span>
                          <button
                            type="button"
                            onClick={() => stepCommunityImage(1)}
                            aria-label="Show next photo"
                          >
                            &rarr;
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="community-event-details">
                    <p className="community-event-kicker">Field note</p>
                    <h3
                      id="community-event-title"
                      className={
                        activeCommunityEvent.title === "Traders Breakfast"
                          ? "community-event-title--stacked"
                          : undefined
                      }
                    >
                      {activeCommunityEvent.title === "Traders Breakfast" ? (
                        <>
                          Traders
                          <br />
                          Breakfast
                        </>
                      ) : (
                        activeCommunityEvent.title
                      )}
                    </h3>
                    <dl className="community-event-meta" aria-label="Event location and timeline">
                      <div>
                        <dt>Location</dt>
                        <dd>{activeCommunityEvent.location}</dd>
                      </div>
                      <div>
                        <dt>Timeline</dt>
                        <dd>{activeCommunityEvent.date}</dd>
                      </div>
                    </dl>
                    <p id="community-event-description" className="community-event-description">
                      {activeCommunityEvent.description}
                    </p>
                  </div>

                </div>

                <footer className="community-event-dialog-footer">
                  <span>Archive / {activeCommunityEntryNumber}.05</span>
                  <div>
                    <button
                      type="button"
                      onClick={() => stepCommunityCard(-1)}
                      aria-label="Show previous community event"
                    >
                      &larr;
                    </button>
                    <button
                      type="button"
                      onClick={() => stepCommunityCard(1)}
                      aria-label="Show next community event"
                    >
                      &rarr;
                    </button>
                  </div>
                </footer>
                </div>
              </div>,
              document.body,
            )}
        </div>
      </main>
      <div className="about-editorial-footer">
        <Footer />
      </div>
    </>
  );
}
