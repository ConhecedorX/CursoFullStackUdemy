function juroSimples (valor, juros, tempo) {
  console.log(`Valor total com juros simples: R$ ${valor + ((valor * (juros / 100)) * tempo)}`)
}

function jurosComposto (valor, juros, tempo) {
  console.log(`Valor total com juros composto: R$ ${ valor * (1 + (juros / 100)) ** tempo}`)
}

juroSimples (100, 20, 12)
jurosComposto (100, 20, 12)