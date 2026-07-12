import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WorkSection from "@/components/WorkSection";

export default function WorkPage() {
  return (
    <>
      <Navbar active="work" />
      <main>
        <section className="work-hero" aria-labelledby="work-page-title">
          <div className="work-hero-content">
            <p className="eyebrow">Selected Work</p>
            <h1 id="work-page-title">Roles, tiered by what they prove.</h1>
            <p>
              Flagship is proven at scale. Current is active, not yet
              proven. Selected and Foundations are documented, supporting
              work.
            </p>
            <div className="work-hero-media" aria-hidden="true">
              <video autoPlay muted loop playsInline preload="metadata">
                <source src="/assets/work-ascii-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
        <WorkSection compact={false} />
      </main>
      <Footer />
    </>
  );
}
