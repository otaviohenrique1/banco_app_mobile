export function geraNumeroAleatorio(): string {
  const numero = Math.round(Math.random() * 9999).toString();
  if(numero.length === 3) {
    return `0${numero}`;
  } else if(numero.length === 2) {
    return `00${numero}`;
  } else if(numero.length === 1) {
    return `000${numero}`;
  }
  return numero;
}

// Arrumar
export function geraNumeroCartao(): string {
  const n1 = geraNumeroAleatorio();
  const n2 = geraNumeroAleatorio();
  const n3 = geraNumeroAleatorio();
  const n4 = geraNumeroAleatorio();
  return `${n1} ${n2} ${n3} ${n4}`;
}

// Arrumar
export function geraNumeroCVV(): string {
  const numero = Math.round(Math.random() * 999).toString();
  if(numero.length === 2) {
    return `0${numero}`;
  } else if(numero.length === 1) {
    return `00${numero}`;
  }
  return numero;
}

export const validateCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/[^\d]/g, ''); // Remove tudo que não for número

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false; // Verifica se tem 11 dígitos ou se todos os números são iguais (ex.: "111.111.111-11")
  }

  let sum = 0;
  let rest;

  // Validação do primeiro dígito verificador
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cpf.substring(9, 10))) return false;

  sum = 0;
  // Validação do segundo dígito verificador
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cpf.substring(10, 11))) return false;

  return true;
};

export function geraAgencia(): string {
  return geraNumeroAleatorio();
}

export function geraConta(): string {
  const n1 = geraNumeroAleatorio();
  const n2 = geraNumeroAleatorio();
  const n3 = Math.round(Math.random() * 9).toString();
  return `${n1}${n2}${n3}`;
}

export function geraBanco(): string {
  return geraNumeroAleatorio();
}