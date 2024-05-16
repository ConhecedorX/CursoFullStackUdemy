function numerosParesComIndicesPares (tabela){
  let tabelafiltro = []
  let numeroDividido = []
  let tabelafinal = []
  for (let i = 0; i < tabela.length; i++){
    if (tabela[i] > 9 && tabela[i]%2 == 0){
      numeroDividido = (tabela[i].toString())
      tabelafiltro = (numeroDividido.split('').map(Number))
      if (tabelafiltro[0] % 2 == 0){
        tabelafinal.push (tabela[i])
      }
    }
  }
  console.log(tabelafinal)
}

numerosParesComIndicesPares ([2, 22, 10, 40, 55, 23, 46, 48, 50, 52, 60, 65, 68])