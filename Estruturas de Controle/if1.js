{
  function soBoaNoticia (nota) {
    if (nota >= 7) {
      console.log ('Aprovado com: ' + nota)
    }
    else {
      console.log ('Reprovado com: ' + nota)
    }
  }

  soBoaNoticia (8.1)
  soBoaNoticia (6.1)

  function seForVerdadeEuFalo (valor) {
    if (valor) {
      console.log ('É verdade...' + valor)
    }
  }

  seForVerdadeEuFalo ()
  seForVerdadeEuFalo (null)
  seForVerdadeEuFalo (undefined)
  seForVerdadeEuFalo (NaN)
  seForVerdadeEuFalo ('')
  seForVerdadeEuFalo (0)
  seForVerdadeEuFalo (-1)
  seForVerdadeEuFalo (' ')
  seForVerdadeEuFalo ('?')
  seForVerdadeEuFalo ([])
  seForVerdadeEuFalo ([1, 2])
  seForVerdadeEuFalo ({})
} // aula 1
{
  function teste1 (num) {
    if (num < 7)
      console.log (num)

    console.log ('final')
  }
  teste1 (6)
  teste1 (8)

  function teste2 (num) {
    if (num < 7); { // cuidadeo com o ";", não usar com estruturas de controle
      console.log(num)
    }
  }

  teste2 (6)
  teste2 (8)
}