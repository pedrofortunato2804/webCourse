const filhas = ['Valesca', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const outros = ['Zé Divino', 'Gabryel', 'Jeremias']
const todos = filhas.concat(filhos, 'Fulano', outros)
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7], 8, 9, 10]))