"use client";

import Image from "next/image";
import { type PointerEvent, useEffect, useRef } from "react";

const HERO_BACKGROUND = "/assets/hero-systems-of-belonging.png";

function GridLayer() {
  return <div className="systems-hero-grid-layer" data-layer="grid" />;
}

function DotMatrixLayer() {
  return <div className="systems-hero-dot-matrix-layer" data-layer="dot-matrix" />;
}

function GlowLayer() {
  return <div className="systems-hero-glow-layer" data-layer="glow" />;
}

function HeroBackground() {
  return (
    <div className="systems-hero-background" aria-hidden="true">
      <div className="systems-hero-background-image">
        <Image src={HERO_BACKGROUND} alt="" fill priority sizes="100vw" unoptimized />
      </div>
      <div className="systems-hero-background-fade" />
      <GlowLayer />
      <GridLayer />
      <DotMatrixLayer />
    </div>
  );
}

function HeroNav() {
  return (
    <div className="systems-hero-rail" aria-hidden="true">
      <span className="systems-hero-rail-plus systems-hero-rail-plus-top">+</span>
      <span className="systems-hero-rail-label">People / Places / Possibility</span>
      <span className="systems-hero-rail-plus systems-hero-rail-plus-bottom">+</span>
    </div>
  );
}

function HeroCopy() {
  return (
    <div className="systems-hero-copy">
      <h1 id="hero-title" className="systems-hero-title" aria-label="Systems of Belonging">
        <span className="systems-hero-title-line" aria-hidden="true">[SYSTEMS</span>
        <span className="systems-hero-title-line" aria-hidden="true">
          OF <em>BELONGING</em>]
        </span>
      </h1>
      <p className="systems-hero-description">
        I build the communities, events, and growth systems that help products find their people.
      </p>
    </div>
  );
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const navbar = document.querySelector(".site-nav");
    if (!hero || !navbar) return;
    const measure = () => hero.style.setProperty("--hero-nav-size", `${navbar.getBoundingClientRect().height}px`);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(navbar);
    return () => observer.disconnect();
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bounds = hero.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    hero.style.setProperty("--hero-bg-x", `${x * -18}px`);
    hero.style.setProperty("--hero-bg-y", `${y * -12}px`);
    hero.style.setProperty("--hero-layer-x", `${x * 28}px`);
    hero.style.setProperty("--hero-layer-y", `${y * 18}px`);
  };

  const resetParallax = () => {
    const hero = heroRef.current;
    if (!hero) return;
    hero.style.setProperty("--hero-bg-x", "0px");
    hero.style.setProperty("--hero-bg-y", "0px");
    hero.style.setProperty("--hero-layer-x", "0px");
    hero.style.setProperty("--hero-layer-y", "0px");
  };

  return (
    <section
      ref={heroRef}
      className="systems-hero"
      aria-labelledby="hero-title"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetParallax}
    >
      <HeroBackground />
      <HeroNav />
      <HeroCopy />
      <aside className="systems-hero-identity" aria-label="Portfolio identity">
        <p>DESI KAMDRAWATI</p>
        <p>Events / Growth / Community</p>
      </aside>
    </section>
  );
}
