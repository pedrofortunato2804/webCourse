function anuidade(mes, valorPago){
    let juros = 0.5
    let montante = valorPago * (1 + juros) ** mes

    return `Você irá pagar R$${montante.toFixed(2).toString().replace(".", ",")}`
}

console.log(anuidade(1, 250.00))
console.log(anuidade(2, 250.00))
console.log(anuidade(4, 250.00))
console.log(anuidade(6, 250.00))
console.log(anuidade(8, 250.00))
console.log(anuidade(10, 250.00))
console.log(anuidade(12, 250.00))