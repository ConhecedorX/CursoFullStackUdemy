function repetir (repetidor, multiplicador){
  if (typeof repetidor == typeof "string"){
    let tabela = []
    while (multiplicador > 0){
      tabela.push(repetidor)
      multiplicador = multiplicador -1
    }
    console.log(tabela)
  }
  else if (typeof repetidor == typeof 5){
    let tabela = []
    while (multiplicador > 0){
      tabela.push(repetidor)
      multiplicador = multiplicador -1
    }
    console.log(tabela)
  }
  else console.log ("Apenas strings ou números esperados, por favor tente novamente!")
}

repetir ("Conhecedor", 4)
repetir (35, 5)
repetir (true, 4)