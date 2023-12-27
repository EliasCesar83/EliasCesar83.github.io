// Получаем элементы слайдера
const sliderContainer = document.getElementById('slider-container');
const sleepSlides = Array.from(sliderContainer.querySelectorAll('.sleep img'));
const prevButton = sliderContainer.querySelector('.previu');
const nextButton = sliderContainer.querySelector('.nexton');

// Устанавливаем индекс текущего слайда
let currentSlideIndex = 0;

// Функция для отображения текущего слайда
function showSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

// Обработчик клика на кнопку "Previous"
prevButton.addEventListener('click', () => {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    showSlide();
});

// Обработчик клика на кнопку "Next"
nextButton.addEventListener('click', () => {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlide();
});

// Показываем первый слайд при загрузке страницы
showSlide();



