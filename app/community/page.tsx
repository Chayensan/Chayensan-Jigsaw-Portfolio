import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const communityFrames = [
  {
    number: "01",
    label: "",
    src: "/assets/work-cases/rmit-gallery-02.jpg",
    alt: "Community group gathered at an outdoor cultural event.",
    className: "frame-one",
  },
  {
    number: "02",
    label: "",
    src: "/assets/work-cases/rmit-gallery-03.png",
    alt: "Live cultural performance with an audience.",
    className: "frame-two",
  },
  {
    number: "03",
    label: "",
    src: "/assets/work-cases/rmit-gallery-04.png",
    alt: "Student community team gathered at an event.",
    className: "frame-three",
  },
  {
    number: "04",
    label: "",
    src: "/assets/who-field.png",
    alt: "People gathered across an open green field.",
    className: "frame-five",
  },
  {
    number: "05",
    label: "",
    src: "/assets/work-cases/rmit-gallery-06.png",
    alt: "Spatial community concept with people gathered across connected levels.",
    className: "frame-four",
  },
];

export default function CommunityPage() {
  return (
    <>
      <Navbar active="community" />
      <main className="community-page">
        <section className="community-hero" aria-labelledby="community-title">
          <div className="community-copy">
            <p className="community-eyebrow">Community</p>
            <h1 id="community-title">Moments in the making</h1>
            <p className="community-meta">events hosted &middot; people gathered &middot; energy curated</p>
            <div className="community-story">
              <p>
                I&apos;ve always loved bringing the right people into the same room.
                Online or offline, intimate dinners or chaotic side events, I care
                about how something feels when people walk in.
              </p>
              <p>
                Not just attendance.
                <br />
                Atmosphere.
                <br />
                Conversation.
                <br />
                The kind of energy that makes people stay longer than they planned to.
              </p>
              <p>
                I like creating spaces that feel warm, intentional, and a little
                magnetic.
              </p>
              <p>
                If you&apos;re building a community, hosting something special, or just
                have an idea brewing, I&apos;d genuinely love to help shape it with you.
              </p>
            </div>
            <p className="community-closing">
              Good events end.
              <br />
              Good moments linger.
            </p>
          </div>

          <div className="community-visual" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="metadata">
              <source src="/assets/community-moments.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section
          className="community-building"
          aria-labelledby="community-building-title"
        >
          <div className="community-building-stage">
            <div className="community-building-title">
              <p>Building</p>
              <h2 id="community-building-title">Community</h2>
            </div>

            {communityFrames.map((frame) => (
              <figure
                className={`community-frame ${frame.className}`}
                key={frame.number}
              >
                <span className="community-frame-number">
                  ({frame.number})
                </span>
                <img src={frame.src} alt={frame.alt} />
                {frame.label ? <figcaption>{frame.label}</figcaption> : null}
              </figure>
            ))}

            <p className="community-note community-note-little">
              little moments
            </p>
            <p className="community-note community-note-meaningful">
              meaningful people
            </p>
            <p className="community-note community-note-beautiful">
              beautiful communities
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
