import { rejects } from "assert";
import axios from "axios";
import { resolve } from "dns";
import * as readline from 'readline';
import fs from "fs";

const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

async function makeHttpRequest() {
    console.log('start');

    const responce = await axios.get(BASE_URL);

    console.log(responce.data);
}

// makeHttpRequest();

function getSomeInputs() {
    console.log("What is your name?");

    const rl = readline.createInterface({
        input: process.stdin,
        putput: process.stdout,
    });

    rl.question('What is your name?', (answer) => {
        console.log(`Hello ${answer}`);
        rl.close();
    })
}

// getSomeInputs();

const request = async (callback) => {
    const request = await axios.get(`https://jsonplaceholder.typicode.com/todos/1000`);
    if (request.status === 200) {
        callback(undefined, request.data);
        console.log(request.data);
    } else {
        callback('coud not fetch data', undefined);
    }
}

// console.log(1);
// console.log(2);

// request((error, data) => {
//     if (error) {
//         console.log({error});
//     } else {
//         console.log({data});
//     }
// });

// console.log(3);
// console.log(4);

// use Promise

const getData = (path: string): Promise<string>  => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
};

// getData('./hello.txt')
//     .then((content) => console.log(content))
//     .catch((error) => console.log(error));

let num = 10;

function createIncrementer(): () => number {
    return () => {
        num =20;
        return num;
    };
};

createIncrementer();

console.log(num);