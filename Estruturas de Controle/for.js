{
  let contador = 1
  while (contador <= 10) {
    console.log (`contador = ${contador}`)
    contador++
  }

  for (let i = 1; i <= 10; i++) {
    console.log (`i = ${i}`)
  }

  const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
  for (let i = 0; i < notas.length; i++) {
    console.log (`nota = ${notas[i]}`)
  }

} // aula 1
{
  const notas = [6.7, 7.5, 9.8, 8.5, 10]

  for (let i in notas) {
    console.log (i, notas[i])
  }

  const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
  }

  for (let atributo in pessoa) {
    console.log (`${atributo} = ${pessoa [atributo]}`)

  }

  console.log (atributo)
} // aula 2
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  for (x in nums) {
    if (x == 5) break
    console.log (`${x} = ${nums[x]}`)
  }

  for (y in nums) {
    if (y == 5) continue 
    console.log (`${y} = ${nums[y]}`)  
  }

  externo: for (a in nums) {
    for (b in nums) {
      if (a == 2 && b == 3) break externo
      console.log (`Par = ${a}, ${b}`)

    }
  }

} // aula 3