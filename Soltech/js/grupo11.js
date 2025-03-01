document.addEventListener("DOMContentLoaded", () => {
    const members = document.querySelectorAll(".member");
    const modals = document.querySelectorAll(".modal");
    const closes = document.querySelectorAll(".close");
    const buttonLink = document.querySelector(".button-link");
    const trailerContainer = document.querySelector(".trailer-container");

    // Eventos para los modales
    members.forEach(member => {
        member.addEventListener("click", () => {
            const memberId = member.getAttribute("data-member-id");
            const modal = document.getElementById(`modal${memberId}`);
            modal.style.display = "block";
            setTimeout(() => {
                modal.querySelector(".modal-content").style.opacity = "1";
            }, 10);
        });
    });

    closes.forEach(close => {
        close.addEventListener("click", () => {
            const modal = close.closest(".modal");
            modal.querySelector(".modal-content").style.opacity = "0";
            setTimeout(() => {
                modal.style.display = "none";
            }, 500);
        });
    });

    window.addEventListener("click", (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.querySelector(".modal-content").style.opacity = "0";
                setTimeout(() => {
                    modal.style.display = "none";
                }, 500);
            }
        });
    });

    // Efecto blanco y negro + desenfoque solo en el trailer-container
    buttonLink.addEventListener("mouseover", () => {
        trailerContainer.classList.add("grayscale");
    });

    buttonLink.addEventListener("mouseout", () => {
        trailerContainer.classList.remove("grayscale");
    });
});