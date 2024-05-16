function TuEMaisQuantos (quantidade){
  if (quantidade > 0){
    let tabelaMais = []
    let tabelaTemp = ""
    let tabelaFinal
    while (quantidade > 0){
      tabelaMais.push ("+")
      quantidade = quantidade - 1
    }
    console.log(tabelaMais)
    for (let i = 0; i < tabelaMais.length; i++){
      tabelaFinal = tabelaTemp.concat(tabelaMais)
    }
    for (let i = 0; i < tabelaFinal.length; i++){
      tabelaFinal = tabelaFinal.replace(",","")
    }
    console.log(tabelaFinal)
  }
}

TuEMaisQuantos (4)
TuEMaisQuantos (8)