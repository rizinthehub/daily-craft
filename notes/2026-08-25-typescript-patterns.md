# TypeScript Design Patterns

## Singleton
```typescript
class Database {
  private static instance: Database;
  private constructor() {}

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
```

## Factory
```typescript
interface Animal {
  speak(): string;
}

class Dog implements Animal {
  speak() { return "Woof!"; }
}

class Cat implements Animal {
  speak() { return "Meow!"; }
}

function createAnimal(type: "dog" | "cat"): Animal {
  return type === "dog" ? new Dog() : new Cat();
}
```

## Observer
```typescript
type Listener = (data: any) => void;

class EventEmitter {
  private listeners: Map<string, Listener[]> = new Map();

  on(event: string, listener: Listener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(listener);
  }

  emit(event: string, data: any) {
    this.listeners.get(event)?.forEach(fn => fn(data));
  }
}
```

## Builder
```typescript
class QueryBuilder {
  private query = { select: "", from: "", where: "" };

  select(fields: string) {
    this.query.select = fields;
    return this;
  }

  from(table: string) {
    this.query.from = table;
    return this;
  }

  where(condition: string) {
    this.query.where = condition;
    return this;
  }

  build() {
    return `SELECT ${this.query.select} FROM ${this.query.from} WHERE ${this.query.where}`;
  }
}
```

## Strategy
```typescript
interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number) { console.log(`Paid ${amount} via Credit Card`); }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number) { console.log(`Paid ${amount} via PayPal`); }
}
```
