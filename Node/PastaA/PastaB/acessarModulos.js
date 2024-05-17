const moduloA = require('../../ModuloA')
console.log(moduloA.ola)

const saudacao = require('Saudacao')
console.log(saudacao.ola)

const c = require('./PastaC/Index')
console.log(c.ola2)

const http = require('http')
http.createServer ((req, res) => {
    res.write('Boa noite Lucas!')
    res.end()
}).listen(8080)