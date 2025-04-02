/*
Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
objeto recebido como parâmetro, porém com as posições das chaves invertidas.
*/
function inverter(obj){
    let newObj = {}
    Object.entries(obj).forEach(e => {
        newObj[e[1]] = e[0]
    })
    return newObj
}
const obj = {a: 1, b: 2, c: 3}

console.log(inverter(obj))