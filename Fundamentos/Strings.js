const escola = "Cod3r" // primeiro Char ou caractére é sempre 0

console.log (escola.charAt (4))
console.log (escola.charAt (5))
console.log (escola.charCodeAt (3)) // Chama o código Unicode do Char
console.log (escola.indexOf ('3'))

console.log (escola.substring (1)) // Inclui do índice 1 até o final
console.log (escola.substring (0, 3)) // vai do indice 0 até o indice 3 sem incluir o 3

console.log ('Escola'.concat (" ").concat (escola).concat ("!"))
console.log ('Escola' + (" ") + (escola) + ("!"))
console.log (escola.replace (3, 'e'))

console.log ('Ana,Maria,Pedro'.split(','))
