import { ContactTrigger } from "@/components/ContactModal";
import { socialLinks } from "@/components/site-data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-rule" aria-hidden="true" />
      <p className="section-index" aria-hidden="true">
        07
      </p>
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-statement">
            <p className="footer-colophon">
              Systems of Belonging · Desi Kamdrawati · 2026
            </p>
            <h2>
              I&apos;m open work, especially where people, community, or growth are part of what
              you&apos;re building.
            </h2>
            <ContactTrigger className="footer-cta" ariaLabel="Open email form">
              <span>Email</span>
              <span className="footer-cta-arrow" aria-hidden="true">
                &rarr;
              </span>
            </ContactTrigger>
            <span className="footer-cta-rule" aria-hidden="true" />
          </div>

          <div className="footer-meta">
            <div className="footer-meta-block">
              <span className="footer-meta-rule" aria-hidden="true" />
              <p className="footer-availability">
                Available now · Building globally
              </p>
            </div>
          </div>
        </div>

        <div className="footer-divider" aria-hidden="true" />
      </div>
    </footer>
  );
}
