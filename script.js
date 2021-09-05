//Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');

//Event listeners
toDoButton.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteToDo);

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

  toDoInput.value = '';

  toDoList.appendChild(toDoDiv);
}

function deleteToDo(e) {
  const item = e.target;
  if (item.id === 'delete') {
    item.parentNode.remove();
  }
}
