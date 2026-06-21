// Callbacks practise

// 3 task
function repeat(number, callback) {
    for (let i = 0; i < number; i++) {
        callback(i);
    }
}

repeat(10, function(i) {
    console.log(`Number: ${i}`);
})

// 2 task
function greet(name, callback, message = "Привіт") {
    const greetings =  `${message}, ${name}!`;
    callback(greetings);
}

greet("Bohdan", function(greetings) {
    console.log(greetings)}, "Ласкаво просимо"
);

// 1 task
function math(a, b, operation) {
    return operation(a, b);   
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

console.log(math(20, 10, add));

// 4 task
function myMap(arr, callback) {
    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(callback(arr[i], i, arr));
    }

    return newArray;
}

const myArray = [65, 78, 33, 1001];

myMap(myArray, (value, index) => {
    console.log(`Index: ${index} for value: ${value}`);
})

const arr2 = ["Apple", "Banana", "Mango"];

// 5 task
function myFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }

    return result;
}

const arr3 = myFilter(arr2, function(i) {
    return i.length < 6;
});

console.log(arr3);

let number = 0;
const arr4 = [100, 200, 400];
// 6 task
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

myForEach(arr4, function(value) {
    number = number + value
});

console.log(number); // 700

// 7 task
const arr = [100, 200, 400];

function myReduce(array, callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}

const sum = myReduce(arr, function(accumulator, current) {
    return accumulator + current
}, 20);

console.log(sum); // 720