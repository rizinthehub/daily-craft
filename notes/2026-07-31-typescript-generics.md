# TypeScript Generics

## What I Learned

- Generics allow creating reusable components that work with multiple types
- They provide type safety without sacrificing code reusability
- Generic constraints limit the types that can be used

## Code Examples

### Basic Generic Function
```typescript
function identity<T>(arg: T): T {
  return arg;
}

// Usage
const num = identity<number>(42);
const str = identity("hello"); // Type inference works!
```

### Generic Interfaces
```typescript
interface Response<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: number;
  name: string;
}

const userResponse: Response<User> = {
  data: { id: 1, name: "John" },
  status: 200,
  message: "Success"
};
```

### Generic Constraints
```typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): number {
  return arg.length;
}

logLength("hello");    // ✓ Works
logLength([1, 2, 3]);  // ✓ Works
logLength(123);       // ✗ Error - number has no length
```

### Generic Classes
```typescript
class DataStore<T> {
  private items: T[] = [];
  
  add(item: T): void {
    this.items.push(item);
  }
  
  get(index: number): T | undefined {
    return this.items[index];
  }
}

const stringStore = new DataStore<string>();
stringStore.add("Hello");
```

## When to Use Generics

| Scenario | Example |
|----------|---------|
| Reusable functions | `array.map()` |
| API responses | `Response<T>` |
| Data stores | `DataStore<T>` |
| Utility types | `Promise<T>` |

## Resources

- [TypeScript Handbook - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [TypeScript Deep Dive - Generics](https://basarat.gitbook.io/typescript/type-system/generics)
