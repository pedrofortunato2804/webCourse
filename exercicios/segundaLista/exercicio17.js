/* 
Escreva uma função que receba um array de números e retornará a soma de todos od números desse array.
*/

function somarNumeros(array){
    return array.reduce(function(ultimo, atual){
        return ultimo + atual
    })
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))