import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
}

export function GlassCard({
  children,
  className,
  as: Component = "div",
}: GlassCardProps) {
  return (
    <Component
      className={cn(
        "rounded-2xl border border-white/10 bg-[rgb(255_255_255/0.06)] backdrop-blur-xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      {children}
    </Component>
  );
}
