/**
 * Number Helpers
 * Reusable numeric utilities with no dependencies.
 * Day 33
 */

/** Clamp a number between min and max (inclusive). */
export function clamp(value: number, min: number, max: number): number {
  if (min > max) [min, max] = [max, min];
  return Math.min(Math.max(value, min), max);
}

/** Check if a number is within [min, max] (inclusive). */
export function inRange(value: number, min: number, max: number): boolean {
  if (min > max) [min, max] = [max, min];
  return value >= min && value <= max;
}

/** Random integer between min and max (inclusive). */
export function randomInt(min: number, max: number): number {
  if (min > max) [min, max] = [max, min];
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Random float between min (inclusive) and max (exclusive). */
export function randomFloat(min: number, max: number): number {
  if (min > max) [min, max] = [max, min];
  return Math.random() * (max - min) + min;
}

/** Round a number to a fixed number of decimals. */
export function roundTo(value: number, decimals = 2): number {
  const factor = 10 ** decimals;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

/** Check if a number is even. */
export function isEven(value: number): boolean {
  return value % 2 === 0;
}

/** Check if a number is odd. */
export function isOdd(value: number): boolean {
  return Math.abs(value % 2) === 1;
}

/** Sum of an array of numbers (empty array returns 0). */
export function sum(values: number[]): number {
  return values.reduce((total, n) => total + n, 0);
}

/** Average of an array of numbers (empty array returns 0). */
export function average(values: number[]): number {
  if (values.length === 0) return 0;
  return sum(values) / values.length;
}

/** Format large numbers compactly, e.g. 1200 -> "1.2K". */
export function formatCompact(value: number): string {
  return new Intl.NumberFormat("en", { notation: "compact" }).format(value);
}

/** Check if a value is a finite number (rejects NaN/Infinity). */
export function isNumeric(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}
