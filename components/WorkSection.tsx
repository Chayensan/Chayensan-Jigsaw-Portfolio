import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Caption, { type CaptionContent } from "@/components/Caption";
import Plate from "@/components/Plate";
import {
  deriveFlagship,
  nowLedger,
  workItems,
  type WorkTier,
} from "@/components/site-data";
import DeriveFlagship from "./DeriveFlagship";
import NowLedger from "./NowLedger";
import Tagline from "./Tagline";

const flagshipItem = workItems.find((item) => item.tier === "flagship")!;
const selectedItems = workItems.filter((item) => item.tier === "selected");
const foundationsItems = workItems.filter((item) => item.tier === "foundations");

function CompactRowList({
  tier,
  listClassName = "work-row-list",
  children,
}: {
  tier: WorkTier | "current";
  listClassName?: string;
  children: ReactNode;
}) {
  return (
    <div className="work-tier" data-tier={tier}>
      <p className="work-tier-label">{tier}</p>
      <ul className={listClassName} role="list">
        {children}
      </ul>
    </div>
  );
}

// Full /work page card: every tier gets the same big-thumbnail treatment
// (Plate image, blurb, optional proof, role, timeline, Read more), so
// Flagship no longer looks structurally different from Current/Selected/
// Foundations. Plate's own caption is hidden (.work-card-plate .plate-
// caption in globals.css): the caption prop still feeds the link's
// aria-label, but the visible summary lives in work-card-blurb/-proof
// instead of duplicating it under the image.
function WorkCard({
  tier,
  index,
  title,
  role,
  blurb,
  proof,
  timeline,
  href,
  image,
  imagePlaceholder,
  plateCaption,
}: {
  tier: WorkTier | "current";
  index: string;
  title: string;
  role: string;
  blurb: string;
  proof?: CaptionContent[];
  timeline: string;
  href?: string;
  image?: string;
  imagePlaceholder?: { kicker: string; statement: string };
  plateCaption?: CaptionContent;
}) {
  const caption: CaptionContent = plateCaption ?? { kind: "artefact", what: title };

  return (
    <li className="work-card" data-tier={tier}>
      <Plate
        className="work-card-plate"
        caption={caption}
        image={image ? { src: image } : undefined}
        aspectRatio="16 / 10"
        href={href}
      >
        {!image && imagePlaceholder ? (
          <>
            <span className="plate-frame-kicker">{imagePlaceholder.kicker}</span>
            <span className="plate-frame-statement">{imagePlaceholder.statement}</span>
          </>
        ) : undefined}
      </Plate>
      <div className="work-card-body">
        <span className="work-card-index">{index}</span>
        <div className="work-card-heading">
          <h3>{title}</h3>
          <span className="work-card-role">{role}</span>
        </div>
        <p className="work-card-blurb">{blurb}</p>
        {proof ? (
          <ul className="work-card-proof" role="list">
            {proof.map((item, itemIndex) => (
              <Caption key={itemIndex} {...item} as="li" />
            ))}
          </ul>
        ) : null}
        <p className="work-card-timeline">{timeline}</p>
        {href ? (
          <Link href={href} className="work-card-link">
            Read more
          </Link>
        ) : null}
      </div>
    </li>
  );
}

// Subordinate thumbnail: existing case assets only. When no verified asset
// exists, falls back to Plate's kicker/statement text-plate variant rather
// than a fake image (docs/implementation-roadmap.md Phase 21).
function RowThumb({
  src,
  placeholder,
}: {
  src?: string;
  placeholder?: { kicker: string; statement: string };
}) {
  if (src) {
    return (
      <span className="work-row-thumb" aria-hidden="true">
        <Image src={src} alt="" fill sizes="160px" />
      </span>
    );
  }
  if (placeholder) {
    return (
      <span
        className="work-row-thumb work-row-thumb-placeholder"
        aria-hidden="true"
      >
        <span className="plate-frame-kicker">{placeholder.kicker}</span>
        <span className="plate-frame-statement">{placeholder.statement}</span>
      </span>
    );
  }
  return null;
}

