import type { CSSProperties } from "react";

type FragmentStyle = CSSProperties & {
  "--x": string;
  "--y": string;
  "--w": string;
  "--d": string;
};

const fragmentStyle = (style: FragmentStyle) => style;

export default function HeroSection() {
  const signals = [
    ["Events", "Rooms where momentum had somewhere to land."],
    ["Community", "Rituals and systems that kept people returning."],
    ["Growth", "Launches, feedback loops, and useful traction."],
    ["Web3", "Experiments that made abstract networks feel human."],
  ];

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/assets/hero-background.mp4" type="video/mp4" />
      </video>

      <div className="hero-fragments" aria-hidden="true">
        <span style={fragmentStyle({ "--x": "8%", "--y": "0%", "--w": "5.75rem", "--d": "0.1s" })} data-index="1.2857" />
        <span style={fragmentStyle({ "--x": "38%", "--y": "9%", "--w": "6.25rem", "--d": "0.2s" })} data-index="1.5714" />
        <span style={fragmentStyle({ "--x": "18%", "--y": "21%", "--w": "3.6rem", "--d": "0.3s" })} data-index="1.7143" />
        <span style={fragmentStyle({ "--x": "47%", "--y": "31%", "--w": "6.2rem", "--d": "0.4s" })} data-index="2.0000" />
        <span style={fragmentStyle({ "--x": "66%", "--y": "43%", "--w": "4.25rem", "--d": "0.5s" })} data-index="2.7143" />
        <span style={fragmentStyle({ "--x": "82%", "--y": "39%", "--w": "8.25rem", "--d": "0.6s" })} data-index="2.8571" />
        <span style={fragmentStyle({ "--x": "32%", "--y": "59%", "--w": "4.2rem", "--d": "0.7s" })} data-index="3.5714" />
        <span style={fragmentStyle({ "--x": "59%", "--y": "66%", "--w": "5.55rem", "--d": "0.8s" })} data-index="4.0000" />
      </div>

      <div className="hero-puzzle-field" aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => (
          <span key={index} />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-copy">
          <h1 id="hero-title">
            <span className="hero-line hero-line-one">
              Hi, I&apos;m <em>Desi.</em>
            </span>
            <span className="hero-line hero-line-two">Still assembling</span>
            <span className="hero-line hero-line-three">the pieces that move people.</span>
          </h1>
          <p className="hero-summary">
            A black-and-green map of the rooms, communities, launches, and experiments that shaped
            how I build momentum around people.
          </p>
          <p className="scroll-label">Scroll to explore</p>
        </div>

        <aside className="hero-note" aria-label="Portfolio note">
          <p className="hero-note-kicker">Jigsaw index</p>
          <span className="hero-plus" aria-hidden="true" />
          <p>
            Each piece is a role, a room, a launch, or a community system.
          </p>
          <p className="hero-note-caps">
            Designed in public.
            <br />
            Tested with people.
            <br />
            Kept in motion.
          </p>
          <span className="hero-plus" aria-hidden="true" />
        </aside>
      </div>

      <div className="hero-signal-strip" aria-label="Portfolio principles">
        {signals.map(([title, copy]) => (
          <div className="hero-signal" key={title}>
            <span className="hero-plus" aria-hidden="true" />
            <div>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
          </div>
        ))}
        <span className="hero-plus hero-strip-end" aria-hidden="true" />
      </div>
    </section>
  );
}
