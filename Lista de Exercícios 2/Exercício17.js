function somarArray (tabela){
  let tabelatemp = 0
  let calculo = 0
  for (let i = 0; i < tabela.length; i++){
    tabelatemp = tabela[i]
    calculo = calculo + tabelatemp
  }
  console.log (`Resultado: ${calculo}`)
}

somarArray([2,8,4,10])