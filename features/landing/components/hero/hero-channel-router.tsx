"use client";

import { MapPin, ShoppingBag } from "lucide-react";

import { trackConversionEvent } from "@/lib/analytics/events";
import { bobshopConfig } from "@/lib/config/bobshop";
import { heroChannelRouter } from "@/lib/config/hero";

interface HeroChannelRouterProps {
  whatsappUrl: string;
}

export function HeroChannelRouter({ whatsappUrl }: HeroChannelRouterProps) {
  return (
    <div className="mt-8 space-y-3">
      <p className="text-sm font-medium text-muted-foreground">
        {heroChannelRouter.label}
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackConversionEvent("whatsapp_click", { source: "hero_channel_router" });
          }}
          className="inline-flex flex-1 items-center gap-3 rounded-2xl border border-brand-accent/30 bg-brand-accent/10 px-4 py-3.5 transition-colors hover:border-brand-accent/50 hover:bg-brand-accent/15"
        >
          <MapPin aria-hidden className="size-4 shrink-0 text-brand-accent" />
          <span className="text-left">
            <span className="block text-sm font-semibold text-white">
              {heroChannelRouter.gauteng.title}
            </span>
            <span className="block text-xs text-muted-foreground">
              {heroChannelRouter.gauteng.description}
            </span>
          </span>
        </a>
        <a
          href={bobshopConfig.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackConversionEvent("bobshop_click", { source: "hero_channel_router" });
          }}
          className="inline-flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 transition-colors hover:border-white/20 hover:bg-white/8"
        >
          <ShoppingBag aria-hidden className="size-4 shrink-0 text-brand-accent" />
          <span className="text-left">
            <span className="block text-sm font-semibold text-white">
              {heroChannelRouter.nationwide.title}
            </span>
            <span className="block text-xs text-muted-foreground">
              {heroChannelRouter.nationwide.description}
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
