function testePares (a = 1){
  while (a < 101){
    let par = a % 2
    if (par == 0){
      console.log(`O número ${a} é par!`)
    }
    else console.log(`O número ${a} é ímpar!`)
    a++
  }
}

testePares()