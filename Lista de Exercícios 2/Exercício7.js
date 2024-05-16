function estaEntre (numero, minimo, maximo, inclusivo){
  if (inclusivo == true){
    if (numero == minimo || numero == maximo){
      console.log (true)
    }
    else (console.log(false))   
  }
  else{
    if (numero > minimo && maximo > numero){
      console.log (true)
    }
    else (console.log(false))
  }
}

estaEntre (60, 50, 100)
estaEntre (16, 100, 160)
estaEntre (3,3, 150)
estaEntre (3,3, 150, true)
estaEntre (50, 10, 100, true)