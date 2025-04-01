Array.prototype.filter2 = function(callback){
    let resultArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this) === true){
            resultArray.push(this[i])
        }
    }
    return resultArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))