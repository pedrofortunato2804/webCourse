// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String
const produto = "iPad"
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2]
console.log(x, y)

const {idade, nome} = {nome: "Ana", idade: 20}
console.log(idade, nome)