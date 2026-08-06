/**
 * Formats a ZAR amount for display.
 */
export function formatCurrency(
  amount: number,
  locale = "en-ZA",
  currency = "ZAR",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Formats a ZAR amount without decimal places for hero pricing.
 */
export function formatPriceCompact(amount: number): string {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
