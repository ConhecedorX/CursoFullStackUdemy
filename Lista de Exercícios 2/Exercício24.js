function contarCaracteres (caracter, frase){
  let fraseDividida = frase.split("")
  let resultado = 0
  for (let i = 0; i < fraseDividida.length; i++){
    if (fraseDividida[i] === caracter){
      resultado++
    }
  }
  console.log(`As vezes que o caractere ${caracter} apareceu foram: ${resultado}`)
}

contarCaracteres ("c", "Conhece-te a ti mesmo")
contarCaracteres ("r", "A sorte favorece os audazes")