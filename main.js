let form = document.getElementById('form');
let fioInvalid = document.getElementById('fioInvalid');
let phoneInvalid = document.getElementById('phoneInvalid');
let fioInput = document.getElementById('floatingInput');
let phoneInput = document.getElementById('phoneInput');
let startDateInput = document.getElementById('startDate');
let successMessage = document.createElement('div');
successMessage.className = 'success-message';

let regexFio = /^[а-яА-ЯёЁ ]+$/u;
let regexPhone =  /^89\d{9}$/;
/* Ввод двнных в формы */
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let formdata = new FormData(form);
    let flag = true;
    
    let fio = formdata.get('fio');
    console.log(fio);
    console.log(regexFio.test(fio));
    fioInvalid.innerText = '';
    fioInput.classList.remove('valid', 'invalid');


    let phone = formdata.get('phone');
    console.log(phone);
    phoneInvalid.innerText = ''; 
    phoneInput.classList.remove('valid', 'invalid');

    let startDate = formdata.get('startDate');
    let endDate = formdata.get('endDate');
    let tripType = formdata.get('tripType');

    /* Обработки ошибок */
    successMessage.innerText = '';

    if (fio.trim() === '') {
        fioInvalid.innerText += 'Поле ФИО не должно быть пустым; ';
        fioInput.classList.add('invalid');
        flag = false;
    }


    if (phone.trim() === '') {
        phoneInvalid.innerText += 'Поле Телефон не должно быть пустым; ';
        phoneInput.classList.add('invalid');
        flag = false;
    }
 else {

        if (fio.length < 4) {
            fioInvalid.innerText += ' Имя слишком короткое; ';
            fioInput.classList.add('invalid');
            flag = false;
        }

        if (!regexFio.test(fio)) {
            fioInvalid.innerText += ' Имя может содержать только кириллицу; ';
            fioInput.classList.add('invalid');
            flag = false;
        }


        if (!regexPhone.test(phone)) {
            phoneInvalid.innerText = 'Телефон должен начинаться с 89 и содержать ровно 11 цифр';
            phoneInput.classList.add('invalid');
            flag = false;
        }
        
        // Проверка даты
        if (!isValidDate(startDate) || !isValidDate(endDate)) {
            flag = false;
        }
    }

    if (flag) {
        fioInput.classList.add('valid');
        phoneInput.classList.add('valid');
        successMessage.innerText = fio + ', Вы успешно отправили форму!!! =))';
        form.appendChild(successMessage);
    }
});

function isValidDate(dateString) {
    if (!dateString) {
        alert('Пожалуйста, выберите дату');
        return false;
    }


    if (selectedDate > nextYear) {
        alert('Выберите дату не позже следующего года');
        return false;
    }

    return true;
}
