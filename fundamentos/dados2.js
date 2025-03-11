// var ou let para variaveis
// var é global e let é local
console.log(19.9 * 0.6);

let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

let nome = "Caderno"; // String (texto) -> sequência de caracteres.
let categoria = "Papelaria";
console.log("Produto: " + nome
    + ", Categoria: " + categoria
    + ", Preço: " + preco
    + ", Desconto: " + desconto);