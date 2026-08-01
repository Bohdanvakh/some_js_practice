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

// Without generics, we would either have to give the identity function a specific type:

function ident(arg: number): number {
    return arg;
}

// or we can use "any" type

function identAny(arg: any): any {
    return arg;
}

// While using any is certainly generic in that it will cause the function to accept
// any and all types for the type of arg, we actually are losing the information about 
// what that type was when the function returns. If we passed in a number, the only
// information we have is that any type could be returned.

// Instead, we need a way of capturing the type of the argument in such a way that we
// can also use it to denote what is being returned. Here, we will use a type variable,
// a special kind of variable that works on types rather than values.

function indentGen<Type>(agr: Type):Type {
    return agr;
}

// We’ve now added a type variable Type to the identity function. This Type allows us to
// capture the type the user provides (e.g. number), so that we can use that information later. 

// Once we’ve written the generic identity function, we can call it in one of two ways.
// The first way is to pass all of the arguments, including the type argument, to the function:

const output = indentGen<string>("Lorem ipsum"); // const output: string
const output2 = indentGen("Lorem Ipsum");        // const output2: "Lorem Ipsum"

