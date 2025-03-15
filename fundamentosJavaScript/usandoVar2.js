// Var tem escopo global e de função. Portanto, a variável declarada dentro de um bloco de código afeta a variável declarada fora do bloco de código.
var numero = 1
{
    var numero = 2 // var não tem escopo de bloco
    console.log('dentro =', numero)
}
console.log('fora =', numero)