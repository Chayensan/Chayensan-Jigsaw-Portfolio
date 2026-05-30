"use client";

import { ArrowUp } from "@phosphor-icons/react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  return (
    <footer className="site-footer">
      <button className="footer-top" type="button" onClick={scrollToTop} aria-label="Back to top">
        <ArrowUp size={30} weight="regular" aria-hidden="true" />
        Back to Top
      </button>

      <div className="footer-inner">
        <h2>Let&apos;s find your missing piece.</h2>
        <div className="footer-copy">
          <p>OPEN TO ROLES IN WEB3 AND AI.</p>
          <p>You found your way here, If you&apos;re building something that needs people at the center of it,</p>
          <p>I&apos;d love to hear about it.</p>
        </div>
      </div>
    </footer>
  );
}
