const anioActual = document.getElementById("anioActual");
if (anioActual) {
  anioActual.textContent = new Date().getFullYear();
}

const botonEnviar = document.getElementById("enviarSolicitud");
const campoEmail = document.getElementById("clienteEmail");
const estadoSolicitud = document.getElementById("estadoSolicitud");

if (botonEnviar && campoEmail && estadoSolicitud) {
  botonEnviar.addEventListener("click", () => {
    const emailCliente = campoEmail.value.trim();

    if (!emailCliente) {
      estadoSolicitud.textContent = "Por favor ingrese su correo.";
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailCliente);
    if (!emailValido) {
      estadoSolicitud.textContent = "Ingrese un correo válido (ejemplo@dominio.com).";
      return;
    }

    const correoEmpresa = "hyrsolucionesintegrales2026@gmail.com";
    const asunto = encodeURIComponent("Solicitud de información - Nuevo cliente");
    const cuerpo = encodeURIComponent(
      `Hola, deseo más información sobre los servicios de H&R Soluciones.\n\nCorreo de contacto del cliente: ${emailCliente}`,
    );

    estadoSolicitud.textContent = "Abriendo aplicación de correo para enviar la solicitud...";
    window.location.href = `mailto:${correoEmpresa}?subject=${asunto}&body=${cuerpo}`;
  });
}
