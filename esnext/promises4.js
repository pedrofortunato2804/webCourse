function gerarNumEntre(min, max, tempo){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(function(){
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)  
    })
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumEntre(1, 60, 4000),
        gerarNumEntre(1, 60, 1000),
        gerarNumEntre(1, 60, 500),
        gerarNumEntre(1, 60, 3000),
        gerarNumEntre(1, 60, 100),
        gerarNumEntre(1, 60, 1500)
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })