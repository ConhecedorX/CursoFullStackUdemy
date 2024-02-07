function triângulo (a, b, c) {
  if (a === b && b === c) {
    console.log("O triângulo é equilátero")
  } 
  else if (a === b || b === c || a === c){
    console.log("O triângulo é isósceles")
  } 
  else {
    console.log("O triângulo é escaleno")
  }
}

triângulo (3, 3, 3)
triângulo (2, 3, 3)
triângulo (2, 3, 4)
triângulo (2, 3, 2)
triângulo (3, 3, 2)