{
  function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
  }

  console.log(compras(true, true))
  console.log (compras(true, false))
  console.log (compras(false, true))
  console.log (compras (false, false))
} // operadores lógicos
{
  let num1 = 1
  let num2 = 2

  num1++
  console.log (num1)
  --num1
  console.log (num1)

  console.log (++num1 === num2--)
  console.log (num1 === num2)
} // operadores unários
{
  const resultado = nota => nota >= 7 ? 'aprovado' : 'Reprovado'

  console.log(resultado(7.1))
  console.log(resultado(6.7))
} // operadores ternários