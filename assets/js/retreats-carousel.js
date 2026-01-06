/* ============================================
   RETREATS PAGE - CUSTOM CAROUSEL FUNCTIONALITY
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // Initialize all carousels
  const carousels = document.querySelectorAll('.custom-carousel');

  carousels.forEach(function(carousel) {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Only initialize if there are multiple slides
    if (totalSlides <= 1) {
      return;
    }

    function showSlide(index) {
      // Remove active class from all slides
      slides.forEach(function(slide) {
        slide.classList.remove('active');
      });

      // Add active class to current slide
      slides[index].classList.add('active');
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(currentIndex);
    }

    // Add click event listeners to buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', prevSlide);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', nextSlide);
    }

    // Keyboard navigation
    carousel.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    });

    // Make carousel focusable for keyboard navigation
    carousel.setAttribute('tabindex', '0');
  });

});
