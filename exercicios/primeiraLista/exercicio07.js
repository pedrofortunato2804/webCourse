function baskara(a, b, c){
    let delta = b ** 2 - 4 * a * c
    if(delta < 0){
        return "Delta é negativo!"
    } else {
        let x1 = (-b + Math.sqrt(delta))/(2 * a)
        let x2 = (-b - Math.sqrt(delta))/(2 * a)
        return [x1, x2]
    }
}

console.log(baskara(1, 12, -13))
console.log(baskara(2, -16, -18))