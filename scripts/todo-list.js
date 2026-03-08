const todoList = [
    {name: 'todo1', dueDate: '2026-03-08'},
    {name: 'todo2', dueDate: '2026-03-08'}    
];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, dueDate: date } = todoObject
        const html = `
            <p>
                ${name} ${date}
                <button onclick="
                    todoList.splice(${i}, 1);
                    renderTodoList();
                ">Delete</button>
            </p>
        `;
        todoListHTML += html;
    }

    console.log(todoListHTML);
    document.querySelector('.todo-list').innerHTML = todoListHTML;
}

function deleteObject(index) {
    todoList.splice(index, 1);
    renderTodoList();
}

function addTodo() {
    const inputElement = document.querySelector('.name-input');
    const dateInputElement = document.querySelector('.date-input');
    const name = inputElement.value;
    const dueDate = dateInputElement.value;

    todoList.push({name, dueDate});
    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}