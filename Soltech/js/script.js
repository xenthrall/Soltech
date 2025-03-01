
//controlamos las secciones mediante el scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");  // Aparece al 50%
                } else {
                    entry.target.classList.remove("visible"); // Se desvanece al salir
                }
            });
        },
        { threshold: 0.5 } // Se activa cuando el 50% de la sección es visible
    );

    sections.forEach(section => observer.observe(section));
});



//Funcion para manejar el boton de regreso al inicio
document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.getElementById("back-to-top");

    // Ocultar el botón al cargar la página
    backToTopBtn.style.display = "none";

    // Función para mostrar u ocultar el botón dependiendo del scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTopBtn.style.display = "block"; // Mostrar botón
        } else {
            backToTopBtn.style.display = "none"; // Ocultar botón
        }
    });

    // Evento para regresar al inicio con animación y ocultar el botón al llegar arriba
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });

        setTimeout(() => {
            backToTopBtn.style.display = "none"; // Oculta el botón después del scroll
        }, 800); // Ajusta el tiempo según la duración del scroll
    });
});

