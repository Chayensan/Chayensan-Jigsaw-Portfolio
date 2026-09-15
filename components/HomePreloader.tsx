"use client";

import { type ReactNode, useEffect, useState } from "react";

const REVEAL_DELAY = 1050;
const COMPLETE_DELAY = 1650;
const HOME_PRELOADER_STORAGE_KEY = "desi-home-preloader-seen";
const HOME_PRELOADER_COOKIE = "desi_home_preloader_seen";
const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

type HomePreloaderProps = {
  children: ReactNode;
  shouldPlay: boolean;
  forcePlay?: boolean;
};

function rememberEntranceSeen() {
  try {
    window.localStorage.setItem(HOME_PRELOADER_STORAGE_KEY, "1");
  } catch {
    // Cookie fallback keeps repeat visits quiet when browser storage is unavailable.
  }

  document.cookie = `${HOME_PRELOADER_COOKIE}=1; Max-Age=${ONE_YEAR_IN_SECONDS}; Path=/; SameSite=Lax`;
}

export default function HomePreloader({
  children,
  shouldPlay,
  forcePlay = false,
}: HomePreloaderProps) {
  const [phase, setPhase] = useState<"preloading" | "revealing" | "complete">(
    shouldPlay || forcePlay ? "preloading" : "complete"
  );

  useEffect(() => {
    if (!shouldPlay && !forcePlay) {
      setPhase("complete");
      rememberEntranceSeen();
      return;
    }

    if (!forcePlay) {
      try {
        if (window.localStorage.getItem(HOME_PRELOADER_STORAGE_KEY) === "1") {
          setPhase("complete");
          rememberEntranceSeen();
          return;
        }
      } catch {
        // Continue with the entrance if local storage is unavailable.
      }
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("complete");
      if (!forcePlay) rememberEntranceSeen();
      return;
    }

    const revealTimer = window.setTimeout(() => setPhase("revealing"), REVEAL_DELAY);
    const completeTimer = window.setTimeout(() => {
      setPhase("complete");
      if (!forcePlay) rememberEntranceSeen();
    }, COMPLETE_DELAY);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(completeTimer);
    };
  }, [forcePlay, shouldPlay]);

  useEffect(() => {
    if (phase === "complete") return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [phase]);

  return (
    <div className={`home-entrance is-${phase}`}>
      {phase !== "complete" ? (
        <div className="home-preloader" role="status" aria-live="polite">
          <p className="home-preloader-copy">Hello there!</p>
        </div>
      ) : null}
      <div className="home-entrance-content">{children}</div>
    </div>
  );
}
