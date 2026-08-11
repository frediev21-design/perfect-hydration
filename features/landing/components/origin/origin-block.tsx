import { Droplets, MapPin, ShieldCheck } from "lucide-react";

import { GlassCard } from "@/components/shared/glass-card";
import { Section } from "@/components/shared/section";
import { originSection } from "@/lib/config/origin";

const pillarIcons = {
  process: Droplets,
  qc: ShieldCheck,
  delivery: MapPin,
} as const;

export function OriginBlock() {
  return (
    <Section id="origin" ariaLabel="Bottling and quality origin">
      <GlassCard className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 bottom-0 size-64 rounded-full bg-brand-accent/8 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/35 to-transparent"
        />

        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
              {originSection.eyebrow}
            </p>
            <h2 className="mt-4 font-heading text-3xl tracking-tight text-white sm:text-4xl">
              {originSection.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {originSection.description}
            </p>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-accent/25 bg-brand-accent/10 px-4 py-2 text-sm font-medium text-brand-accent">
              <MapPin aria-hidden className="size-4 shrink-0" />
              {originSection.location.city}, {originSection.location.region} ·{" "}
              {originSection.location.country}
            </p>

            <ol
              aria-label="Quality process steps"
              className="mt-8 flex flex-wrap gap-2"
            >
              {originSection.qualitySteps.map((step, index) => (
                <li key={step.id} className="flex items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                    {step.label}
                  </span>
                  {index < originSection.qualitySteps.length - 1 ? (
                    <span aria-hidden className="text-brand-accent/60">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {originSection.pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.id as keyof typeof pillarIcons];

              return (
                <div
                  key={pillar.id}
                  className="rounded-2xl border border-white/10 bg-[rgb(255_255_255/0.04)] px-5 py-5"
                >
                  <Icon
                    aria-hidden
                    className="size-5 text-brand-accent"
                  />
                  <h3 className="mt-4 font-heading text-base font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}
