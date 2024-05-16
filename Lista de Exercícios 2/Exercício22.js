function sorteio (numero){
  let numeroRandom = Math.random() * 10 + 1
  numeroRandom = Math.floor (numeroRandom)
  if (numero == numeroRandom){
    console.log (`Parabéns!!! O número sorteado foi ${numeroRandom}`)
  }
  else console.log (`Que pena... O número sorteado foi ${numeroRandom}`)
}

sorteio (10)