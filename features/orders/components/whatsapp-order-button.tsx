"use client";

import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { trackConversionEvent } from "@/lib/analytics/events";
import { cn } from "@/lib/utils";

interface WhatsAppOrderButtonProps {
  href: string;
  className?: string;
  size?: "default" | "sm" | "lg";
  showIcon?: boolean;
  children?: ReactNode;
  eventSource?: string;
  quantity?: number;
}

export function WhatsAppOrderButton({
  href,
  className,
  size = "lg",
  showIcon = true,
  children = "Order via WhatsApp",
  eventSource,
  quantity,
}: WhatsAppOrderButtonProps) {
  return (
    <Button
      nativeButton={false}
      render={
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order via WhatsApp"
          onClick={() => {
            if (eventSource) {
              trackConversionEvent("whatsapp_click", {
                source: eventSource,
                ...(quantity !== undefined ? { quantity } : {}),
              });
            }
          }}
        />
      }
      size={size}
      className={cn(
        "rounded-full bg-brand-accent font-semibold text-white hover:bg-brand-accent/90",
        size === "lg" && "h-11 px-6 text-sm",
        size === "sm" && "h-9 px-4 text-xs",
        className,
      )}
    >
      {showIcon ? <MessageCircle aria-hidden className="size-4" /> : null}
      {children}
    </Button>
  );
}
