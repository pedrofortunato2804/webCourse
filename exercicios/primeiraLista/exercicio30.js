function maiorMenor(vetor){
    let maior = 0
    let menor = Infinity
    for(i in vetor){
        if(vetor[i] > maior){
            maior = vetor[i]
        } else if(vetor[i] < menor) {
            menor = vetor[i]
        } else {
            continue
        }
    }
    return `O maior número é ${maior} e o menor é ${menor}.`
}

console.log(maiorMenor([12, 345, 23567, 2, -11212, 5, 66666, 23324245, 123, 542346554, 222, -2399348924898]))

function maiorMenorFacil(vetor){
    let maior = Math.max(...vetor)
    let menor = Math.min(...vetor)
    return `O maior número é ${maior} e o menor é ${menor}.`
}

console.log(maiorMenorFacil([12, 345, 23567, 2, -11212, 5, 66666, 23324245, 123, 542346554, 222, -2399348924898]))