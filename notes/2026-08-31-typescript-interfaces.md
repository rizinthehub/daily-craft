# TypeScript Interfaces & Classes

## Interface Basics

```typescript
interface User {
  id: number;
  name: string;
  email?: string;        // Optional
  readonly createdAt: Date;  // Readonly
}

interface Config {
  host: string;
  port: number;
  ssl: boolean;
}
```

## Interface Inheritance

```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = { name: "Buddy", breed: "Labrador" };
```

## Class Basics

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hi, I'm ${this.name}`;
  }
}
```

## Access Modifiers

```typescript
class BankAccount {
  public balance: number;      // Accessible everywhere
  private pin: number;         // Class only
  protected id: string;        // Class + subclasses

  constructor(initialBalance: number) {
    this.balance = initialBalance;
    this.pin = 1234;
    this.id = Math.random().toString(36);
  }
}
```

## Abstract Classes

```typescript
abstract class Shape {
  abstract area(): number;

  describe(): void {
    console.log(`Area: ${this.area()}`);
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
```

## Implements

```typescript
interface Printable {
  print(): void;
}

class Report implements Printable {
  print(): void {
    console.log("Printing report...");
  }
}
```
