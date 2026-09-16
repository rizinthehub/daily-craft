/**
 * Search Algorithms
 * Day 36 - 2026-09-16
 *
 * Classic search algorithms implemented in TypeScript.
 * Each function returns the index of the target or -1 if not found.
 */

/** Linear search - O(n). Works on unsorted arrays. */
export function linearSearch<T>(arr: T[], target: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

/** Jump search - O(√n). Requires a sorted array of numbers. */
export function jumpSearch(arr: number[], target: number): number {
  const n = arr.length;
  if (n === 0) return -1;

  const step = Math.floor(Math.sqrt(n));
  let prev = 0;
  let curr = step;

  while (curr < n && arr[curr - 1] < target) {
    prev = curr;
    curr += step;
  }

  for (let i = prev; i < Math.min(curr, n); i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

/** Interpolation search - O(log log n) on uniformly distributed sorted numbers. */
export function interpolationSearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    if (arr[high] === arr[low]) {
      return arr[low] === target ? low : -1;
    }

    const pos =
      low +
      Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

    if (arr[pos] === target) return pos;
    if (arr[pos] < target) low = pos + 1;
    else high = pos - 1;
  }
  return -1;
}

/** Exponential search - O(log n). Requires a sorted array of numbers. */
export function exponentialSearch(arr: number[], target: number): number {
  const n = arr.length;
  if (n === 0) return -1;
  if (arr[0] === target) return 0;

  let bound = 1;
  while (bound < n && arr[bound] < target) {
    bound *= 2;
  }

  return binarySearchRange(arr, target, Math.floor(bound / 2), Math.min(bound, n - 1));
}

/** Ternary search - O(log3 n). Requires a sorted array of numbers. */
export function ternarySearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const third = Math.floor((high - low) / 3);
    const mid1 = low + third;
    const mid2 = high - third;

    if (arr[mid1] === target) return mid1;
    if (arr[mid2] === target) return mid2;

    if (target < arr[mid1]) high = mid1 - 1;
    else if (target > arr[mid2]) low = mid2 + 1;
    else {
      low = mid1 + 1;
      high = mid2 - 1;
    }
  }
  return -1;
}

/** Find the first index where predicate is true in a sorted "false...true" array. */
export function lowerBound<T>(arr: T[], predicate: (item: T) => boolean): number {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    const mid = (low + high) >>> 1;
    if (predicate(arr[mid])) high = mid;
    else low = mid + 1;
  }
  return low;
}

/** Binary search within a given range. Helper for exponentialSearch. */
function binarySearchRange(
  arr: number[],
  target: number,
  low: number,
  high: number
): number {
  while (low <= high) {
    const mid = (low + high) >>> 1;
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

/*
Example:

const data = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

linearSearch(data, 23);        // 5
jumpSearch(data, 56);          // 7
interpolationSearch(data, 12); // 3
exponentialSearch(data, 91);   // 9
ternarySearch(data, 2);        // 0
lowerBound(data, (x) => x >= 20); // 5
*/
