// Let tem escopo de bloco, ou seja, a variável declarada dentro de um bloco de código não afeta a variável declarada fora do bloco de código.
// tem escopo global, de função e de bloco.

let numero = 1;
{
    let numero = 2;
    console.log('dentro =', numero);
}
console.log('fora =', numero);