const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] // Conteúdo do array pode ser alterado
pilotos.pop() // Massa quebrou o carro! Remove o último elemento do array.

console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento da lista.
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos) // Adiciona um elemento na primeira posição da lista

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // Massa quebrou! (esta na 3 posição do array)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // Vai pegar os elementos apartir do indice 2
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)