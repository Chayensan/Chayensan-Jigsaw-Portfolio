const ticker = "GROWTH · EVENTS · BD · COMMUNITY · WEB3 · AI · PEOPLE ·";

export default function Ticker() {
  return (
    <div className="ticker-strip" aria-label={ticker}>
      <div className="ticker-track" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index}>{ticker}</span>
        ))}
      </div>
    </div>
  );
}
