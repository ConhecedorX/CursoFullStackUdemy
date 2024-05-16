function removerVogais (palavra){
  let palavraSemVogal = ''
  let resultado = []
  let vogais = palavra.split("")
  for (let i = 0; i < vogais.length; i++){
    if (vogais[i] != "a" && vogais[i] != "e" && vogais[i] != "i" && vogais[i] != "o" && vogais[i] != "u"){
      resultado.push(vogais[i])
    }
  }
  for (let i = 0; i < resultado.length; i++){
    palavraSemVogal = palavraSemVogal.concat(resultado[i])
  }
  console.log(palavraSemVogal)
}
removerVogais ("lucas")
removerVogais ("Fundamentos")
removerVogais ("Cod3r")