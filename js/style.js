

// Скрипт первого слайдера
function initSlider1() {
  // Код для инициализации и работы со слайдером 1
}

// Скрипт второго слайдера
function initSlider2() {
  // Код для инициализации и работы со слайдером 2
}

// Вызов функций для инициализации слайдеров
initSlider1();
initSlider2();


var slider1 = {
  init: function() {
    // Код для инициализации и работы со слайдером 1
  

const slider = document.querySelector('.slider');
const prevButton = slider.querySelector('.prev');
const nextButton = slider.querySelector('.next');
const slides = slider.querySelectorAll('img');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, slideIndex) => {
    if (slideIndex === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

prevButton.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
});

showSlide(currentIndex);
  }
};

// Получаем элементы слайдера
var slider2 = {
  init: function() {
var slider = document.querySelector('.sleep');
var sliderImages = document.querySelectorAll('.sleep img');

// Устанавливаем начальный индекс слайда
var currentSlide = 0;

// Устанавливаем обработчики событий для кнопок
var prevButton = document.querySelector('.previu');
var nextButton = document.querySelector('.nexton');

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPrevSlide() {
  sliderImages[currentSlide].style.display = 'none';

  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = sliderImages.length - 1;
  }

  sliderImages[currentSlide].style.display = 'block';
}

// Функция для показа следующего слайда
function showNextSlide() {
  sliderImages[currentSlide].style.display = 'none';

  currentSlide++;

  if (currentSlide >= sliderImages.length) {
    currentSlide = 0;
  }

  sliderImages[currentSlide].style.display = 'block';
}
  }
};
slider1.init();
slider2.init();


// Получаем все элементы списка
var ItiItems = document.querySelectorAll('li');

// Проходимся по каждому элементу списка и добавляем обработчик события
ItiItems.forEach(function(item) {
  item.addEventListener('click', function() {
    
    // Проверяем, есть ли у текущего элемента класс "active"
    var isActive = this.classList.contains('active');
    
    // Если у текущего элемента уже есть класс "active", удаляем его
    if (isActive) {
      this.classList.remove('active');
    } 
    // Если у текущего элемента нет класса "active", добавляем его
    else {
      this.classList.add('active');
    }
  });
});


