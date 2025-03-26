function teste1(num){
    if(num > 7)
        console.log(num) // Esta sentença está relacionada ao IF
        console.log('Final') // Essa não está
}

teste1(6)
teste1(8)

function teste2(num){
    // O ponto e vírgula finaliza o if, o objeto será executado normalmente, pois n tem relação com o if.
    if(num > 7);{
        console.log(num)
    }
}

teste2(6)
teste2(8)