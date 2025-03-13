const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)); // Pega o unicode do digito.
console.log(escola.indexOf('3')); // Pega o index do digito.

console.log(escola.substring(1));
console.log(escola.substring(0, 3)); // Ir do indice 0 até o indice 3

console.log("Escola ".concat(escola).concat("!"));
console.log("Escola " + escola + "!"); // Mesma coisa de concatenar
console.log(escola.replace(3, 'e'));
console.log(escola.replace(/\d/, 'e')); //regex


console.log('Ana,Pedro,Maria'.split(',')); //Cria uma lista após dividir pela vírgula. [ 'Ana', 'Pedro', 'Maria' ]
console.log('Ana,Pedro,Maria'.split(/,/)); // Regex