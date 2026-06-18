"use client";

import { useEffect, useState } from "react";

export type MousePosition = {
  x: number;
  y: number;
  active: boolean;
};

export function useMousePosition() {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    active: false,
  });

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY, active: true });
    };

    const handleLeave = () => {
      setPosition((current) => ({ ...current, active: false }));
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return position;
}
