console.log('01)', '1' == 1); // == compara a igualdade de duas coisas.
console.log('02)', '1' === 1); // === istritamente igual.
console.log('03)', '3' != 3); // != diferente.
console.log('04)', '3' !== 3); // !== istritamente diferente.

console.log('05)', 3 < 2); // menor que
console.log('06)', 3 > 2); // maior que
console.log('07)', 3 <= 2); // menor ou igual a
console.log('08)', 3 >= 2); // maior ou igual a

const d1 = new Date(0); // 0 representa a data de refência marco zero.
const d2 = new Date(0);
console.log('09)', d1 === d2); 
console.log('10)', d1 == d2);
console.log('11)', d1.getTime() === d2.getTime()); // Porque os dois tem o mesmo tipo e valor.

console.log('12)', undefined == null);
console.log('13)', undefined === null);

// Recomenda-se usar o istritamente igual, para não confundir tipos.