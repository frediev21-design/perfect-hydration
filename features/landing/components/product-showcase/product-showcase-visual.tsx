"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

import { assetPaths } from "@/lib/config/hero";

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
    left: 20 + Math.random() * 60,
    top: 20 + Math.random() * 60,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 6 + 8,
    delay: Math.random() * 3,
  }));
}

export function ProductShowcaseVisual() {
  const shouldReduceMotion = useReducedMotion();
  const particles = useMemo(() => createParticles(16), []);

  return (
    <div className="relative mx-auto flex w-full max-w-lg items-center justify-center lg:max-w-xl">
      <div
        aria-hidden
        className="absolute inset-0 rounded-full bg-brand-accent/15 blur-3xl"
      />

      {!shouldReduceMotion
        ? particles.map((particle) => (
            <motion.span
              key={particle.id}
              aria-hidden
              className="absolute rounded-full bg-brand-accent/40"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.7, 0.2],
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
        className="relative z-10 w-full"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        whileHover={
          shouldReduceMotion
            ? undefined
            : {
                scale: 1.04,
                rotate: 2,
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              }
        }
      >
        <Image
          src={assetPaths.product.bottle5L}
          alt={assetPaths.product.bottle5LAlt}
          width={1254}
          height={1254}
          className="relative z-10 h-auto w-full object-contain drop-shadow-[0_40px_80px_rgba(0,174,239,0.28)]"
          sizes="(max-width: 1024px) 90vw, 480px"
        />

        <div
          aria-hidden
          className="absolute -bottom-3 left-1/2 z-0 h-20 w-[70%] -translate-x-1/2 rounded-[100%] bg-brand-accent/15 blur-2xl"
        />
      </motion.div>
    </div>
  );
}
