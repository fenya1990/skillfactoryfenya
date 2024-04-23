document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const arrows = document.querySelectorAll('.slider__arrow');
  const dots = document.querySelectorAll('.dot');
  const links = document.querySelectorAll('.slider__link');
  let currentSlide = 0;


  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      if (arrow.classList.contains('left')) {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      } else {
        currentSlide = (currentSlide + 1) % slides.length;
      }
      updateSlide();
    });
  });


  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateSlide();
    });
  });


  function updateSlide() {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });

    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }


  updateSlide();
});
