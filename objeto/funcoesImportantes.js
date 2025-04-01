const pessoa = {
    nome: "Pedro",
    idade: 23,
    peso: 107
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Definir propriedade, com mais configurações
Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true, // Vai ser listada?
    writable: false, // pode ser alterada?
    value: '28/04/2001' //valor
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)