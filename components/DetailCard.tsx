"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Piece } from "@/components/site-data";

export default function DetailCard({ piece }: { piece: Piece }) {
  return (
    <motion.aside
      className={`detail-card ${piece.cardClass}`}
      initial={{ opacity: 0, scale: 0.95, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <p>{piece.label}</p>
      <h3>{piece.subtext}</h3>
      <Link href="/work">View work</Link>
    </motion.aside>
  );
}
