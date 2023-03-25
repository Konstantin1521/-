// Получаем элементы DOM
const catalog = document.querySelector('.catalog');
const modal = document.querySelector('.modal');
const modalImg = modal.querySelector('img');
const modalClose = modal.querySelector('.modal__close');

// Функция для открытия модального окна
function openModal(event) {
  // Отменяем стандартное поведение ссылки
  event.preventDefault();
  // Получаем ссылку на изображение
  const imgUrl = event.target.getAttribute('src');
  // Устанавливаем изображение в модальное окно
  modalImg.setAttribute('src', imgUrl);
  // Отображаем модальное окно
  modal.classList.add('modal--open');
}

// Функция для закрытия модального окна
function closeModal() {
  // Скрываем модальное окно
  modal.classList.remove('modal--open');
}

// Добавляем обработчик клика на каждое изображение в каталоге
const images = catalog.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener('click', openModal);
});

// Добавляем обработчик клика на кнопку закрытия модального окна
modalClose.addEventListener('click', closeModal);