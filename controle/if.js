function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log('aprovado')
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.9);

function parOuImpar(num){
    if(num % 2 === 0){
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

for(let i = 0; i < 11; i++){
    result = parOuImpar(i)
    console.log('O número', i, 'é', result);
}