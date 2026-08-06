"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

import { assetPaths } from "@/lib/config/hero";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";

export function HeroVisual() {
  const mouse = useMouseParallax();
  const shouldReduceMotion = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      rawX.set(0);
      rawY.set(0);
      return;
    }

    rawX.set(mouse.x * 18);
    rawY.set(mouse.y * 14);
  }, [mouse.x, mouse.y, shouldReduceMotion, rawX, rawY]);

  const springConfig = { stiffness: 120, damping: 20, mass: 0.4 };
  const parallaxX = useSpring(rawX, springConfig);
  const parallaxY = useSpring(rawY, springConfig);
  const glowX = useTransform(parallaxX, (value) => value * 0.5);
  const glowY = useTransform(parallaxY, (value) => value * 0.5);

  return (
    <div className="relative mx-auto flex w-full max-w-xl items-center justify-center lg:max-w-none lg:justify-end">
      <motion.div
        style={shouldReduceMotion ? undefined : { x: glowX, y: glowY }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="size-[min(72vw,28rem)] rounded-full bg-brand-accent/20 blur-3xl" />
      </motion.div>

      <motion.div
        className="relative aspect-[2/3] w-full max-w-md"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        style={
          shouldReduceMotion
            ? undefined
            : {
                x: parallaxX,
                y: parallaxY,
              }
        }
      >
        <motion.div
          className="relative z-10"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -14, 0],
                  rotate: [-2, 2, -2],
                }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={assetPaths.product.bottle5L}
            alt={assetPaths.product.bottle5LAlt}
            width={681}
            height={1024}
            priority
            className="h-auto w-full object-contain drop-shadow-[0_30px_60px_rgba(0,174,239,0.28)]"
            sizes="(max-width: 1024px) 80vw, 40vw"
          />
        </motion.div>

        <div
          aria-hidden
          className="absolute -bottom-2 left-1/2 z-0 h-16 w-[72%] -translate-x-1/2 rounded-[100%] bg-brand-accent/15 blur-2xl"
        />
      </motion.div>
    </div>
  );
}
