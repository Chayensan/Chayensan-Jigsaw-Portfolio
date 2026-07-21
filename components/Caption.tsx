import type { ElementType, ReactNode } from "react";

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
  // purpose/contribution are optional: a gallery photo caption sometimes
  // only has a verified "what it is" description, and the schema shouldn't
  // force invented context to fill the other two slots (docs/implementation-
  // roadmap.md Phase 8: "flag uncertainty instead of inventing").
  purpose?: string;
  contribution?: string;
};

export type CaptionContent = EvidenceCaption | EventCaption | ArtefactCaption;

export type CaptionProps = CaptionContent & {
  as?: ElementType;
  className?: string;
};

// Matches the verified numeral inside a figure string (e.g. "15,000 → 40,000+"
// or "430+") so ember highlights only the number, per docs/design.md §1.3
// ("ember on the verified number only"), same pattern as NarrativeSection's
// evidence-line rendering.
const FIGURE_PATTERN = /[\d][\d,]*(?:\s*→\s*[\d,]+)?\+?/g;

function renderFigure(figure: string): ReactNode {
  const matches = figure.match(FIGURE_PATTERN);
  if (!matches) return figure;
  const parts = figure.split(FIGURE_PATTERN);
  const nodes: ReactNode[] = [];
  parts.forEach((part, index) => {
    if (part) nodes.push(part);
    if (matches[index]) {
      nodes.push(
        <span key={index} className="caption-figure">
          {matches[index]}
        </span>,
      );
    }
  });
  return nodes;
}

export default function Caption(props: CaptionProps) {
  const { as: Tag = "p", className, ...content } = props;
  const classes = className ? `caption ${className}` : "caption";

  if (content.kind === "evidence") {
    return (
      <Tag className={classes}>
        {content.project} · {renderFigure(content.figure)} · {content.verb}
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

  const artefactParts = [content.what, content.purpose, content.contribution].filter(
    (part): part is string => Boolean(part),
  );

  return <Tag className={classes}>{artefactParts.join(" · ")}</Tag>;
}
