"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  EnvelopeSimple,
  FilePdf,
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react";
import { ContactTrigger } from "@/components/ContactModal";
import { isPlaceholderSocialUrl, socialLinks } from "@/components/site-data";

type NavKey = "jigsaw" | "work" | "about" | "who";

const navItems: Array<{
  key: Exclude<NavKey, "who">;
  href: string;
  label: string;
  index: string;
}> = [
  { key: "jigsaw", href: "/", label: "Jigsaw", index: "01" },
  { key: "work", href: "/work", label: "Work", index: "02" },
  { key: "about", href: "/about", label: "About", index: "03" },
];

export default function Navbar({ active }: { active: NavKey }) {
  const [socialsOpen, setSocialsOpen] = useState(false);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!socialsOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!socialsRef.current?.contains(event.target as Node)) setSocialsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSocialsOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [socialsOpen]);

  return (
    <header id="top" className="site-nav">
      <Link href="/" className="wordmark" aria-label="DK homepage">
        <img src="/assets/dk-logo-trimmed.png" alt="" aria-hidden="true" />
      </Link>

      <nav className="nav-center" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            aria-current={active === item.key ? "page" : undefined}
            onClick={() => setSocialsOpen(false)}
          >
            <span className="nav-item-index">{item.index}</span>
            <span className="nav-item-label">{item.label}</span>
          </Link>
        ))}
        <div className="nav-social-menu" ref={socialsRef}>
          <button
            type="button"
            className="nav-social-toggle"
            aria-expanded={socialsOpen}
            aria-controls="nav-social-options"
            onClick={() => setSocialsOpen((open) => !open)}
          >
            <span className="nav-item-index">04</span>
            <span className="nav-item-label">Socials</span>
          </button>
          {socialsOpen && (
            <div
              id="nav-social-options"
              className="nav-social-dropdown"
              aria-label="Contact and social links"
              onClick={() => setSocialsOpen(false)}
            >
              <ContactTrigger className="nav-social-option" ariaLabel="Open email form">
                <EnvelopeSimple size={19} weight="regular" aria-hidden="true" />
                <span>Email</span>
              </ContactTrigger>
              {!isPlaceholderSocialUrl(socialLinks.linkedin) && (
                <a className="nav-social-option" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                  <LinkedinLogo size={19} weight="regular" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              )}
              {!isPlaceholderSocialUrl(socialLinks.twitter) && (
                <a className="nav-social-option" href={socialLinks.twitter} target="_blank" rel="noreferrer">
                  <XLogo size={19} weight="regular" aria-hidden="true" />
                  <span>X / Twitter</span>
                </a>
              )}
              <a className="nav-social-option" href={socialLinks.github} target="_blank" rel="noreferrer">
                <GithubLogo size={19} weight="regular" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a className="nav-social-option" href={socialLinks.resume} download>
                <FilePdf size={19} weight="regular" aria-hidden="true" />
                <span>Resume PDF</span>
              </a>
            </div>
          )}
        </div>
      </nav>

      <div className="nav-socials" aria-label="Contact and social links">
        <ContactTrigger className="nav-email" ariaLabel="Open email form">
          <EnvelopeSimple size={20} weight="regular" />
        </ContactTrigger>
        {!isPlaceholderSocialUrl(socialLinks.linkedin) && (
          <a
            href={socialLinks.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo size={18} weight="regular" />
          </a>
        )}
        {!isPlaceholderSocialUrl(socialLinks.twitter) && (
          <a
            href={socialLinks.twitter}
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <XLogo size={18} weight="regular" />
          </a>
        )}
        <a
          href={socialLinks.github}
          aria-label="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo size={18} weight="regular" />
        </a>
        <a
          href={socialLinks.resume}
          aria-label="Download resume PDF"
          download
        >
          <FilePdf size={18} weight="regular" />
        </a>
      </div>
    </header>
  );
}
