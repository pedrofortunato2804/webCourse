function recebe2Vetores(vetor1, vetor2){
    [vetor1, vetor2] = [vetor2, vetor1]
    return `Vetor 1: ${vetor1}, Vetor 2: ${vetor2}`
}

console.log(recebe2Vetores([1, 2, 3], [4, 5, 6]))