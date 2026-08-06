import { Phone } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";

interface CallButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg";
  showIcon?: boolean;
  children?: ReactNode;
}

export function CallButton({
  className,
  size = "lg",
  showIcon = false,
  children = "Call Now",
}: CallButtonProps) {
  return (
    <Button
      nativeButton={false}
      render={
        <a
          href={`tel:${siteConfig.contact.phoneTel}`}
          aria-label={`Call ${siteConfig.name}`}
        />
      }
      variant="outline"
      size={size}
      className={cn(
        "rounded-full border-white/15 bg-white/5 font-semibold text-white hover:bg-white/10",
        size === "lg" && "h-11 px-6 text-sm",
        size === "sm" && "h-9 px-4 text-xs",
        className,
      )}
    >
      {showIcon ? <Phone aria-hidden className="size-4" /> : null}
      {children}
    </Button>
  );
}
