import { Section } from "@/components/shared/section";
import { ComparisonCards } from "@/features/landing/components/comparison/comparison-cards";
import { comparisonSection } from "@/lib/config/comparison";

export function Comparison() {
  return (
    <Section
      id="comparison"
      ariaLabel="Product comparison"
      className="overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,174,239,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,174,239,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,174,239,0.08),transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
          {comparisonSection.titleLead}{" "}
          <span className="text-gradient-accent">
            {comparisonSection.titleAccent}
          </span>
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {comparisonSection.description}
        </p>
      </div>

      <ComparisonCards />
    </Section>
  );
}
