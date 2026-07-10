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
    }, 10000);
});

doSth
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

// console.log('doSth started');

// functions with promises
function fetchUser(id) {
    return new Promise((resolve, reject) => {
        console.log(`Шукаю користувача із ID: ${id}`);
        
        // return user data after 2 sec.
        setTimeout(() => {
            if (id > 0) {
                resolve({id: 1, name: "Bohdan"});
            } else {
                reject(`Can't find user with ID: ${id}`);
            }
        }, 2000);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve, reject) => {
        console.log(`Шукаю пости користувача із ID: ${userId}`);

        // return posts data after 2 sec.
        setTimeout(() => {
            resolve([
                { id: 101, title: "Lorem Ipsum" },
                { id: 102, title: "Dolor sit amet" }
            ]);
        }, 2000);
    });
}

function fetchComments(postId) {
    return new Promise((resolve, reject) => {
        console.log(`Шукаю коментарі до поста ${postId}`);

        // return posts data after 2 sec
        setTimeout(() => {
            resolve(["Cool!", "Thanks for information!"]);
        }, 2000);
    });
}

// call the functions
fetchUser(1)
    .then(user => fetchPosts(user.id))
    .then(posts => fetchComments(posts[0].id))
    .then(comments => console.log(comments))
    .catch(error => console.log(error));
