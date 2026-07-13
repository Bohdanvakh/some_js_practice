// TASK: refactor code to use promises instead of callbacks

const userLeft = false;
const userWatchingCatMeme = true;

function watch(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: "User Left",
            message: "Error"
        });
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: "User does not watching cat meme",
            message: "Error"
        });
    } else {
        callback("Lalala success!!!");
    }
}

watch((message) => {
    console.log(message)
}, (error) => {
    console.log(error);
});

// the same logic, but use promise instead of callback functions
function watchPromises() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: "User Left",
                message: "Error"
            });
        } else if (userWatchingCatMeme) {
            reject({
                name: "User does not watching cat meme",
                message: "Error"
            });
        } else {
            resolve("Lalala success!!!");
        }
    });
}

watchPromises()
    .then((message) => console.log(message))
    .catch((error) => console.log(error));

// promises to resolve in one .then

const resolveTaskOne = new Promise((resolve, reject) => {
    resolve("Task 1 resolved");
});

const resolveTaskTwo = new Promise((resolve, reject) => {
    resolve("Task 2 resolved");
});

const resolveTaskThree = new Promise((resolve, reject) => {
    resolve("Task 3 resolved");
});

const resolveTaskFour = new Promise((resolve, reject) => {
    resolve("Task 4 resolved");
});

Promise.all([
    resolveTaskOne,
    resolveTaskTwo,
    resolveTaskThree,
    resolveTaskFour
]).then(messages => console.log(messages));