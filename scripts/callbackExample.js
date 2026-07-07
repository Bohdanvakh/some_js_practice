const database = {
  users: [
    { id: 1, name: "Богдан", email: "bohdan@gmail.com" },
    { id: 2, name: "Олена", email: "olena@gmail.com" },
    { id: 3, name: "Максим", email: "maksym@gmail.com" }
  ]
};

function find(id, callback) {
    const user = database.users.find(user => user.id === id);

    if (user) {
        callback(null, user);
    } else {
        callback("Lalala Error");
    }
}

find(2, (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

function workWithString(value, callback) {
    if (typeof value !== "string") {
        callback("Помилка! Переданий аргумент не є рядком.");
        return;
    }

    callback(null, value);
};

function handleResult(callback) {
    return (err, result) => {
        if (err) {
            console.log(err);
            return;
        }

        callback(result);
    }
};

workWithString(12, handleResult(result => {
    console.log(result);
}));

function modifyArray(arr, callback) {
    if (arr instanceof Array) {
        callback(null, arr);
    } else {
        callback("Array type error");
    }
}

const myArr = [0, 1, 2, 3];

modifyArray(myArr, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

function doubleValue(value, callback) {
    if (typeof value === "number") {
        let letValue = value * 2;
        callback(null, letValue);
    } else {
        callback("error");
    }
}

doubleValue(100, (err, val) => {
    if (err) {
        console.log(err);
    } else {
        console.log(val);
    }
});