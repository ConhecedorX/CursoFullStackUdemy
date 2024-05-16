function quantosDigitos(numeros,quantidade){
  let resultado = []
  let filtro = []
  for (let i = 0; i < numeros.length; i++){
    filtro = numeros[i].toString()
    if (filtro.length++ == quantidade){
      resultado.push(numeros[i])
    }
  }
  console.log(resultado)
}
quantosDigitos ([12, 42, 5, 234, 2, 14], 3)
quantosDigitos ([12, 42, 5, 234, 2, 14], 1)