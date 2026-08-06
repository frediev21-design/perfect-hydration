import { GlassCard } from "@/components/shared/glass-card";
import type { ProductSpecification } from "@/types/product";

interface SpecificationCardProps {
  specifications: ProductSpecification[];
  volumeLitres: number;
}

export function SpecificationCard({
  specifications,
  volumeLitres,
}: SpecificationCardProps) {
  return (
    <GlassCard className="relative mt-14 overflow-hidden p-6 sm:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand-accent/10 blur-3xl"
      />

      <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
            Product Grade
          </p>
          <p className="mt-3 font-heading text-3xl font-extrabold text-white sm:text-4xl">
            {volumeLitres} Litres
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Multi-stage pre-filtration, reverse osmosis, and deionization for
            ultra-low conductivity water suitable for critical applications.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Pre-filtration", "RO", "DI", "Automotive Grade"].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-brand-accent/25 bg-brand-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-accent"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {specifications.map((spec) => (
            <div
              key={spec.label}
              className="rounded-xl border border-white/10 bg-[rgb(255_255_255/0.04)] px-5 py-4"
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {spec.label}
              </dt>
              <dd className="mt-2 font-heading text-2xl font-extrabold text-white">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </GlassCard>
  );
}
