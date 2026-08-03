// SOURCE: https://www.typescriptlang.org/docs/handbook/2/narrowing.html

function padLeft(padding: number | string, input: string): string {
    // throw new Error("Not implemented yet!");
    if(typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}

// Equality narrowing
function example(x: string | number, y: string | boolean) {
    if (x === y) {
        x.toUpperCase(); // (method) String.toUpperCase(): string
        x.toLowerCase(); // (method) String.toLowerCase(): string
    } else {
        console.log(x);
        console.log(y);
    }
}

// When we checked that x and y are both equal in the above example,
// TypeScript knew their types also had to be equal. Since string is
// the only common type that both x and y could take on, TypeScript
// knows that x and y must be strings in the first branch.


// JavaScript’s looser equality checks with == and != also get narrowed
// correctly. If you’re unfamiliar, checking whether something == null
// actually not only checks whether it is specifically the value null 
// it also checks whether it’s potentially undefined. The same
// applies to == undefined: it checks whether a value is
// either null or undefined.

interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value != null) {
    console.log(container.value);
 
    // Now we can safely multiply 'container.value'.
    container.value *= factor;
  }
}