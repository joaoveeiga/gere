import { validarCPF, validarSenha } from '../script.js'

document.getElementById("my-form").addEventListener("submit", function (event) {
  var matricula = document.getElementById("matricula").value;
  var password = document.getElementById("password").value;

  if (!validarCPF(matricula) || !validarSenha(password)) {
    alert("Matrícula ou senha incorreta. Tente novamente!");
    event.preventDefault();
  }
});

