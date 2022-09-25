const counter = document.querySelector("#counter");
const counterValueId = document.querySelector("#value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnIncrement.addEventListener("click", (event) => {
  const newValue = +counterValueId.textContent + 1;
  counterValueId.innerHTML = newValue;
});

btnDecrement.addEventListener("click", (event) => {
  const newValue = +counterValueId.textContent - 1;
  if (newValue < 0) {
    return;
  } else counterValueId.innerHTML = newValue;
});


