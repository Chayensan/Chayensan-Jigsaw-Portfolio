"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { MousePosition } from "@/hooks/useMousePosition";
import type { Piece } from "@/components/site-data";

type PuzzlePieceProps = {
  piece: Piece;
  index: number;
  active: boolean;
  mouse: MousePosition;
  onOpen: (id: Piece["id"]) => void;
};

export default function PuzzlePiece({
  piece,
  index,
  active,
  mouse,
  onOpen,
}: PuzzlePieceProps) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [nudge, setNudge] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current || !mouse.active) {
      setNudge({ x: 0, y: 0 });
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.hypot(mouse.x - centerX, mouse.y - centerY);

    if (distance > 150) {
      setNudge({ x: 0, y: 0 });
      return;
    }

    const pull = Math.min(6, (1 - distance / 150) * 6);
    setNudge({
      x: ((mouse.x - centerX) / Math.max(distance, 1)) * pull,
      y: ((mouse.y - centerY) / Math.max(distance, 1)) * pull,
    });
  }, [mouse]);

  return (
    <motion.button
      ref={ref}
      type="button"
      className={`puzzle-piece ${piece.positionClass} ${active ? "is-open" : ""}`}
      onClick={() => onOpen(piece.id)}
      aria-pressed={active}
      aria-label={`Open ${piece.label} detail`}
      animate={{
        y: [nudge.y, nudge.y - 8, nudge.y],
        x: nudge.x,
        rotate: [piece.rotation, piece.rotation + 1.5, piece.rotation],
      }}
      whileHover={{
        y: -12,
        scale: 1.045,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      transition={{
        duration: 4 + index * 0.7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span className="piece-fallback" aria-hidden="true" />
      <span className="piece-label">{piece.label}</span>
    </motion.button>
  );
}
