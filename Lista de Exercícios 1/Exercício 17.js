function aumento (salario, plano){
    switch (plano){
        case "A":
            console.log(salario + (salario*(10/100)))
            break
        case "B":
            console.log(salario + (salario*(15/100)))
            break
        case "C":
            console.log(salario + (salario*(20/100)))
            break
        default:
            console.log("Plano inválido!")
    }
}

aumento(1000, "A")
aumento(1000, "B")
aumento(1000, "C")
aumento(1000, "D")
aumento(1500, "A")