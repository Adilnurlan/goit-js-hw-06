const inputSmth = document.querySelector('#validation-input');

inputSmth.addEventListener('blur', onBlurChange);

function onBlurChange(event) {
    console.log(event.currentTarget.value.length)
    console.log(+inputSmth.dataset.length)
    if (event.currentTarget.value.length === +inputSmth.dataset.length) {
        return inputSmth.classList.add('valid');
    } else {
        return inputSmth.classList.add('invalid');
    }
}
    