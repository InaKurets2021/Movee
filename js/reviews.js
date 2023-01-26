// Рейтинг звезды
const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item => {
  item.addEventListener('click', () => {
    item.parentNode.dataset.totalValue = item.dataset.itemValue;
  });
});

// Скрыть / показать
const reviewsList = document.querySelector('.reviews__list');
reviewsList.addEventListener('click', e => {
  const current = e.target;
  const reviewsBtn = current.classList.contains('reviews__btn');
  if (reviewsBtn) {
    const commentMore = e.target.parentNode.querySelector('.reviews__comment-more');
    const dots = e.target.parentNode.querySelector('.reviews__comment-dots');
    commentMore.classList.toggle('toggle-text');
    dots.classList.toggle('toggle-dots');
    current.textContent = current.textContent.includes('Читать полностью') ? 'Скрыть' : 'Читать полностью';
  }
});
