import { socialLinks } from "@/components/site-data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-rule" aria-hidden="true" />
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-statement">
            <h2>
              Currently open to early-stage work. The fastest way to reach me
              is email. Tell me what you&apos;re building and where it&apos;s
              stuck.
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
                Available now · location line pending
              </p>
            </div>
            <div className="footer-meta-block">
              <span className="footer-meta-rule footer-meta-rule-muted" aria-hidden="true" />
              <p className="footer-location">Based in Jakarta / Global</p>
            </div>
            <div className="footer-meta-block">
              <span className="footer-meta-rule footer-meta-rule-muted" aria-hidden="true" />
              <p className="footer-copyright">&copy; 2026 Desi Kamdrawati</p>
            </div>
          </div>
        </div>

        <div className="footer-divider" aria-hidden="true" />
      </div>
    </footer>
  );
}
