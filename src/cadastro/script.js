import { validarCPF, validarDataDeNascimento } from '../script.js'

document.getElementById("sign-up-form").addEventListener("submit", function (event) {
  var matricula = document.getElementById("matricula").value;
  var cpf = document.getElementById("cpf").value;
  var dataNascimento = document.getElementById("data-de-nascimento").value;
  var nomeCompleto = document.getElementById("nome-completo").value;

  if(!validarDataDeNascimento(dataNascimento)) {
    alert("Data de nascimento incorreta.");
    event.preventDefault()
  }

  if (!validarCPF(matricula) ) {
    alert("Matrícula incorreta. Tente novamente!");
    event.preventDefault();
  }
  
  if(!validarCPF(cpf)) {
    alert("CPF incorreta. Tente novamente!");
    event.preventDefault();
  }
  event.preventDefault();
});