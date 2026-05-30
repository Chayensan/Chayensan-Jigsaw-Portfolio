"use client";

import Link from "next/link";
import { EnvelopeSimple, LinkedinLogo, XLogo } from "@phosphor-icons/react";
import { socialLinks } from "@/components/site-data";

type NavKey = "jigsaw" | "work" | "community" | "about" | "who";

export default function Navbar({ active }: { active: NavKey }) {
  return (
    <header id="top" className="site-nav">
      <Link href="/" className="wordmark" aria-label="DK homepage">
        <img src="/assets/dk-logo-trimmed.png" alt="" aria-hidden="true" />
      </Link>

      <nav className="nav-center" aria-label="Primary navigation">
        <Link href="/" aria-current={active === "jigsaw" ? "page" : undefined}>
          Jigsaw
        </Link>
        <Link href="/work" aria-current={active === "work" ? "page" : undefined}>
          Work
        </Link>
        <Link href="/community" aria-current={active === "community" ? "page" : undefined}>
          Community
        </Link>
        <Link href="/about" aria-current={active === "about" ? "page" : undefined}>
          About
        </Link>
      </nav>

      <div className="nav-socials" aria-label="Social links">
        <a href={socialLinks.gmail} aria-label="Email Desi">
          <EnvelopeSimple size={18} weight="regular" />
        </a>
        <a href={socialLinks.linkedin} aria-label="LinkedIn">
          <LinkedinLogo size={18} weight="regular" />
        </a>
        <a href={socialLinks.twitter} aria-label="Twitter">
          <XLogo size={18} weight="regular" />
        </a>
      </div>
    </header>
  );
}
