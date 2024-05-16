function filtradorDeNumeros (tabela){
  let maior = tabela [0]
  let menor  = tabela [0]
  let tabelatemp = 0
  for (let i = 0; i < tabela.length; i ++){
    tabelatemp = tabela[i]
    if (tabelatemp > maior){
      maior = tabelatemp
    }
    else if (tabelatemp < menor){
      menor = tabelatemp
    }
  } 
  console.log (`${menor} é o menor número do array e ${maior} é o maior número do array`)
}

filtradorDeNumeros ([1,2,4,5,6])
filtradorDeNumeros ([10, 5, 35, 65])
filtradorDeNumeros ([5, -15, 50, 3])