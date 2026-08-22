/**
 * Hash Table Implementation
 */

interface Entry<T> {
  key: string;
  value: T;
}

export class HashTable<T> {
  private buckets: Entry<T>[][] = [];
  private size: number = 0;
  private readonly capacity: number;

  constructor(capacity: number = 16) {
    this.capacity = capacity;
    this.buckets = new Array(capacity);
  }

  private hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 31 + key.charCodeAt(i)) % this.capacity;
    }
    return hash;
  }

  set(key: string, value: T): void {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    const bucket = this.buckets[index];
    for (const entry of bucket) {
      if (entry.key === key) {
        entry.value = value;
        return;
      }
    }

    bucket.push({ key, value });
    this.size++;
  }

  get(key: string): T | undefined {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (!bucket) return undefined;

    for (const entry of bucket) {
      if (entry.key === key) return entry.value;
    }
    return undefined;
  }

  has(key: string): boolean {
    return this.get(key) !== undefined;
  }

  delete(key: string): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (!bucket) return false;

    const indexInBucket = bucket.findIndex((e) => e.key === key);
    if (indexInBucket === -1) return false;

    bucket.splice(indexInBucket, 1);
    this.size--;
    return true;
  }

  keys(): string[] {
    const result: string[] = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const entry of bucket) {
          result.push(entry.key);
        }
      }
    }
    return result;
  }

  values(): T[] {
    const result: T[] = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const entry of bucket) {
          result.push(entry.value);
        }
      }
    }
    return result;
  }

  getSize(): number {
    return this.size;
  }
}
