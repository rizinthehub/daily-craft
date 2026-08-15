# JavaScript Array Methods

## Iteration Methods

### map()
Transform each element, returns new array.

```typescript
const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);
// [2, 4, 6]
```

### filter()
Keep elements that pass the test.

```typescript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((n) => n % 2 === 0);
// [2, 4]
```

### reduce()
Accumulate to single value.

```typescript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 10
```

### forEach()
Execute function for each element (no return).

```typescript
numbers.forEach((n) => console.log(n));
```

### find()
Return first matching element.

```typescript
const users = [{ name: "John" }, { name: "Jane" }];
const user = users.find((u) => u.name === "Jane");
```

### findIndex()
Return index of first match, or -1.

```typescript
const index = numbers.findIndex((n) => n > 3);
// 3
```

## Search Methods

### includes()
Check if array contains value.

```typescript
[1, 2, 3].includes(2); // true
```

### indexOf()
Return first index of value.

```typescript
[1, 2, 3].indexOf(2); // 1
```

### some()
Return true if any element passes test.

```typescript
[1, 2, 3].some((n) => n > 2); // true
```

### every()
Return true if all elements pass test.

```typescript
[1, 2, 3].every((n) => n > 0); // true
```

## Transformation Methods

### sort()
Sort array (default: string comparison).

```typescript
[3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]
```

### reverse()
Reverse array order.

```typescript
[1, 2, 3].reverse(); // [3, 2, 1]
```

### flat()
Flatten nested arrays.

```typescript
[1, [2, [3]]].flat(2); // [1, 2, 3]
```

### concat()
Merge arrays.

```typescript
[1, 2].concat([3, 4]); // [1, 2, 3, 4]
```

## Adding/Removing

### push() / pop()
Add/remove from end.

### unshift() / shift()
Add/remove from start.

### slice()
Extract portion (non-mutating).

```typescript
[1, 2, 3, 4].slice(1, 3); // [2, 3]
```

### splice()
Add/remove/replace elements (mutating).

```typescript
const arr = [1, 2, 3];
arr.splice(1, 1, "x"); // [1, "x", 3]
```

### fill()
Fill with static value.

```typescript
[1, 2, 3].fill(0); // [0, 0, 0]
```

## Creating Arrays

### Array.from()
Create array from array-like.

```typescript
Array.from("hello"); // ["h", "e", "l", "l", "o"]
Array.from([1, 2, 3], (x) => x * 2); // [2, 4, 6]
```

### Array.isArray()
Check if value is array.

```typescript
Array.isArray([1, 2, 3]); // true
```
