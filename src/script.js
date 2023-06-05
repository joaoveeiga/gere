export function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
  if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) {
    return false; // Verifica se o CPF tem 11 dígitos e não é uma sequência repetida
  }
  let sum = 0;
  let weight = 10;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * weight;
    weight--;
  }
  let rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cpf.charAt(9))) {
    return false;
  }
  sum = 0;
  weight = 11;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * weight;
    weight--;
  }
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cpf.charAt(10))) {
    return false;
  }
  return true;
}

export function validarSenha(senha) {
  if (typeof senha !== 'string') {
    throw new TypeError('A senha deve ser uma string.');
  }

  const regexMaiuscula = /[A-Z]/;
  const regexNumero = /[0-9]/;
  const regexEspecial = /[!@#$%^&*(),.?":{}|<>]/;

  if(senha.length < 6) {
    return false;
  }

  if (!regexMaiuscula.test(senha)) {
    return false; // Verifica se possui pelo menos uma letra maiúscula
  }

  if (!regexNumero.test(senha)) {
    return false; // Verifica se possui pelo menos um número
  }

  if (!regexEspecial.test(senha)) {
    return false; // Verifica se possui pelo menos um caractere especial
  }

  return true; // Senha válida
}

export function validarEmail(email) {
  if (typeof email !== 'string') {
    throw new TypeError('A senha deve ser uma string.');
  }

  if(email.length <= 8) {
    return false;
  }

  if(!email.includes("@")) {
    return false;
  }

  const emailDomain = email.split("@")[1]

  if(!emailDomain.includes(".")) {
    return false;
  }

  return true;
}

export function validarDataDeNascimento(dataDeNascimento) {
  if(typeof dataDeNascimento !== 'string') {
    return false;
  }
  const dataAtual = new Date();

  const partesData = dataNascimento.split("/");
  const dataNascimentoObj = new Date(partesData[2], partesData[1] - 1, partesData[0]);

  const diffAnos = dataAtual.getFullYear() - dataNascimentoObj.getFullYear();

  if (diffAnos >= 18 && diffAnos < 100) {
    return true;
  } else {
    return false;
  }
}