function forEach2(array){
    let indice = null
    let elemento = null
    for(i in array){
        indice = Number(i)
        elemento = array[i]
        console.log(elemento, indice, array)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
// forEach recebe três parâmetros (elemento, indice, array)
/*aprovados.forEach2(function(nome, indice, array){
    console.log(`${indice + 1}: ${nome}.`)
    console.log(array)
})*/

console.log(forEach2(aprovados))
// Certo
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

// forEach recebe três parâmetros (elemento, indice, array)
aprovados.forEach2(function(nome, indice, array){
    console.log(`${indice + 1}: ${nome}.`)
    //console.log(array)
})