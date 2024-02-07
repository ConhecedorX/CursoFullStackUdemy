function media (aluno, nota1, nota2, nota3){
  if (nota1 > nota2 && nota1 > nota3){
    let total = (((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10)
    if (total >= 5){
      console.log(`O aluno ${aluno} foi APROVADO com as segunites notas:
      Primeira nota: ${nota1}
      Segunda nota: ${nota2}
      Terceira nota: ${nota3}
      Média final: ${total}`)
    }else console.log(`O aluno ${aluno} foi REPROVADO pois não atingiu a média.`)
  }
  else if (nota2 > nota1 && nota2 > nota3){
    let total = (((nota1 * 3) + (nota2 * 4) + (nota3 * 3)) / 10)
    if (total >= 5){
      console.log(`O aluno ${aluno} foi APROVADO com as segunites notas:
      Primeira nota: ${nota1}
      Segunda nota: ${nota2}
      Terceira nota: ${nota3}
      Média final: ${total}`)
    }else console.log(`O aluno ${aluno} foi REPROVADO pois não atingiu a média.`)
  }
  else if (nota3 > nota1 && nota3 > nota2){
    let total = (((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10)
    if (total >= 5){
      console.log(`O aluno ${aluno} foi APROVADO com as segunites notas:
Primeira nota: ${nota1}
Segunda nota: ${nota2}
Terceira nota: ${nota3}
Média final: ${total}`)
    }else console.log(`O aluno ${aluno} foi REPROVADO pois não atingiu a média.`)
  }
  else if (nota1 === nota2 && nota1 > nota3){
    let total = (((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10)
    if (total >= 5){
      console.log(`O aluno ${aluno} foi APROVADO com as segunites notas:
Primeira nota: ${nota1}
Segunda nota: ${nota2}
Terceira nota: ${nota3}
Média final: ${total}`)
    }else console.log(`O aluno ${aluno} foi REPROVADO pois não atingiu a média.`)
  }
  else if (nota1 === nota3 && nota1 > nota2){
    let total = (((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10)
    if (total >= 5){
      console.log(`O aluno ${aluno} foi APROVADO com as segunites notas:
Primeira nota: ${nota1}
Segunda nota: ${nota2}
Terceira nota: ${nota3}
Média final: ${total}`)
    }else console.log(`O aluno ${aluno} foi REPROVADO pois não atingiu a média.`)
  }
  else if (nota2 === nota3 && nota2 > nota1){
    let total = (((nota1 * 3) + (nota2 * 4) + (nota3 * 3)) / 10)
    if (total >= 5){
      console.log(`O aluno ${aluno} foi APROVADO com as segunites notas:
Primeira nota: ${nota1}
Segunda nota: ${nota2}
Terceira nota: ${nota3}
Média final: ${total}`)
    } else console.log(`O aluno ${aluno} foi REPROVADO pois não atingiu a média.`)
  }
  else if (nota1 === nota2 && nota1 == nota3){
    let total = (((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10)
    if (total >= 5){
      console.log(`O aluno ${aluno} foi APROVADO com as segunites notas:
Primeira nota: ${nota1}
Segunda nota: ${nota2}
Terceira nota: ${nota3}
Média final: ${total}`)
    }else console.log(`O aluno ${aluno} foi REPROVADO pois não atingiu a média.`)
  }
}


media ("lucas", 10, 5, 6)
media ("jorge", 2, 4, 6)
media ("renato", 10, 2, 2)
media ("renato", 5, 5, 10)

// Tá funcionando 80% não tá perfeito mas é trabalho honesto O_o