{
  // Factory simples
  function criarPessoa() {
    return {
      nome: 'Ana',
      sobrenome: 'Silva'
    }
  }

  console.log(criarPessoa())
} // aula 1
{
  function criarProduto (nome, preco) {
    return {
      nome,
      preco,
      desconto: + preco - preco * 0.1
    }
  }

  console.log(criarProduto('Notebook', 2199.99))
  console.log(criarProduto('iPad', 1199.49))
} // aula 2