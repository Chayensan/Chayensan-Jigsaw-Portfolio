"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import Tagline from "./Tagline";
import { jigsawChapters, type JigsawChapterId } from "./site-data";

const FIGURE_PATTERN = /[\d][\d,]*(?:\s*→\s*[\d,]+)?\+?/g;

function renderEvidence(evidence: string): ReactNode[] {
  const figures = evidence.match(FIGURE_PATTERN) ?? [];
  const chunks = evidence.split(FIGURE_PATTERN);
  const nodes: ReactNode[] = [];
  chunks.forEach((chunk, index) => {
    if (chunk) nodes.push(chunk);
    if (figures[index]) {
      nodes.push(
        <span key={`figure-${index}`} className="field-figure">
          {figures[index]}
        </span>,
      );
    }
  });
  return nodes;
}

export default function NarrativeSection() {
  const [openId, setOpenId] = useState<JigsawChapterId | null>(null);
  const [focusedId, setFocusedId] = useState<JigsawChapterId | null>(null);
  const [isDefined, setIsDefined] = useState(false);
  const fieldRef = useRef<HTMLDivElement | null>(null);
  const parcelRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const node = fieldRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsDefined(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDefined(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!openId) return;
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openId]);

  const activeId = openId ?? focusedId;

  const openChapter = useMemo(
    () => jigsawChapters.find((chapter) => chapter.id === openId) ?? null,
    [openId],
  );

  const previewChapter = useMemo(
    () =>
      openChapter
        ? null
        : jigsawChapters.find((chapter) => chapter.id === focusedId) ?? null,
    [openChapter, focusedId],
  );

  const handleArrowNav = (index: number, event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + jigsawChapters.length) % jigsawChapters.length;
    parcelRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="field-section" aria-labelledby="field-title">
      <div className="field-header">
        <Tagline text="Chapters" />
        <h2 id="field-title">Seven chapters, one field.</h2>
        <p className="field-instruction">
          Focus, hover, or tap a parcel to open its chapter.
        </p>
      </div>

      <div className="field-layout">
        <div
          ref={fieldRef}
          className={`field${isDefined ? " is-defined" : ""}`}
          role="group"
          aria-label="Career chapters, surveyed field"
        >
          <div className="field-terrain" aria-hidden="true" />
          {jigsawChapters.map((chapter, index) => {
            const isActive = activeId === chapter.id;
            const isDimmed = Boolean(activeId) && !isActive;

            return (
              <button
                key={chapter.id}
                ref={(el) => {
                  parcelRefs.current[index] = el;
                }}
                type="button"
                className={`field-parcel${isActive ? " is-active" : ""}${
                  isDimmed ? " is-dimmed" : ""
                }`}
                style={{ flexGrow: chapter.weight }}
                aria-pressed={openId === chapter.id}
                aria-label={`Open ${chapter.label} chapter`}
                onMouseEnter={() => setFocusedId(chapter.id)}
                onMouseLeave={() =>
                  setFocusedId((current) => (current === chapter.id ? null : current))
                }
                onFocus={() => setFocusedId(chapter.id)}
                onBlur={() =>
                  setFocusedId((current) => (current === chapter.id ? null : current))
                }
                onKeyDown={(event) => handleArrowNav(index, event)}
                onClick={() =>
                  setOpenId((current) => (current === chapter.id ? null : chapter.id))
                }
              >
                <span className="field-chip">{chapter.label}</span>
              </button>
            );
          })}
        </div>

        <aside className="field-rail" aria-live="polite">
          {openChapter ? (
            <div className="field-capsule">
              <p className="field-capsule-kicker">{openChapter.label}</p>
              <p className="field-capsule-capability">{openChapter.capability}</p>
              <p className="field-capsule-evidence">
                {renderEvidence(openChapter.evidence)}
              </p>
              <Link href={openChapter.href} className="field-capsule-link">
                Open chapter
              </Link>
            </div>
          ) : previewChapter ? (
            <div className="field-capsule field-capsule-preview">
              <p className="field-capsule-kicker">{previewChapter.label}</p>
              <p className="field-capsule-capability">{previewChapter.capability}</p>
            </div>
          ) : null}
        </aside>
      </div>

      <div className="field-bands" aria-label="Career chapters">
        {jigsawChapters.map((chapter) => (
          <details key={chapter.id} className="field-band">
            <summary className="field-band-summary">
              <span className="field-band-label">{chapter.label}</span>
              <span className="field-band-capability">{chapter.capability}</span>
            </summary>
            <div className="field-band-body">
              <p className="field-band-evidence">{renderEvidence(chapter.evidence)}</p>
              <Link href={chapter.href} className="field-band-link">
                Open chapter
              </Link>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
