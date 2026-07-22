import Link from "next/link";
import { getWorkCaseStudy, workItems, type WorkCaseStudy } from "@/components/site-data";
import Caption from "./Caption";
import Tagline from "./Tagline";

type WorkCaseTemplateProps = {
  study: WorkCaseStudy;
  previousHref?: string;
  nextHref?: string;
};

// Destination title for the pagination caption, resolved from a same-origin
// /work href against site-data, never invented, and omitted (returns null)
// for anything that isn't a known work slug (e.g. the "/work" index itself).
function resolveCaseTitle(href: string): string | null {
  if (!href.startsWith("/work/")) return null;
  const slug = href.slice("/work/".length);
  const item = workItems.find((entry) => entry.slug === slug);
  if (item) return item.title;
  const caseStudy = getWorkCaseStudy(slug);
  // Natural-case companyName over study.title: title is styled ALL CAPS for
  // the case-page header, which reads wrong in the pagination caption.
  return caseStudy ? (caseStudy.companyName ?? caseStudy.title) : null;
}

export default function WorkCaseTemplate({
  study,
  previousHref = "/work",
  nextHref = "/work",
}: WorkCaseTemplateProps) {
  const hasAchievements = study.achievements.length > 0;
  const hasGallery = study.galleryImages.length > 0;
  const previousTitle = resolveCaseTitle(previousHref);
  const nextTitle = resolveCaseTitle(nextHref);

  return (
    <article className="case-study">
      <Link href="/work" className="case-back-link">
        ← Work
      </Link>

      <header className="case-hero">
        <h1>{study.title}</h1>
        <p>{study.deck}</p>
      </header>

      <figure className="case-main-image">
        <img src={study.heroImage} alt={`${study.title} main project visual`} />
      </figure>

      <dl className="case-meta">
        {study.meta.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>

      <section className="case-copy-block">
        <div>
          <Tagline text="Intro" />
          <p>{study.intro}</p>
          {study.confidentialityNote ? (
            <p className="case-confidentiality-note">{study.confidentialityNote}</p>
          ) : null}
          {study.companyUrl ? (
            <a
              href={study.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="case-visit-link"
            >
              Visit {study.companyName ?? study.title} ↗
            </a>
          ) : null}
        </div>

        {hasAchievements ? (
          <div>
            <Tagline text="Key achievements" />
            <ul>
              {study.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      {hasGallery ? (
        <section className="case-gallery-section">
          <Tagline text="Gallery" />
          <div className="case-gallery">
            {study.galleryImages.map((image) => (
              <figure className="case-gallery-item" key={image.src} tabIndex={0}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <Caption
                  kind="artefact"
                  what={image.alt}
                  as="figcaption"
                  className="case-gallery-caption"
                />
                {/* Hover/focus-only full-image preview: thumbnails crop via
                    object-fit:cover, so this shows the uncropped photo plus
                    its caption instead of a click-to-open lightbox. */}
                <div className="case-gallery-preview" aria-hidden="true">
                  <img src={image.src} alt="" />
                  <p className="case-gallery-preview-caption">{image.alt}</p>
                </div>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <nav className="case-pagination" aria-label="Work case navigation">
        <Link href={previousHref} className="case-pagination-link case-pagination-prev">
          <span className="case-pagination-label">Prev</span>
          {previousTitle ? (
            <span className="case-pagination-dest">{previousTitle}</span>
          ) : null}
        </Link>
        <Link href="/work" className="case-pagination-link case-pagination-center">
          <span className="case-pagination-label">Work</span>
        </Link>
        <Link href={nextHref} className="case-pagination-link case-pagination-next">
          <span className="case-pagination-label">Next</span>
          {nextTitle ? (
            <span className="case-pagination-dest">{nextTitle}</span>
          ) : null}
        </Link>
      </nav>
    </article>
  );
}
