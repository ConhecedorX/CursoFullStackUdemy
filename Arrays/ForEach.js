{
  const aprovados = ['Agatha', 'Aldo', 'Daniel', 'raquel']

  aprovados.forEach(function(nome, indice, /*array*/){
    console.log(`${indice + 1}) ${nome}`)
    //console.log(array)
  })

  aprovados.forEach(nome => console.log(nome))

  const exibirAprovados = aprovado => console.log(aprovado)
  aprovados.forEach(exibirAprovados)
} // aula 1
{
  /*
  Minha tentativa:

  function forEach2 (nome) {
    const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
    for (let indice = 0; indice < aprovados.length; indice++){
      nome = aprovados [indice]
      console.log(`${indice + 1}) ${nome}`)
    }
  }

  forEach2()*/

  Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++){
      callback(this[i], i, this)
    }
  }

    const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

  aprovados.forEach2(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`)
  })
} // aula 2