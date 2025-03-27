function recebeNotas(vetor){
    let conceitos = []
    for(i in vetor){
        if(vetor[i] >= 0.0 && vetor[i] <= 4.9){
            conceitos.push("D")
        } else if(vetor[i] >= 5.0 && vetor[i] <= 6.9){
            conceitos.push("C")
        } else if(vetor[i] >= 7.0 && vetor[i] <= 8.9){
            conceitos.push("B")
        } else if(vetor[i] >= 9.0 && vetor[i] <= 10.0){
            conceitos.push("A")
        } else {
            return "Nota inválida."
        }
    }
    return conceitos
}

console.log(recebeNotas([4.4, 5.7, 8.9, 10.0, 2.5, 7.6, 1.1]))