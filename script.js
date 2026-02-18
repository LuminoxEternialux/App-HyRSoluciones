const anio = document.getElementById("anio");
const botonSolicitud = document.getElementById("enviarSolicitud");
const emailInput = document.getElementById("clienteEmail");
const estadoSolicitud = document.getElementById("estadoSolicitud");
const correoEmpresa = "hyrsolucionesintegrales2026@gmail.com";

const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");
const revealElements = document.querySelectorAll(".reveal");

anio.textContent = new Date().getFullYear();

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 },
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.dataset.tab;

    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-selected", "false");
    });

    tabPanels.forEach((panel) => {
      panel.classList.remove("active");
      panel.hidden = true;
    });

    button.classList.add("active");
    button.setAttribute("aria-selected", "true");

    const panelActivo = document.getElementById(tabId);
    panelActivo.hidden = false;
    panelActivo.classList.add("active");
  });
});

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
