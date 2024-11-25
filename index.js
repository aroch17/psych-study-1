const button = document.getElementById('begin');
const div = document.getElementById('container');

const stock_a_button = document.getElementById('stock-a');
const stock_b_button = document.getElementById('stock-b');

i = 0
messages = ["Chosen stock is now at 210, other one is also at 210", "Chosen stock is now at 210, other one is at 218.50", "Chosen stock is now at 189, other one is at 205", "Chosen stock is now at 203, other one is at 194", "Chosen stock is now at 175, other one is at 182", "Chosen stock is now at 149, other one is at 165"]

display_string = `
  <div class="option-container">
    <button id="stock-a" onclick="select_stock_a">Stock A</button>
    <button id="stock-b">Stock B</button>
  </div>
  `

function begin() {
  div.innerHTML = `
    <h3 class="start-msg">Make your choice</h3>
    ${display_string}
  `;
  attachEventListeners();
}

function is_exp_over() {
  return i >= 6
}

function select_stock_a() {
  if (is_exp_over(i)) {
    div.innerHTML = `
    <p class="final">That's it! Thanks for participating.</p>
    `
  }
  else {
      div.innerHTML = `
      <h2>Round ${i+1}</h2>
      <p>You selected: Stock A</p>
      ${messages[i]}
      <h3>Change your selection if you wish:</h3>
      ${display_string}
      `
      i++
      attachEventListeners();
  }
}

function select_stock_b() {
  if (is_exp_over(i)) {
    div.innerHTML = `
    <p class="final">That's it! Thanks for participating.</p>
    `
  }

  else {
      div.innerHTML = `
      <h2>Round ${i+1}</h2>
      <p>You selected: Stock B</p>
      ${messages[i]}
      <h3>Change your selection if you wish:</h3>
      ${display_string}
      `
      i++
      attachEventListeners();
  }
}

function attachEventListeners() {
  const stock_a_button = document.getElementById('stock-a');
  const stock_b_button = document.getElementById('stock-b');
  if (stock_a_button) {
    stock_a_button.addEventListener('click', select_stock_a);
  }
  if (stock_b_button) {
    stock_b_button.addEventListener('click', select_stock_b);
  }
}

button.addEventListener('click', begin);
