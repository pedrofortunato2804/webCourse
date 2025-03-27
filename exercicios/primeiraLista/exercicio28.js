function parImpar(intList){
    for(i in intList){
        if(intList[i] % 2 === 0){
            console.log(`O número ${intList[i]} é par.`)
        } else {
            console.log(`O número ${intList[i]} é ímpar.`)
        }
    }
}

parImpar([1,2,3,4,5,6,7,8,9,10])