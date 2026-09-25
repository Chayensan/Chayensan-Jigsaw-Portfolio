"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties } from "react";

const profileRows = [
  {
    label: "Education",
    detail: (
      <>
        <span className="home-about-row-detail-group">
          <span>Bachelor of Interior Design (Hons)</span>
          <span>RMIT, Australia</span>
          <span>2019–2022</span>
        </span>
        <span className="home-about-row-detail-group">
          <span>SheFi Season 12 Scholar- 2024</span>
          <span>Women in Web3 education programme</span>
        </span>
      </>
    ),
  },
  {
    label: "My Services",
    detail: <span>Events / Growth / Community</span>,
  },
  {
    label: "Stack",
    detail: (
      <span>
        Notion / Figma / Framer / Photoshop / InDesign / Canva / CapCut / Discord /
        Telegram / EmailOctopus
      </span>
    ),
  },
  {
    label: "Language",
    detail: <span>English / Indonesian / Malaysian / Mandarin / Hokkien</span>,
  },
];

export default function HomeAboutSection() {
  const [activeRow, setActiveRow] = useState(1);

  return (
    <section className="home-about-section" aria-labelledby="home-about-title">
      <div className="home-about-shell">
        <header className="home-about-intro" data-scroll-reveal="copy">
          <p className="home-about-kicker">About / Field notes</p>
          <h2 id="home-about-title">A few pieces behind the work.</h2>
          <p>
            Spatial thinking, community instinct, and a practical creative stack shape how I
            build experiences for people.
          </p>
          <Link href="/about">
            Read more about me<span aria-hidden="true">↗</span>
          </Link>
        </header>

        <div
          className="home-about-profile"
          data-scroll-reveal="visual"
          style={{ "--marker-position": `${12.5 + activeRow * 25}%` } as CSSProperties}
        >
          <div className="home-about-marker-grid" aria-hidden="true">
            <div className="home-about-marker-rail">
              <Image
                src="/assets/jigsaw-market.png"
                alt=""
                width={1003}
                height={1080}
                className="home-about-marker"
              />
            </div>
          </div>

          {profileRows.map((row, index) => (
            <button
              key={row.label}
              type="button"
              className={`home-about-row${activeRow === index ? " is-active" : ""}`}
              aria-pressed={activeRow === index}
              onMouseEnter={() => setActiveRow(index)}
              onFocus={() => setActiveRow(index)}
              onClick={() => setActiveRow(index)}
            >
              <span className="home-about-row-label">{row.label}</span>
              <span className="home-about-row-detail">{row.detail}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
