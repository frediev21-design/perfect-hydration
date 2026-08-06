import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { GlassCard } from "@/components/shared/glass-card";
import { DeionizedWaterUses } from "@/features/landing/components/deionized-water/deionized-water-uses";
import { deionizedWaterSection } from "@/lib/config/deionized-water";

export function DeionizedWater() {
  return (
    <Section id="what-is-deionized-water" ariaLabel="What is deionised water">
      <SectionHeading
        eyebrow={deionizedWaterSection.eyebrow}
        title={deionizedWaterSection.title}
      />

      <GlassCard className="mt-10 space-y-5 p-6 sm:p-8">
        {deionizedWaterSection.intro.map((paragraph) => (
          <p
            key={paragraph.slice(0, 32)}
            className="text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {paragraph}
          </p>
        ))}
      </GlassCard>

      <p className="mt-10 text-lg font-medium text-white">
        {deionizedWaterSection.usesHeading}
      </p>

      <DeionizedWaterUses />

      <div className="mt-12 text-center">
        <p className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
          {deionizedWaterSection.taglinePrimary}
        </p>
        <p className="mt-3 text-lg text-brand-accent sm:text-xl">
          {deionizedWaterSection.taglineSecondary}
        </p>
      </div>
    </Section>
  );
}
