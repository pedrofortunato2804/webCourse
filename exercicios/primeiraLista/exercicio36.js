function func1(vetor, num){
    let vetorFinal = []
    for(i in vetor){
        vetorFinal.push(vetor[i] * num)
    }
    return vetorFinal
}

function func2(vetor, num){
    let vetorFinal = []
    
    for(i in vetor){
        if(vetor[i] > 5){
            vetorFinal.push(vetor[i] * num)
        }  
    }
    return vetorFinal
}

console.log(func1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
console.log(func2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))