function valorAPagar(idade){
    if(idade < 10){
        return `R$${(100.00 + 80.00).toString().replace(".", ",")}.`
    } else if(idade >= 10 && idade <= 30){
        return `R$${(100.00 + 50.00).toString().replace(".", ",")}.`
    } else if(idade > 30 && idade <= 60){
        return `R$${(100.00 + 95.00).toString().replace(".", ",")}.`
    } else if(idade > 60){
        return `R$${(100.00 + 130.00).toString().replace(".", ",")}.`
    } else {
        return "Idade inválida."
    }
}

console.log(valorAPagar(9))
console.log(valorAPagar(14))
console.log(valorAPagar(23))
console.log(valorAPagar(45))
console.log(valorAPagar(78))
console.log(valorAPagar(0))