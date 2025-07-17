document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById("themeToggle");
    const body = document.body;

    // Verificar tema guardado en localStorage
    if (localStorage.getItem("theme") === "lunar") {
        body.classList.add("lunar");
    } else {
        body.classList.add("solar");
    }

    // Función para cambiar el tema
    themeToggleButton.addEventListener("click", function () {
        if (body.classList.contains("solar")) {
            body.classList.remove("solar");
            body.classList.add("lunar");
            localStorage.setItem("theme", "lunar");
        } else {
            body.classList.remove("lunar");
            body.classList.add("solar");
            localStorage.setItem("theme", "solar");
        }

        // Animación del botón
        themeToggleButton.classList.add("clicked");
        setTimeout(() => themeToggleButton.classList.remove("clicked"), 300);
    });
});
