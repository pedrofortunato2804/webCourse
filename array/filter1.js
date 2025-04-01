const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

function produtoCaro(produto){
    return produto.preco >= 500 ? true : false
}

function eFragil(produto){
    return produto.fragil === true ? true : false
}

console.log(produtos.filter(eFragil).filter(produtoCaro))

// Resultado 

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))