import Link from "next/link";
import { workItems } from "@/components/site-data";
import Tagline from "./Tagline";

export default function WorkSection({ compact = true }: { compact?: boolean }) {
  return (
    <section className={`work-section ${compact ? "" : "work-section-full"}`} aria-labelledby="work-title">
      <aside className="work-intro">
        <Tagline text="Work" />
        <h2 id="work-title">
          The
          <br />
          Clusters
        </h2>
        <p>
          Each role. Each challenge. Each piece that taught me how people move
          around a reason to care.
        </p>
        {compact ? <Link href="/work">View all work</Link> : null}
      </aside>

      <div className="work-grid">
        {workItems.map((item) => (
          <Link
            key={item.number}
            href={`/work/${item.slug}`}
            className={`work-card ${item.featured ? "featured" : ""}`}
          >
            <div className={`work-image ${item.imageClass}`} />
            <span className="work-number">{item.number}</span>
            <h3>{item.title}</h3>
            <p className="role">{item.role}</p>
            <p>{item.text}</p>
            <time>
              {item.date} | {item.roleType}
            </time>
          </Link>
        ))}
      </div>
    </section>
  );
}
