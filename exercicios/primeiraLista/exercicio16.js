function calculadora(x, y, operacao){
    switch(operacao){
        case "+":
            return x + y
        case "-":
            return x - y
        case "*":
            return x * y
        case "/":
            return x / y
        default:
            return "Operações inválidas!"
    }
}

console.log(calculadora(2, 3, "+"))
console.log(calculadora(2, 3, "-"))
console.log(calculadora(2, 3, "*"))
console.log(calculadora(2, 3, "/"))
console.log(calculadora(2, 3, "**"))