let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // Negação da negação

console.log("Os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os falsos...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Para finalizar...");
console.log(!!("" || null || 0 || " ")); // Retorna true, pois pelo menos um é verdadeiro

let nome = "Pedro";

console.log(nome || "Desconhecido"); // Se nome for falso, imprime "Desconhecido"   