function getFruits(fruit){
    switch(fruit){
        case "Maça":
            return "Não vendemos esta fruta aqui."
        case "Kiwi":
            return "Estamos com escassez de kiwis."
        case "Melancia":
            return "Aqui está, são R$3,00 o quilo."
        default:
            return "Digite uma fruta válida."
    }
}

console.log(getFruits("Maça"))
console.log(getFruits("Kiwi"))
console.log(getFruits("Melancia"))
console.log(getFruits("Pêra"))