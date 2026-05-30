type TaglineProps = {
  text: string;
  className?: string;
};

export default function Tagline({ text, className = "" }: TaglineProps) {
  return (
    <div className={`tagline ${className}`.trim()}>
      <span aria-hidden="true" />
      <p>{text}</p>
      <i aria-hidden="true" />
    </div>
  );
}
