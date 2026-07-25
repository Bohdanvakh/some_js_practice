// ENUMS

type Statuses = "active" | "open" | "closed";

function getStatus(status: Statuses):string {
    return `Status: ${status}`;
}

console.log(getStatus("active")); // print "active";

const obj = { status: "active" };

// console.log(getStatus(obj.status)); // Argument of type 'string' is not assignable to parameter of type 'Status'.

const obj2 = { status: "active" } as const;

console.log(getStatus(obj2.status)); // print "active";

// case with statuses:

const Status = {
    Idle: "idle",
    Loading: "loading",
    Success: "success",
    Error: "error"
} as const;

type Status = typeof Status[keyof typeof Status];

function render(status: Status) {
    switch(status) {
        case "loading": return "...";
        case "succes": return "done"; // typo that we see before compiling code
        case "error": return "error";
    }
}

