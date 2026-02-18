const anio = document.getElementById("anio");
const botonSolicitud = document.getElementById("enviarSolicitud");
const emailInput = document.getElementById("clienteEmail");
const estadoSolicitud = document.getElementById("estadoSolicitud");
const correoEmpresa = "hyrsolucionesintegrales2026@gmail.com";

anio.textContent = new Date().getFullYear();

botonSolicitud.addEventListener("click", () => {
  const emailCliente = emailInput.value.trim();

  if (!emailCliente) {
    estadoSolicitud.textContent = "Por favor, ingrese su correo electrónico.";
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailCliente);
  if (!emailValido) {
    estadoSolicitud.textContent = "El correo ingresado no tiene un formato válido.";
    return;
  }

  const asunto = encodeURIComponent("Solicitud de información - Nuevo cliente");
  const cuerpo = encodeURIComponent(
    `Hola, deseo más información sobre los servicios de H&R Soluciones.\n\nCorreo de contacto del cliente: ${emailCliente}`,
  );

  estadoSolicitud.textContent =
    "Abriendo aplicación de correo para enviar la solicitud...";

  window.location.href = `mailto:${correoEmpresa}?subject=${asunto}&body=${cuerpo}`;
});
