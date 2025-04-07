function falarDepoisDe(segundos, frase){ // função criada recebendo dois parâmetros, segundos(qtd de segundos para execução da tarefa) e frase a ser printada
    return new Promise((resolve, reject) => { // a função retorna um Promise(promessa), recebe dois parametros resolve(caso a promessa seja cumprida) e reject(caso não).
        setTimeout(() => { // setar o tempo e a resposta da promessa
            resolve(frase)
        }, segundos * 1000) // deve ser multiplicado por 1000 pois so aceita milisegundos
    })
}

falarDepoisDe(3, 'Que Legal!')
    .then(frase => frase.concat('?!?')) // posso encadear quantos then eu quiser
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))