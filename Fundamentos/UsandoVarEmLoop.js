{
  for (var i = 0; i < 10; i++) {
    console.log(i)
  }
  console.log ('i = ', i)
} // aula 1
{
  for (let i = 0; i < 10; i++) {
    console.log(i)
  }

  console.log ('i =', i)
} // aula 2
{
  const funcs = []

  for (var i = 0; i <10; i++) {
    funcs.push(function() {
      console.log(i)
    })
  }

  funcs [2]()
  funcs [8]()
} // aula 3
{
  const funcs = []

  for (let i = 0; i <10; i++) {
    funcs.push(function() {
      console.log(i)
    })
  }

  funcs [2]()
  funcs [6]()
  funcs [8]()
} // aula 4