const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc() // incrementa mais um
contadorA.inc() // incrementa mais um
console.log(contadorA.valor, contadorB.valor) // atraves do cache ele pega os valores incrementados no outro contador, caso o objeto tenha sido criado por outra instancia.

contadorC.inc() // incrementa mais um
contadorC.inc() // incrementa mais um
console.log(contadorC.valor, contadorD.valor) // O valor do contador D não foi modificado pois foi apenas incrementado no valor C.