function sum(a: number, b: number): number {
    return a + b;
    // return "Lorem" // error because of the type that the function returns is number
}

console.log(sum(100, 100));
// console.log(sum("lorem", 100)); // error because of string type instead of number

function name(name?: string) {
    return name;
}

console.log(name());
console.log(name("Bohdan"));

// optional params should be the last in the function params

const sum2 = (a: number, b: number): number => {
    return a + b;
}

console.log(sum2(10, 20));