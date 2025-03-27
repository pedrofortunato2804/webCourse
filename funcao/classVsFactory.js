class Pessoa{
    constructor(nome){ // _init_
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}!`)
    }
}

p1 = new Pessoa("Pedro")
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}!`) // Tem ciência do contexto léxico declarado.
    }
}

const p2 = criarPessoa("Pedro")
p2.falar()