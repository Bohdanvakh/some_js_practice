const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
    })
    .then((data) => {
        console.log(data[0].name);
    })
    .catch((error) => {
        console.log(`Could not get products: ${error}`);
    });

console.log("Started request…");

// base syntax

const doSth = new Promise((resolve, reject) => {
    // some async process
    setTimeout(() => {
        const success =  false;

        if (success) {
            resolve('We have got data!');
        } else {
            reject('Some error with getting data.');
        }
    }, 5000);
})

doSth
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

console.log('doSth started');