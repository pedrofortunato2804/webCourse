function necessaryBills(valor){
    let cem = 0
    let cinq = 0
    let dez = 0
    let cin = 0
    let um = 0

    while(valor !== 0){
        console.log(valor)
        if(valor >= 100){
            valor = valor - 100
            cem++
        } else if(valor >= 50){
            valor = valor - 50
            cinq++
        } else if(valor >= 10){
            valor = valor - 10
            dez++
        } else if(valor >= 5){
            valor = valor - 5
            cin++
        } else if(valor >= 1){
            valor = valor - 1
            um++
        }
    }
    let tem100 = cem !== 0 ? `${cem} nota(s) de R$100,00.` : ""
    let tem50 = cinq !== 0 ? `${cinq} nota(s) de R$50,00.` : ""
    let tem10 = dez !== 0 ? `${dez} nota(s) de R$10,00.` : ""
    let tem5 = cin !== 0 ? `${cin} nota(s) de R$5,00.` : ""
    let tem1 = um !== 0 ? `${um} nota(s) de R$1,00.` : ""

    return tem100 + tem50 + tem10 + tem5 + tem1
}

console.log(necessaryBills(18))