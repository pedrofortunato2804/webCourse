const vetInteiro = [1, 2, 3, 4]
const vetString = ["5", "6", "7", "8"]
const vetDouble = [9.1, 10.9, 11.9, 12.9]

const vetFinal = vetInteiro.concat(vetString).concat(vetDouble)
console.log(vetFinal)

const vetFinal2 = vetString.concat(vetDouble).concat(vetInteiro)
console.log(vetFinal2)