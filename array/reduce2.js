const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

// Desafio 1: Todos os alunos são bolsistas?
console.log(alunos.map(aluno => aluno.bolsista).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    if(acumulador !== true || atual !== true){
        return false
    }else{
        return true
    }
}))
// Resposta
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
// Desafio 2: Algum aluno é bolsistas?
console.log(alunos.map(aluno => aluno.bolsista).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    if(acumulador === true || atual === true){
        return true
    }else{
        return false
    }
}))
// Resposta
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))