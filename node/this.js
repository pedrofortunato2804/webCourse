console.log(this === global) // false pq this é === module.exports
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports) // Dentro de uma função o this não aponta para exports, apenas fora da função.
    console.log(this === module.exports)
    console.log(this === global) // true

    this.perigo = 'Qualquer coisa' // esta colocando dentro do escopo global
}
this.perigo = 'Qualquer coisa' // esta colocando dentro do module.exports

logThis()

// Notas

function functionExpression(){
    console.log("Aponta para o escopo global ->", this === global)
    console.log("Aponta para o exports ->", this === exports)
    console.log("Aponta para o module.exports ->", this === module.exports)

    console.log("O this nessa função é objeto GLOBAL ->", this)
}
functionExpression()

// Porém em arrow functions é diferente.

const arrowFunction = () => {
    console.log("Aponta para o escopo global ->", this === global)
    console.log("Aponta para o exports ->", this === exports)
    console.log("Aponta para o module.exports ->", this === module.exports)

    console.log("O this nessa função é GLOBAL ->", this === global)
    console.log("O this nessa função é o MODULE.EXPORTS ->", this === module.exports)
}
arrowFunction()