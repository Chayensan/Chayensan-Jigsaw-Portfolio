"use client";

import Link from "next/link";
import { EnvelopeSimple, LinkedinLogo, XLogo } from "@phosphor-icons/react";
import { socialLinks } from "@/components/site-data";

type NavKey = "jigsaw" | "work" | "community" | "about" | "who";

const navItems: Array<{
  key: Exclude<NavKey, "who">;
  href: string;
  label: string;
  index: string;
}> = [
  { key: "jigsaw", href: "/", label: "Jigsaw", index: "01" },
  { key: "work", href: "/work", label: "Work", index: "02" },
  { key: "community", href: "/community", label: "Community", index: "03" },
  { key: "about", href: "/about", label: "About", index: "04" },
];

export default function Navbar({ active }: { active: NavKey }) {
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
          >
            <span className="nav-item-index">{item.index}</span>
            <span className="nav-item-label">{item.label}</span>
          </Link>
        ))}
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
