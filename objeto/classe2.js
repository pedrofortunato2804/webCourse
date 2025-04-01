class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}
// v Pai tem como prototipo Avo v
class Pai extends Avo{
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome) // Chamando o construtor da classe "pai" no caso Avo
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)