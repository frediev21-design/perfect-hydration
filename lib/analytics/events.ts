export type ConversionEvent =
  | "whatsapp_click"
  | "bobshop_click"
  | "call_click";

export interface ConversionEventParams {
  source: string;
  quantity?: number;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends a GA4 conversion event when analytics is configured.
 */
export function trackConversionEvent(
  eventName: ConversionEvent,
  params: ConversionEventParams,
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, {
    event_category: "conversion",
    ...params,
  });
}
