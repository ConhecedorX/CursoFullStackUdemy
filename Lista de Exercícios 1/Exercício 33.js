let vetorInteiro = [2, 4, 6, 10]
let vetorString = ['Dois','Quatro','Seis','Dez']
let vetorDouble = [2.5, 4.5, 6.5, 10.5]

function junto (vetor1, vetor2, vetor3){
  let concatenado = []
  for (let i = 0; i < vetor1.length;i++){
    concatenado = concatenado.concat(vetor1[i])
  }
  for (let i = 0; i < vetor2.length;i++){
    concatenado = concatenado.concat(vetor2[i])
  }
  for (let i = 0; i < vetor3.length;i++){
    concatenado = concatenado.concat(vetor3[i])
  }
  return concatenado
}

console.log(junto(vetorDouble,vetorInteiro,vetorString))
console.log(junto(vetorString,vetorInteiro,vetorDouble))