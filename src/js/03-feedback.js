import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onInputData, 1000));
form.addEventListener('submit',onSubmitForm)

let formData = {};

function onInputData(el) {
  // значения свойств объекта равны значением нашего инпута .
    formData[el.target.name] = el.target.value;
  // кидаем полученные данные из оюъекта в localStorage.
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(el) {

    el.preventDefault();
    // проверка на ввод
      if (email.value === "" || message.value === "") {
        return alert("Please, fill the form")
    };
  
  console.log(formData)
  // Чистим localStorage.
  localStorage.removeItem('feedback-form-state');
  // Чистим инпут.
  el.currentTarget.reset();
  // НЕ ЗАБЫТЬ ОЧИСТИТЬ ОБЪЕКТ .
  formData = {};
}


function fromLocalStorage() {
    
  let storage = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
    
  // if (storage) не нужен.
  // добавить в объект с данными - инфу с локального хранилища, чтобы не вылетал один из импутов при обновлении страницы.
  // добавили логический оперотор для того , чтобы убрать undefinde.
      formData.email = storage.email || '';
      formData.message = storage.message || '';
  
      email.value = storage.email || '';
      message.value = storage.message || '';
};

fromLocalStorage();
 
