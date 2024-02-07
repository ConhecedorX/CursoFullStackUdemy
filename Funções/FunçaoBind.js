{
  const pessoa = {
    saudacao: 'Bom dia!',
    falar () {
      console.log (this.saudacao)    
    }
  }

  pessoa.falar ()
  const falar = pessoa.falar
  falar () // conflito entre paradigams funcional e orientado a objetos

  const falardePessoa = pessoa.falar.bind(pessoa)
  falardePessoa ()
} // aula 1
{
  function Pessoa () {
    this.idade = 0

    const self = this
    setInterval (function() {
      self.idade++
      console.log(self.idade)
    }/*.bind (this)*/, 1000)
  }

  new Pessoa
} // aula 2