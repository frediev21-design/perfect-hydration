"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
}

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 10,
    delay: Math.random() * 4,
  }));
}

export function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();
  const particles = useMemo(() => createParticles(24), []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-24 top-0 size-[28rem] rounded-full bg-brand-accent/10 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 40, 0],
                y: [0, 24, 0],
                scale: [1, 1.08, 1],
              }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-16 top-1/4 size-[22rem] rounded-full bg-brand-electric/10 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -32, 0],
                y: [0, 18, 0],
                scale: [1, 1.12, 1],
              }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(0,174,239,0.14),transparent_42%)]" />

      {!shouldReduceMotion
        ? particles.map((particle) => (
            <motion.span
              key={particle.id}
              className="absolute rounded-full bg-white/30"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [0, -28, 0],
                opacity: [0.15, 0.55, 0.15],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))
        : null}

      <motion.div
        className="absolute bottom-[18%] left-1/2 size-40 -translate-x-1/2 rounded-full border border-brand-accent/20"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.8, 1],
                opacity: [0.35, 0, 0.35],
              }
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-[18%] left-1/2 size-40 -translate-x-1/2 rounded-full border border-brand-accent/10"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 2.4, 1],
                opacity: [0.2, 0, 0.2],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeOut",
          delay: 1.6,
        }}
      />
    </div>
  );
}
