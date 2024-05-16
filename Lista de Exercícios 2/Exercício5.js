function MaiorOuIgual (num1, num2){
  if (num1 > num2){
      let resultado = true
      console.log(resultado)
    }
  else if (num1 === num2){
    let resultado = true
    console.log(resultado)
  }
  else{
    let resultado = false
    console.log(resultado)
  }
}

MaiorOuIgual (5, 1)
MaiorOuIgual (5, 5)
MaiorOuIgual (1, 5)
MaiorOuIgual (0, 0)
MaiorOuIgual ("0", 0)