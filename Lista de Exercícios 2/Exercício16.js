function bissexto (ano){
  if (ano % 4 == 0){
    if (ano % 100 == 0 && ano % 400 != 0){
      console.log (`O ano ${ano} não é bissexto porque é múltiplo de 100 e não é múltiplo de 400!`)
    }
    else if (ano % 100 == 0 && ano % 400 == 0){
      console.log (`O ano ${ano} é bissexto!`)
    }
    else console.log (`O ano ${ano} é bissexto!`)
  }
  else console.log (`O ano ${ano} não é bissexto porque não é múltiplo de 4`)
}
bissexto (2024)
bissexto (2020)
bissexto (2100)
bissexto (2028)