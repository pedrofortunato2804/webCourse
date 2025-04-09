function gerarNumEntre(min, max, numeroProibidos){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        if(numeroProibidos.includes(aleatorio)){
            reject('Número repetido!')
        }else{
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1){
    try{
        const numeros = []

        for(let _ of Array(qtdeNumeros).fill()){
            numeros.push(await gerarNumEntre(1, 60, numeros))
        }
        return numeros
    }catch(e){
        if(tentativas > 10){
            throw "não deu certo"
        }else{
            gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)
