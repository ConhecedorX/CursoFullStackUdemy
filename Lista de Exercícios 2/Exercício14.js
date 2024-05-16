function objetoArray (objeto){
  let tabela = Object.entries(objeto)
  console.log(tabela)
}
objetoArray ({
  nome: "maria",
  profissao: "programador"
})

//Object.entries retorna ambos índice e valores
//Object.keys retorna os índices do objeto
//Object.values retorna os valores do objeto