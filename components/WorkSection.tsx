import Link from "next/link";
import type { ReactNode } from "react";
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

const selectedItems = workItems.filter((item) => item.tier === "selected");
const foundationsItems = workItems.filter((item) => item.tier === "foundations");

function CompactRowList({
  tier,
  children,
}: {
  tier: WorkTier | "current";
  children: ReactNode;
}) {
  return (
    <div className="work-tier" data-tier={tier}>
      <p className="work-tier-label">{tier}</p>
      <ul className="work-row-list" role="list">
        {children}
      </ul>
    </div>
  );
}

export default function WorkSection({ compact = true }: { compact?: boolean }) {
  if (compact) {
    return (
      <>
        <DeriveFlagship />
        <NowLedger />
        <section className="work-section" aria-labelledby="work-title">
          <aside className="work-intro">
            <Tagline text="Work" />
            <h2 id="work-title">Work</h2>
            <p>
              Ordered by what each role proves — from flagship evidence to
              work still being tested.
            </p>
            <Link href="/work">View all work</Link>
          </aside>
        </section>
      </>
    );
  }

  return (
    <section className="work-section work-section-full" aria-labelledby="work-page-title">
      <div className="work-index">
        <div className="work-tier" data-tier="flagship">
          <p className="work-tier-label">Flagship</p>
          <div className="work-flagship">
            <Plate
              className="work-flagship-plate"
              caption={deriveFlagship.primary.caption}
              image={deriveFlagship.primary.image}
              aspectRatio={deriveFlagship.primary.aspectRatio}
              href={deriveFlagship.href}
            />
            <div className="work-flagship-body">
              <h2>Derive.xyz</h2>
              <p className="work-flagship-role">{deriveFlagship.role}</p>
              <Link href={deriveFlagship.href} className="work-flagship-link">
                Read the full case
              </Link>
            </div>
          </div>
        </div>

        <CompactRowList tier="current">
          {nowLedger.map((row) => (
            <li key={row.id} className="work-row">
              <span className="work-row-index">{row.index}</span>
              <div className="work-row-body">
                <div className="work-row-heading">
                  <span className="work-row-name">{row.name}</span>
                  <span className="work-row-role">{row.role}</span>
                </div>
                <p className="work-row-description">{row.description}</p>
                {row.slug ? (
                  <Link href={`/work/${row.slug}`} className="work-row-link">
                    Read more
                  </Link>
                ) : null}
              </div>
              <span className="work-row-status">{row.status}</span>
            </li>
          ))}
        </CompactRowList>

        <CompactRowList tier="selected">
          {selectedItems.map((item) => (
            <li key={item.slug} className="work-row">
              <span className="work-row-index">{item.number}</span>
              <div className="work-row-body">
                <div className="work-row-heading">
                  <span className="work-row-name">{item.title}</span>
                  <span className="work-row-role">{item.role}</span>
                </div>
                <p className="work-row-description">{item.text}</p>
                <Link href={`/work/${item.slug}`} className="work-row-link">
                  Read more
                </Link>
              </div>
              <span className="work-row-status">{item.date}</span>
            </li>
          ))}
        </CompactRowList>

        <CompactRowList tier="foundations">
          {foundationsItems.map((item) => (
            <li key={item.slug} className="work-row">
              <span className="work-row-index">{item.number}</span>
              <div className="work-row-body">
                <div className="work-row-heading">
                  <span className="work-row-name">{item.title}</span>
                  <span className="work-row-role">{item.role}</span>
                </div>
                <p className="work-row-description">{item.text}</p>
                <Link href={`/work/${item.slug}`} className="work-row-link">
                  Read more
                </Link>
              </div>
              <span className="work-row-status">{item.date}</span>
            </li>
          ))}
        </CompactRowList>
      </div>
    </section>
  );
}
