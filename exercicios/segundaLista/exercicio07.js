// Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e 
// retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro 
// inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a minimo 
// ou a maximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, 
// portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo.

function estaEntre(num, min, max, inclusivo = false){
    return inclusivo ? num >= min && num <= max : num > min && num < max
}

console.log(estaEntre(10, 50, 100))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 3, 150))
console.log(estaEntre(3, 3, 150, true))