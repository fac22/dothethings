//Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('#button-add-todo');
const toDoList = document.querySelector('.todo-list');
const filter = document.querySelector('.filter-to-do');
const form = document.querySelector('#form-add-todo');

//Event listeners
// toDoButton.addEventListener('click', addToDo);
form.addEventListener('submit', (e) => {
    //preventing default behaviour of form submission
    e.preventDefault();
    addToDo();
});
toDoList.addEventListener('click', deleteToDo);
toDoList.addEventListener('click', markCompleted);
filter.addEventListener('change', filterToDos);

//Focus on load
document.addEventListener('DOMContentLoaded', (e) => {
    toDoInput.focus();
});

//Functions

function addToDo(e) {
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('todo-container');

    const newToDo = document.createElement('li');
    newToDo.innerText = toDoInput.value;
    const warning = document.querySelector('.warning');
    const form = document.querySelector('form');
    if (newToDo.innerText === '') {
        form.style.marginTop = '0';
        return (warning.style.display = 'block');
    } else {
        warning.style.display = 'none';
        form.style.marginTop = '1.5rem';
        newToDo.classList.add('todo-item');
        toDoDiv.appendChild(newToDo);

        //delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('focusable');
        deleteButton.innerHTML = '<img class="icon" src="./delete.svg" />';
        deleteButton.setAttribute('type', 'delete');
        toDoDiv.appendChild(deleteButton);

        //complete button

        const completedButton = document.createElement('button');
        completedButton.classList.add('focusable');
        completedButton.innerHTML = '<img class="icon" src="./tick.svg" />';
        completedButton.setAttribute('type', 'complete');
        toDoDiv.appendChild(completedButton);

        toDoInput.value = '';

        toDoList.appendChild(toDoDiv);
    }
}

function deleteToDo(e) {
    const item = e.target;
    if (item.attributes.type.value === 'delete') {
        item.parentNode.remove();
    }
}

function markCompleted(e) {
    const item = e.target;
    if (item.attributes.type.value === 'complete') {
        item.parentNode.childNodes[0].classList.add('item-completed');
    }
}

function filterToDos(e) {
    const todos = toDoList.childNodes;
    todos.forEach((todo) => {
        let target = e.target.value;
        todo.style.display = 'flex';

        if (target === 'completed') {
            if (todo.childNodes[0].classList[1] !== 'item-completed') {
                todo.style.display = 'none';
            }
        } else if (target === 'uncompleted') {
            if (todo.childNodes[0].classList[1] === 'item-completed') {
                todo.style.display = 'none';
            }
        }
    });
}
