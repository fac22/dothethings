//Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');
const filter = document.querySelector('.filter-to-do');

//Event listeners
toDoButton.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteToDo);
toDoList.addEventListener('click', markCompleted);
filter.addEventListener('change', filterToDos);

//Functions

function addToDo(e) {
  //preventing default behaviour of form submission
  e.preventDefault();

  const toDoDiv = document.createElement('div');
  toDoDiv.classList.add('todo-container');

  const newToDo = document.createElement('li');
  newToDo.innerText = toDoInput.value;
  newToDo.classList.add('todo-item');
  toDoDiv.appendChild(newToDo);

  //delete button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<img class="icon" src="./delete.svg" />';
  deleteButton.id = 'delete';
  toDoDiv.appendChild(deleteButton);

  //complete button

  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<img class="icon" src="./tick.svg" />';
  completedButton.id = 'checked';
  toDoDiv.appendChild(completedButton);

  toDoInput.value = '';

  toDoList.appendChild(toDoDiv);
}

function deleteToDo(e) {
  const item = e.target;
  if (item.id === 'delete') {
    item.parentNode.remove();
  }
}

function markCompleted(e) {
  const item = e.target;
  if (item.id === 'checked') {
    item.parentNode.childNodes[0].classList.add('item_checked');
  }
}

function filterToDos(e) {
  const todos = toDoList.childNodes;
  todos.forEach((todo) => {
    let target = e.target.value;
    todo.style.display = 'flex';

    if (target === 'completed') {
      if (todo.childNodes[0].classList[1] !== 'item_checked') {
        todo.style.display = 'none';
      }
    } else if (target === 'uncompleted') {
      if (todo.childNodes[0].classList[1] === 'item_checked') {
        todo.style.display = 'none';
      }
    }
  });
}
