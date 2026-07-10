// TASK: refactor code to use promises instead of callbacks

const userLeft = true;
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