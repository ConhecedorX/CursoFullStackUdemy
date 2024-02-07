function somaDinheiro(a, b) {
  let soma = a + b;
  return console.log(`R$ ${soma.toFixed(2).toString().replace(".", ",")}`);
}

somaDinheiro(0.3, 0.9)