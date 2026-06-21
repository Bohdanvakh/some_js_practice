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

// 8 task
function delayedGreeting(name, callback) {
    setTimeout(() => {
        callback(`Hello ${name}`);
    }, 5000)
}

delayedGreeting("Bohdan", (message) => {
    console.log(message);
})

// 9 task
function fetchUserData(userId, callback) {
    setTimeout(() => {
        const isSuccess = Math.random() > 0.3;

        if (isSuccess) {
            const user = {
                id: 1002,
                name: "Bohdan",
                email: "bohdan@gmail.com"
            }
            callback(null, user); // виклик функції на яку посилається callback
        } else {
            callback(`Error finding user with id ${userId}`); // виклик функції на яку посилається callback
        }
    }, 1000);
}

// другий параметр кокликаної функції це callback функція яка виконується в функції fetchUserData в місцях
// де воно викликається (рядки 132 та 134)
fetchUserData(1002, (error, result) => {
    if (error) {
        console.log('сталася помилка:', error);
    } else {
        console.log('отримано користувача:', result);
    }
})