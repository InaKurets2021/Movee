const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link');

// По клику на бургер, трансформируем бургер в крестик, открываем меню, запрещаем скролл
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  if (document.body.classList.contains('no-scroll')) {
    document.body.classList.remove('no-scroll');
  } else {
    document.body.classList.add('no-scroll');
  }
});

// По клику на ссылки в мобильно меню, трансформируем крестик в бургер, закрываем меню, отменяем запрет скролла
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});
