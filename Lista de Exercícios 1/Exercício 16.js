function calculadora (operando1, operacao, operando2){
switch (operacao){
    case '+':
        console.log(operando1 + operando2)
        break
    case '-':
        console.log(operando1 - operando2)
        break
    case '*':
        console.log(operando1 * operando2)
        break
    case '/':
        console.log(operando1 / operando2)
        break
    default:
        console.log('Operação inválida!')
    }
}

calculadora (10, '-', 5)
calculadora (10, '+', 5)
calculadora (10, '*', 5)
calculadora (10, '/', 5)
calculadora (10, 'f', 5)