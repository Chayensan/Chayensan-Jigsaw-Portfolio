import Link from "next/link";
import { socialLinks } from "@/components/site-data";

export default function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <p className="hero-name">Desi Kamdrawati</p>

      <div className="hero-content">
        <h1 id="hero-title" className="hero-identity">
          I help early-stage teams turn attention into users, members, and
          partners.
        </h1>

        <div className="hero-rail">
          <p className="hero-proof">
            Grew Derive&apos;s Discord from{" "}
            <span className="hero-proof-figure">15,000 → 40,000+</span>{" "}
            through its token launch.
          </p>
          <p className="hero-availability">
            Available now · location line pending
          </p>
        </div>

        <div className="hero-actions">
          <Link href="/work" className="hero-cta hero-cta-primary">
            Work
          </Link>
          <a href={socialLinks.gmail} className="hero-cta hero-cta-secondary">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
