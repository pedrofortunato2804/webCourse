function pa(n, a1, r){
    let resultadoPa = a1 + (n - 1) * r
    let nTermos = []
    let termo = 0
    let addTermo = a1
    let soma = ((a1 + resultadoPa) * n)/2
    
    while(addTermo <=  resultadoPa){
        nTermos.push(addTermo)
        addTermo = addTermo + r 
        termo++ 
    }
    return `Os n termos são: ${nTermos}. A soma dos termos é: ${soma}. `
}

console.log(pa(10, 26, 5))

function pg(n, a1, r){
    let resultadoPg = a1 * r ** (n - 1) 
    let nTermos = []
    let termo = 0
    let addTermo = a1
    let soma = (a1 * (r ** n - 1))/(r - 1)
    
    while(addTermo <=  resultadoPg){
        nTermos.push(addTermo)
        addTermo = addTermo + r 
        termo++ 
    }
    return `Os n termos são: ${nTermos}. A soma dos termos é: ${soma}. `
}

console.log(pg(5, 2, 2))