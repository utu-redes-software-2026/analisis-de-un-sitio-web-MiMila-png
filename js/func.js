
document.addEventListener("DOMContentLoaded", () => {
    const formContacto = document.getElementById("formContacto");
    const mensajeForm = document.getElementById("mensajeFormulario");

    if (formContacto) {
        formContacto.addEventListener("submit", (e) => {

            e.preventDefault();

            // Guardar valores de los campos
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const tipoComision = document.getElementById("tipoComision").value;
            const mensaje = document.getElementById("mensaje").value;

        
            if (!nombre || !email || !tipoComision || !mensaje) {
                mostrarMensaje("Por favor, completa todos los campos del formulario.", "error");
                return;
            }

          // largo del mensaje no puede ser menor a 10 caracts
            if (mensaje.length < 10) {
                mostrarMensaje("Por favor, detalla un poco más tu pedido (mínimo 10 caracteres).", "error");
                return;
            }

            // si está bn todo:
            mostrarMensaje("¡Gracias por tu mensaje! Me pondré en contacto contigo pronto. ✨", "exito");
            formContacto.reset();
        });
    }

    function mostrarMensaje(texto, tipo) {
        if (mensajeForm) {
            mensajeForm.textContent = texto;
            mensajeForm.style.color = (tipo === "error") ? "red" : "green";
        }
    }
});