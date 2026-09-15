import Image from "next/image";
import Link from "next/link";

export default function CommunitySection() {
  return (
    <section className="community-index-section" aria-labelledby="community-index-title">
      <div className="community-index-shell">
        <header className="community-index-header">
          <p className="community-index-kicker">Community / Living archive</p>
          <h2 id="community-index-title">Communities, kept in motion.</h2>
          <p>
            What I am building now, alongside the gatherings, rooms, and rituals kept in the
            archive.
          </p>
        </header>

        <Link
          href="/about#community-mat"
          className="community-index-feature"
          aria-label="Open my community archive: Friends of Friends"
        >
          <figure>
            <div className="community-index-placeholder">
              <Image
                src="/assets/FFcover.png"
                alt="Friends of Friends cover reading Invite like a friend, Warm. Direct. Unforced., beside two friends sharing a meal"
                fill
                sizes="(max-width: 720px) calc(100vw - 3rem), 62vw"
                className="community-index-cover"
              />
            </div>

            <figcaption className="community-index-caption">
              <p className="community-index-meta">
                <span>Currently building</span>
                <time dateTime="2026">2026</time>
              </p>
              <div className="community-index-title-row">
                <h3>Friends of Friends</h3>
                <span>30+</span>
              </div>
              <p className="community-index-description">
                An intentional private social circle built through trusted introductions, genuine
                connection, and a shared place at the fire.
              </p>
              <span className="community-index-link-label">
                Open my community archive <span aria-hidden="true">↗</span>
              </span>
            </figcaption>
          </figure>
        </Link>
      </div>
    </section>
  );
}
