console.log(soma(3, 4)) // Posso chamar a função antes mesmo dela ser declarada, pois o JS carrega tudo antes da execução
// console.log(sub(3, 1))
 
// function declaration
function soma(x, y){
    return x + y
}

// function expression

const sub = function(x, y){
    return x - y
}

console.log(sub(3, 1))

// named function expression (bem dificil de ser usada)
const mult = function mult(x, y){
    return x * y
}

console.log(mult(3, 3))