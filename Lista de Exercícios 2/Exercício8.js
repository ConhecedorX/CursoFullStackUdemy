function multiplicar (numero, multiplicador){
  let numerotemp = numero
  let resultado = 0
  while (multiplicador > 1) {
    resultado = numerotemp + numero
    numero = numerotemp + numero
    multiplicador = multiplicador - 1
  }
  console.log (resultado)
}

multiplicar (0, 10)
multiplicar (5, 6)