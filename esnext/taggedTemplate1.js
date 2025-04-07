// tagged templates - processar o template string dentro de uma função
function tag(parte, ...valores){
    console.log(parte)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)