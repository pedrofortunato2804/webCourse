console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' // Mais usado para substituição
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)

console.log(aprovados)
aprovados.sort() // Ordena alfabeticamente
console.log(aprovados)

delete aprovados[1] // deleta mas não muda as posições dos elementos, apenas coloca undefined no elemento deletado
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // (Elemento inicial, quantos elementos apartir do inicial deve ser excluidos, elementos adicionais depois da exclusão)
aprovados.splice(1, 2, 'Pedro', 'Bel')
aprovados.splice(1, 0, 'Zé', 'Maria')
console.log(aprovados)