function WorkRow({
  number,
  title,
  role,
  text,
  date,
  slug,
  thumbnail,
  thumbnailPlaceholder,
}: {
  number: string;
  title: string;
  role: string;
  text: string;
  date: string;
  // Optional: rows with no case page render no Read more link.
  slug?: string;
  thumbnail?: string;
  thumbnailPlaceholder?: { kicker: string; statement: string };
}) {
  return (
    <li className="work-row">
      <span className="work-row-index">{number}</span>
      <div className="work-row-body">
        <div className="work-row-heading">
          <span className="work-row-name">{title}</span>
          <span className="work-row-role">{role}</span>
        </div>
        <div className="work-row-content">
          <RowThumb src={thumbnail} placeholder={thumbnailPlaceholder} />
          <p className="work-row-description">{text}</p>
        </div>
        {slug ? (
          <Link href={`/work/${slug}`} className="work-row-link">
            Read more
          </Link>
        ) : null}
      </div>
      <span className="work-row-status">{date}</span>
    </li>
  );
}

export default function WorkSection({ compact = true }: { compact?: boolean }) {
  if (compact) {
    return (
      <>
        <DeriveFlagship />
        <NowLedger />
        <section className="work-section" aria-labelledby="work-title">
          <p className="section-index" aria-hidden="true">
            06
          </p>
          <aside className="work-intro">
            <Tagline text="Work" />
            <h2 id="work-title">Selected Work</h2>
            <p>
              Ordered by what each role proves, from flagship evidence to
              work still being tested.
            </p>
            <Link href="/work">View all work</Link>
          </aside>

          <div className="work-index">
            <CompactRowList tier="flagship">
              <WorkRow
                number={flagshipItem.number}
                title={flagshipItem.title}
                role={flagshipItem.role}
                text={flagshipItem.text}
                date={flagshipItem.date}
                slug={flagshipItem.slug}
                thumbnail={flagshipItem.caseHeroImage}
              />
            </CompactRowList>

            <CompactRowList tier="selected">
              {selectedItems.map((item) => (
                <WorkRow
                  key={item.slug}
                  number={item.number}
                  title={item.title}
                  role={item.role}
                  text={item.text}
                  date={item.date}
                  slug={item.slug}
                  thumbnail={item.caseHeroImage}
                />
              ))}
            </CompactRowList>

            <CompactRowList tier="foundations">
              {foundationsItems.map((item) => (
                <WorkRow
                  key={item.slug}
                  number={item.number}
                  title={item.title}
                  role={item.role}
                  text={item.text}
                  date={item.date}
                  slug={item.slug}
                  thumbnail={item.caseHeroImage}
                />
              ))}
            </CompactRowList>
          </div>
        </section>
      </>
    );
  }

  return (
    <section className="work-section work-section-full" aria-labelledby="work-page-title">
      <div className="work-index">
        <CompactRowList tier="flagship" listClassName="work-card-list">
          <WorkCard
            tier="flagship"
            index={flagshipItem.number}
            title={flagshipItem.title}
            role={flagshipItem.role}
            blurb={flagshipItem.summary ?? flagshipItem.text}
            timeline={flagshipItem.date}
            href={`/work/${flagshipItem.slug}`}
            image={flagshipItem.caseHeroImage}
            plateCaption={deriveFlagship.primary.caption}
          />
        </CompactRowList>

        <CompactRowList tier="current" listClassName="work-card-list">
          {nowLedger.map((row) => (
            <WorkCard
              key={row.id}
              tier="current"
              index={row.index}
              title={row.name}
              role={row.role}
              blurb={row.description}
              timeline={row.status}
              href={row.slug ? `/work/${row.slug}` : undefined}
              image={row.thumbnail}
              imagePlaceholder={row.thumbnailPlaceholder}
            />
          ))}
        </CompactRowList>

        <CompactRowList tier="selected" listClassName="work-card-list">
          {selectedItems.map((item) => (
            <WorkCard
              key={item.slug}
              tier="selected"
              index={item.number}
              title={item.title}
              role={item.role}
              blurb={item.summary ?? item.text}
              timeline={item.date}
              href={`/work/${item.slug}`}
              image={item.caseHeroImage}
            />
          ))}
        </CompactRowList>

        <CompactRowList tier="foundations" listClassName="work-card-list">
          {foundationsItems.map((item) => (
            <WorkCard
              key={item.slug}
              tier="foundations"
              index={item.number}
              title={item.title}
              role={item.role}
              blurb={item.summary ?? item.text}
              timeline={item.date}
              href={`/work/${item.slug}`}
              image={item.caseHeroImage}
            />
          ))}
        </CompactRowList>
      </div>
    </section>
  );
}
