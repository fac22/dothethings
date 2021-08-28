//testing for issue #1
//1. Card successfully inserted into DOM when user presses plus icon (click event)
//3. User is able to set text content of card

test('user click on plus sign adds a new todo item to the page', () => {
  // simulate the click event
  const button = document.getElementById('button');
  button.click();

  // verify that the template element contains the expected HTML
  const result = document.querySelector('#card_template');
  equal(result.innerHTML, '');

  // reset the page so it doesn't affect anything else
  result.innerHTML = '';
});

test('user can update the text content of a todo item', () => {
  //selecting the text input field and setting its value
  const input = document.querySelector('input');
  input.value = 'do laundry';

  //selecting the same field and comparing the text content with the value
  const result = document.querySelector('input');
  equal(result.textContent, 'do laundry');

  result.textContent = '';
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
