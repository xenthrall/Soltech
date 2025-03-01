let index = 0;

function moveSlide(step) {
    const carousel = document.querySelector(".carousel");
    const totalSlides = document.querySelectorAll(".slide").length;

    index += step;

    if (index < 0) {
        index = totalSlides - 1; // Ir a la última imagen
    } else if (index >= totalSlides) {
        index = 0; // Volver a la primera imagen
    }

    const offset = -index * 100; // Se mueve en base al ancho de la imagen (100%)
    carousel.style.transform = `translateX(${offset}%)`;
}


