{
  let dobro = function (a) {
    return 2 * a
  }

  dobro = (a) => {
    return 2 * a
  }

  dobro = a => 2 * a // return implicito
  console.log (dobro(Math.PI))

  let ola = function () {
    return 'Olá!'
  }


  ola = () => 'Olá!'
  ola = _ => 'Olá!'
  console.log (ola())
} // aula 1
{
  function Pessoa() {
    this.idade = 0
    setInterval(() => {
      this.idade++
      console.log(this.idade)
    }, 1000)
  }

  new Pessoa
} // aula 2
{
  let comparaComThis = function (param) {
    console.log (this === param)
  }

  comparaComThis (global)

  const obj = {}
  comparaComThis = comparaComThis.bind (obj)
  comparaComThis (global)
  comparaComThis (obj)

  let comparaComThisArrow = param => console.log (this === param)
  comparaComThisArrow (global)
  comparaComThisArrow (module.exports)

  comparaComThisArrow = comparaComThisArrow.bind(obj)
  comparaComThisArrow (obj)
  comparaComThisArrow(module.exports)
} // aula 3