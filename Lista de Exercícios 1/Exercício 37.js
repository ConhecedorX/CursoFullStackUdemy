function aritmetica(a1, n, razao){
  let valorDoN = 0
  let valorTotal = 0
  for (i = 0; i < n; i++){
    valorDoN = (a1 + razao*i)
    valorTotal += valorDoN
    console.log(`${i+1}ºvalor: ${valorDoN}`)
  }
  console.log(`Soma total: ${valorTotal}`)
}
aritmetica(2, 10, 2)

function geometrica(a1, n, razao){
  let valorDoN = 0
  let valorTotal = 0
  for (i = 0; i < n; i++){
    valorDoN = (a1 * (razao**i))
    valorTotal += valorDoN
    console.log(`${i+1}ºvalor: ${valorDoN}`)
  }
  console.log(`Soma total: ${valorTotal}`)
}
geometrica(2, 4, 2)