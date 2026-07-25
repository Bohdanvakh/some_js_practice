// REFS: https://www.w3schools.com/typescript/typescript_tuples.php

// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array:

let newTuple: [boolean, string, string];

newTuple = [true, "hello", "world"];

console.log(newTuple); // returns array of values

// newTuple = [true, 'hello', 'world', 20]; // ERROR: Source has 4 element(s) but target allows only 3.
// Even though we have a boolean, string, and number the order matters.

// A good practice is to make your tuple readonly
newTuple.push("One more value");

console.log(newTuple); // [ true, 'hello', 'world', 'One more value' ]

// Tuples only have strongly defined types for the initial values:

const readOnlyTuple: readonly [boolean, number] = [true, 100];

// readOnlyTuple.push("one more value"); // Property 'push' does not exist on type 'readonly [boolean, number]'

// Optional elements

let arr: [x: string, y: string, z?: string];

arr = ["Hello", "World"];
console.log(arr); // [ 'Hello', 'World' ]

arr.push("third param");
console.log(arr); // [ 'Hello', 'World', 'third param' ]

function distance([x1, y1]: [x1: number, x2: number], [x2, y2]: [x2: number, y2: number]): number {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

console.log(distance([100, 50], [200, 30]));