import { ShoppingBag } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BobshopOrderButtonProps {
  href: string;
  className?: string;
  size?: "default" | "sm" | "lg";
  showIcon?: boolean;
  children?: ReactNode;
}

export function BobshopOrderButton({
  href,
  className,
  size = "lg",
  showIcon = true,
  children = "Order on Bobshop",
}: BobshopOrderButtonProps) {
  return (
    <Button
      nativeButton={false}
      render={
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on Bobshop"
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
      {showIcon ? <ShoppingBag aria-hidden className="size-4" /> : null}
      {children}
    </Button>
  );
}
