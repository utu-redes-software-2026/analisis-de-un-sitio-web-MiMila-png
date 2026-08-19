// =========================================
// MENÚ RESPONSIVE
// =========================================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", function () {

        menu.classList.toggle("mostrar");

    });

}


// =========================================
// CERRAR MENÚ AL HACER CLICK EN UN ENLACE
// =========================================

const enlacesMenu = document.querySelectorAll(".menu a");

enlacesMenu.forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        if (menu) {
            menu.classList.remove("mostrar");
        }

    });

});


// =========================================
// FORMULARIO
// =========================================

const formulario =
    document.getElementById("formContacto");

const mensajeFormulario =
    document.getElementById("mensajeFormulario");


if (formulario) {

    formulario.addEventListener("submit", function (evento) {

        // Evitamos que el formulario recargue la página
        evento.preventDefault();


        const nombre =
            document.getElementById("nombre").value;


        mensajeFormulario.textContent =
            "¡Gracias " + nombre +
            "! Recibimos tu mensaje.";

        mensajeFormulario.style.color =
            "#635bff";


        // Limpiamos el formulario
        formulario.reset();

    });

}

function myFunction() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    const btn = document.querySelector(".navbar button");
    if (btn) {
        if (body.classList.contains("dark-mode")) {
            btn.textContent = "☀️ Modo claro";
        } else {
            btn.textContent = "🌙 Modo oscuro";
        }
    }
}