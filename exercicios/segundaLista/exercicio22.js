/*
Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será 
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada for igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! o número sorteado foi o X.". X é o número que foi sorteado.
*/

function funcaoDaSorte(num){
    let sorteado = Math.floor(Math.random() * (10 - 1 + 1) + 1) 
    return num === sorteado ? `Parabéns! O número sorteado foi o ${sorteado}` : `Que pena! O número sorteado foi o ${sorteado}`
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))