const schedule = require('node-schedule')
//Schedule.job('segundo minuto hora ano mes diaSemana(1 ao 7)')
const tarefa1 = schedule.scheduleJob('*/5 * 13 * * 1', function(){
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!')
}, 20000)

// setImmediate -> timeout com valor zerado
// setInterval -> disparar uma função de tempos em tempos

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 13
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})