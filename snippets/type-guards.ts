/**
 * Type Guards
 * Day 34 - 2026-09-13
 *
 * Reusable runtime type guards for narrowing unknown values in TypeScript.
 */

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isNumber(value: unknown): value is number {
  return typeof value === "number" && !Number.isNaN(value);
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

export function isNull(value: unknown): value is null {
  return value === null;
}

export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}

export function isNullish(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

export function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
  return typeof value === "function";
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function isArray<T = unknown>(value: unknown): value is T[] {
  return Array.isArray(value);
}

export function isArrayOf<T>(
  value: unknown,
  guard: (item: unknown) => item is T
): value is T[] {
  return Array.isArray(value) && value.every(guard);
}

export function isDate(value: unknown): value is Date {
  return value instanceof Date && !Number.isNaN(value.getTime());
}

export function isPromise<T = unknown>(value: unknown): value is Promise<T> {
  return (
    isObject(value) && isFunction((value as { then?: unknown }).then)
  );
}

export function isError(value: unknown): value is Error {
  return value instanceof Error;
}

export function hasKey<K extends string>(
  value: unknown,
  key: K
): value is Record<K, unknown> {
  return isObject(value) && key in value;
}

export function isNonEmptyString(value: unknown): value is string {
  return isString(value) && value.trim().length > 0;
}

export function isNonEmptyArray<T>(value: T[]): value is [T, ...T[]] {
  return value.length > 0;
}

/**
 * Assertion helper: throws if the guard fails, otherwise narrows the type.
 *
 * const input: unknown = getData();
 * assertType(input, isString, "Expected a string");
 * input.toUpperCase(); // input is string here
 */
export function assertType<T>(
  value: unknown,
  guard: (v: unknown) => v is T,
  message = "Type assertion failed"
): asserts value is T {
  if (!guard(value)) {
    throw new TypeError(message);
  }
}
