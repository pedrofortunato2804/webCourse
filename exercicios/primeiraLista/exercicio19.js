function precoPedido(codPedido, qtdPedido){
    switch(codPedido){
        case 100:
            return `Você irá pagar R$${(qtdPedido * 3).toString().replace(".", ",")}.` 
        case 200:
            return `Você irá pagar R$${(qtdPedido * 4).toString().replace(".", ",")}.`
        case 300:
            return `Você irá pagar R$${(qtdPedido * 5.5).toString().replace(".", ",")}.`
        case 400:
            return `Você irá pagar R$${(qtdPedido * 7.5).toString().replace(".", ",")}.`
        case 500:
            return `Você irá pagar R$${(qtdPedido * 3.5).toString().replace(".", ",")}.`
        case 600:
            return `Você irá pagar R$${(qtdPedido * 2.8).toString().replace(".", ",")}.`
        default:
            return "Produto não existe!"
        
    }
}

console.log(precoPedido(100, 5))
console.log(precoPedido(200, 5))
console.log(precoPedido(300, 5))
console.log(precoPedido(400, 5))
console.log(precoPedido(500, 5))
console.log(precoPedido(600, 5))
console.log(precoPedido(6340, 5))