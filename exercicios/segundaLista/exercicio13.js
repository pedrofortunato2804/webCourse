/*
Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
*/

function filtrarNumeros(array){
    return array.filter(e => typeof e === "number")
}

console.log(filtrarNumeros(["JavaScript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a", "c"]))