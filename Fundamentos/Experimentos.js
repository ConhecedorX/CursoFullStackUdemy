let a = 3

global.b = 123

this.c = 321
this.d = true
this.e = 'Teste'

console.log (this.a)
console.log (global.b)
console.log (this.c)
console.log (module.exports.c)
console.log (module.exports === this)
console.log (module.exports)

// criando uma varíavel maluca: sem var ou let

abc = 3 // não faça isso em casa!
console.log (global.abc)
