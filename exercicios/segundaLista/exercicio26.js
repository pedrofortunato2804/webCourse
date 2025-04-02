/*
A fim de criar uum mecanismo de busca para a sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.

Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
*/

function buscarPalavrasSemelhantes(pesquisa, listaPalavras){
    let listaResultante = []
    for(let i = 0; i < listaPalavras.length; i++){
        if(listaPalavras[i].charAt(i) === pesquisa[i]){
            listaResultante.push(listaPalavras[i])
        }
    }
    return listaResultante
}

function buscarPalavrasSemelhantes2(inicio, palavras) { 
    return palavras.filter(palavra => palavra.includes(inicio)) 
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]))