"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollReveals() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-reveal]"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove("is-scroll-pending");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    targets.forEach((target) => {
      // Keep content at and above the landing viewport visible, including
      // browser-restored scroll positions and links into a page section.
      if (target.getBoundingClientRect().top > window.innerHeight * 0.88) {
        target.classList.add("is-scroll-pending");
        observer.observe(target);
      }
    });

    return () => {
      observer.disconnect();
      targets.forEach((target) => target.classList.remove("is-scroll-pending"));
    };
  }, [pathname]);

  return null;
}
