import { validarEmail } from "../script.js";

document
  .getElementById("email-form")
  .addEventListener("submit", function (event) {
    var email = document.getElementById("email").value;

    if (!validarEmail(email)) {
      alert("Por favor, digite um e-mail válido.");
      event.preventDefault();
    }
  });
