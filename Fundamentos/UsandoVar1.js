{
  {
    {
      {
        {
          var sera = 'Será???'
          console.log(sera)
        } 
      } 
    } 
  }

  console.log(sera)

  function teste() {
    var local = 123
    console.log(local)
  }

  teste ()
  //console.log(local) não é possível porque local está dentro do escopo da função

} // aula 1
{
  var numero = 1
  {
    var numero = 2 
    console.log("Dentro =", numero)
  }
  console.log('Fora = ', numero)

} // aula 2
{
  let numero = 1 
  {
    let numero = 2
    console.log('dentro =', numero)  
  }
  console.log ('fora =', numero)

} // aula de let 1
