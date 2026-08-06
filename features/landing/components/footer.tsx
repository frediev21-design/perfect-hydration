import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { FacebookIcon } from "@/components/shared/icons/facebook-icon";

import { Logo } from "@/components/shared/logo";
import { Container } from "@/components/shared/container";
import { footerLinkGroups } from "@/lib/config/navigation";
import { siteConfig } from "@/lib/config/site";

interface FooterProps {
  whatsappUrl: string;
}

function resolveContactHref(
  href: string,
  whatsappUrl: string,
): { href: string; external: boolean } {
  switch (href) {
    case "whatsapp":
      return { href: whatsappUrl, external: true };
    case "tel":
      return { href: `tel:${siteConfig.contact.phoneTel}`, external: true };
    case "mailto":
      return { href: `mailto:${siteConfig.contact.email}`, external: true };
    default:
      return { href, external: false };
  }
}

export function Footer({ whatsappUrl }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 bg-brand-primary/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,174,239,0.08),transparent_60%)]"
      />

      <Container className="relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]">
          <div className="max-w-sm space-y-5">
            <Logo />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>

            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-3">
                <Phone aria-hidden className="size-4 shrink-0 text-brand-accent" />
                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail aria-hidden className="size-4 shrink-0 text-brand-accent" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <MapPin aria-hidden className="size-4 shrink-0 text-brand-accent" />
                <span>Serving Gauteng, South Africa</span>
              </p>
            </div>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h2 className="font-heading text-xs font-extrabold uppercase tracking-[0.24em] text-white">
                {group.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => {
                  const resolved = resolveContactHref(link.href, whatsappUrl);

                  return (
                    <li key={`${group.title}-${link.label}`}>
                      {resolved.external ? (
                        <a
                          href={resolved.href}
                          target={link.href === "whatsapp" ? "_blank" : undefined}
                          rel={
                            link.href === "whatsapp"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm text-muted-foreground transition-colors hover:text-white"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={resolved.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/8 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfect Hydration on Facebook"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:border-brand-accent/30 hover:text-white"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
          Ultra Pure. Clean. Consistent. Every Time.
        </p>
      </Container>
    </footer>
  );
}
