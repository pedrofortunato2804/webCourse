function getNumberInterval(vetor){
    let between10n20 = 0
    let notInInterval = 0
    for(i in vetor){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            between10n20++
        }else{
            notInInterval++
        }
    }
    return `Há ${between10n20} números no vetor passado que estão entre 10 e 20. E há ${notInInterval} que não estão entre esse intervalo.`
}

console.log(getNumberInterval([1, 23, 24, 21, 76, 2, 1, 3, 4, 5, 9, 10, 20, 24, 11, 12, 14, 16]))