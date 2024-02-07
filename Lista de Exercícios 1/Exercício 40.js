function notas (vetor){
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] > 8.9 && vetor[i] <= 10){
                console.log(`o aluno com a nota ${vetor[i]} tirou A`)
        }
        else if ( vetor[i] > 6.9 && vetor[i] <= 8.9){
                console.log (`o aluno com a nota ${vetor[i]} tirou B`)
        }
        else if (vetor[i] > 4.9 && vetor[i] <= 6.9){
                console.log(`o aluno com a nota ${vetor[i]} tirou C`)
        }
        else if (vetor[i] > 0 && vetor[i] <= 4.9){
                console.log(`o aluno com a nota ${vetor[i]} tirou D`)
        }else {
         console.log("Nota inválida!")
        }
    }
}
const notasdosalunos = [2, 4.9, 6, 8.9, 10, 9]
notas (notasdosalunos)
