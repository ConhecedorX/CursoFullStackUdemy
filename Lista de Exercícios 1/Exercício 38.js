function pares (inicio = 0, fim = 100) {
    if (inicio > fim){
        let meio = fim
        fim = inicio
        inicio = meio
    }

    for (let i = inicio; i <= fim; i++){
        if (i % 2 == 1){
        console.log(i)
        }
    }
}

pares (80, 20)
