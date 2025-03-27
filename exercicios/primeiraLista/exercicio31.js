function eNegativo(vetor){
    let negativo = 0
    for(i in vetor){
        if(vetor[i] < 0){
            negativo++
        }
    }
    return `No vetor passado há ${negativo} valores negativos.`
}

console.log(eNegativo([-10, 10, -2, -3, -5, 5, 6, 7, 8, -2, -98]))