const todolist = [{
    name: '',
    duedate: '',
}];

renderTodolist();

function renderTodolist() {
    let renderlist = '';
    for (let i = 0; i < todolist.length; i++) {
        const todo = todolist[i];
        const { name, duedate } = todo;
        let html = `<div>${name} </div>
                    <div>${duedate} </div>`;
                    if (name !== '' && duedate !== '') {
                    html += `<button onclick="removeTodo(${i})" class='del'>Delete</button>`;
                    renderlist += html;
                    }
    }
    document.querySelector('.todohtm-js').innerHTML = renderlist;
}

function addTodo() {
    const input = document.querySelector('.js-input');
    const name = input.value;
    const getdate = document.querySelector('.datejs');
    const duedate = getdate.value;
    if (name === '') {
        alert('TODO-Name cannot be empty');
    } else if (duedate === '') {
        alert('DueDate cannot be empty');
    } else {
        todolist.push({ name, duedate });
        console.log(todolist);
        input.value = '';
        getdate.value = '';
        renderTodolist();
    }
}

function removeTodo(index) {
    todolist.splice(index, 1);
    renderTodolist();
}