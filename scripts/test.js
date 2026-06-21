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