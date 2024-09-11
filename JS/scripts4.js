const images = ["image/image1.png", "image/image2.png", "image/image4.png"];
let index = 0;

function suivanteImage() {
  index = (index + 1) % images.length;
  document.getElementById("slider-image").src = images[index];
}

function precedenteImage() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("slider-image").src = images[index];
}
// TP 3 : Slider d'images basique
// Objectif
// Créer un slider d'images avec des boutons pour naviguer entre les images.

// Instructions
// Créez un fichier index.html et un fichier style.css.
// Ajoutez plusieurs images dans le fichier HTML.
// Utilisez du JavaScript pour créer la fonctionnalité de navigation entre les images.
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Initialize the slider
showSlide(slideIndex);
