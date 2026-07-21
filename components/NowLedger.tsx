import Link from "next/link";
import { nowLedger } from "@/components/site-data";

// Now ledger (docs/implementation-roadmap.md Phase 7). Deliberately no
// Plate/Terrain, no images, no metrics: the visual restraint is the honesty
// (docs/design.md §8). Each row carries one quiet mono "→ WORK" link:
// to its own cleaned case page where one exists and is public-safe
// (Lemon Tree, Tago), otherwise to /work (HUNCHR has no case page yet).
export default function NowLedger() {
  return (
    <section className="now-section" aria-labelledby="now-title">
      <p className="section-index" aria-hidden="true">
        05
      </p>
      <div className="now-header">
        <p className="now-kicker">Now</p>
        <h2 id="now-title">A ledger of what&rsquo;s active now.</h2>
        <p className="now-intro">
          Three current files, not case studies: early, still being tested.
          Verified outcomes, once they exist, belong in Work.
        </p>
      </div>

      <ul className="now-ledger" role="list">
        {nowLedger.map((row) => (
          <li
            key={row.id}
            className={`now-row${row.primary ? " now-row-primary" : ""}`}
          >
            <span className="now-row-index">{row.index}</span>
            <div className="now-row-body">
              <div className="now-row-heading">
                <span className="now-row-name">{row.name}</span>
                <span className="now-row-role">{row.role}</span>
              </div>
              <p className="now-row-description">{row.description}</p>
              {row.direction ? (
                <p className="now-row-direction">{row.direction}</p>
              ) : null}
            </div>
            <span className="now-row-status">{row.status}</span>
            <Link
              href={row.slug ? `/work/${row.slug}` : "/work"}
              className="now-row-link"
            >
              → WORK
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
