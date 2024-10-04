export function geraNumeroAleatorio() {
  return Math.round(Math.random() * 9);
}

export function geraNumeroCartao(esconde: boolean) {
  const n1 = geraNumeroAleatorio();
  const n2 = geraNumeroAleatorio();
  const n3 = geraNumeroAleatorio();
  const n4 = geraNumeroAleatorio();
  
  const n5 = geraNumeroAleatorio();
  const n6 = geraNumeroAleatorio();
  const n7 = geraNumeroAleatorio();
  const n8 = geraNumeroAleatorio();

  const n9 = geraNumeroAleatorio();
  const n10 = geraNumeroAleatorio();
  const n11 = geraNumeroAleatorio();
  const n12 = geraNumeroAleatorio();

  const n13 = geraNumeroAleatorio();
  const n14 = geraNumeroAleatorio();
  const n15 = geraNumeroAleatorio();
  const n16 = geraNumeroAleatorio();
  if(esconde) {
    return `${n13}${n14}${n15}${n16}`;
  }
  return `${n1}${n2}${n3}${n4} ${n5}${n6}${n7}${n8} ${n9}${n10}${n11}${n12} ${n13}${n14}${n15}${n16}`;
}