function filtro (chave, tabela){
  let tabela2 = []
  let temp = []
  for (let i = 0; i < tabela.length; i++){
    temp = tabela[i].split(chave)
    if (temp.length > 1){
      tabela2.push(tabela[i])
    }
  }
  console.log (tabela2)
} 
filtro ("pro", ["programação", "pro-player","perfeccionista"])
filtro ("Python", ["java", "c++", "php"])