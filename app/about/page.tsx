"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const COORDS = "S 06 12' 26.5\"  /  E 106 48' 37.0\"";

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
  const communityDialogRef = useRef<HTMLDivElement>(null);
  const communityCloseRef = useRef<HTMLButtonElement>(null);
  const communityOpenerRef = useRef<HTMLElement | null>(null);
  const communityModalOpen = activeCommunityCard !== null;

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
              Where this practice comes from.
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
                src="/assets/about/about-terrain-hero.png"
                alt="Atmospheric misty hillside terrain artwork"
                fill
                sizes="(max-width: 760px) 100vw, 52vw"
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
          <section className="about-editorial-origin" aria-label="Place and shared space">
            <div className="about-editorial-copy about-editorial-copy--place">
              <SurveyLabel>Place / Room</SurveyLabel>
              <p>
                I grew up between Australia, Malaysia, and Indonesia, which is a very efficient
                way to learn that people don&apos;t behave the same way in every room. Not because
                they become different people, but because every room asks something different
                of them.
              </p>
            </div>

            <figure className="about-editorial-rmit about-editorial-rmit--study">
              <div className="about-editorial-rmit-frame">
                <Image
                  src="/assets/about/my-world-map.png"
                  alt="RMIT interior design thesis room model"
                  fill
                  sizes="(max-width: 760px) 84vw, 34vw"
                />
              </div>
              <figcaption aria-hidden="true">Room study / 01</figcaption>
            </figure>

            <span className="about-editorial-origin-side" aria-hidden="true">
              RMIT / THESIS
            </span>

            <div className="about-editorial-copy about-editorial-copy--shared">
              <SurveyLabel>Shared Space</SurveyLabel>
              <p>
                That noticing followed me to RMIT, where I studied interior design and wrote my
                thesis on how micro-communities form around shared space: how a room, arranged
                with intention, can turn strangers into regulars. I still use that model for
                almost everything I build. A Discord server is a room. A campaign is a room. A
                dinner table is a room. The furniture just keeps changing.
              </p>
            </div>

            <figure
              className="about-editorial-rmit about-editorial-rmit--evidence"
              tabIndex={0}
              aria-label="Interior design thesis model, RMIT (Hons). Hover or focus to view the full image."
            >
              <div className="about-editorial-rmit-frame">
                <Image
                  src="/assets/work-cases/rmit-gallery-01.png"
                  alt="RMIT interior design thesis model showing a shared room"
                  fill
                  sizes="(max-width: 760px) 92vw, 38vw"
                />
                <span className="about-editorial-cross about-editorial-cross--plate" aria-hidden="true" />
              </div>
              <figcaption>
                Interior design thesis model, RMIT (Hons). Shared-space micro-communities study.
                Designed and built.
              </figcaption>
            </figure>
          </section>

          <section className="about-editorial-aphantasia" aria-labelledby="aphantasia-label">
            <div className="about-editorial-aphantasia-inner">
              <SurveyLabel id="aphantasia-label">Aphantasia</SurveyLabel>
              <p>
                I also recently found out I have aphantasia, which means my imagination does not
                render as an internal movie. Apparently, when people said they could
                &ldquo;picture it,&rdquo; many of them meant that literally. Rude discovery,
                honestly.
              </p>
            </div>
            <span className="about-editorial-aphantasia-side" aria-hidden="true">
              Not a movie
            </span>
            <span className="about-editorial-cross about-editorial-cross--ember" aria-hidden="true" />
          </section>

          <section className="about-editorial-method" aria-labelledby="method-label">
            <div className="about-editorial-copy">
              <SurveyLabel id="method-label">Method</SurveyLabel>
              <p>
                But it also explained something about how I work. I don&apos;t build from mental
                screenshots. I build from pattern, emotion, rhythm, language, body feeling,
                atmosphere, and recognition. I know when a space feels too cold, when a campaign
                has no pulse, when a community has energy but no container, when a brand is
                saying the right thing in the wrong room.
              </p>
            </div>

            <div className="about-editorial-method-figure">
              <svg viewBox="0 0 260 220" fill="none" aria-hidden="true">
                <path d="M28 76 112 76 112 160 28 160Z" />
                <path d="m28 76 38-32h84l-38 32" />
                <path d="m112 76 38-32v84l-38 32" />
                <path className="about-editorial-method-faint" d="M66 44v84l-38 32m38-32h84" />
                <circle cx="28" cy="160" r="2.5" />
                <circle cx="112" cy="160" r="2.5" />
                <circle cx="150" cy="44" r="2.5" />
              </svg>
              <ul aria-label="What I build from">
                {METHOD_SIGNALS.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="about-editorial-ground" aria-labelledby="ground-label">
            <div
              className="about-editorial-parcels"
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

            <div className="about-editorial-copy about-editorial-ground-copy">
              <SurveyLabel id="ground-label">Surveyed Ground</SurveyLabel>
              <p>
                That&apos;s also why this site is built the way it is. The field on the
                homepage isn&apos;t a puzzle with missing pieces. It&apos;s one surveyed ground,
                already whole, cut by survey lines into seven parcels: spatial design, events,
                community, sports media, growth, partnerships, and product. Different angles on
                the same terrain, not fragments waiting to click together.
              </p>
            </div>
          </section>

          <section className="about-editorial-systems" aria-labelledby="systems-label">
            <div className="about-editorial-systems-copy">
              <div className="about-editorial-copy">
                <SurveyLabel id="systems-label">Finding the Pattern</SurveyLabel>
                <p>
                  That question has followed me through RMIT&apos;s student community, retail
                  design consulting, Web3 at Derive.xyz, live events, Discord ecosystems,
                  campaigns, partnerships, and early-stage product work. Different rooms, same
                  question: what makes someone stay, participate, and bring somebody else along?
                </p>
              </div>

              <div className="about-editorial-copy about-editorial-copy--closing">
                <SurveyLabel>Systems of Belonging</SurveyLabel>
                <p>
                  If there&apos;s a name for what I do, it&apos;s something like building systems
                  of belonging, though I&apos;d rather show that than say it. Mostly, I care
                  about signal over noise. The thing that makes someone stay is rarely the
                  loudest thing in the room.
                </p>
              </div>
            </div>

            <figure className="about-editorial-archive" aria-label="Field and spatial-study archive plate">
              <div className="about-editorial-archive-field">
                <Image
                  src="/assets/about/interior-mapping.png"
                  alt="Interior mapping study"
                  fill
                  sizes="(max-width: 760px) 92vw, 40vw"
                  unoptimized
                />
              </div>
              <div
                className="about-editorial-archive-plan"
                tabIndex={0}
                aria-label="View RMIT gallery image full size"
              >
                <Image
                  src="/assets/about/rmit-galere.png"
                  alt="RMIT gallery architectural study"
                  fill
                  sizes="(max-width: 760px) 58vw, 22vw"
                />
              </div>
              <figcaption>{COORDS}</figcaption>
              <span className="about-editorial-cross about-editorial-cross--archive" aria-hidden="true" />
            </figure>
          </section>

          <section className="about-editorial-offclock" aria-labelledby="off-clock-label">
            <figure className="about-editorial-hobby-plate">
              <Image
                src="/assets/about/my-hobby.jpg"
                alt="Personal hobby archive"
                fill
                sizes="(max-width: 760px) 92vw, 38vw"
              />
            </figure>

            <div className="about-editorial-copy about-editorial-offclock-copy">
              <SurveyLabel id="off-clock-label">Off The Clock</SurveyLabel>
              <p>
                Outside of work, I like things with rhythm, texture, and a little chaos: raves,
                knitting, weightlifting, museums, and whatever strange object catches my eye that
                week. I&apos;m drawn to spaces where people let themselves become more alive,
                whether that&apos;s on a dance floor, in front of an artwork, under a heavy
                barbell, or halfway through making something with my hands. I also really,
                really love incense (especially Aloeswood). This feels important to disclose.
              </p>
            </div>
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
