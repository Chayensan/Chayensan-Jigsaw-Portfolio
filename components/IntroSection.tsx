"use client";

import type { CSSProperties } from "react";
import Tagline from "./Tagline";

const drivers = [
  {
    copy: "Why people stay.",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="13" r="4.2" />
        <circle cx="10.5" cy="16.5" r="3.4" />
        <circle cx="29.5" cy="16.5" r="3.4" />
        <path d="M13.2 31c1.4-5 3.7-7.5 6.8-7.5s5.4 2.5 6.8 7.5" />
        <path d="M4.8 30c.9-4.1 2.9-6.2 5.7-6.2 1.8 0 3.2.8 4.2 2.5" />
        <path d="M25.3 26.3c1-1.7 2.4-2.5 4.2-2.5 2.8 0 4.8 2.1 5.7 6.2" />
      </svg>
    ),
  },
  {
    copy: "Why they care.",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M20 32S8 24.5 8 15.6C8 11.4 10.8 9 14.3 9c2.4 0 4.3 1.2 5.7 3.3C21.4 10.2 23.3 9 25.7 9 29.2 9 32 11.4 32 15.6 32 24.5 20 32 20 32Z" />
      </svg>
    ),
  },
  {
    copy: "Why they come back.",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M29 14h-9.2c-5.8 0-9.8 3.4-9.8 8.4 0 4.8 3.9 8.1 9.2 8.1h7.3" />
        <path d="M24 8l7 6-7 6" />
      </svg>
    ),
  },
  {
    copy: "Why some rooms feel magnetic.",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M11 10v10.8c0 5.8 3.7 9.7 9 9.7s9-3.9 9-9.7V10" />
        <path d="M11 10h6.5" />
        <path d="M22.5 10H29" />
        <path d="M15.3 22.5c.9 2 2.5 3 4.7 3s3.8-1 4.7-3" />
        <path d="M5.5 16.5h4" />
        <path d="M30.5 16.5h4" />
        <path d="M20 5.5v3.8" />
      </svg>
    ),
  },
  {
    copy: "and others feel empty.",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M14.2 14.4c.3-4 2.8-6.4 6.9-6.4 4 0 6.8 2.5 6.8 6.2 0 2.7-1.3 4.5-4.1 6.2-2.6 1.6-3.5 2.8-3.5 5.1v1" />
        <path d="M20.3 32h.1" />
        <circle cx="20.3" cy="32" r="1.1" />
      </svg>
    ),
  },
];

const buildPieces = [
  {
    copy: "Communities with texture.",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="12" />
        <path d="M8 20h24" />
        <path d="M20 8c4 3.3 6 7.3 6 12s-2 8.7-6 12" />
        <path d="M20 8c-4 3.3-6 7.3-6 12s2 8.7 6 12" />
      </svg>
    ),
  },
  {
    copy: "Brands with tension.",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M20 6v28" />
        <path d="M6 20h28" />
        <path d="M10 10l20 20" />
        <path d="M30 10L10 30" />
      </svg>
    ),
  },
  {
    copy: "Events people talk about.",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M20 7l11 6v14l-11 6-11-6V13l11-6Z" />
        <path d="M20 7v26" />
        <path d="M9 13l11 7 11-7" />
        <path d="M9 27l11-7 11 7" />
      </svg>
    ),
  },
  {
    copy: "weeks later.",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M20 9c5.8 0 10.5 3.6 10.5 8.1 0 4.6-4.7 8.2-10.5 8.2a15 15 0 0 1-3.8-.5L10 31l1.8-8.1a7.4 7.4 0 0 1-2.3-5.8C9.5 12.6 14.2 9 20 9Z" />
      </svg>
    ),
  },
];

const approachSteps = [
  ["Listen deeply", "Understand the people, not just the problem."],
  ["Find the pattern", "Connect the dots most overlook."],
  ["Shape the experience", "Design systems and moments that feel human."],
  ["Build for lasting impact", "Create things that outlive the moment."],
];

export default function IntroSection() {
  return (
    <section className="intro-section" aria-labelledby="intro-title">
      <div className="intro-statement">
        <Tagline text="Intro" />
        <h2 id="intro-title">
          I work with founders and teams to build communities run events, and
          design growth systems that turn early believers into ecosystems. One
          thread: people.
        </h2>
        <p className="intro-emphasis">The tools change. The job never does.</p>
      </div>

      <div className="intro-diagram">
        <section className="jigsaw-panel jigsaw-mindset" aria-labelledby="jigsaw-title">
          <div className="jigsaw-copy">
            <p className="jigsaw-kicker">01 / The Mindset</p>
            <h3 id="jigsaw-title">
              A career isn&apos;t
              <br />
              a straight line.
              <br />
              <em>It&apos;s a puzzle you build over time.</em>
            </h3>
            <p className="jigsaw-lede">
              I don&apos;t really believe growth is only metrics.
              <br />
              I think growth is emotional architecture.
            </p>
            <span className="jigsaw-signal" aria-hidden="true" />
          </div>

          <div className="jigsaw-hero-visual" aria-hidden="true">
            <div className="jigsaw-orbital" />
            <div className="jigsaw-board">
              {Array.from({ length: 9 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="jigsaw-panel jigsaw-drivers" aria-labelledby="jigsaw-drivers-title">
          <p className="jigsaw-kicker" id="jigsaw-drivers-title">
            02 / What Drives Me
          </p>
          <div className="driver-grid">
            {drivers.map((driver, index) => (
              <article className="driver-card" key={driver.copy} style={{ "--index": index } as CSSProperties}>
                <span className="driver-icon">{driver.icon}</span>
                <p>{driver.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="jigsaw-panel jigsaw-build" aria-labelledby="jigsaw-build-title">
          <div>
            <p className="jigsaw-kicker" id="jigsaw-build-title">
              03 / What I Build
            </p>
            <h3>
              I like building things
              <br />
              that feel alive.
            </h3>
          </div>
          <div className="build-piece-row" aria-label="Things I build">
            {buildPieces.map((piece, index) => (
              <article className="build-piece" key={piece.copy} style={{ "--index": index } as CSSProperties}>
                <span className="build-icon">{piece.icon}</span>
                <p>{piece.copy}</p>
              </article>
            ))}
            <span className="build-piece build-piece-empty">
              <strong>WIP</strong>
            </span>
          </div>
        </section>

        <section className="jigsaw-panel jigsaw-resonance" aria-labelledby="jigsaw-resonance-title">
          <div>
            <p className="jigsaw-kicker" id="jigsaw-resonance-title">
              04 / My North Star
            </p>
            <h3>
              The internet has
              <br />
              enough noise
              <br />
              already.
            </h3>
          </div>
          <div className="resonance-map" aria-hidden="true">
            <span>Resonance</span>
            <i className="resonance-star resonance-star-one" />
            <i className="resonance-star resonance-star-two" />
            <i className="resonance-star resonance-star-three" />
          </div>
          <p className="resonance-note">
            I&apos;m more
            <br />
            interested in
            <br />
            resonance.
          </p>
        </section>

        <section className="jigsaw-panel jigsaw-approach" aria-labelledby="jigsaw-approach-title">
          <div>
            <p className="jigsaw-kicker" id="jigsaw-approach-title">
              05 / How I Approach
            </p>
            <h3>
              Intentional
              <br />
              by <em>design.</em>
            </h3>
          </div>
          <div className="approach-list">
            {approachSteps.map(([title, body]) => (
              <article key={title}>
                <span aria-hidden="true">+</span>
                <div>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="approach-blank" aria-hidden="true" />
        </section>

      </div>
    </section>
  );
}
