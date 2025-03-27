function eDiaUtil(dia){
    switch(dia){
        case 1: case 7:
            return "Fim de Semana."
        case 2: case 3: case 4: case 5: case 6:
            return "Dia Útil." 
    }
}
console.log(eDiaUtil(1))
console.log(eDiaUtil(2))
console.log(eDiaUtil(3))
console.log(eDiaUtil(4))
console.log(eDiaUtil(5))
console.log(eDiaUtil(6))
console.log(eDiaUtil(7))
