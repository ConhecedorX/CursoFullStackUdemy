let vetorNormal = [2, 4, 6, 2]

function vetorMultiplica (vetor1, multiplo){
  for (let i = 0; i < vetor1.length; i++){
    let valorFinal1 = 1
    valorFinal1 = vetor1[i] * multiplo
    console.log (valorFinal1)
  }
}
function vetorMultiplica5 (vetor1, multiplo){
  for (let i = 0; i < vetor1.length; i++){
    if (multiplo => 5){
      let valorFinal2 = 1
      valorFinal2 = multiplo * vetor1[i]
      console.log (valorFinal2)
    } else{
      (console.log('Elemento inválido...'))
    }
  }
}
vetorMultiplica(vetorNormal, 2)
vetorMultiplica5(vetorNormal, 2)
vetorMultiplica5(vetorNormal, 5)
vetorMultiplica5(vetorNormal, 10)