import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WhatsAppOrderButtonProps {
  href: string;
  className?: string;
  size?: "default" | "sm" | "lg";
  showIcon?: boolean;
  children?: ReactNode;
}

export function WhatsAppOrderButton({
  href,
  className,
  size = "lg",
  showIcon = true,
  children = "Order via WhatsApp",
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
