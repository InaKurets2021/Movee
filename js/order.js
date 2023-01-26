// Показать / скрыть Дополнительные услуги
const additionalTrigger = document.querySelector('.additional-services__button');
const additionalBlock = document.querySelector('.additional-services__list');

additionalTrigger.addEventListener('click', () => {
  additionalBlock.classList.toggle('additional-services__list--active');
  additionalTrigger.classList.toggle('js-rotate');
});
// Валидация полей формы
const form = document.querySelector('.form');
const inputName = document.querySelector('.form__contacts-name');
const inputPhone = document.querySelector('.form__contacts-phone');

form.addEventListener('submit', e => {
  if (inputName.value === '') {
    e.preventDefault();
    inputName.classList.add('error');
  } else {
    inputName.classList.remove('error');
  }

  if (inputPhone.value === '') {
    e.preventDefault();
    inputPhone.classList.add('error');
  } else {
    inputPhone.classList.remove('error');
  }
});
// Добавление города
const inputCity = document.querySelector('.cities__add-input');
const selectCities = document.querySelector('.cities__select');

inputCity.addEventListener('keydown', function (event) {
  if (event.key == 'Enter') {
    event.preventDefault();
    let newOption = new Option(event.target.value, '');
    selectCities.append(newOption);
    inputCity.value = '';
  }
});

// Таймер
const timer = document.querySelector('.form__footer-timer');

let time = new Date().setHours(new Date().getHours() + 6);

const timerId = setInterval(() => {
  const now = new Date().getTime();

  const distance = time - now;

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  timer.innerHTML = `${hours}:${minutes}:${seconds}`;

  if (distance < 0) {
    clearInterval(timerId);
    timer.innerHTML = 'Время истекло';
    timer.style.fontSize = '5rem';
    timer.style.lineHeight = '4rem';
  }
}, 1000);
