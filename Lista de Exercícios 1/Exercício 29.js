function numerosIntervalo(vetor){
  let intervalo = 0
  let nintervalo = 0
  for (let i = 0; i < vetor.length; i++)
    if ((vetor[i] > 9) && (vetor[i] < 21)){
      intervalo++
    } else {
      nintervalo++
    }
  console.log(`${intervalo} estão entre 10 e 20 e ${nintervalo} não estão.`)  
}

let numeros = [2, 3, 5, 4, 6, 8, 12, 13, 15, 20, 12]
numerosIntervalo (numeros)