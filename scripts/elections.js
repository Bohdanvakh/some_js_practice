import fs from 'fs';
import csv from 'csv-parser'
import { resolve } from 'dns';

class Candidate {
    constructor(firstName, lastName, age, party) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.party = party;
    }

    fullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

function getCandidatesFromCSV() {
    return new Promise((resolve, reject) => {
        const candidates = []; 
        fs.createReadStream('candidates.csv')
            .pipe(csv())
            .on('data', (row) => {
                candidates.push(row);
            })
            .on('end', () => {
                console.log('CSV file successfully processed');
                resolve(candidates);
            })
            .on('error', (error) => {
                reject(error);
            })
    });
}

async function createCandidates() {
    const candidatesData = await getCandidatesFromCSV();

    const candidates = candidatesData.map((obj) => {
        return new Candidate(obj.firstName, obj.lastName, obj.age, obj.party);
    });

    return candidates;
}

async function getCandidates() {
    const candidates = await createCandidates();
    candidates.forEach((candidate) => {
        candidate.fullName();
    })
}

// getCandidates();

function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

Array.prototype.myEach = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

const arr = [1, 2, 3, 4, 5];

arr.myEach((num, index, array) => {
    console.log(`Walue: ${num} from array lengt: ${array.length} and index: ${index}`);
})

// myForEach(arr, (num) => {
//     console.log(`Елемент: ${num}`);
// })
