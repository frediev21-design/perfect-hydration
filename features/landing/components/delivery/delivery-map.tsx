"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState } from "react";

import { GlassCard } from "@/components/shared/glass-card";
import { cn } from "@/lib/utils";
import { deliveryAreas, deliverySection } from "@/lib/config/delivery";

/** Simplified Gauteng province outline for the stylized coverage map. */
const GAUTENG_PATH =
  "M 118 28 L 278 24 L 318 58 L 348 108 L 338 168 L 308 228 L 248 252 L 168 248 L 98 208 L 72 148 L 88 78 Z";

export function DeliveryMap() {
  const shouldReduceMotion = useReducedMotion();
  const [activeAreaId, setActiveAreaId] = useState<string | null>(null);

  return (
    <GlassCard className="relative overflow-hidden p-4 sm:p-6">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,174,239,0.14),transparent_62%)]"
        aria-hidden
      />

      <svg
        viewBox="0 0 400 280"
        role="img"
        aria-label={deliverySection.mapLabel}
        className="relative mx-auto w-full max-w-2xl"
      >
        <defs>
          <linearGradient id="gauteng-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(0 174 239 / 0.12)" />
            <stop offset="100%" stopColor="rgb(13 110 253 / 0.08)" />
          </linearGradient>
          <linearGradient id="gauteng-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(0 174 239 / 0.55)" />
            <stop offset="100%" stopColor="rgb(13 110 253 / 0.35)" />
          </linearGradient>
          <filter id="marker-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid lines */}
        {[80, 140, 200].map((y) => (
          <line
            key={`h-${y}`}
            x1="60"
            y1={y}
            x2="340"
            y2={y}
            stroke="rgb(255 255 255 / 0.04)"
            strokeWidth="1"
          />
        ))}
        {[120, 200, 280].map((x) => (
          <line
            key={`v-${x}`}
            x1={x}
            y1="20"
            x2={x}
            y2="260"
            stroke="rgb(255 255 255 / 0.04)"
            strokeWidth="1"
          />
        ))}

        <motion.path
          d={GAUTENG_PATH}
          fill="url(#gauteng-fill)"
          stroke="url(#gauteng-stroke)"
          strokeWidth="2"
          initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {deliveryAreas.map((area, index) => {
          const cx = (area.mapX / 100) * 400;
          const cy = (area.mapY / 100) * 280;
          const isActive = activeAreaId === area.id;

          return (
            <g
              key={area.id}
              className="cursor-pointer"
              onMouseEnter={() => setActiveAreaId(area.id)}
              onMouseLeave={() => setActiveAreaId(null)}
              onFocus={() => setActiveAreaId(area.id)}
              onBlur={() => setActiveAreaId(null)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setActiveAreaId(area.id);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`${area.name} delivery area`}
            >
              {!shouldReduceMotion ? (
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r={isActive ? 18 : 14}
                  fill="rgb(0 174 239 / 0.12)"
                  animate={{
                    scale: [1, 1.35, 1],
                    opacity: isActive ? [0.5, 0.15, 0.5] : [0.35, 0.08, 0.35],
                  }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ) : null}

              <circle
                cx={cx}
                cy={cy}
                r={isActive ? 6 : 5}
                fill="#00aeef"
                filter="url(#marker-glow)"
                className="transition-all duration-200"
              />

              <text
                x={cx}
                y={cy - 14}
                textAnchor="middle"
                className={cn(
                  "fill-white text-[11px] font-semibold transition-opacity duration-200",
                  isActive ? "opacity-100" : "opacity-70",
                )}
              >
                {area.name}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="relative mt-4 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
        <MapPin aria-hidden className="size-4 shrink-0 text-brand-accent" />
        {deliverySection.coverageNote}
      </p>
    </GlassCard>
  );
}
