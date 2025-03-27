function getMean(codAluno, nota1, nota2, nota3){
    let listaNotas = [nota1, nota2, nota3]
    let maiorNota = Math.max(nota1, nota2, nota3)
    let pesoMaior = 4
    let pesoMenor = 3
    let notasMenores = listaNotas.pop(maiorNota)
    
    media = (maiorNota * pesoMaior + notasMenores.forEach(notas => notas * pesoMenor))/(pesoMaior + pesoMenor)
    
    return media
}

console.log(getMean(100, 4, 5, 6))