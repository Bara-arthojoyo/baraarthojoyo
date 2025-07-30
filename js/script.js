const slides = document.querySelectorAll('.product-slide');
const carouselWrapper = document.getElementById('productCarousel');
let activeIndex = 0;

function updateActiveSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === activeIndex) {
      slide.classList.add('active');
    }
  });
  carouselWrapper.style.transform = `translateX(-${activeIndex * 100}%)`;
}

function nextProductSlide() {
  activeIndex = (activeIndex + 1) % slides.length;
  updateActiveSlide();
}

function prevProductSlide() {
  activeIndex = (activeIndex - 1 + slides.length) % slides.length;
  updateActiveSlide();
}

setInterval(nextProductSlide, 5000); // Auto slide every 5 seconds
