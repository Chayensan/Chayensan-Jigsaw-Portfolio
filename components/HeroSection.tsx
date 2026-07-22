import Link from "next/link";
import { socialLinks } from "@/components/site-data";

export default function HeroSection() {
  return (
    <>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-meta">
          <p className="hero-name">
            Desi Kamdrawati &middot; Growth, Community &amp; Partnerships
          </p>
          <p className="hero-availability">
            Available now &middot; Based in Jakarta, Building globally
          </p>
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <h1 id="hero-title" className="hero-identity">
              I build the{" "}
              <span className="hero-identity-accent">
                communities, events, and growth systems
              </span>{" "}
              that help early-stage products find their people.
            </h1>

            <div className="hero-actions">
              <Link href="/work" className="hero-cta hero-cta-primary">
                Work
              </Link>
              <a href={socialLinks.gmail} className="hero-cta hero-cta-secondary">
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="hero-survey">
        <p className="hero-survey-line">
          Derive &middot; Discord{" "}
          <span className="hero-survey-figure">15,000 &rarr; 40,000+</span> through
          TGE
        </p>
      </div>
    </>
  );
}
