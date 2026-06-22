function getUser(id, callback) {
    setTimeout(() => {
        const user = { id: id, email: 'bohdan@gmail.com' };
        callback(null, user);
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        const posts = [
            { title: "Пост 1", userId: userId },
            { title: "Пост 2", userId: userId }
        ];
        callback(null, posts);
    }, 2000);
}

function saveResult(data, callback) {
    setTimeout(() => {
        console.log("Зберігаємо дані:", data);
        callback(null, "Дані збережено");
    }, 1000);
}

// we call the function from here
getUser(1, (error, user) => {
  if (error) {
    console.log("Помилка:", error);
    return;
  }
  console.log("Отримали користувача:", user);

  getPosts(user.id, (error, posts) => {
    if (error) {
      console.log("Помилка:", error);
      return;
    }
    console.log("Отримали пости:", posts);

    saveResult({ user, posts }, (error, result) => {
      if (error) {
        console.log("Помилка:", error);
        return;
      }
      console.log(result);
    });
  });
});