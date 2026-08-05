// The problem generics solve with a simple example:

// Without generics
function getFirstElement(arr: any[]): any {
    return arr[0];
}

const numbers = [0, 1, 2];

const firstNumber = getFirstElement(numbers); // firstNumber type is 'any'
// We've lost the information that this is a number!

// With generics - we preserve type information
function getFirstE<T>(arr: T[]): T {
    return arr[0];
}

const firstNum = getFirstE(numbers); // firstNum type is 'number'
// TypeScript knows this is a number!

// Type Parameter Naming Conventions
// Common type parameter names include:
// T: Type (general purpose)
// K: Key
// V: Value
// E: Element
// P: Property

// 1. Generic Functions

function swap <T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

const swapResult = swap<string, number>(["hello", 22]); // Type is [number, string]
const swap2 = swap(["44", 44]); // Type is [number, string]

console.log(swapResult);
console.log(swap2);

// Generic Interfaces
// Generic interface for a data repository

interface Repository<T> {
    findById(id: string): Promise<T>;
    save(item: T): Promise<void>;
    delete(id: string): Promise<void>;
    findAll(): Promise<T[]>;
}

// Implementation for specific type
interface User {
    id: string;
    name: string;
    email: string;
}

class UserRepository implements Repository<User> {
    async findById(id: string): Promise<User> {
        return {} as User;
    }

    async save(user: User): Promise<void> {
        return
    }

    async delete(id: string): Promise<void> {
        return
    }

    async findAll(): Promise<User[]> {
        // Implementation here
        return [];
    }
}

// Generic Classes

class Queue<T> {
    private data: T[] = [];

    push(item: T): void {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }

    peek(): T | undefined {
        return this.data[0];
    }
}

// Usage
const queue = new Queue<number>();
queue.push(19); // OK because of number argument
// queue.push("10"); // Argument of type 'string' is not assignable to parameter of type 'number'

// Advanced Generic Concepts
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(item: T): void {
    console.log(item.length);
}

// These work because they have a length property
logLength("Hello"); // String has length
logLength([1, 2, 3]); // Array has length
logLength({ length: 10 }); // Object with length property

// This would error
// logLength(123); // Error: Number doesn't have length property

// Generic Best Practices and Common Patterns
// Factory Pattern with Generics

interface Factory<T> {
    create(): T;
}

class CarFactory implements Factory<Car> {
    create(): Car {
        return new Car();
    }
}

class Car {
    drive() {
        console.log("Vroom!");
    }
}

const newCar = new Car();

newCar.drive();

const factory = new CarFactory();
const car = factory.create();
car.drive();

// Real world usage:
// API Response wrapper

interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
    timestemp: Date;
}

interface NewUser {
    id: number;
    name: string;
}

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
    const response = await fetch(url);
    return await response.json();
}

// Usage

const user = await fetchData<NewUser>(`/api/user/1`);
console.log(user.data.name); // TypeScript knows this exists!

