const usersUrl = `https://api.github.com/users`;

async function getUsers() {
    const githubResponse = await fetch(usersUrl);
    const githubUsers = await githubResponse.json();

    console.log(githubUsers);
}

// getUsers();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const randomUserId = getRandomInt(1, 10);
const randomUserId = 9;


async function getUser(userId) {
    const githubResponse = await fetch(usersUrl + `/${userId}`);
    const user = await githubResponse.json();

    return user;
}

async function getUserFollowers(userId) {
    const githubResponse = await fetch(usersUrl + `/${userId}/followers`);
    const userFollowers = await githubResponse.json();

    return userFollowers;
}

async function getData(userId) {
    try {
        const user = await getUser(userId);
        const userFollowers = await getUserFollowers(user.login);

        console.log(userFollowers);
    } catch (error) {
        console.log(error);
    }
}

getData(randomUserId);