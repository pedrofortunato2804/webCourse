/*
Crie uma função que receba um array de números e retorne o menor número desse array.
*/

function menorNumero(array){
    return Math.min(...array)
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))