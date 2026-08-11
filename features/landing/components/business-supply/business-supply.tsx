import { Check, MessageCircle } from "lucide-react";

import { GlassCard } from "@/components/shared/glass-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { businessSupplySection } from "@/lib/config/business-supply";
import { buildWhatsAppBusinessUrl } from "@/lib/utils/whatsapp";

export function BusinessSupply() {
  const whatsappBusinessUrl = buildWhatsAppBusinessUrl();

  return (
    <Section id="business" ariaLabel="Business supply">
      <GlassCard className="relative overflow-hidden p-6 sm:p-10 lg:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-0 size-72 rounded-full bg-brand-accent/8 blur-3xl"
        />

        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <SectionHeading
              eyebrow={businessSupplySection.eyebrow}
              title={businessSupplySection.title}
              description={businessSupplySection.description}
              className="text-left"
            />
          </div>

          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {businessSupplySection.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <Check
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-brand-accent"
                  />
                  {benefit}
                </li>
              ))}
            </ul>

            <Button
              nativeButton={false}
              render={
                <a
                  href={whatsappBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Request business pricing via WhatsApp"
                />
              }
              className="mt-8 h-11 rounded-xl bg-brand-accent px-6 font-semibold text-white hover:bg-brand-accent/90"
            >
              <MessageCircle aria-hidden className="size-4" />
              {businessSupplySection.ctaLabel}
            </Button>
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}
