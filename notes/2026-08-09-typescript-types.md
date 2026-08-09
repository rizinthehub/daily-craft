# TypeScript Utility Types

## Built-in Utility Types

### Partial<T>
Makes all properties optional.

```typescript
interface User {
  name: string;
  age: number;
}

type PartialUser = Partial<User>;
// { name?: string; age?: number; }
```

### Required<T>
Makes all properties required.

```typescript
type RequiredUser = Required<PartialUser>;
// { name: string; age: number; }
```

### Pick<T, K>
Select specific properties.

```typescript
type UserName = Pick<User, "name">;
// { name: string; }
```

### Omit<T, K>
Remove specific properties.

```typescript
type UserWithoutAge = Omit<User, "age">;
// { name: string; }
```

### Record<K, V>
Create object type with keys and values.

```typescript
type UsersById = Record<string, User>;
// { [key: string]: User; }
```

### Exclude<T, U>
Remove types from union.

```typescript
type T = Exclude<"a" | "b" | "c", "a">;
// "b" | "c"
```

### Extract<T, U>
Keep only specified types.

```typescript
type T = Extract<"a" | "b" | "c", "a" | "f">;
// "a"
```

### NonNullable<T>
Remove null and undefined.

```typescript
type T = NonNullable<string | null | undefined>;
// string
```

### ReturnType<T>
Get function's return type.

```typescript
function getUser() { return { name: "John" }; }
type User = ReturnType<typeof getUser>;
// { name: string; }
```

### Parameters<T>
Get function's parameter types as tuple.

```typescript
function greet(name: string, age: number) {}
type T = Parameters<typeof greet>;
// [name: string, age: number]
```
