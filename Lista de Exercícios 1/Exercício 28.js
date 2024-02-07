function numerosPares(vetor){
  let pares = 0
  let impares = 0
  for (let i = 0; i < vetor.length; i++)
    if (vetor[i] % 2 == 0){
      pares++
    } else {
      impares++
    }
  console.log(`${pares} são pares e ${impares} são ímpares.`)  
}

let numeros = [2, 3, 5, 4, 6, 8, 12, 13]
numerosPares (numeros)