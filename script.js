//Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');

//Event listeners
toDoButton.addEventListener('click', addToDo);

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

  toDoInput.value = '';

  toDoList.appendChild(toDoDiv);
}
