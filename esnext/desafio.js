// Leitura do arquivo deve ser feita dentro de uma promise,
// como parâmetro ela recebera o caminho do arquivo e como resultado o conteudo

const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

// new Promise(resolve => {
//     const conteudo = fs.readFileSync(caminho)
//     resolve(conteudo.toString())
// }).then(console.log)

// Resposta

function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })
    })
}

lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))

// lerArquivo(caminho)
//     .then(conteudo => conteudo.split('\n'))
//     .then(linhas => linhas.join(','))
//     .then(conteudo => `O valor final é: ${conteudo}`)
//     .then(console.log)