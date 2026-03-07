const todoList = ['todo1', 'todo2'];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }

    console.log(todoListHTML);
    document.querySelector('.todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.name-input');
    const name = inputElement.value;

    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}