document.addEventListener("DOMContentLoaded", () => {
    // Obtiene los botones de cambio de idioma
    const englishBtn = document.getElementById("englishBtn");
    const spanishBtn = document.getElementById("spanishBtn");

    // Obtiene el idioma almacenado en localStorage o establece "es" (español) por defecto
    let currentLang = localStorage.getItem("lang") || "es";

    /**
     * Convierte texto con formato Markdown en HTML
     * - **Texto en negrita** -> <strong>Texto en negrita</strong>
     * - *Texto en cursiva* -> <em>Texto en cursiva</em>
     * @param {string} text - Texto con formato Markdown
     * @returns {string} - Texto convertido en HTML
     */
    function parseMarkdown(text) {
        if (!text) return "";
        return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Convierte negrita (**texto**)
                   .replace(/\*(.*?)\*/g, "<em>$1</em>"); // Convierte cursiva (*texto*)
    }

    /**
     * Carga las traducciones desde un archivo JSON según el idioma seleccionado
     * y actualiza los elementos con el atributo `data-i18n`
     * @param {string} lang - Idioma a cargar ("en" o "es")
     */
    function loadTranslations(lang) {
        fetch("data/content.json") // Ruta del archivo JSON con las traducciones
            .then(response => response.json()) // Convierte la respuesta a JSON
            .then(data => {
                const translations = data[lang]; // Obtiene las traducciones del idioma seleccionado
                if (!translations) return; // Si no hay traducciones, salir de la función

                // Recorre todos los elementos con `data-i18n` y reemplaza su contenido con la traducción
                document.querySelectorAll("[data-i18n]").forEach(element => {
                    const key = element.getAttribute("data-i18n"); // Obtiene la clave de traducción
                    if (translations[key]) {
                        element.innerHTML = parseMarkdown(translations[key]); // Aplica formato Markdown y actualiza el contenido
                    }
                });

                localStorage.setItem("lang", lang); // Guarda la preferencia de idioma en localStorage
                switchLanguage(lang); // Cambia la apariencia de los botones
            })
            .catch(error => console.error("Error cargando traducciones:", error)); // Manejo de errores en la carga de traducciones
    }

    /**
     * Cambia la apariencia de los botones de idioma según el idioma seleccionado
     * @param {string} language - Idioma seleccionado ("en" o "es")
     */
    function switchLanguage(language) {
        if (language === "en") {
            englishBtn.classList.add("active"); // Activa el botón en inglés
            englishBtn.classList.remove("inactive");

            spanishBtn.classList.add("inactive"); // Desactiva el botón en español
            spanishBtn.classList.remove("active");
        } else {
            spanishBtn.classList.add("active"); // Activa el botón en español
            spanishBtn.classList.remove("inactive");

            englishBtn.classList.add("inactive"); // Desactiva el botón en inglés
            englishBtn.classList.remove("active");
        }
    }

    // Agrega eventos de clic a los botones para cambiar el idioma
    englishBtn.addEventListener("click", () => loadTranslations("en"));
    spanishBtn.addEventListener("click", () => loadTranslations("es"));

    // Carga el idioma almacenado o el predeterminado al iniciar la página
    loadTranslations(currentLang);
});
