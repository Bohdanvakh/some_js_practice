// Source: https://www.typescriptlang.org/docs/handbook/utility-types.html

// Partial<Type>
// Constructs a type with all properties of Type set to optional.
// This utility will return a type that represents all subsets of a given type.

interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
    title: "Org sth",
    description: "clear sth"
}

const todo2 = updateTodo(todo1, {
    title: "Organize desk"
});

console.log(todo2.title);

// Required<Type>
// Constructs a type consisting of all properties of Type set to required. The opposite of Partial.

interface Props {
    id?: number;
    name?: string;
    description?: string;
}

// valid cases:
const obj: Props = { id: 120 };
const obj2: Props = { description: 'Lorem ipsum dolor sit amet' };

// invalid case:
// const obj3: Required<Props> = { id: 121, name: "Value" }; // Property 'description' is missing in type '{ id: number; name: string; }' but required in type 'Required<Props>'

// Readonly<Type>
// Constructs a type with all properties of Type
// set to readonly, meaning the properties of the
// constructed type cannot be reassigned.

interface Todo2 {
  title: string;
}
 
const todo: Readonly<Todo2> = {
    title: "title value"
};

// todo.title = "new title value"; // Cannot assign to 'title' because it is a read-only property

// Record<Keys, Type>
// Constructs an object type whose property keys are
// Keys and whose property values are Type. This utility
// can be used to map the properties of a type to another type.

type CatName = "lorem" | "ipsum" | "dolor";

interface CatInfo {
    age: number;
    breed: string;
}

const cats: Record<CatName, CatInfo> = {
    lorem: { age: 12, breed: 'red' },
    ipsum: { age: 10, breed: 'white' },
    dolor: { age: 8, breed: 'brown' },
}

console.log(cats.lorem);

// Pick<Type, Keys>
// Constructs a type by picking the set of properties Keys
// (string literal or union of string literals) from Type.

interface Todo3 {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Pick<Todo3, "title" | "completed">;
 
const todo3: TodoPreview = {
  title: "Clean room",
  completed: false,
};
 
console.log(todo3);

// Omit<Type, Keys>
// Constructs a type by picking all propertiesfrom Type
// and then removing Keys (string literal or union of string literals).

interface Todo4 {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPrev = Omit<Todo4, "description">;

const todo4: TodoPrev = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
};

console.log(todo4);