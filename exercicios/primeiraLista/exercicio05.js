function getValor(x){
    let xString = x.toFixed(2).toString()
    console.log(`R$${xString.replace('.', ',')}`)
}

getValor(0.40)
getValor(0.30000000000000004)