"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Logo } from "@/components/shared/logo";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/features/orders/components/call-button";
import { WhatsAppOrderButton } from "@/features/orders/components/whatsapp-order-button";
import {
  mainNavLinks,
  productNavLinks,
} from "@/lib/config/navigation";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types/navigation";

interface NavigationProps {
  whatsappUrl: string;
}

function isLinkActive(pathname: string, href: string): boolean {
  if (href.startsWith("/#")) {
    return pathname === "/";
  }

  return pathname === href;
}

function NavItem({
  link,
  pathname,
  onNavigate,
  className,
}: {
  link: NavLink;
  pathname: string;
  onNavigate?: () => void;
  className?: string;
}) {
  const active = isLinkActive(pathname, link.href);

  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className={cn(
        "text-sm font-medium transition-colors hover:text-white",
        active ? "text-brand-accent" : "text-muted-foreground",
        className,
      )}
    >
      {link.label}
    </Link>
  );
}

export function Navigation({ whatsappUrl }: NavigationProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const closeMobileMenu = () => setIsMobileOpen(false);

  const navLinks = [...mainNavLinks, ...productNavLinks];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled || isMobileOpen
          ? "border-b border-white/8 bg-background/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <Container as="div" className="flex h-[4.5rem] items-center justify-between gap-4">
        <Logo showTagline={false} className="shrink-0" />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {navLinks.map((link) => (
            <NavItem key={link.href} link={link} pathname={pathname} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CallButton size="sm" className="hidden xl:inline-flex" />
          <WhatsAppOrderButton href={whatsappUrl} size="sm" />
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="size-10 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 lg:hidden"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMobileOpen((open) => !open)}
        >
          {isMobileOpen ? (
            <X aria-hidden className="size-5" />
          ) : (
            <Menu aria-hidden className="size-5" />
          )}
        </Button>
      </Container>

      <AnimatePresence>
        {isMobileOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-b border-white/8 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex flex-col gap-6 py-6">
              <nav aria-label="Mobile navigation" className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <NavItem
                    key={link.href}
                    link={link}
                    pathname={pathname}
                    onNavigate={closeMobileMenu}
                    className="text-base"
                  />
                ))}
              </nav>

              <div className="flex flex-col gap-3 border-t border-white/8 pt-6">
                <WhatsAppOrderButton href={whatsappUrl} />
                <CallButton showIcon />
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
