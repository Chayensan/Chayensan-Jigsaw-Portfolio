import type { ElementType } from "react";

export type EvidenceCaption = {
  kind: "evidence";
  project: string;
  figure: string;
  verb: string;
};

export type EventCaption = {
  kind: "event";
  name: string;
  place: string;
  attendance?: string;
  verb: string;
};

export type ArtefactCaption = {
  kind: "artefact";
  what: string;
  purpose: string;
  contribution: string;
};

export type CaptionContent = EvidenceCaption | EventCaption | ArtefactCaption;

export type CaptionProps = CaptionContent & {
  as?: ElementType;
  className?: string;
};

export default function Caption(props: CaptionProps) {
  const { as: Tag = "p", className, ...content } = props;
  const classes = className ? `caption ${className}` : "caption";

  if (content.kind === "evidence") {
    return (
      <Tag className={classes}>
        {content.project} ·{" "}
        <span className="caption-figure">{content.figure}</span> ·{" "}
        {content.verb}
      </Tag>
    );
  }

  if (content.kind === "event") {
    return (
      <Tag className={classes}>
        {content.name}, {content.place}
        {content.attendance ? ` · ${content.attendance}` : ""} ·{" "}
        {content.verb}
      </Tag>
    );
  }

  return (
    <Tag className={classes}>
      {content.what} · {content.purpose} · {content.contribution}
    </Tag>
  );
}
