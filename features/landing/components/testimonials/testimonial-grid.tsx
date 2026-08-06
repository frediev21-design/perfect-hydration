import { ExternalLink, Star } from "lucide-react";

import { GlassCard } from "@/components/shared/glass-card";
import { testimonials, testimonialsSection } from "@/lib/config/testimonials";
import type { Testimonial } from "@/types/content";
import { cn } from "@/lib/utils";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <GlassCard className="flex h-full flex-col p-6 sm:p-7">
      <div className="flex items-center justify-between gap-3">
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
        <span
          className={cn(
            "rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]",
            testimonial.source === "bobshop"
              ? "border-brand-accent/25 bg-brand-accent/10 text-brand-accent"
              : "border-white/10 bg-white/5 text-muted-foreground",
          )}
        >
          {testimonial.source === "bobshop" ? "Bobshop buyer" : "Gauteng customer"}
        </span>
      </div>

      <blockquote className="mt-5 flex-1 text-base leading-relaxed text-white/90">
        “{testimonial.quote}”
      </blockquote>

      <footer className="mt-6 border-t border-white/8 pt-5">
        <p className="font-heading text-sm font-bold text-white">
          {testimonial.name}
        </p>
        <p className="mt-1 text-sm font-medium text-brand-accent">
          {testimonial.businessName}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {testimonial.role} · {testimonial.suburb}, {testimonial.location}
        </p>
      </footer>
    </GlassCard>
  );
}

export function TestimonialGrid() {
  return (
    <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
}

export function TestimonialReviewLinks() {
  return (
    <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 text-center">
      <p className="text-sm text-muted-foreground">
        {testimonialsSection.bobshopSellerRating}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {testimonialsSection.reviewLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-brand-accent/30 hover:bg-brand-accent/10"
          >
            {link.label}
            <ExternalLink aria-hidden className="size-3.5 text-brand-accent" />
          </a>
        ))}
      </div>
    </div>
  );
}
