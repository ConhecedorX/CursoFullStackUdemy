function retirador (tabela){
  let tabelatemp = []
  for (let i = 0; i < tabela.length; i++){
    if (i == 0 || i > tabela.length - 2){
      tabelatemp.push (tabela[i])      
    }
  }
  console.log (tabelatemp)
}
retirador ([7, 8, 9, 'Dez', 12, 54, 98])