// Promises

// Type-safe Promise creation
interface ApiResponse {
  data: string;
  timestamp: number;
}

const fetchData = new Promise((resolve, reject) => {
    try {
        // Simulating API call
        setTimeout(() => {
            resolve({
                data: 'Success!',
                timestamp: Date.now()
            })
        }, 1000);
    } catch (error) {
        reject(console.log(error));
    }
})

// Async / Await
// Application mechanics

interface User { 
    id: number;
    name: string;
}

async function getUser(id: number): Promise<User> {
    const rawDeta = await fetch(`api/users/${id}`);
    const data = await rawDeta.json();

    return data; // const data: Promise<any>                (TS пропустить, оскільки тип - any)
}

// Щоб реально отримати типізацію, є два підходи

// 1: type assertion

async function fetchUser(id: number): Promise<User> {
    const rawDeta = await fetch(`api/users/${id}`);
    const data = await rawDeta.json();

    return data as User; // interface User
}

// Minus: this is just a promise to the compiler,
// TS does not check the structure at runtime.
// If the API returns something else,
// you will only find out in prod.

// 2: typing a variable immediately upon receipt

async function fetchUserByType(id: number): Promise<User> {
    const response = await fetch(`api/users/${id}`);
    const rawData: User = await response.json(); // const rawData: User

    return rawData;
}

// The difference with approach 1: here you specify 
// the type at the assignment stage, and not "adjust" 
// it when returning. TS still does not check the 
// structure at runtime (.json() will always return 
// any, no matter what type you "cover" it with) - 
// both approaches are equally dangerous in essence, 
// it's just a matter of style, where 
// exactly to place the annotation.
