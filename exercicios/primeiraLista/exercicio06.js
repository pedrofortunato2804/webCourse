function taxaJurosSimples(capitalInicial, taxaJuros, tempoAplicacao){
    let montante = capitalInicial * taxaJuros * tempoAplicacao
    return montante
}

function taxaJurosComposto(capitalInicial, taxaJuros, tempoAplicacao){
    let montante = capitalInicial * (1 + taxaJuros) ** tempoAplicacao
    return montante
}

console.log(taxaJurosSimples(300, 0.12, 12))
console.log(taxaJurosComposto(300, 0.12, 12))