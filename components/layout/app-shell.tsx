import type { ReactNode } from "react";

import { SkipLink } from "@/components/shared/skip-link";
import { Footer } from "@/features/landing/components/footer";
import { Navigation } from "@/features/landing/components/navigation";
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
      <div className="flex min-h-screen flex-col pt-[4.5rem]">{children}</div>
      <Footer whatsappUrl={whatsappUrl} />
    </>
  );
}
