"use client";

import { useEffect, useState } from "react";

const MOBILE_QUERY = "(max-width: 1023px)";

/**
 * Shows the sticky mobile CTA after the hero scrolls away,
 * and hides it near the final order section.
 */
export function useStickyCtaVisibility(): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const order = document.getElementById("order");
    const mediaQuery = window.matchMedia(MOBILE_QUERY);

    let pastHero = !hero;
    let atOrder = false;

    const updateVisibility = () => {
      setVisible(mediaQuery.matches && pastHero && !atOrder);
    };

    const heroObserver = hero
      ? new IntersectionObserver(
          ([entry]) => {
            pastHero =
              !entry.isIntersecting && entry.boundingClientRect.top < 0;
            updateVisibility();
          },
          { threshold: 0 },
        )
      : null;

    const orderObserver = order
      ? new IntersectionObserver(
          ([entry]) => {
            atOrder = entry.isIntersecting;
            updateVisibility();
          },
          { threshold: 0.15 },
        )
      : null;

    const handleScroll = () => {
      if (!hero) {
        pastHero = window.scrollY > 120;
        updateVisibility();
      }
    };

    const handleViewportChange = () => {
      updateVisibility();
    };

    if (hero) {
      heroObserver?.observe(hero);
    }

    if (order) {
      orderObserver?.observe(order);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    mediaQuery.addEventListener("change", handleViewportChange);

    handleScroll();
    updateVisibility();

    return () => {
      heroObserver?.disconnect();
      orderObserver?.disconnect();
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  return visible;
}
