{
  const ferrari = {
    modelo: 'F40',
    velMax: 324
  }

  const volvo = {
    modelo: 'V40',
    velMax: 200
  }

  console.log(ferrari.__proto__)
  console.log(ferrari.__proto__ === Object.prototype)
  console.log(volvo.__proto__ === Object.prototype)
  console.log(Object.prototype.__proto__ === null)

  function MeuObjeto() {}
  console.log(typeof Object, typeof MeuObjeto)
  console.log(Object.prototype, MeuObjeto.prototype)

} // aula 1
{
  // Cadeia de protótipos (prototype chain)
  Object.prototype.attr0 = 'O' // Não fazer isso em casa!

  const avo = { attr1: 'A' }
  const pai = { __proto__: avo, attr2: 'B', attr3: '3'}
  const filho = {__proto__: pai, attr3: 'C'}
  console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

  const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
      if (this.velAtual + delta <= this.velMax) {
        this.velAtual += delta
      } else {
        this.velAtual = this.velMax
      }
    },
    status (){
      return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
  }

  const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
  }

  const volvo = {
    modelo: 'V40',
    status() {
    return `${this.modelo}: ${super.status()}`
    }
  }

  Object.setPrototypeOf(ferrari, carro)
  Object.setPrototypeOf(volvo, carro)

  console.log(ferrari)
  console.log(volvo)

  volvo.acelerarMais(100)
  console.log(volvo.status())

  ferrari.acelerarMais(300)
  console.log(ferrari.status())
} // aula 2