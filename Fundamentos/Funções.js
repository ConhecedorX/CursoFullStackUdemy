{
    console.log (typeof Object)
    console.log (typeof console)
    console.log (typeof Math)
    console.log (typeof String)
    console.log (typeof Array)
    console.log (typeof Number)
    class Produto {}
    console.log (typeof Produto)
  }// typeofs primeira aula
{
  //Funções sem retorno
  function imprimirSoma(a, b){
    console.log (a + b)
  }

  imprimirSoma (2, 3)
  imprimirSoma (2)
  imprimirSoma (2, 6, 7, 8)
  imprimirSoma ()

  //Funções com retorno
  function soma(a, b = 1) {
    return a + b;
  }

  console.log(soma(2, 3));
  console.log (soma (2))
  console.log (soma ())
}// Funções segunda aula
{
  // Armazenando uma função em uma variável	

  const imprimirSoma = function (a, b) {
    console.log (a + b)
  }

  imprimirSoma (2, 3)

  //Armazenando uma função arrow em uma variável

  const soma = (a, b) => {
    return a + b
  }

  console.log (soma(2, 3))

  //retorno implícito
  const subtracao = (a, b) => a - b
  console.log (subtracao (2,3))

  const imprimir2 = a => console.log (a)

  imprimir2 ('legal!!!')

}// Funções Terceira aula