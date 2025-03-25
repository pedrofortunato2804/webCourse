// Hoisting ou Içamento, a variavel existe porém não foi definida. Funciona em funções também. Sem beneficios.

console.log('a =', a);
var a = 2;
console.log('a =', a);

// Hoisting não funciona com let.
console.log('b =', b); // ReferenceError: Cannot access 'b' before initialization
let b = 34;
console.log('b =', b)