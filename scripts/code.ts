// Pick<Type, Keys>
// Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type

interface Todo3 {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo3, "title" | "completed">;

const todo: TodoPreview = {
    title: "Lorem",
    completed: false
}

console.log(todo.title);