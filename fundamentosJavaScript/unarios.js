let num1 = 1;
let num2 = 2;

num1++;
console.log(num1);
--num1;
console.log(num1);

console.log(++num1 === num2--); // O ++ foi executado antes da comparação, e o -- foi executado bem depois, pois só depois da comparação o -- subtraiu da variavel.