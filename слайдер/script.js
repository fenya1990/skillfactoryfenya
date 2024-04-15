document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const arrows = document.querySelectorAll('.slider__arrow');
  const dots = document.querySelectorAll('.dot');
  const links = document.querySelectorAll('.slider__link');
  let currentSlide = 0;


  function nextSlide() {
    goToSlide(currentSlide + 1);
  }


  function prevSlide() {
    goToSlide(currentSlide - 1);
  }


  function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    links[currentSlide].classList.remove('active');

    currentSlide = (n + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    links[currentSlide].classList.add('active');
  }


  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      if (arrow.classList.contains('left')) {
        prevSlide();
      } else {
        nextSlide();
      }
    });
  });


  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
  });


  links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      goToSlide(index);
    });
  });


  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  links[currentSlide].classList.add('active');
});