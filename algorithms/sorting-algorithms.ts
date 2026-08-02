/**
 * Sorting Algorithms
 * 
 * Common sorting implementations with O(n log n) average complexity
 */

/**
 * Merge Sort
 * Time: O(n log n), Space: O(n)
 */
export function mergeSort<T>(
  arr: T[],
  compareFn: (a: T, b: T) => number = (a, b) => (a as any) - (b as any)
): T[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), compareFn);
  const right = mergeSort(arr.slice(mid), compareFn);

  return merge(left, right, compareFn);
}

function merge<T>(
  left: T[],
  right: T[],
  compareFn: (a: T, b: T) => number
): T[] {
  const result: T[] = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (compareFn(left[i], right[j]) <= 0) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}

/**
 * Quick Sort
 * Time: O(n log n), Space: O(log n)
 */
export function quickSort<T>(
  arr: T[],
  compareFn: (a: T, b: T) => number = (a, b) => (a as any) - (b as any)
): T[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((x) => compareFn(x, pivot) < 0);
  const middle = arr.filter((x) => compareFn(x, pivot) === 0);
  const right = arr.filter((x) => compareFn(x, pivot) > 0);

  return [...quickSort(left, compareFn), ...middle, ...quickSort(right, compareFn)];
}
