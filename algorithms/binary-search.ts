/**
 * Binary Search Algorithm
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * 
 * Binary search works on sorted arrays by repeatedly dividing
 * the search interval in half.
 */

/**
 * Iterative Binary Search
 * Returns the index of the target, or -1 if not found
 */
export function binarySearch<T>(
  arr: T[],
  target: T,
  compareFn: (a: T, b: T) => number = (a, b) => (a as any) - (b as any)
): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const comparison = compareFn(arr[mid], target);

    if (comparison === 0) {
      return mid; // Found target
    } else if (comparison < 0) {
      left = mid + 1; // Target is in right half
    } else {
      right = mid - 1; // Target is in left half
    }
  }

  return -1; // Target not found
}

/**
 * Recursive Binary Search
 */
export function binarySearchRecursive<T>(
  arr: T[],
  target: T,
  left: number,
  right: number,
  compareFn: (a: T, b: T) => number = (a, b) => (a as any) - (b as any)
): number {
  // Base case: target not found
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);
  const comparison = compareFn(arr[mid], target);

  if (comparison === 0) {
    return mid;
  } else if (comparison < 0) {
    return binarySearchRecursive(arr, target, mid + 1, right, compareFn);
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1, compareFn);
  }
}

/**
 * Find the first occurrence of target (for arrays with duplicates)
 */
export function binarySearchFirst<T>(
  arr: T[],
  target: T,
  compareFn: (a: T, b: T) => number = (a, b) => (a as any) - (b as any)
): number {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const comparison = compareFn(arr[mid], target);

    if (comparison === 0) {
      result = mid;
      right = mid - 1; // Continue searching left
    } else if (comparison < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

/**
 * Find insertion index for a value in a sorted array
 */
export function findInsertionIndex<T>(
  arr: T[],
  target: T,
  compareFn: (a: T, b: T) => number = (a, b) => (a as any) - (b as any)
): number {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (compareFn(arr[mid], target) < 0) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

// ============================================
// USAGE EXAMPLES
// ============================================

// Numbers
const numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(binarySearch(numbers, 7));  // Output: 3
console.log(binarySearch(numbers, 6));  // Output: -1

// Strings (with custom comparator)
const strings = ["apple", "banana", "cherry", "date", "elderberry"];
const stringCompare = (a: string, b: string) => a.localeCompare(b);
console.log(binarySearch(strings, "cherry", stringCompare));  // Output: 2

// Find insertion point
const insertIndex = findInsertionIndex(numbers, 8);
console.log(`Insert 8 at index ${insertIndex}`);  // Output: Insert 8 at index 4

// Objects (with custom comparator)
interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const personCompare = (a: Person, b: Person) => a.age - b.age;
console.log(binarySearch(people, { name: "", age: 30 }, personCompare));  // Output: 1
