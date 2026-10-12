"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";

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
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 760px)");
    let frame = 0;

    const updateActiveRow = () => {
      frame = 0;
      if (!mobile.matches || !profileRef.current) return;

      const rows = Array.from(profileRef.current.querySelectorAll<HTMLElement>(".home-about-row"));
      const profileRect = profileRef.current.getBoundingClientRect();
      if (profileRect.bottom < 0 || profileRect.top > window.innerHeight) return;

      const readingLine = window.innerHeight * 0.45;
      let closestRow = 0;
      let closestDistance = Infinity;

      rows.forEach((row, index) => {
        const rect = row.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - readingLine);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestRow = index;
        }
      });

      setActiveRow((current) => (current === closestRow ? current : closestRow));
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveRow);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    mobile.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      mobile.removeEventListener("change", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

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
          ref={profileRef}
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
