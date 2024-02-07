function loja (carro){
    switch (carro){
        case 'Hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'Sedan':
        case 'Motocicleta':
        case 'Caminhonete':
            console.log('Tem certeza que não prefere o hatch?')
            break
        default:
            console.log('Não temos esse modelo por aqui!')
    }
}

loja ('Hatch')
loja ('Sedan')
loja ('Motocicleta')
loja ('Caminhonete')
loja ('Ferrari')
loja ('BMW')