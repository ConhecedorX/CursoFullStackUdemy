function media (notas) {
  if (notas >= 39) {
    let multiplo = notas % 5
    if (multiplo == 3){
        let notasRedondas = notas + 2
      console.log (`Parebéns você foi aprovado com a nota: ${notasRedondas}`)
    } else if (multiplo == 4){
      let notasRedondas = notas + 1
      console.log (`Parebéns você foi aprovado com a nota: ${notasRedondas}`)
    } else console.log (`Parabéns você foi aprovado com a nota: ${notas}`)
  } else console.log ("Você foi reprovado, sinto muito...")

}

media (38)
media (39)
media (50)
media (52)
media (51)
media (53)
media (54)