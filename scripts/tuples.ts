// REFS: https://www.w3schools.com/typescript/typescript_tuples.php

// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array:

let newTuple: [boolean, string, string];

newTuple = [true, "hello", "world"];

console.log(newTuple); // returns array of values

// newTuple = [true, 'hello', 'world', 20]; // ERROR: Source has 4 element(s) but target allows only 3.
