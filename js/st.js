// Скрипт для первого слайдера
const slider1 = document.querySelector('.slider1');
const prevButton1 = slider1.querySelector('.prev-button1');
const nextButton1 = slider1.querySelector('.next-button1');
const slides1 = Array.from(slider1.querySelectorAll('img'));
const slideCount1 = slides1.length;
let slideIndex1 = 0;

prevButton1.addEventListener('click', showPreviousSlide1);
nextButton1.addEventListener('click', showNextSlide1);

function showPreviousSlide1() {
  slideIndex1 = (slideIndex1 - 1 + slideCount1) % slideCount1;
  updateSlider1();
}

function showNextSlide1() {
  slideIndex1 = (slideIndex1 + 1) % slideCount1;
  updateSlider1();
}

function updateSlider1() {
  slides1.forEach((slide, index) => {
    if (index === slideIndex1) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider1();

// Скрипт для второго слайдера
const slider2 = document.querySelector('.slider2');
const prevButton2 = slider2.querySelector('.prev-button2');
const nextButton2 = slider2.querySelector('.next-button2');
const slides2 = Array.from(slider2.querySelectorAll('img'));
const slideCount2 = slides2.length;
let slideIndex2 = 0;

prevButton2.addEventListener('click', showPreviousSlide2);
nextButton2.addEventListener('click', showNextSlide2);

function showPreviousSlide2() {
  slideIndex2 = (slideIndex2 - 1 + slideCount2) % slideCount2;
  updateSlider2();
}

function showNextSlide2() {
  slideIndex2 = (slideIndex2 + 1) % slideCount2;
  updateSlider2();
}

function updateSlider2() {
  slides2.forEach((slide, index) => {
    if (index === slideIndex2) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider2();
