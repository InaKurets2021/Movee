const sliderItems = document.querySelectorAll('.slider__item');
const nextBtn = document.querySelector('.cars__slider-arrow--next');
const prevBtn = document.querySelector('.cars__slider-arrow--prev');
const tabs = document.querySelectorAll('.tabs__input');
const dots = document.querySelectorAll('.dots__input');

// По умолчанию (первый слайд, первый таб, первый dot)
let index = 0;
// Активный слайд
const activeSlide = index => {
  sliderItems.forEach(slide => {
    slide.classList.remove('active');
  });
  sliderItems[index].classList.add('active');
};
// Переключение слайда (вперёд)
const nextSlide = () => {
  index = index + 1;
  if (index > sliderItems.length - 1) {
    index = 0;
  }
  activeSlide(index);
  activeTab(index);
  activeDot(index);
};
// Переключение слайда (назад)
const prevSlide = () => {
  index = index - 1;
  if (index < 0) {
    index = sliderItems.length - 1;
  }
  activeSlide(index);
  activeTab(index);
  activeDot(index);
};
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Активный таб
const activeTab = index => {
  tabs.forEach(tab => {
    tab.checked = false;
  });
  tabs[index].checked = true;
};
// Активный dot
const activeDot = index => {
  dots.forEach(dot => {
    dot.checked = false;
  });
  dots[index].checked = true;
};
// Вешаем клик на табы
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', () => {
    index = i;
    activeTab(index);
    activeSlide(index);
    activeDot(index);
  });
}
// Вешаем клик на доты
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', () => {
    index = i;
    activeTab(index);
    activeSlide(index);
    activeDot(index);
  });
}
