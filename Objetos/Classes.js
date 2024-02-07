{
  class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
      this.nome = nome
      this.valor = valor
    }
  }

  class CicloFinanceiro {
    constructor(mes, ano) {
      this.mes = mes
      this.ano = ano
      this.lancamentos = []
    }
    addLancamentos(...lancamentos){
      lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario() {
      let valorConsolidado = 0
      this.lancamentos.forEach(l => {
        valorConsolidado += l.valor
      })
      return valorConsolidado
    }
  }

  const salario = new Lancamento('Salario', 1000)
  const contadeLuz = new Lancamento ('Luz', -200)
  const contadeAgua = new Lancamento ('Água', -400)

  const contas = new CicloFinanceiro (6, 2018)
  contas.addLancamentos(salario, contadeLuz, contadeAgua)
  console.log(contas.sumario())
} // aula 1
{
  class Avo {
    constructor (sobrenome) {
      this.sobrenome = sobrenome
    }
  }
  class Pai extends Avo {
    constructor (sobrenome, profissao = 'Professor') {
      super (sobrenome)
      this.profissao = profissao
    }
  }

  class Filho extends Pai {
    constructor () {
      super('Silva')

    }
  }

  const filho = new Filho
  console.log(filho)
} // aula 2