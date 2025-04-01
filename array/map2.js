const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

function retornarPrecos(array){
    let resultado = []
    for(i in array){
        let obj = JSON.parse(array[i])
        let preco = obj.preco
        resultado.push(preco)
    }
    return resultado
}

console.log(retornarPrecos(carrinho))

let resultado = carrinho.map(e => JSON.parse(e)).map(e => e.preco)
console.log(resultado)