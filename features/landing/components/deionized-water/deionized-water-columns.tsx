import Link from "next/link";
import { Activity, Beaker, Layers } from "lucide-react";

import { GlassCard } from "@/components/shared/glass-card";
import { deionizedWaterSection } from "@/lib/config/deionized-water";

const columnIcons = {
  process: Layers,
  spec: Activity,
  applications: Beaker,
} as const;

export function DeionizedWaterColumns() {
  return (
    <div className="mt-10 grid gap-4 lg:grid-cols-3">
      {deionizedWaterSection.columns.map((column) => {
        const Icon = columnIcons[column.id as keyof typeof columnIcons];

        return (
          <GlassCard key={column.id} className="flex h-full flex-col p-6 sm:p-7">
            <Icon aria-hidden className="size-5 text-brand-accent" />
            <h3 className="mt-4 font-heading text-xl font-bold text-white">
              {column.title}
            </h3>
            <ul className="mt-4 flex-1 space-y-2.5">
              {column.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-accent"
                  />
                  {item}
                </li>
              ))}
            </ul>
            {"footnote" in column && column.footnote ? (
              <p className="mt-5 border-t border-white/8 pt-4 text-xs leading-relaxed text-muted-foreground">
                {column.footnote}
              </p>
            ) : null}
            {"link" in column && column.link ? (
              <Link
                href={column.link.href}
                className="mt-5 inline-flex text-sm font-semibold text-brand-accent transition-colors hover:text-white"
              >
                {column.link.label} →
              </Link>
            ) : null}
          </GlassCard>
        );
      })}
    </div>
  );
}
