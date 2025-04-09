let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p
    .then(valor => valor[0]) // Primeiro valor do array
    .then(primeiro => primeiro[0]) // Primeira letra do primeiro valor do array
    .then(letra => letra.toLowerCase()) // Passando a primeira letra pra lowercase
    .then(minuscula => console.log(minuscula))

// Ou

const primeiroElemento2 = array => array[0]
const primeiraLetra2 = string => string[0]
const letraMinuscula2 = letra => letra.toLowerCase()


let promessa = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

promessa
    .then(primeiroElemento2) // Primeiro valor do array
    .then(primeiraLetra2) // Primeira letra do primeiro valor do array
    .then(letraMinuscula2) // Passando a primeira letra pra lowercase
    .then(console.log)

// Ou

new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento2) // Primeiro valor do array
    .then(primeiraLetra2) // Primeira letra do primeiro valor do array
    .then(letraMinuscula2) // Passando a primeira letra pra lowercase
    .then(console.log)