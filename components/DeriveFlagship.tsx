import Link from "next/link";
import Plate from "@/components/Plate";
import { deriveFlagship } from "@/components/site-data";

export default function DeriveFlagship() {
  const { kicker, heading, role, href, primary, secondary } = deriveFlagship;

  return (
    <section className="derive-section" aria-labelledby="derive-title">
      <div className="derive-header">
        <p className="derive-kicker">{kicker}</p>
        <h2 id="derive-title">{heading}</h2>
        <p className="derive-role">{role}</p>
      </div>

      <div className="derive-grid">
        <Plate
          className="derive-plate-primary"
          caption={primary.caption}
          image={primary.image}
          aspectRatio={primary.aspectRatio}
          href={href}
        />

        <div className="derive-plate-secondary-stack">
          {secondary.map((plate) => (
            <Plate
              key={plate.id}
              className="derive-plate-secondary"
              caption={plate.caption}
              image={plate.image}
              aspectRatio={plate.aspectRatio}
            >
              {plate.content ? (
                <>
                  <span className="plate-frame-kicker">{plate.content.kicker}</span>
                  <span className="plate-frame-statement">{plate.content.statement}</span>
                </>
              ) : undefined}
            </Plate>
          ))}
        </div>
      </div>

      <Link href={href} className="derive-case-link">
        Read the full case
      </Link>
    </section>
  );
}
