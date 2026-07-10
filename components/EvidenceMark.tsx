type EvidenceMarkProps = {
  figure: string;
  qualifier: string;
  className?: string;
};

export default function EvidenceMark({
  figure,
  qualifier,
  className,
}: EvidenceMarkProps) {
  const classes = className ? `evidence-mark ${className}` : "evidence-mark";

  return (
    <div className={classes}>
      <p className="evidence-mark-figure">{figure}</p>
      <p className="evidence-mark-qualifier">{qualifier}</p>
    </div>
  );
}
