// The goal of this workshop is to create an app that allows a user to input a number into a number bank. The user can then sort the numbers in the bank into one of two categories: odd or even.

// Requirements
// For this workshop, you'll be starting from scratch! You are highly encouraged to reference previous solutions. Write JS to build an application that meets the following requirements:

// index.html is not modified. All elements are generated via JS.
// The application contains a form that allows users to input a number.
// When the user clicks the "Add number" button, the number they entered into the input field should be added to the number bank.
// The number bank should display all of the numbers that the user has entered.
// When the "Sort 1" button is clicked, the first number in the number bank is removed and placed into either the odd or even category.
// When the "Sort All" button is clicked, all numbers in the number bank are moved into either the odd or even category.
// Numbers are moved into the correct category based on whether they are odd or even.
// The numbers in the bank, odd category, and even category are stored as state variables.
// Functions are used to organize logic involving state changes.
// The application is rerendered whenever state changes.
// UI elements are organized into component functions.
// Event listeners modify state. They do not directly modify the document.

let bank = [];
let odd = [];
let even = [];

function setBank(number) {
  //   if (typeof number !== "number") return alert("This is not a number mate!");
  //   let bank = bank.push(number);
  console.log("setBank was called");
}

function sort1([numbers]) {
  console.log("Sort 1 was called");
}

function sortAll([numbers]) {
  console.log("sortALL was called");
}

function Form() {
  const $form = document.createElement("form");
  $form.innerHTML = `<label>
 Add a number to the bank: 
 <input name='number' type="text"/>
</label>
<button type="submit" data-action="add"> Add number</button>
<button type="submit" data-action="sort1">Sort 1</button>
<button type="submit" data-action="sortAll">Sort All</button>
<h2>Bank</h2>
    <div> numbers will be inserted here</div>
<h2>Odds</h2>
    <div> numbers will be inserted here</div>

<h2>Evens</h2>
    <div> numbers will be inserted here</div>
    `;
  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    const action = event.submitter.dataset.action;

    if (action === "add") {
      const data = new FormData($form);
      const input = data.get("number");
      setBank(input);
    } else if (action === "sort1") {
      sort1(bank);
    } else if (action === "sortAll") {
      sortAll(bank);
    }
  });
  return $form;
}

render();

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `<h1>Odds & Events</h1>
    <Form></Form>`;
  $app.querySelector("Form").replaceWith(Form());
}

render();
