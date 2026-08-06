import type { ReactNode } from "react";

import { SkipLink } from "@/components/shared/skip-link";
import { Footer } from "@/features/landing/components/footer";
import { Navigation } from "@/features/landing/components/navigation";
import { StickyMobileCta } from "@/features/landing/components/sticky-mobile-cta/sticky-mobile-cta";
import { buildWhatsAppOrderUrl } from "@/lib/utils/whatsapp";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const whatsappUrl = buildWhatsAppOrderUrl();

  return (
    <>
      <SkipLink />
      <Navigation whatsappUrl={whatsappUrl} />
      <div className="flex min-h-screen flex-col pb-24 pt-[4.5rem] lg:pb-0">
        {children}
      </div>
      <StickyMobileCta whatsappUrl={whatsappUrl} />
      <Footer whatsappUrl={whatsappUrl} />
    </>
  );
}
