import Navbar from "@/components/Navbar";

const paragraphs = [
  "Interior design gave me a language for that. My thesis was about how micro-communities form around shared spaces, how if you're intentional about a room, strangers start feeling like regulars. I still think about that all the time. The design of a space and the design of a community aren't that different. Both are about making people feel like they belong somewhere.",
  "That question followed me through retail, social media, Web3, AI. Every piece I've picked up along the way, the languages, the communities, the relationships I've stumbled into, they all fit somewhere. I just don't always know where until they do.",
  "I don't have the perfect box. Maybe I never did. But the puzzle is starting to look like something and I think that's the most honest way I can describe my life and my work. (Inspired lovingly by Daniel Sloss's Jigsaw. Watch it. It'll rearrange something in you.)",
  "If you made it this far, hi. I'm Desi. I'd love to know what your puzzle looks like too.",
];

export default function WhoPage() {
  return (
    <>
      <Navbar active="who" />
      <main className="who-page">
        <section className="who-shell" aria-labelledby="who-title">
          <div className="who-intro">
            <h1 id="who-title">
              WHO IS
              <br />
              DESI KAMDRAWATI?
            </h1>
            <p>
              I grew up across three countries, picked up five languages, and spent most of my teens
              organizing events nobody asked me to organize. Camps, concerts, dinners. I just really
              wanted people to have a good time.
            </p>
          </div>

          <figure className="who-media">
            <img src="/assets/who-field.png" alt="" aria-hidden="true" />
            <figcaption>[ I lost the box. I&apos;m still building. ]</figcaption>
          </figure>

          <div className="who-meta" aria-label="Availability and languages">
            <p>Open to remote roles</p>
            <p>{"English \u00b7 Indonesian \u00b7 Malay \u00b7 Mandarin \u00b7 Hokkien"}</p>
          </div>

          <div className="who-divider" aria-hidden="true" />

          <div className="who-story">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="who-location">Based in Jakarta, Building globally.</p>
          </div>
        </section>
      </main>
    </>
  );
}
