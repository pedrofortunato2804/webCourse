const prod1 = {};
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; // Evitar atributos com espaço.
console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    estilo: {
        cor: 'rosa',
        material: 'algodão',
        gola: 'V'
    }
};

prod2['Desconto Legal'] = 0.40;
console.log(prod2);