// Escreva uma função que receba um valor booleano ou númerico. Se o parâmetro fornecido for booleano,
// o retorno da função deverá ser o inverso. Exemplo: Se a entrada for 'false' o retorno será 'true'.
// Se o parâmetro for numérico, o retorno será o número inverso. Exemplo: Entrada for 1 ou retorno sera -1.
// Se a entrada não for nehum dos tipos acima, retorne "booleano ou números esperados, mas o parâmetro é do tipo ...".

function inverso(valor){
    if(typeof valor === "boolean"){
        return !valor
    } else if(typeof valor === "number"){
        return valor * -1
    } else{
        return `booleano ou números esperados, mas o parâmetro é do tipo ${typeof valor}`
    }
}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("Programação"))
console.log(inverso(2000))