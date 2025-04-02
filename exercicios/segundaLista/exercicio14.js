/*
Desenvolva uma função que receba com parâmetro um objeto e retone um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que correspode a um atributo do objeto.
Observe os exemplos abaixo para um melhor entendimento.
*/

function objetoParaArray(obj){
    return Object.entries(obj)
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Dev Software"
}))
console.log(objetoParaArray({
    codigo: 111111,
    preco: 12000
}))
