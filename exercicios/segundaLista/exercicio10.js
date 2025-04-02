// Elabore uma função que recebe um número como parametro e retorne uma string com o símbolo "+"
// na quantidade especificada no parametro.

function simboloMais(qtd){
    let simbolo = ""
    for(i = 0; i < qtd; i++){
        simbolo += "+"
    }
    return simbolo
}

console.log(simboloMais(2))
console.log(simboloMais(4))