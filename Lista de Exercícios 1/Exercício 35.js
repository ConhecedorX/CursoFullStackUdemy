let vetorPilha = [2,4,6,8]
let vetorAdiciona = [1,4,5,6]

function vetorFinal (vetorPilha, vetorAdiciona){
  for (let i = 0; i < vetorAdiciona.length; i++){
    vetorPilha.push(vetorAdiciona[i])
  }
  console.log('vetor inicial:' + vetorAdiciona)
  console.log('vetor final:' + vetorPilha)
}

console.log(vetorFinal(vetorPilha,vetorAdiciona))