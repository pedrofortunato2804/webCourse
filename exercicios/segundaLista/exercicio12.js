/*
Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
apenas modificando-o, mas em essência, o objeto continua o mesmo, ou seja, a sua referência de memória
é a mesma.

Num projeto que você está trabalhando, você designado a refatorar diversas funções para que façam
cópias de objetos e manupulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis en
algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.

Você escreverá uma função que recebe um ojeto como primeiro parâmetro e, como segundo parâmetro, o 
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a 
propriedade especificada no segundo parâmemtro.
*/

function removerPropriedade(obj, propriedade){
    let objCopy = {...obj}
    delete objCopy[propriedade]
    return objCopy
}

console.log(removerPropriedade({'a': 1, 'b': 2}, 'a'))
console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, 'descricao'))