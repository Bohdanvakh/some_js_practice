// Chaining Promises
// One of the great features of Promises is that they allow you to chain multiple
// asynchronous operations together. When you chain Promises, each .then() block waits 
// for the previous one to complete before it runs.

function boilWater() {
    return new Promise((resolve, reject) => {
        console.log('Boiling water...');
        setTimeout(() => {
            resolve('Water is boiled.');
        }, 2000);
    });
}

function brewCoffee(waterStatus) {
    return new Promise((resolve, reject) => {
        console.log(waterStatus);
        console.log('Coffee bewing...');
        setTimeout(() => {
            resolve('Coffee is brewed.');
        }, 2000);
    });
}

function pourIntoCup(coffeeStatus) {
    return new Promise((resolve, reject) => {
        console.log(coffeeStatus);
        console.log('Pouring into a cup');
        setTimeout(() => {
            resolve('Coffee is ready!');
        }, 2000);
    });
}

boilWater()
    .then(brewCoffee)
    .then(pourIntoCup)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

// Promises methods ---------------------------------------------

// All
// This method accepts an array of Promises and returns a new Promise that resolves
// once all the Promises are fulfilled. If any Promise is rejected, Promise.all() will 
// immediately reject. However, even if rejection occurs, the Promises continue to execute. 
// When handling a large number of Promises, especially in batch processing, using this 
// function can strain the system's memory.

import { setTimeout as delay } from 'node:timers/promises';

const fetchData1 = delay(10000).then(() => 'data from API 1');
const fetchData2 = delay(14000).then(() => 'data from API 2');

Promise.all([fetchData1, fetchData2])
    .then(results => console.log(results))
    .catch(error => console.log(error));

// allSettled
// This method waits for all promises to either resolve or reject and
// returns an array of objects that describe the outcome of each Promise.

const promise1 = Promise.resolve('Success');
const promise2 = Promise.reject('Error');

Promise.allSettled([promise1, promise2])
    .then(results => console.log(results));

// race
// This method resolves or rejects as soon as the first Promise settles, whether it resolves 
// or rejects. Regardless of which promise settles first, all promises are fully executed.

const task1 = delay(2000).then(() => 'Task 1 done');
const task2 = delay(1000).then(() => 'Task 2 done');

Promise.race([task1, task2]).then(result => {
  console.log(result); // 'Task 2 done' (since task2 finishes first)
});

// any
// This method resolves as soon as one of the Promises resolves.
// If all promises are rejected, it will reject with an AggregateError.

const api1 = delay(2000).then(() => 'API 1 success');
const api2 = delay(1000).then(() => 'API 2 success');
const api3 = delay(1500).then(() => 'API 3 success');

Promise.any([api1, api2, api3])
    .then(result => console.log(result))
    .catch(error => console.error('All promises rejected:', error));