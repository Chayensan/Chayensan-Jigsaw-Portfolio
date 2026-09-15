"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const THROUGHLINE =
  "Interior design taught me that behavior follows environment. I've applied that everywhere since: rooms, events, Discord servers, campaigns, partnerships. The through-line is simple: I design the conditions for people to find each other.";

const THROUGHLINE_WORDS = (() => {
  let offset = 0;

  return THROUGHLINE.split(" ").map((word) => {
    const start = offset;
    offset += word.length + 1;
    return { word, start };
  });
})();

export default function ThroughlineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.3, rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="throughline" ref={sectionRef} className="throughline-section" aria-label="Throughline">
      <p className="section-index" aria-hidden="true">
        02
      </p>
      <p
        className={`throughline-statement${isVisible ? " is-visible" : ""}`}
        aria-label={THROUGHLINE}
      >
        <span aria-hidden="true">
          {THROUGHLINE_WORDS.map(({ word, start }, wordIndex) => (
            <span key={`${word}-${wordIndex}`} className="throughline-word">
              {Array.from(word).map((character, characterIndex) => (
                <span
                  key={`${character}-${characterIndex}`}
                  className="throughline-character"
                  style={
                    { "--throughline-character": start + characterIndex } as CSSProperties
                  }
                >
                  {character}
                </span>
              ))}
            </span>
          ))}
        </span>
      </p>
    </section>
  );
}
