/*
Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estão
num array, conforme o exemplo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas
*/

const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array)/array.length

function receberMelhorEstudante(estudantes){
    const estudantesComMedias = Object.entries(estudantes).map(estudante => {
        const chave = 0, valor = 1
        return {nome: estudante[chave], media: media(estudante[valor])}
    })
    const estudantesOrdenados = estudantesComMedias.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media)
    const melhorEstudante = estudantesOrdenados[0]

    return melhorEstudante
}

console.log(receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Maria: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}))