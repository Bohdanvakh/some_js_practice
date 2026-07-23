// INTERSECTION TYPES Об'єднує кілька типів в один
// результат повинен задовольняти всі типи одночасно

type Named = { name: string };
type Aged = { age: number };

type Person = Named & Aged;

const p: Person = { name: "Bohdan", age: 24 };

console.log(p);