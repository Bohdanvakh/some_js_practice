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
    .then(boilWaterResult => brewCoffee(boilWaterResult))
    .then(brewCoffeeResult => pourIntoCup(brewCoffeeResult))
    .then(pourIntoCupResult => {
        console.log(pourIntoCupResult);
    })
    .catch(error => {
        console.log(error);
    });