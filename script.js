function makeCard() {
  let card = document.createElement('card');
  let container = document.querySelector('#item-list');
  let uniqueID = Math.random().toFixed(2);

  card.innerHTML = `

    <div class="card">
        <input type="text" id="${uniqueID}" name="text" placeholder="Enter task...">
        
        </div>
        </div>`;

  container.append(card);
}
document.getElementById('add_item').addEventListener('click', makeCard);
