function convenio (idade){
  if (idade < 11){
    let valor1 = 180.00
    console.log(`Valor total a pagar: R$ ${valor1.toFixed(2).toString().replace(".",",")}`)
  }
  else if (idade < 31){
    let valor4 = 150.00
    console.log(`Valor total a pagar: R$ ${valor4.toFixed(2).toString().replace(".",",")}`)
  }
  else if (idade < 61){
    let valor3 = 195.00
    console.log(`Valor total a pagar: R$ ${valor3.toFixed(2).toString().replace(".",",")}`)
  }
  else{
    let valor2 = 230.00
    console.log(`Valor total a pagar: R$ ${valor2.toFixed(2).toString().replace(".",",")}`)
  }
}

convenio (5)
convenio (10)
convenio (12)
convenio (30)
convenio (31)
convenio (53)
convenio (60)
convenio (61)
convenio (80)