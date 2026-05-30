"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { WorkCaseStudy } from "@/components/site-data";
import Tagline from "./Tagline";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

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
      <motion.header
        className="case-hero"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.08 }}
      >
        <motion.h1 variants={reveal} transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}>
          {study.title}
        </motion.h1>
        <motion.p variants={reveal} transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}>
          {study.deck}
        </motion.p>
      </motion.header>

      <motion.figure
        className="case-main-image"
        initial={{ opacity: 0, y: 26, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.86, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
      >
        <img src={study.heroImage} alt={`${study.title} main project visual`} />
      </motion.figure>

      <motion.dl
        className="case-meta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ staggerChildren: 0.08 }}
      >
        {study.meta.map((item) => (
          <motion.div
            key={item.label}
            variants={reveal}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </motion.div>
        ))}
      </motion.dl>

      <motion.section
        className="case-copy-block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div variants={reveal} transition={{ duration: 0.66, ease: [0.16, 1, 0.3, 1] }}>
          <Tagline text="Intro" />
          <p>{study.intro}</p>
        </motion.div>
        <motion.div variants={reveal} transition={{ duration: 0.66, ease: [0.16, 1, 0.3, 1] }}>
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
        </motion.div>
      </motion.section>

      {hasGallery ? (
        <motion.section
          className="case-gallery-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{ staggerChildren: 0.08 }}
        >
          <Tagline text="Gallery" />
          <div className="case-gallery">
            {gallerySlots.map((image, index) => (
              <motion.figure
                key={image ? `${image.src}-${index}` : `gallery-slot-${index + 1}`}
                className={`case-gallery-item case-gallery-item-${index + 1} ${
                  image ? "" : "case-gallery-placeholder"
                }`}
                variants={reveal}
                transition={{ duration: 0.64, ease: [0.16, 1, 0.3, 1] }}
              >
                {image ? (
                  <img src={image.src} alt={image.alt} loading="lazy" />
                ) : (
                  <figcaption>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    Gallery image slot
                  </figcaption>
                )}
              </motion.figure>
            ))}
          </div>
        </motion.section>
      ) : null}

      <nav className="case-pagination" aria-label="Work case navigation">
        <Link href={previousHref}>Prev</Link>
        <Link href={nextHref}>Next</Link>
      </nav>
    </article>
  );
}
