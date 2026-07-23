// REFS to docs: 
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

// INTERSECTION TYPES Об'єднує кілька типів в один
// результат повинен задовольняти всі типи одночасно

type Named = { name: string };
type Aged = { age: number };

type Person = Named & Aged;

const p: Person = { name: "Bohdan", age: 24 };

console.log(p);

// Type Aliases

type Point = {
    x: number;
    y: number;
};

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 200 });

// You can actually use a type alias to give a name to any type at all,
// not just an object type. For example, a type alias can name a union type:

