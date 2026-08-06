import { randomBytes } from "node:crypto";

/**
 * Generates a human-readable order number, e.g. PH-20260806-A7K2.
 */
export function generateOrderNumber(date = new Date()): string {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const suffix = randomBytes(2).toString("hex").toUpperCase();

  return `PH-${yyyy}${mm}${dd}-${suffix}`;
}
