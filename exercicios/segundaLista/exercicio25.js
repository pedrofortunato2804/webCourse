/*
Desenvolver uma funcção que recebe um caracter e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.
*/

function contarCaractere(caractere, string){
    let contador = 0
    for(c in string){
        if(string.charAt(c) === caractere){
            contador++
        }
    }
    return contador
}

console.log(contarCaractere("r", "A sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo"))
console.log(contarCaractere("a", "A morte é como o vento, está sempre ao seu lado!"))