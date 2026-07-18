import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Tagline from "@/components/Tagline";
import Annotation from "@/components/Annotation";
import Plate from "@/components/Plate";

export default function AboutPage() {
  return (
    <>
      <Navbar active="about" />
      <main className="about-page">
        <section className="about-top" aria-labelledby="about-title">
          <Tagline text="About" />
          <h1 id="about-title" className="about-heading">
            Where this practice comes from.
          </h1>
          <ul className="about-rail" aria-label="Location, languages, and availability">
            <Annotation as="li">Based in Jakarta</Annotation>
            <Annotation as="li">Five languages</Annotation>
            <Annotation as="li">Open to remote roles</Annotation>
          </ul>
        </section>

        <section className="about-essay" aria-label="About Desi Kamdrawati">
          <div className="about-copy">
            <p>
              I grew up between Australia, Malaysia, and Indonesia, enough time in each place to
              notice that people don&apos;t act the same way twice. Not because they&apos;re different
              people. Because the room they&apos;re standing in is asking something different of
              them.
            </p>
          </div>

          <div className="about-origin">
            <div className="about-origin-copy">
              <p>
                That noticing became a real question once I got to RMIT, where I studied interior
                design. My thesis looked at how micro-communities form around shared space: how a
                room, arranged with intention, can turn strangers into regulars. I still use that
                model for almost everything I build. A Discord server is a room. A campaign is a
                room. The furniture is just different.
              </p>
            </div>
            <Plate
              className="about-plate"
              image={{ src: "/assets/work-cases/rmit-gallery-01.png" }}
              aspectRatio="4 / 5"
              caption={{
                kind: "artefact",
                what: "Interior design thesis model, RMIT (Hons)",
                purpose: "shared-space micro-communities study",
                contribution: "designed and built",
              }}
            />
          </div>

          <div className="about-copy">
            <p>
              That question followed me everywhere after: through RMIT&apos;s own student
              community, into retail design consulting, and into Web3 at Derive.xyz, where I ran
              Discord, live events, and campaigns through a full rebrand and token launch. It&apos;s
              carried into partnerships work since, and now into an early-stage product. Different
              rooms, same question: what makes someone stay, participate, and bring somebody else
              along.
            </p>
            <p>
              It&apos;s also why this site is built the way it is. The field on the homepage
              isn&apos;t a puzzle with pieces missing. It&apos;s one surveyed ground, already whole,
              cut by survey lines into seven parcels: spatial design, events, community, sports
              media, growth, partnerships, product. Different angles on the same terrain, not
              fragments waiting to click together. That&apos;s closer to how a non-linear career
              actually works than a box with a missing piece ever was.
            </p>
            <p>
              If there&apos;s a name for what I actually do, it&apos;s something like building
              systems of belonging, though I&apos;d rather show that than say it. Mostly it comes
              down to resonance over noise: the thing that makes someone stay is rarely the loudest
              thing in the room.
            </p>
            <p>
              Where that&apos;s heading next: early-stage growth and BD work on HUNCHR, a social
              sports product built around predictions, private leagues, and leaderboards. It&apos;s
              early days: I&apos;m running distribution experiments, not claiming outcomes. But
              it&apos;s the clearest signal yet of where I want this to go: fewer case studies, more
              building alongside the people using the thing.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
