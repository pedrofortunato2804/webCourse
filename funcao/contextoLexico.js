const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao() // Carrega consigo o local onde ela foi definido, procurando a variavel no escopo onde ela foi definida
}

exec()