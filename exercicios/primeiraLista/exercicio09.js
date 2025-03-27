function notas(nota){
    if(nota < 38){
        return `Reprovado. Nota ${nota}.`
    } else {
        while(nota % 5 !== 0){
            nota++
        }
        return `Aprovado. Nota ${nota}.`
    }
}

console.log(notas(44))
