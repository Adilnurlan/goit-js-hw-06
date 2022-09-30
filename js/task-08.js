const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    // console.log(formElements)
    const email = formElements.email.value;
    const password = formElements.password.value;
    
    const formData = {
        email,
        password,
    }
    
    if (formData.email === '' || formData.password === '') {
        alert('Все поля должны быть заполнены');
    } else if (formData.email !== '' || formData.password !== '') {
        console.log(formData);
        form.reset();
    }
}


