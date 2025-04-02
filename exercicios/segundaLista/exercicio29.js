/*
Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número 
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que 
têm a quantidade de dígitos indicada pelo segundo parâmetro.
*/

function filtrarPorQuantidadeDeDigitos(array, num){
    let resultado = []
    array.forEach(function(e){
        let qtd = 0
    
        for(j in e.toString()){
            qtd++
        }
        qtd === num ? resultado.push(e) : null
    })

    return resultado
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))