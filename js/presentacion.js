let index2 = 0;

function moveSlide2(step) {
    const carousel = document.querySelector(".carousel2");
    const totalSlides = document.querySelectorAll(".slide2").length;

    index2 += step;

    if (index2 < 0) {
        index2 = totalSlides - 1; // Ir a la última imagen
    } else if (index2 >= totalSlides) {
        index2 = 0; // Volver a la primera imagen
    }

    const offset = -index2 * 100; // Se mueve en base al ancho de la imagen (100%)
    carousel.style.transform = `translateX(${offset}%)`;
}
