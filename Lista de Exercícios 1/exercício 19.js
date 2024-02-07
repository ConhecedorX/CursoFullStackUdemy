function cardapio (codigo, quantidade){
    if (quantidade >= 1){
    switch (codigo){
        case 100:
            let valor1 = 3.00 * quantidade
            console.log (`${quantidade} cachorro quente, valor total: R$ ${valor1.toFixed(2).toString().replace(".", ",")}`)
            break
        case 200:
            let valor2 = 4.00 * quantidade
            console.log (`${quantidade} hambúrguer simples, valor total: R$ ${valor2.toFixed(2).toString().replace(".", ",")}`)
            break
        case 300:
            let valor3 = 5.50 * quantidade
            console.log (`${quantidade} cheeseburguer, valor total: R$ ${valor3.toFixed(2).toString().replace(".", ",")}`)
            break
        case 400:
            let valor4 = 7.50 * quantidade
            console.log (`${quantidade} bauru, valor total: R$ ${valor4.toFixed(2).toString().replace(".", ",")}`)
            break
        case 500:
            let valor5 = 3.50 * quantidade
            console.log (`${quantidade} refrigerante, valor total: R$ ${valor5.toFixed(2).toString().replace(".", ",")}`)
            break
        case 600:
            let valor6 = 2.80 * quantidade
            console.log (`${quantidade} suco, valor total: R$ ${valor6.toFixed(2).toString().replace(".", ",")}`)
            break
        default:
            console.log('Código inválido!')
    }
    }else console.log("Pedido inválido!")
}

cardapio (100, 1)
cardapio (100, 2)
cardapio (100, 0)
cardapio (200, 2)
cardapio (200, 2)
cardapio (300, 2)
cardapio (400, 4)
cardapio (500, 3)
cardapio (600, 2)