import { GlassCard } from "@/components/shared/glass-card";
import { specificationsSection } from "@/lib/config/specifications";
import type { ProductSpecification } from "@/types/product";
import { cn } from "@/lib/utils";

interface SpecificationCardProps {
  specifications: ProductSpecification[];
  volumeLitres: number;
}

function partitionSpecifications(specifications: ProductSpecification[]) {
  const primary = specificationsSection.primaryMetrics
    .map((label) => specifications.find((spec) => spec.label === label))
    .filter((spec): spec is ProductSpecification => spec !== undefined);

  const secondary = specifications.filter(
    (spec) =>
      !(specificationsSection.primaryMetrics as readonly string[]).includes(
        spec.label,
      ),
  );

  return { primary, secondary };
}

export function SpecificationCard({
  specifications,
  volumeLitres,
}: SpecificationCardProps) {
  const { primary, secondary } = partitionSpecifications(specifications);

  return (
    <GlassCard className="relative mt-14 overflow-hidden p-6 sm:p-8 lg:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-brand-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"
      />

      <div className="relative">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
              Instrument Panel
            </p>
            <p className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
              Measured Purity
            </p>
          </div>
          <p className="font-heading text-2xl font-bold text-brand-accent sm:text-3xl">
            {volumeLitres}L
            <span className="ml-2 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Automotive Grade
            </span>
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {primary.map((spec) => (
            <div
              key={spec.label}
              className="relative overflow-hidden rounded-2xl border border-brand-accent/20 bg-[rgb(0_174_239/0.06)] px-5 py-5"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-brand-accent/30"
              />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-accent">
                {spec.label}
              </p>
              <p className="mt-3 font-mono text-2xl font-semibold tabular-nums tracking-tight text-white sm:text-3xl">
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {secondary.map((spec) => (
            <div
              key={spec.label}
              className="rounded-xl border border-white/10 bg-[rgb(255_255_255/0.04)] px-5 py-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {spec.label}
              </p>
              <p
                className={cn(
                  "mt-2 font-heading text-xl font-bold text-white sm:text-2xl",
                  spec.label === "Treatment" && "text-lg sm:text-xl",
                )}
              >
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {specificationsSection.processBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-brand-accent/25 bg-brand-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-accent"
            >
              {badge}
            </span>
          ))}
        </div>

        <p className="mt-6 border-t border-white/8 pt-5 text-sm leading-relaxed text-muted-foreground">
          {specificationsSection.footnote}
        </p>
      </div>
    </GlassCard>
  );
}
