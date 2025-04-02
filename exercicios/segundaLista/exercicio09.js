// Escreva um função que receba dois parametros. O primeiro é o elemento que repetirá,
// enquanto o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repetir(valor1, valor2){
    let arrayFinal = []

    for(let i = 0; i < valor2; i++){
        arrayFinal.push(valor1)
    }
    return arrayFinal
}

console.log(repetir("código", 2))
console.log(repetir(7, 3))