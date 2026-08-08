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

// 1

async function fetchUser(id: number): Promise<User> {
    const rawDeta = await fetch(`api/users/${id}`);
    const data = await rawDeta.json();

    return data as User; // interface User
}