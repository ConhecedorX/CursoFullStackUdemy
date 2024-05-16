function salario (valor,dias){
  let horas = dias * 8
  let SalarioFinal = valor*horas
  console.log(`Parabéns, trabalhando ${dias} dias, você ganhou o salário de ${SalarioFinal.toFixed(2).toString().replace(',','.')} R$`)
}

salario (8, 30)
salario (10, 30)