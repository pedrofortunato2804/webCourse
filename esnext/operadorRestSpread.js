// operador ... rest(juntar) / spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12384.99}
const clone = {ativo: true, ...funcionario}
console.log(funcionario, clone)

// usar spread com array
const groupA = ['Jão', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...groupA]
console.log(grupoFinal)