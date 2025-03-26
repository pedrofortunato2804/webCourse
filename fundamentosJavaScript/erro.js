function tratarErroELancar(erro) {
    //throw new Error('ERROR!')
    //throw 10
    //throw true
    //throw 'string'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final!')
    }

}

const obj = { nome: 'Pedro' };
imprimirNome(obj);