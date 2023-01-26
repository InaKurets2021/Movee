const servicesBtn = document.querySelectorAll('.services__btn');
const servicesText = document.querySelectorAll('.services__text');

// Показать / Скрыть
servicesBtn.forEach((item, index) => {
  item.addEventListener('click', e => {
    item.classList.toggle('rotate');
    servicesText[index].classList.toggle('show');
  });
});
