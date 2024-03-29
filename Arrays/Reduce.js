{
  const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
  ]

  console.log (alunos.map(a => a.nota))
  const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
  }, 10)
  
} // aula 1
{
  const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
  ]  

  // desafio 1: Todos os alunos são bolsistas?
  const todosBolsistas = (resultado, bolsista) => resultado && bolsista
  console.log(alunos.map(a => a.bolsista).reduce(TodosBolsistas))

  // Desafio 2: Algum aluno é bolsista?
  const algumBolsista = (resultado, bolsista) => resultado || bolsista
  console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

} // aula 2
{
  Array.prototype.reduce2 = function (callback, valorInicial){
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this [0]
    for (let i = indiceInicial; i < this.length; i++){
      acumulador = callback(acumulador, this[i])
    }
    return acumulador
  }

  const soma = (total,valor) => total + valor
  const nums = [1, 2, 3, 4, 5, 6]
  console.log(nums.reduce2(soma, 21))
} // aula 3