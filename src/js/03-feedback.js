// 1. Отслеживай на форме событие input, и каждый раз записывай в 
// локальное хранилище объект с полями email и message, в которых 
// сохраняй текущие значения полей формы.Пусть ключом для хранилища 
// будет строка "feedback-form-state".
// 2. При загрузке страницы проверяй состояние хранилища, и если 
// там есть сохраненные данные, заполняй ими поля формы.В противном 
// случае поля должны быть пустыми.
// 3. При сабмите формы очищай хранилище и поля формы, а также выводи 
// объект с полями email, message и текущими их значениями в консоль.
// 4. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500
// миллисекунд.Для этого добавь в проект и используй библиотеку
// lodash.throttle.
import throttle from 'lodash.throttle';

const formRef = document.querySelector(".feedback-form");
const emailRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');
formRef.addEventListener('input', throttle(savesDataToStorage, 500));
formRef.addEventListener('submit', consoleOnSbmit)
function savesDataToStorage() {
    const formObj = {};
    formObj.email = emailRef.value;
    formObj.message = messageRef.value;  
    localStorage.setItem('feedback-form-state', JSON.stringify(formObj))
}

if (localStorage.getItem('feedback-form-state') !== null) {
    const restoredData = JSON.parse(localStorage.getItem('feedback-form-state'));
    emailRef.value = restoredData.email;
    messageRef.value = restoredData.message;
}
function consoleOnSbmit(event){
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')))
    localStorage.removeItem('feedback-form-state')
    formRef.reset();
}
 