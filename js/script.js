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
}
<script>
  function sendEmail(event) {
    event.preventDefault(); // stop form from actually submitting

    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = encodeURIComponent("Contact from " + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:ptbaraarthojoyo@gmail.com?subject=${subject}&body=${body}`;
  }
</script>

