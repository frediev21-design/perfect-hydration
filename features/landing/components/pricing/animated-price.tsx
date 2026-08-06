"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

import { formatPriceCompact } from "@/lib/utils/format";

interface AnimatedPriceProps {
  price: number;
  label: string;
  suffix: string;
}

export function AnimatedPrice({ price, label, suffix }: AnimatedPriceProps) {
  const shouldReduceMotion = useReducedMotion();
  const motionValue = useMotionValue(shouldReduceMotion ? price : 0);
  const springValue = useSpring(motionValue, {
    stiffness: 90,
    damping: 22,
    mass: 0.8,
  });
  const displayValue = useTransform(springValue, (value) =>
    formatPriceCompact(Math.round(value)),
  );

  useEffect(() => {
    motionValue.set(price);
  }, [motionValue, price]);

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-muted-foreground">
        {label}
      </p>
      <motion.p
        className="mt-4 font-heading text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl"
        aria-live="polite"
      >
        {shouldReduceMotion ? (
          formatPriceCompact(price)
        ) : (
          <motion.span>{displayValue}</motion.span>
        )}
      </motion.p>
      <p className="mt-3 text-lg font-medium text-brand-accent">{suffix}</p>
    </motion.div>
  );
}
