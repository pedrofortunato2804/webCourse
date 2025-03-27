function func1(inicio = 0, fim = 100){
    if (inicio > fim) [inicio, fim] = [fim, inicio]
    let impares= []

    for(let i = inicio; i < fim + 1; i++){
        if(i % 2 !== 0){
            impares.push(i)
        }
    }
    return impares
}

console.log(func1(100, 115))
console.log(func1(150, 115))
console.log(func1())