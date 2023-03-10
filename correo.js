let nombre = document.getElementById("input_nombre");
let error_nombre = document.getElementById("error_nombre");
let apellido = document.getElementById("input_apellido");
let error_apellido = document.getElementById("error_apellido");
let correo = document.getElementById("input_correo");
let error_correo = document.getElementById("error_correo");
const correo_section = document.getElementById("alerts_form");
let correo_no_enviado = document.getElementById("correo_no_enviado");
let correo_enviado = document.getElementById("correo_enviado");
let correo_inscrito = document.getElementById("correo_inscrito");

let comprobacion_nombre = false;
let comprobacion_apellido = false;
let comprobacion_correo = false;

nombre.addEventListener("blur", () => {
  let check = nombre.value;
  if (check.value >= 0 || isNaN(check)) {
    comprobacion_nombre = true;
    error_nombre.style.display = "none";
  } else {
    error_nombre.style.display = "block";
    comprobacion_nombre = false;
  }
});

apellido.addEventListener("blur", () => {
  let check = apellido.value;
  if (check.value >= 0 || isNaN(check)) {
    error_apellido.style.display = "none";
    comprobacion_apellido = true;
  } else {
    error_apellido.style.display = "block";
    comprobacion_apellido = false;
  }
});

correo.addEventListener("blur", () => {
  let check = correo.value;
  if (check.value >= 0 || isNaN(check)) {
    error_correo.style.display = "none";
    comprobacion_correo = true;
  } else {
    error_correo.style.display = "block";
    comprobacion_correo = false;
  }
});

const btn = document.getElementById("Enviar");

document.getElementById("form").addEventListener("submit", function (event) {
  if (
    comprobacion_nombre === true &&
    comprobacion_apellido === true &&
    comprobacion_correo === true
  ) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_tp6cgko";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
    correo_section.style.display = "flex";
    correo_enviado.style.display = "grid";
    let aceptar = document.getElementById("boton_aceptar");
    aceptar.addEventListener("click", function () {
      correo_enviado.style.display = "none";
      correo_inscrito.style.display = "grid";
    });
  } else {
    correo_section.style.display = "flex";
    correo_no_enviado.style.display = "grid";
    let revisar = document.getElementById("boton_revisar");
    revisar.addEventListener("click", function () {
      correo_no_enviado.style.display = "none";
      correo_section.style.display = "none";
    });
  }
});
