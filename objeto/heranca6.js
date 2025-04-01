function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123) // Ao usar o operador new o protoype dessa função aponta para Aula.prototype
const aula2 = new Aula('Até Breve', 456)

console.log(aula1, aula2)

// simulando o new

function novo(f, ...params){ // Recebe a função construtora e seus parametros
    const obj = {} // Cria um objeto
    obj.__proto__ = f.prototype // O prototipo desse obj tem que apontar para o prototype da função construtora.
    f.apply(obj, params) // Chamar a função, depois o metodo apply() onde recebera o objeto(this), e o array de parametros(...(spread_rest))
    return obj // retorna o objeto criado
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)