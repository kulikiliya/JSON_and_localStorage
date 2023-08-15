import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onInputData, 1000));
form.addEventListener('submit',onSubmitForm)

const formData = {};

function onInputData(el) {
    formData[el.target.name] = el.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    console.log(formData);
}

function onSubmitForm(el) {

    el.preventDefault();
    
      if (email.value === "" || message.value === "") {
        return alert("Please, fill the form")
    };
  
  console.log(formData)
  el.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  
}


function fromLocalStorage() {
    
    const storage = JSON.parse(localStorage.getItem('feedback-form-state'));
    

    if (storage) {
        // добавить в объект с данными - инфу с локального хранилища, чтобы не вылетал один из импутов при обновлении страницы
        formData.email = storage.email;
        formData.message = storage.message;

        email.value = storage.email
        message.value = storage.message
    } 
};

fromLocalStorage();
 