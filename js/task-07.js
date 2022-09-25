const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputRange.addEventListener('input', onTextRange);

function onTextRange(event) {
    text.style.fontSize = `${event.currentTarget.value}` + 'px';
}
