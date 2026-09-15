import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WorkSection from "@/components/WorkSection";
import Image from "next/image";

export default function WorkPage() {
  return (
    <>
      <Navbar active="work" />
      <main>
        <section className="work-figma-hero" aria-labelledby="work-page-title">
          <span className="work-figma-hero-side-index" aria-hidden="true">
            02
          </span>

          <div className="work-figma-hero-background" aria-hidden="true">
            <Image
              src="/assets/work-hero-pixel-field.png"
              alt=""
              fill
              priority
              sizes="100vw"
              quality={92}
            />
          </div>

          <div className="work-figma-hero-layout">
            <p className="work-figma-hero-kicker">
              Selected Work
            </p>
            <h1 id="work-page-title" aria-label="Roles, tiered by what they prove.">
              <span className="work-figma-hero-title-line" aria-hidden="true">
                Roles, tiered
              </span>
              <span className="work-figma-hero-title-line" aria-hidden="true">
                by what they prove.
              </span>
            </h1>
            <p className="work-figma-hero-summary">
              <span>
                Flagship is proven at scale. Current is active, not yet proven.
              </span>
              <span>
                Selected and Foundations are documented, supporting work.
              </span>
            </p>
          </div>

          <span className="work-figma-hero-side-note" aria-hidden="true">
            Work
          </span>
        </section>
        <WorkSection compact={false} />
      </main>
      <Footer />
    </>
  );
}
