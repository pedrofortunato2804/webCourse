function aumentoSalarial(planotrabalho, salarioAtual){
    switch(planotrabalho){
        case "A":
            return salarioAtual + (salarioAtual * 0.1)
        case "B":
            return salarioAtual + (salarioAtual * 0.15)
        case "C":
            return salarioAtual + (salarioAtual * 0.2)
        default:
            return "Este plano é inválido!"
    }
}

console.log(aumentoSalarial("A", 1500))
console.log(aumentoSalarial("B", 1500))
console.log(aumentoSalarial("C", 1500))
console.log(aumentoSalarial("D", 1500))