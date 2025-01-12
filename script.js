let currentIndex = 0;

document.querySelector(".prev-button").addEventListener("click", () => {
  navigate(-1);
});

document.querySelector(".next-button").addEventListener("click", () => {
  navigate(1);
});

function navigate(direction) {
  const galleryContainer = document.querySelector(".gallery-container");
  const totalImages = document.querySelectorAll(".gallery-item").length;

  currentIndex = (currentIndex + direction + totalImages) % totalImages;
  const offset = -currentIndex * 100;

  galleryContainer.style.transform = `translateX(${offset}%)`;
}

let autoSlideInterval = setInterval(() => {
    navigate(1); 
  }, 3000); 
  
  const gallery = document.querySelector('#gallery');
  gallery.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
  });
  
  gallery.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(() => {
      navigate(1);
    }, 3000);
  });
  