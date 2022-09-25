const changeColorBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', onChangeColor);


function onChangeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor()
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
