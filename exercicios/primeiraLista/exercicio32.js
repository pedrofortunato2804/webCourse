function media(vetor){
    let soma = 0
    for(i in vetor){
        soma = soma + vetor[i]
    }
    return soma/vetor.length
}

console.log(media([1,2,3,4,5,6,7,8,9,10]))