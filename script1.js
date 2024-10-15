document.addEventListener("DOMContentLoaded", function() {
  const sliderImages = document.querySelectorAll('.slider-image');
  let currentIndex = 0;

  // Show the first image
  sliderImages[currentIndex].classList.add('active');

  setInterval(() => {
    sliderImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % sliderImages.length; // Loop back to first image
    sliderImages[currentIndex].classList.add('active');
  }, 5000); // Change image every 5 seconds

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Smooth scrolling
  const links = document.querySelectorAll('.nav-links a');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
``