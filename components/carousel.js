const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showNextItem() {
  carouselItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[currentIndex].classList.add('active');
}

setInterval(showNextItem, 3000); // Change image every 5 seconds