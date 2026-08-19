/**
 * Function Utilities
 */

/**
 * Memoize - cache function results
 */
export function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map<string, any>();

  return function (this: unknown, ...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key) as ReturnType<T>;
    }

    const result = fn.apply(this, args as any[]);
    cache.set(key, result);
    return result;
  } as T;
}

/**
 * Compose - right-to-left function composition
 */
export function compose<T>(...fns: Function[]): (value: T) => T {
  return (value: T) => fns.reduceRight((acc, fn) => fn(acc), value);
}

/**
 * Pipe - left-to-right function composition
 */
export function pipe<T>(...fns: Function[]): (value: T) => T {
  return (value: T) => fns.reduce((acc, fn) => fn(acc), value);
}

/**
 * Curry - convert function to curried form
 */
export function curry(fn: Function): Function {
  return function curried(this: unknown, ...args: any[]) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (this: unknown, ...more: any[]) {
      return curried.apply(this, [...args, ...more]);
    };
  };
}

/**
 * Partial - bind some arguments
 */
export function partial(fn: Function, ...presetArgs: any[]): Function {
  return (...laterArgs: any[]) => fn(...presetArgs, ...laterArgs);
}

/**
 * Once - execute function only once
 */
export function once<T extends (...args: any[]) => any>(fn: T): T {
  let called = false;
  let result: any;

  return function (this: unknown, ...args: Parameters<T>): ReturnType<T> {
    if (!called) {
      result = fn.apply(this, args as any[]);
      called = true;
    }
    return result as ReturnType<T>;
  } as T;
}
