// ENUMS

type Status = "active" | "open" | "closed";

function getStatus(status: Status):string {
    return `Status: ${status}`;
}

console.log(getStatus("active")); // print "active";

const obj = { status: "active" };

// console.log(getStatus(obj.status)); // Argument of type 'string' is not assignable to parameter of type 'Status'.

const obj2 = { status: "active" } as const;

console.log(getStatus(obj2.status)); // print "active";

