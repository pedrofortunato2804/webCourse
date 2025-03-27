function triangle(x, y, z){
    if(x === y && y === z){
        return "Equilátero."
    } else if(x !== y && y !== z) {
        return "Escaleno."
    } else {
        return "Isósceles."
    }
}

console.log(triangle(3, 3, 3))
console.log(triangle(1, 2, 3))
console.log(triangle(2, 2, 3))