import Image from "next/image";
import type { ReactNode } from "react";
import Caption, { type CaptionContent } from "@/components/Caption";

type PlateImage = {
  src: string;
};

type PlateProps = {
  caption: CaptionContent;
  image?: PlateImage;
  aspectRatio?: string;
  href?: string;
  className?: string;
  // Text-only plate content, used when no photographic artefact exists to
  // pair with a caption (docs/implementation-roadmap.md Phase 6: "no
  // suitable assets — create text/evidence plates without images").
  children?: ReactNode;
};

function captionToAlt(caption: CaptionContent): string {
  if (caption.kind === "evidence") {
    return `${caption.project} — ${caption.figure} — ${caption.verb}`;
  }
  if (caption.kind === "event") {
    const attendance = caption.attendance ? ` — ${caption.attendance}` : "";
    return `${caption.name}, ${caption.place}${attendance} — ${caption.verb}`;
  }
  return [caption.what, caption.purpose, caption.contribution]
    .filter((part): part is string => Boolean(part))
    .join(" — ");
}

// Convention, not enforced at runtime: no more than three Plates per viewport (docs/design.md §3.2).
export default function Plate({
  caption,
  image,
  aspectRatio = "4 / 3",
  href,
  className,
  children,
}: PlateProps) {
  const classes = className ? `plate ${className}` : "plate";
  const alt = captionToAlt(caption);

  return (
    <figure className={classes}>
      {href ? <a href={href} className="plate-link" aria-label={alt} /> : null}
      <span className="plate-frame" style={{ aspectRatio }}>
        {image ? (
          <Image src={image.src} alt="" fill sizes="100vw" />
        ) : children ? (
          <span className="plate-frame-content">{children}</span>
        ) : null}
      </span>
      <Caption {...caption} as="figcaption" className="plate-caption" />
    </figure>
  );
}
