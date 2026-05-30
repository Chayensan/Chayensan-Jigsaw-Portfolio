"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import DetailCard from "@/components/DetailCard";
import PuzzlePiece from "@/components/PuzzlePiece";
import { pieces, type Piece } from "@/components/site-data";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function JigsawCluster() {
  const [activeId, setActiveId] = useState<Piece["id"] | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const mouse = useMousePosition();
  const activePiece = pieces.find((piece) => piece.id === activeId);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!sectionRef.current || !activeId) return;
      if (sectionRef.current.contains(event.target as Node)) {
        const target = event.target as HTMLElement;
        if (target.closest(".puzzle-piece") || target.closest(".detail-card")) return;
      }
      setActiveId(null);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeId]);

  return (
    <section ref={sectionRef} className="jigsaw-cluster" aria-labelledby="jigsaw-title">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p id="jigsaw-title">01 / Jigsaw</p>
        <p>Every piece counts. Not everything connects yet.</p>
      </motion.div>

      <div className="cluster-canvas">
        <div className="cluster-underlight" aria-hidden="true" />
        {pieces.map((piece, index) => (
          <PuzzlePiece
            key={piece.id}
            piece={piece}
            index={index}
            active={activeId === piece.id}
            mouse={mouse}
            onOpen={(id) => setActiveId((current) => (current === id ? null : id))}
          />
        ))}

        <AnimatePresence>
          {activePiece ? <DetailCard key={activePiece.id} piece={activePiece} /> : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
