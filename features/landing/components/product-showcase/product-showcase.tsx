import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { ProductShowcaseVisual } from "@/features/landing/components/product-showcase/product-showcase-visual";
import { productShowcaseSection } from "@/lib/config/product-showcase";

export function ProductShowcase() {
  return (
    <Section
      id="showcase"
      ariaLabel="Product showcase"
      className="overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,174,239,0.1),transparent_55%)]"
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={productShowcaseSection.eyebrow}
            title={productShowcaseSection.title}
            description={productShowcaseSection.description}
          />

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {productShowcaseSection.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-xl border border-white/10 bg-[rgb(255_255_255/0.04)] px-4 py-3 text-sm font-medium text-white/90"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <ProductShowcaseVisual />
      </div>
    </Section>
  );
}
