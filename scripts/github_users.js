import fs from 'node:fs/promises'

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

async function saveToJson(data, filename) {
    const jsonString = JSON.stringify(data, null, 2);

    await fs.writeFile(filename, jsonString);
    
    console.log(`Saved in the file ${filename}`);
}

async function getData(userId) {
    try {
        const user = await getUser(userId);
        const userFollowers = await getUserFollowers(user.login);

        const logins = userFollowers.map(follower => follower.login);

        console.log(logins);

        await saveToJson(logins, 'followers.json');
    } catch (error) {
        console.log(error);
    }
}

getData(randomUserId);