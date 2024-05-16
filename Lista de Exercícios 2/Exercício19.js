function calcularMedia (numeros){

  let resultadosoma = 0
  let resultadomedia = 0
  for (let i = 0; i < numeros.length; i++){
    resultadosoma = resultadosoma + numeros[i]
  }
  resultadomedia = resultadosoma / (numeros.length)
  console.log(resultadomedia.toFixed(2))
}

calcularMedia ([0, 10])
calcularMedia ([1, 2, 3, 4, 5])
calcularMedia ([10, 10, 10, 10])