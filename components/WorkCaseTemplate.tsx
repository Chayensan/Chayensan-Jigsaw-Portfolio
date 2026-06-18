import Link from "next/link";
import type { WorkCaseStudy } from "@/components/site-data";
import Tagline from "./Tagline";

type WorkCaseTemplateProps = {
  study: WorkCaseStudy;
  previousHref?: string;
  nextHref?: string;
};

export default function WorkCaseTemplate({
  study,
  previousHref = "/work",
  nextHref = "/work",
}: WorkCaseTemplateProps) {
  const achievements =
    study.achievements.length > 0
      ? study.achievements
      : [
          "Add achievement 01 in components/site-data.ts.",
          "Add achievement 02 in components/site-data.ts.",
          "Add achievement 03 in components/site-data.ts.",
        ];

  const gallerySlots = Array.from({ length: 6 }, (_, index) => study.galleryImages[index] ?? null);
  const hasGallery = study.galleryImages.length > 0;
  const hasSections = Boolean(study.achievementSections?.length);

  return (
    <article className="case-study">
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
        </div>
        <div>
          <Tagline text="Key achievements" />
          {hasSections ? (
            <div className="case-achievement-sections">
              {study.achievementSections!.map((section) => (
                <section key={section.title} className="case-achievement-section">
                  <h3>{section.title}</h3>
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          ) : (
            <ul>
              {achievements.map((achievement) => (
                <li
                  key={achievement}
                  className={study.achievements.length > 0 ? undefined : "case-placeholder-copy"}
                >
                  {achievement}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {hasGallery ? (
        <section className="case-gallery-section">
          <Tagline text="Gallery" />
          <div className="case-gallery">
            {gallerySlots.map((image, index) => (
              <figure
                key={image ? `${image.src}-${index}` : `gallery-slot-${index + 1}`}
                className={`case-gallery-item case-gallery-item-${index + 1} ${
                  image ? "" : "case-gallery-placeholder"
                }`}
              >
                {image ? (
                  <img src={image.src} alt={image.alt} loading="lazy" />
                ) : (
                  <figcaption>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    Gallery image slot
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <nav className="case-pagination" aria-label="Work case navigation">
        <Link href={previousHref}>Prev</Link>
        <Link href={nextHref}>Next</Link>
      </nav>
    </article>
  );
}
