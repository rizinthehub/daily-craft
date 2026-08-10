# TypeScript Utility Types

## Built-in Utility Types

### Partial<T>
Makes all properties optional.

```typescript
interface User {
  name: string;
  age: number;
}

const update: Partial<User> = { name: "John" };
// { name?: string; age?: number; }
```

### Required<T>
Makes all properties required.

```typescript
const user: Required<Partial<User>> = { name: "John", age: 25 };
```

### Readonly<T>
Makes all properties immutable.

```typescript
const frozen: Readonly<User> = { name: "John", age: 25 };
frozen.name = "Jane"; // Error!
```

### Pick<T, K>
Select specific properties.

```typescript
type UserPreview = Pick<User, "name">;
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
type UserRoles = Record<string, "admin" | "user" | "guest">;
// { [key: string]: "admin" | "user" | "guest" }
```

### Exclude<T, U>
Remove types from union.

```typescript
type Status = "pending" | "active" | "closed";
type OpenStatus = Exclude<Status, "closed">;
// "pending" | "active"
```

### Extract<T, U>
Keep only specified types.

```typescript
type Status = "pending" | "active" | "closed";
type ActiveStatus = Extract<Status, "active" | "closed">;
// "active" | "closed"
```

### NonNullable<T>
Remove null and undefined.

```typescript
type MaybeName = string | null | undefined;
type Name = NonNullable<MaybeName>;
// string
```

### ReturnType<T>
Get function's return type.

```typescript
function createUser() {
  return { name: "John", age: 25 };
}

type User = ReturnType<typeof createUser>;
// { name: string; age: number; }
```

### Parameters<T>
Get function's parameter types as tuple.

```typescript
function greet(name: string, age: number) {}
type GreetParams = Parameters<typeof greet>;
// [name: string, age: number]
```
