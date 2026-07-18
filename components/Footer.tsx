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
              I&apos;m open to early-stage work. If people are part of what
              you&apos;re building, I&apos;d like to hear about it. Email
              reaches me fastest. Tell me what you&apos;re making and who
              it&apos;s for.
            </h2>
            <a className="footer-cta" href={socialLinks.gmail}>
              <span>Email</span>
              <span className="footer-cta-arrow" aria-hidden="true">
                &rarr;
              </span>
            </a>
            <span className="footer-cta-rule" aria-hidden="true" />
          </div>

          <div className="footer-meta">
            <div className="footer-meta-block">
              <span className="footer-meta-rule" aria-hidden="true" />
              <p className="footer-availability">
                Available now · Based in Jakarta, Building globally
              </p>
            </div>
          </div>
        </div>

        <div className="footer-divider" aria-hidden="true" />
      </div>
    </footer>
  );
}
