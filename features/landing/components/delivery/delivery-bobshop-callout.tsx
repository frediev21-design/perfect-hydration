import { GlassCard } from "@/components/shared/glass-card";
import { BobshopOrderButton } from "@/features/orders/components/bobshop-order-button";
import { deliverySection } from "@/lib/config/delivery";
import { bobshopConfig } from "@/lib/config/bobshop";

export function DeliveryBobshopCallout() {
  return (
    <GlassCard className="mt-10 flex flex-col items-center gap-5 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
      <div className="max-w-xl">
        <h3 className="font-heading text-xl font-extrabold text-white">
          {deliverySection.bobshopTitle}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {deliverySection.bobshopNote}
        </p>
      </div>
      <BobshopOrderButton href={bobshopConfig.url}>
        {deliverySection.bobshopLabel}
      </BobshopOrderButton>
    </GlassCard>
  );
}
