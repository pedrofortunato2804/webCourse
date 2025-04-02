/*
Elabore uma função qye receba um array de números e retorne um array que tenha todos os números que
são pares e que também tenham índices pares.
*/

function receberSomenteOsParesDeIndicesPares(array){
    let arrayPares = []
    for(i in array){
        if(array[i] % 2 === 0 && i % 2 === 0){
            arrayPares.push(array[i])
        }
    }
    return arrayPares
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))