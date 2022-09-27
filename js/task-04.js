const counter = document.querySelector("#counter");
const counterValueId = document.querySelector("#value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

btnIncrement.addEventListener("click", (event) => {
  counterValue = +counterValueId.textContent + 1;
  counterValueId.innerHTML = counterValue;
});

btnDecrement.addEventListener("click", (event) => {
  counterValue = +counterValueId.textContent - 1;
  if (counterValue < 0) {
    return;
  } else counterValueId.innerHTML = counterValue;
});


