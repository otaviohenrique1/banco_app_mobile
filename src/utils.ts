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
  const numero = Math.round(Math.random() * 9).toString();
  if(numero.length === 3) {
    return `0${numero}`;
  } else if(numero.length === 2) {
    return `00${numero}`;
  }
  return numero;
}