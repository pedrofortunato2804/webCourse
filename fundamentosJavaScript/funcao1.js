// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 3, 4, 5, 6, 7, 8);
imprimirSoma();

// Funcao com retorno
function soma(a, b = 0) {
    return a + b;
}

resultado_soma = soma(2, 3);
console.log(resultado_soma);

console.log(soma(2));
console.log(soma());
