// extends keyword is used to create a class that is a child of another class
// This child class inherits properties and methods from the parent class,
// allowing for code reuse and a hierarchical class structure.

class Vehicle {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    start(): void {
        console.log(`${this.brand} vehicle starts.`);
    }
}

class Car extends Vehicle {
    start(): void {
        console.log(`${this.brand} car starts.`);
    }
}

const myCar = new Car('Audi');
myCar.start(); // Audi car starts

// Unlike extends, the implements the keyword is exclusive to TypeScript.
// It is used when a class needs to adhere to a specific interface,
// ensuring that the class implements all the methods and properties
// defined in the interface. This is particularly useful for defining
// a contract that multiple classes can follow.

interface Appliance {
    brand: string;
    turnOn(): void;
}

class WashingMachine implements Appliance {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    turnOn(): void {
        console.log(`${this.brand} washing machine is now on.`);
    }
}

const myWashingMachine = new WashingMachine('LG');
myWashingMachine.turnOn(); // LG washing machine is now on.