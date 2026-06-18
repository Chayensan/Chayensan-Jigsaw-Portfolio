export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-rule" aria-hidden="true" />
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-statement">
            <h2>
              If people are part of the product,
              <br />
              we should talk.
            </h2>
            <a className="footer-cta" href="mailto:hello@desi.studio">
              <span>Start something meaningful</span>
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
                Currently open to roles in Web3 &amp; AI.
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

        <div className="footer-anchor-wrap" aria-hidden="true">
          <p className="footer-anchor">Systems of Belonging</p>
          <p className="footer-anchor-reflection">Systems of Belonging</p>
        </div>
      </div>
    </footer>
  );
}
