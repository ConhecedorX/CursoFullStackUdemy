function inverso (variavel) {
  if (variavel === true){
    variavel = !variavel
    console.log(variavel)
  }
  else if (variavel === false){
    variavel = !variavel
    console.log(variavel)
  }
  else if (typeof variavel === typeof 12){
      let resultado = variavel - (variavel * 2)
      console.log (`O inverso de ${variavel} é igual a ${resultado}`)
    }
  else{
    console.log("Entrada inválida! Apenas números ou booleanos são esperados...")
  }
}

inverso (true)
inverso (false)
inverso (12)
inverso (-12)
inverso ("12")