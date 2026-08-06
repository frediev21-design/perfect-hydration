"use client";

import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

const defaultPosition: MousePosition = { x: 0, y: 0 };

/**
 * Tracks normalized mouse position relative to the viewport center (-1 to 1).
 */
export function useMouseParallax(): MousePosition {
  const [position, setPosition] = useState<MousePosition>(defaultPosition);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      setPosition({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return position;
}

/**
 * Returns true when the user prefers reduced motion.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}
