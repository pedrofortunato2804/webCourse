const criarProduto = function(nome, preco, cor){
    return{
        name: nome,
        price: preco,
        color: cor
    }
}

function criarProduto2(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Mouse', 145.00, 'Preto'))
console.log(criarProduto2('Mouse', 145.00))