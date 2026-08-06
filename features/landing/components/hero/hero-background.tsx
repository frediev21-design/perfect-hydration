"use client";

export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 top-0 size-[28rem] rounded-full bg-brand-accent/10 blur-3xl" />
      <div className="absolute -right-16 top-1/4 size-[22rem] rounded-full bg-brand-electric/8 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(0,174,239,0.12),transparent_42%)]" />
    </div>
  );
}
