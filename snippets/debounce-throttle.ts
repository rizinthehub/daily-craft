/**
 * Debounce and Throttle Utilities
 */

/**
 * Debounce - delays execution until after wait time
 * Use for: search input, window resize
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: Parameters<T>) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}

/**
 * Throttle - executes at most once per interval
 * Use for: scroll events, button clicks
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// ============ Usage Examples ============

// Debounce example
const onSearch = debounce((query: string) => {
  console.log("Searching for:", query);
}, 300);

// Throttle example
const onScroll = throttle(() => {
  console.log("Scrolling...");
}, 100);
