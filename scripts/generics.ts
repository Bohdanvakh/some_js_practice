

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

