import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Annotation from "@/components/Annotation";
import Plate from "@/components/Plate";

const COORDS = "S 06°12′26.5″  ·  E 106°48′37.0″";

const PARCELS = [
  { n: "01", label: "Spatial Design", x: 7, y: 18 },
  { n: "02", label: "Events", x: 38, y: 13 },
  { n: "03", label: "Community", x: 64, y: 20 },
  { n: "04", label: "Sports Media", x: 74, y: 52 },
  { n: "05", label: "Growth", x: 14, y: 60 },
  { n: "06", label: "Partnerships", x: 42, y: 68 },
  { n: "07", label: "Product", x: 66, y: 78 },
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

export default function AboutPage() {
  return (
    <>
      <Navbar active="about" />
      <main className="about-page">
        {/* Hero: field-survey plate */}
        <section className="about-hero" aria-labelledby="about-title">
          <div className="about-hero-head">
            <h1 id="about-title" className="about-heading">
              Where this practice comes from.
            </h1>
            <ul className="about-rail" aria-label="Location, languages, and availability">
              <Annotation as="li">Based in Jakarta</Annotation>
              <Annotation as="li">Five languages</Annotation>
              <Annotation as="li">Open to remote roles</Annotation>
            </ul>
            <p className="about-hero-date" aria-hidden="true">
              FS / 09 &middot; 19.11.25
            </p>
          </div>

          <figure className="about-hero-media">
            <span className="about-hero-frame">
              <Image
                src="/assets/who-field.png"
                alt="Aerial view of a green field with people gathered across it"
                fill
                sizes="(max-width: 1100px) 100vw, 46vw"
                priority
              />
              <span className="survey-cross survey-cross--tl" aria-hidden="true" />
              <span className="survey-cross survey-cross--br" aria-hidden="true" />
            </span>
            <figcaption className="about-hero-coords" aria-hidden="true">
              <span className="about-hero-tag">Field Survey / 09</span>
              <span className="about-hero-latlong">{COORDS}</span>
            </figcaption>
          </figure>
        </section>

        <div className="about-survey" aria-label="About Desi Kamdrawati">
          {/* 01 · Place / Room */}
          <section className="survey-block survey-block--split">
            <div className="survey-column">
              <p className="survey-label">
                <span className="survey-label-mark" aria-hidden="true">
                  +
                </span>
                Place / Room
              </p>
              <div className="survey-copy">
                <p>
                  I grew up between Australia, Malaysia, and Indonesia, which is a very
                  efficient way to learn that people don&apos;t behave the same way in every
                  room. Not because they become different people, but because every room asks
                  something different of them.
                </p>
              </div>
            </div>
            <Plate
              className="survey-plate"
              image={{ src: "/assets/work-cases/rmit-gallery-01.png" }}
              aspectRatio="1 / 1"
              caption={{
                kind: "artefact",
                what: "Interior design thesis model, RMIT (Hons)",
                purpose: "shared-space micro-communities study",
                contribution: "designed and built",
              }}
            />
          </section>

          {/* 02 · Shared Space */}
          <section className="survey-block survey-block--split survey-block--reverse">
            <div className="survey-column">
              <p className="survey-label">
                <span className="survey-label-mark" aria-hidden="true">
                  +
                </span>
                Shared Space
              </p>
              <div className="survey-copy">
                <p>
                  That noticing followed me to RMIT, where I studied interior design and wrote
                  my thesis on how micro-communities form around shared space: how a room,
                  arranged with intention, can turn strangers into regulars. I still use that
                  model for almost everything I build. A Discord server is a room. A campaign is
                  a room. A dinner table is a room. The furniture just keeps changing.
                </p>
              </div>
            </div>
            <Plate
              className="survey-plate"
              image={{ src: "/assets/work-cases/rmit-main.png" }}
              aspectRatio="4 / 3"
              caption={{
                kind: "artefact",
                what: "Shared-space concept, RMIT (Hons)",
                purpose: "how a designed room turns strangers into regulars",
                contribution: "designed",
              }}
            />
          </section>

          {/* Aphantasia · orange survey panel */}
          <section className="survey-aphantasia" aria-label="Aphantasia">
            <div className="survey-aphantasia-inner">
              <p className="survey-label survey-label--dark">
                <span className="survey-label-mark" aria-hidden="true">
                  +
                </span>
                Aphantasia
              </p>
              <div className="survey-copy survey-copy--lead">
                <p>
                  I also recently found out I have aphantasia, which means my imagination does
                  not render as an internal movie. Apparently, when people said they could
                  &ldquo;picture it,&rdquo; many of them meant that literally. Rude discovery,
                  honestly.
                </p>
              </div>
            </div>
            <span className="survey-edge" aria-hidden="true">
              Not a movie
            </span>
            <span className="survey-cross survey-cross--panel" aria-hidden="true" />
          </section>

          {/* Method · cube + signal list */}
          <section className="survey-block survey-block--split">
            <div className="survey-column">
              <p className="survey-label">
                <span className="survey-label-mark" aria-hidden="true">
                  +
                </span>
                Method
              </p>
              <div className="survey-copy">
                <p>
                  But it also explained something about how I work. I don&apos;t build from
                  mental screenshots. I build from pattern, emotion, rhythm, language, body
                  feeling, atmosphere, and recognition. I know when a space feels too cold, when
                  a campaign has no pulse, when a community has energy but no container, when a
                  brand is saying the right thing in the wrong room.
                </p>
              </div>
            </div>
            <div className="method-figure">
              <svg
                className="method-cube"
                viewBox="0 0 200 200"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M60 55 L140 55 L140 135 L60 135 Z"
                  stroke="var(--moss)"
                  strokeWidth="1"
                />
                <path
                  d="M60 55 L95 30 L175 30 L140 55"
                  stroke="var(--moss)"
                  strokeWidth="1"
                />
                <path
                  d="M140 55 L175 30 L175 110 L140 135"
                  stroke="var(--moss)"
                  strokeWidth="1"
                />
                <path
                  d="M95 30 L95 110 L60 135 M95 110 L175 110"
                  stroke="var(--line-strong)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <circle cx="60" cy="55" r="2.5" fill="var(--survey-orange)" />
                <circle cx="140" cy="55" r="2.5" fill="var(--survey-orange)" />
                <circle cx="140" cy="135" r="2.5" fill="var(--survey-orange)" />
                <circle cx="175" cy="30" r="2.5" fill="var(--survey-orange)" />
              </svg>
              <ul className="method-list" aria-label="What I build from">
                {METHOD_SIGNALS.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Assembled Parts · terrain scans */}
          <section className="survey-block survey-block--split survey-block--reverse">
            <div className="survey-column">
              <p className="survey-label">
                <span className="survey-label-mark" aria-hidden="true">
                  +
                </span>
                Assembled Parts
              </p>
              <div className="survey-copy">
                <p>
                  The jigsaw idea came from Daniel Sloss&apos;s comedy special Jigsaw, where he
                  talks about life as something you build piece by piece. That stuck with me. Not
                  because I think life is neat, or that every piece arrives with a clear edge,
                  but because I&apos;ve always understood myself through assembled parts: places,
                  people, rooms, projects, instincts, accidents, and all the weird little choices
                  that only make sense later.
                </p>
              </div>
            </div>
            <div className="scan-stack" aria-hidden="true">
              <span className="scan-plate">
                <Image
                  src="/assets/work-cases/seven-chapters.png"
                  alt=""
                  fill
                  sizes="(max-width: 1100px) 60vw, 26vw"
                />
                <span className="scan-tag">Scan / A</span>
              </span>
              <span className="scan-plate scan-plate--sm">
                <Image
                  src="/assets/who-field.png"
                  alt=""
                  fill
                  sizes="(max-width: 1100px) 40vw, 16vw"
                />
                <span className="scan-tag">Scan / B</span>
              </span>
            </div>
          </section>

          {/* Surveyed Ground · the seven parcels (only prominent numbers) */}
          <section className="survey-ground" aria-labelledby="surveyed-ground-label">
            <div className="survey-ground-head">
              <p className="survey-label" id="surveyed-ground-label">
                <span className="survey-label-mark" aria-hidden="true">
                  +
                </span>
                Surveyed Ground
              </p>
              <div className="survey-copy">
                <p>
                  That&apos;s also why this site is built the way it is. The field on the
                  homepage isn&apos;t a puzzle with missing pieces. It&apos;s one surveyed
                  ground, already whole, cut by survey lines into seven parcels: spatial design,
                  events, community, sports media, growth, partnerships, and product. Different
                  angles on the same terrain, not fragments waiting to click together.
                </p>
              </div>
            </div>

            <div className="parcel-field" role="img" aria-label="One surveyed ground cut into seven parcels: spatial design, events, community, sports media, growth, partnerships, and product">
              <Image
                className="parcel-field-terrain"
                src="/assets/who-field.png"
                alt=""
                fill
                sizes="(max-width: 1100px) 100vw, 74rem"
              />
              <svg
                className="parcel-field-lines"
                viewBox="0 0 100 60"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M32 0 L28 60" />
                <path d="M60 0 L64 60" />
                <path d="M0 34 L32 30" />
                <path d="M64 26 L100 30" />
                <path d="M28 38 L60 42" />
              </svg>
              {PARCELS.map((parcel) => (
                <span
                  key={parcel.n}
                  className="parcel"
                  style={{ left: `${parcel.x}%`, top: `${parcel.y}%` }}
                >
                  <span className="parcel-n">{parcel.n}</span>
                  <span className="parcel-label">{parcel.label}</span>
                </span>
              ))}
              <span className="survey-cross survey-cross--field" aria-hidden="true" />
            </div>
          </section>

          {/* Systems of Belonging · closing */}
          <section className="survey-systems" aria-labelledby="systems-label">
            <p className="survey-label" id="systems-label">
              <span className="survey-label-mark" aria-hidden="true">
                +
              </span>
              Systems of Belonging
            </p>
            <div className="survey-systems-grid">
              <div className="survey-copy">
                <p>
                  That question has followed me through RMIT&apos;s student community, retail
                  design consulting, Web3 at Derive.xyz, live events, Discord ecosystems,
                  campaigns, partnerships, and early-stage product work. Different rooms, same
                  question: what makes someone stay, participate, and bring somebody else along?
                </p>
              </div>
              <div className="survey-copy survey-copy--lead">
                <p>
                  If there&apos;s a name for what I do, it&apos;s something like building systems
                  of belonging, though I&apos;d rather show that than say it. Mostly, I care
                  about signal over noise. The thing that makes someone stay is rarely the
                  loudest thing in the room.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
