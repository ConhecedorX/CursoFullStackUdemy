function filtro (tabela){
  let tabelaNumeros = []
  for (let i = 0; i < tabela.length; i++){
    if (typeof tabela[i] === typeof 1){
      tabelaNumeros.push (tabela[i])      
    }
  }
  console.log (tabelaNumeros)
}
filtro ([7, 8, 9, 'Dez', 12, 54, 98, 'oito', 'dezeseis'])