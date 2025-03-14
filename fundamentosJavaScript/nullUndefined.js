let valor; // não inicializada
console.log(valor);
// console.log(valor2); // ReferenceError: valor2 is not defined

valor = null; // ausência de valor nao aponta para nenhum endereço de memória
console.log(valor);
//console.log(valor.toString()); // TypeError: Cannot read property 'toString' of null

const produto = {};
console.log(produto.preco); // undefined, 'cause 'preco' is not defined yet.
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // avoid assigning undefined
console.log(!!produto.preco);
// delete produto.preco; correct way to remove an attribute from an object.
console.log(produto);

produto.preco = null; // sem preco
console.log(!!produto.preco);
console.log(produto);