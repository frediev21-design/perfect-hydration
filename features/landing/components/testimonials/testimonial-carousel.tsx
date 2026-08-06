"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

import { GlassCard } from "@/components/shared/glass-card";
import { testimonials } from "@/lib/config/testimonials";
import type { Testimonial } from "@/types/content";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <GlassCard className="flex h-full w-[min(88vw,24rem)] shrink-0 flex-col p-6 sm:w-[26rem] sm:p-8">
      <div className="flex items-center gap-1">
        {Array.from({ length: testimonial.rating }, (_, index) => (
          <Star
            key={index}
            aria-hidden
            className="size-4 fill-brand-accent text-brand-accent"
          />
        ))}
        <span className="sr-only">{testimonial.rating} out of 5 stars</span>
      </div>

      <blockquote className="mt-5 flex-1 text-base leading-relaxed text-white/90">
        “{testimonial.quote}”
      </blockquote>

      <footer className="mt-6 border-t border-white/8 pt-5">
        <p className="font-heading text-sm font-extrabold text-white">
          {testimonial.name}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {testimonial.role} · {testimonial.location}
        </p>
      </footer>
    </GlassCard>
  );
}

export function TestimonialCarousel() {
  const shouldReduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);
  const loopItems = [...testimonials, ...testimonials];

  return (
    <div
      className="mt-14 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <motion.div
        className="flex w-max gap-5 px-1"
        animate={
          shouldReduceMotion || isPaused
            ? undefined
            : {
                x: ["0%", "-50%"],
              }
        }
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        aria-label="Customer testimonials carousel"
      >
        {loopItems.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </motion.div>
    </div>
  );
}
