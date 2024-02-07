function numerosIntervalo(vetor){
  let soma = 0
  for (let i = 0; i < vetor.length; i++){
    soma += vetor[i]
  }
  console.log(soma/vetor.length)
  //console.log(`${maior} é o maior e o menor é ${menor}.`)  
}

let numeros = [10, 5, 5, 10]
numerosIntervalo (numeros)