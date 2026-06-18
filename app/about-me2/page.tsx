import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const story = [
  "I lost the box. I'm still building.",
  "I grew up across three countries, picked up five languages, and spent most of my teens organizing things nobody asked me to organize. Camps, concerts, dinners. I just really wanted people to have a good time.",
  "Interior design gave me a language for that. My thesis was about how micro-communities form around shared spaces, how if you're intentional about a room, strangers start feeling like regulars. I still think about that all the time. The design of a space and the design of a community are not that different. Both are about making people feel like they belong somewhere.",
  "That question followed me through retail, social media, Web3, AI, and growth. Every piece I've picked up along the way, the languages, the communities, the relationships I've stumbled into, they all fit somewhere. I just do not always know where until they do.",
  "I do not have the box anymore. Maybe I never did. But the puzzle is starting to look like something, and I think that's the most honest way I can describe my life and my work.",
  "If you made it this far, hi. I'm Desi. I'd love to know what your puzzle looks like too.",
];

export default function AboutMe2Page() {
  return (
    <>
      <Navbar active="about" />
      <main className="about-page about-page-v2">
        <section className="about-story" aria-labelledby="about-me2-title">
          <div className="about-hero-image">
            <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
              <source src="/assets/about-hero-video.mp4" type="video/mp4" />
            </video>
            <div className="about-hero-shade" aria-hidden="true" />
            <h1 id="about-me2-title">
              <span>[ I lost the box. I&apos;m still building. ]</span>
            </h1>
          </div>

          <div className="about-body">
            <aside className="about-rail" aria-label="About markers">
              <div className="tagline about-tagline">
                <span aria-hidden="true" />
                <p>ABOUT</p>
                <i aria-hidden="true" />
              </div>
              <div className="about-availability">
                <p className="about-badge">Open to remote roles</p>
                <p>Based in Jakarta, Building globally.</p>
                <p>English · Indonesian · Malay</p>
                <p>Mandarin · Hokkien</p>
              </div>
            </aside>

            <div className="about-copy">
              {story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
