// par nome/valor

const saudacao = "Olá"; // Contexto léxico 1

function exec() {
    const saudacao = "Fala"; // Contexto léxico 2
    return saudacao;
};

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: "Pedro",
    idade: 23,
    peso: 107,
    endereco: {
        logradouro: "Rua Tal de Tal",
        numero: 123
    }
};

console.log(saudacao)
console.log(exec())
console.log(cliente)