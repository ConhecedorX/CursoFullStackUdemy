function numerosIntervalo(vetor){
  let menor = 100000000
  let maior = 0
  for (let i = 0; i < vetor.length; i++){
    let separador = vetor[i]
      if (separador < menor){
        menor = vetor[i]
      }
      else if (separador > maior){
        maior = vetor[i]
      } 
  }
  console.log(`${maior} é o maior e o menor é ${menor}.`)  
}

let numeros = [2, 3, 5, 4, 6, -1, 4, 12, 33, 15, 20, 12]
numerosIntervalo (numeros)