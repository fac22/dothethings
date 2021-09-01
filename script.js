function makeCard() {
  let card = document.createElement('card');
  let container = document.querySelector('#item-list');
  let uniqueID = Math.random().toFixed(2);

  card.innerHTML = `

  <div class="card">
  <input type="text" id="${uniqueID}" name="text" placeholder="Enter task...">
  <button type="button" id="delete-button" onclick="removeCard()">
  <img class="icon" src="./delete.svg" /></button>
  </div>`;

  container.append(card);
}
document.getElementById('add_item').addEventListener('click', makeCard);

function removeCard() {
  let deleteButton = document.getElementById('delete-button');
  deleteButton.parentNode.remove();
}
