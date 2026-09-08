/**
 * Local Storage Helpers
 * Type-safe wrappers around localStorage with JSON support.
 * Day 32 - 2026-09-08
 */

function isAvailable(): boolean {
  try {
    return typeof window !== "undefined" && typeof localStorage !== "undefined";
  } catch {
    return false;
  }
}

/** Save a value to localStorage (auto JSON.stringify). */
export function setItem<T>(key: string, value: T): void {
  if (!isAvailable()) return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`localStorage set failed for "${key}":`, error);
  }
}

/** Get a value from localStorage, returns fallback if missing/corrupt. */
export function getItem<T>(key: string, fallback: T): T {
  if (!isAvailable()) return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

/** Remove one key from localStorage. */
export function removeItem(key: string): void {
  if (!isAvailable()) return;
  localStorage.removeItem(key);
}

/** Clear all localStorage. */
export function clearAll(): void {
  if (!isAvailable()) return;
  localStorage.clear();
}

/** Check if a key exists. */
export function has(key: string): boolean {
  if (!isAvailable()) return false;
  return localStorage.getItem(key) !== null;
}

/** Get all localStorage keys. */
export function getAllKeys(): string[] {
  if (!isAvailable()) return [];
  const keys: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key !== null) keys.push(key);
  }
  return keys;
}

interface ExpiryWrapper<T> {
  value: T;
  expiresAt: number;
}

/** Save a value with expiration (ttl in milliseconds). */
export function setWithExpiry<T>(key: string, value: T, ttlMs: number): void {
  const wrapper: ExpiryWrapper<T> = {
    value,
    expiresAt: Date.now() + ttlMs,
  };
  setItem(key, wrapper);
}

/** Get a value saved with expiry, returns fallback if expired/missing. */
export function getWithExpiry<T>(key: string, fallback: T): T {
  const wrapper = getItem<ExpiryWrapper<T> | null>(key, null);
  if (!wrapper) return fallback;
  if (Date.now() > wrapper.expiresAt) {
    removeItem(key);
    return fallback;
  }
  return wrapper.value;
}
