// We use generics to informe type script about value type so TS knows
// how to recognize value and know that type value is.
// https://medium.com/@ignatovich.dm/typescript-generics-a-simple-guide-with-practical-examples-ca3492eb821f

// simple function example
function identity(value: any): any {
    return value;
}

const num = identity("lorem");

console.log(num);
// console.log(num.toFixed()); //               TypeError: num.toFixed is not a function after we run the code
//                                              because of toFixed is a function for number values

// Generics resolved the problem:

function identityAgain<T>(value: T): T {
    return value;
}

const number = identityAgain(120);

console.log(number);
// console.log(number.toUpperCase()); //        Property 'toUpperCase' does not exist on type '120' error 
//                                              before we run the code

const str = identityAgain("String");
console.log(str.toUpperCase()); //              Works because TS has undentified the type before

// Sevaral Generic params example

function pair<T, U>(first: T, second: U) {
    return [first, second];
}

const result = pair(10, "Str");
console.log(result);

// Generics for Arrays

// without
function firstFromArr(arr: any[]) {
    return arr[0];
}

function firstFromArray<T>(arr: T[]): T {
    return arr[0];
}

const firstValue = firstFromArray(["lorem", 12, 1]);

console.log(firstValue);

function logLength<T extends { length: number }>(value: T): number {
  return value.length;
}

console.log(logLength(40)) // here TS knows that type is number and number does not have length, it returns undefined but shows error before running the code

function logLengthOfAny(value: any): any {
    return value.length;
}

console.log(logLengthOfAny(40)); // returns undefined when we run the file because of TS does not know whay type the value is