let num = 10;

function inc(callback) {
    setTimeout(() => {
        callback()}, 0);
}

inc(() => {
    num = 20;
});

console.log(num);