//testing for issue #1
//1. Card successfully inserted into DOM when user presses plus icon (click event)
//3. User is able to set text content of card

test('user click on plus sign adds a new todo item to the page', () => {
  // simulate the click event
  const button = document.getElementById('add_item');
  button.click();

  //verify that the element has been inserted into the DOM with a unique ID

  const result = document.getElementById('some_id');
  if (result) console.log('elem exists');
  else console.log('elem does not exist');

  // verify that the element contains the expected HTML
  equal(result.innerHTML, '');

  // reset the container that holds the todo items
  document.getElementById('#item-list').innerHTML = '';
});

test('user can update the text content of a todo item', () => {
  //selecting the text input field and setting its value
  const input = document.querySelector('input');
  input.value = 'do laundry';

  //selecting the same field and comparing the text content with the value
  const result = document.querySelector('input');
  equal(result.textContent, 'do laundry');

  // reset the page so it doesn't affect anything else
  result.textContent = '';
});

//testing for issue #2
// 1. Check things off a list so that the user can see what they've done

test('Checking an entry marks it as complete', () => {
  // get first item in the list. I'm assuming that all the entries in the list are not completed and that's why I'm picking the first item in the list.
  const item = document.querySelector('#item-list .item:first-child');

  // verify that such an item exist. I belive it's important that we run the "user click on plus sign adds a new todo item to the page" test before this test.
  if (!item) {
    console.log('elem does not exist');
  } else {
    // click on the element
    item.click();
    // verify that the item has the class 'completed'
    if (item.classList.contains('completed')) {
      console.log('item successfully marked as completed');
    } else {
      console.log("item wasn't marked as completed");
    }
  }
});

//testing for issue #3
//1. Card successfully removed from the DOM when user presses plus delete (click event)

test('user clicks on delete button and removes the todo item from the page', () => {
  // simulate the click event
  const button = document.getElementById('remove_item');
  button.click();

  //verify that the element has been removed from the DOM
  const result = document.getElementById('some_id');
  if (result) console.log('elem exists');
  else console.log('elem does not exist');
});

//test helpers
function equal(actual, expected, message) {
  if (actual === expected) {
    const defaultMessage = `Expected ${expected} and received ${actual}`;
    console.info('Pass: ' + (message || defaultMessage));
  } else {
    const defaultMessage = `Expected ${expected} but received ${actual} instead`;
    console.error('Fail: ' + (message || defaultMessage));
  }
}

function notEqual(actual, expected, message) {
  if (actual !== expected) {
    const defaultMessage = `${expected} is different to ${actual}`;
    console.info('Pass: ' + (message || defaultMessage));
  } else {
    const defaultMessage = `${expected} is the same as ${actual}`;
    console.error('Fail: ' + (message || defaultMessage));
  }
}

function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd(name);
}
