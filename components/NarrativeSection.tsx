"use client";

import { motion } from "framer-motion";
import { CSSProperties, useMemo, useState } from "react";
import Tagline from "./Tagline";

type JigsawLayerId = "events" | "community" | "web3" | "growth" | "exploration";

type JigsawLayer = {
  id: JigsawLayerId;
  subtitle: string;
  title: string;
  blurb: string;
  detail: string;
  skills: string[];
  imageSrc: string;
  glow: CSSProperties;
  hotspot: CSSProperties;
};

const layers: JigsawLayer[] = [
  {
    id: "events",
    subtitle: "Rooms With Rhythm",
    title: "Events",
    blurb: "Rooms, rituals, and shared moments that turn strangers into people with a reason to return.",
    detail: "This is where I learned that the room is part of the product. The welcome, the pacing, the small reason someone stays after the formal part ends.",
    skills: ["Stakeholder Hosting", "Live Ops", "Experience Design"],
    imageSrc: "/assets/jigsaw-layer-events.webp",
    glow: {
      "--layer-glow": "238, 184, 96",
      "--layer-glow-soft": "238, 184, 96",
    } as CSSProperties,
    hotspot: { left: "15%", top: "17%", width: "23%", height: "26%" },
  },
  {
    id: "community",
    subtitle: "Trust Over Noise",
    title: "Community",
    blurb: "The connective tissue: trust, cadence, care, and the small signals that make a group feel alive.",
    detail: "Community only works when people feel remembered. I care about the repeat signals: who gets invited back, who gets introduced, and what makes people feel useful to each other.",
    skills: ["Member Retention", "Trust Building", "Community Ops"],
    imageSrc: "/assets/jigsaw-layer-community.webp",
    glow: {
      "--layer-glow": "120, 206, 171",
      "--layer-glow-soft": "120, 206, 171",
    } as CSSProperties,
    hotspot: { left: "61%", top: "15%", width: "24%", height: "26%" },
  },
  {
    id: "web3",
    subtitle: "Invisible Systems",
    title: "Web3",
    blurb: "Invisible infrastructure, incentives, and ownership systems designed so participation has weight.",
    detail: "I am drawn to the parts people do not see at first: incentives, contribution loops, and the quiet structure that makes people feel their effort matters.",
    skills: ["Token Literacy", "Ecosystem Strategy", "Incentive Design"],
    imageSrc: "/assets/jigsaw-layer-web3.webp",
    glow: {
      "--layer-glow": "151, 177, 255",
      "--layer-glow-soft": "151, 177, 255",
    } as CSSProperties,
    hotspot: { left: "38%", top: "32%", width: "24%", height: "28%" },
  },
  {
    id: "growth",
    subtitle: "Compound Care",
    title: "Growth",
    blurb: "Distribution with memory: loops, experiments, and proof that compound because people care.",
    detail: "Growth feels most honest to me when it compounds from usefulness. Make the right person feel seen, then build the loop that helps that feeling travel.",
    skills: ["Lifecycle Strategy", "Experiment Design", "Go-to-Market"],
    imageSrc: "/assets/jigsaw-layer-growth.webp",
    glow: {
      "--layer-glow": "174, 210, 101",
      "--layer-glow-soft": "174, 210, 101",
    } as CSSProperties,
    hotspot: { left: "26%", top: "58%", width: "25%", height: "28%" },
  },
  {
    id: "exploration",
    subtitle: "Unfinished Edges",
    title: "Exploration",
    blurb: "Unfinished questions, new rooms, and the instinct to keep building before the map is complete.",
    detail: "This is the part I keep open on purpose. Not every piece has a place yet, but the search is how the next version of the system appears.",
    skills: ["Ambiguity Tolerance", "Research Framing", "Opportunity Mapping"],
    imageSrc: "/assets/jigsaw-layer-exploration.webp",
    glow: {
      "--layer-glow": "232, 137, 118",
      "--layer-glow-soft": "232, 137, 118",
    } as CSSProperties,
    hotspot: { left: "63%", top: "57%", width: "26%", height: "29%" },
  },
];

export default function NarrativeSection() {
  const [activeLayer, setActiveLayer] = useState<JigsawLayerId | null>(null);
  const [hoveredLayer, setHoveredLayer] = useState<JigsawLayerId | null>(null);

  const selectedLayer = useMemo(
    () => layers.find((layer) => layer.id === activeLayer),
    [activeLayer],
  );

  const detailLayer = useMemo(
    () =>
      layers.find((layer) => layer.id === hoveredLayer) ??
      selectedLayer ??
      layers[0],
    [hoveredLayer, selectedLayer],
  );

  return (
    <section className="narrative-section" aria-labelledby="narrative-title">
      <motion.div
        className="narrative-top"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      >
        Most careers come with a box, a picture on the lid, a clear finished
        image. Mine came as fragments from very different worlds.
      </motion.div>

      <div className="narrative-grid jigsaw">
        <motion.aside
          className="narrative-copy"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.74, ease: [0.16, 1, 0.3, 1] }}
        >
          <Tagline text="Assembly" />
          <h2 id="narrative-title">Every piece counts.</h2>
          <p>
            Not everything connects yet.
          </p>
          <p>
            Building in public.
            <br />
            Learning in private.
            <br />
            Scaling in trust.
          </p>
          <p className="narrative-instruction">Hover and click to explore</p>
        </motion.aside>

        <motion.div
          className="narrative-stage"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Interactive jigsaw narrative map"
        >
          <img
            className="jigsaw-svg"
            src="/assets/jigsaw-composite.webp"
            alt=""
            loading="lazy"
          />

          {layers.map((layer) => {
            const isLit = hoveredLayer === layer.id || activeLayer === layer.id;

            return (
              <img
                key={layer.id}
                className={`jigsaw-layer-image ${isLit ? "is-lit" : ""}`}
                src={layer.imageSrc}
                alt=""
                aria-hidden="true"
                loading="lazy"
                style={layer.glow}
              />
            );
          })}

          <div className="jigsaw-layer-controls" aria-label="Explore jigsaw layers">
            {layers.map((layer) => (
              <button
                key={layer.id}
                className={`jigsaw-hotspot ${
                  hoveredLayer === layer.id || activeLayer === layer.id ? "is-lit" : ""
                }`}
                style={{ ...layer.hotspot, ...layer.glow }}
                type="button"
                aria-pressed={activeLayer === layer.id}
                aria-label={`Open ${layer.title} layer`}
                onBlur={() => setHoveredLayer(null)}
                onClick={() => setActiveLayer((current) => (current === layer.id ? null : layer.id))}
                onFocus={() => setHoveredLayer(layer.id)}
                onMouseEnter={() => setHoveredLayer(layer.id)}
                onMouseLeave={() => setHoveredLayer(null)}
              />
            ))}
          </div>

        </motion.div>

        <motion.aside
          className="jigsaw-detail-panel"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.74, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          aria-live="polite"
        >
          <p>{detailLayer.subtitle}</p>
          <h3>{detailLayer.title}</h3>
          <span>
            {detailLayer.detail}
          </span>
          <ul
            className="jigsaw-skill-list"
            aria-label={`${detailLayer.title} recruiter keywords`}
          >
            {detailLayer.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <small>{detailLayer.blurb}</small>
        </motion.aside>
      </div>
    </section>
  );
}
