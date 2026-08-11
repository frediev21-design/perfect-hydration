import { ArrowRight } from "lucide-react";

import { GlassCard } from "@/components/shared/glass-card";
import { deionizedWaterSection } from "@/lib/config/deionized-water";
import { cn } from "@/lib/utils";

export function DeionizedWaterContent() {
  return (
    <div className="mt-10 space-y-10">
      <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
        {deionizedWaterSection.description}
      </p>

      <div>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
          {deionizedWaterSection.processTitle}
        </p>
        <ol className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-2">
          {deionizedWaterSection.processSteps.map((step, index) => (
            <li key={step.id} className="flex items-center gap-2 sm:gap-2">
              <GlassCard className="flex-1 px-5 py-4 text-center sm:flex-none sm:min-w-[160px]">
                <span className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-white">
                  {step.label}
                </span>
              </GlassCard>
              {index < deionizedWaterSection.processSteps.length - 1 ? (
                <ArrowRight
                  aria-hidden
                  className="mx-auto size-4 shrink-0 text-brand-accent sm:mx-0"
                />
              ) : null}
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          {deionizedWaterSection.processOutcome}
        </p>
      </div>

      <div>
        <h3 className="text-center font-heading text-2xl font-bold text-white sm:text-3xl">
          {deionizedWaterSection.comparisonTitle}
        </h3>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <GlassCard className="p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              {deionizedWaterSection.ordinaryLabel}
            </p>
            <ul className="mt-5 space-y-3">
              {deionizedWaterSection.ordinaryPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-white/30"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard
            className={cn(
              "border-brand-accent/30 p-6 sm:p-7",
              "shadow-[0_0_40px_rgba(0,174,239,0.1)]",
            )}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-accent">
              {deionizedWaterSection.perfectHydrationLabel}
            </p>
            <ul className="mt-5 space-y-3">
              {deionizedWaterSection.perfectHydrationPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-white/90"
                >
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-accent"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
