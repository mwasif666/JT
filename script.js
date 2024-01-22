const next = document.querySelector(".next");
const prev = document.querySelector(".previous");
const slides = document.querySelectorAll(".slide");

let index = -1; // Start with index -1 to initially show no slide
display(index);

function display(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  if (index >= 0) {
    slides[index].style.display = "flex";
  }
}

function nextSlide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  display(index);
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  display(index);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
