const primeiroElemento = arrayOuString => arrayOuString[0]

const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise (function (resolve){
    resolve(['Ana', 'Bia', 'Carlos'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    // .then(v => console.log(v))
    .then(console.log)