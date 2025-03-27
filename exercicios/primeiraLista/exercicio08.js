function records(list){
    let lastPoints = list[0]
    let worstPoints = 0
    let worstGame = 0
    let beat = []
    for(i in list){
        if(list[i] > lastPoints){
            beat.push(list[i])
            lastPoints = list[i]
        } else if(list[i] < lastPoints && list[i] <= worstPoints) {
            worstGame = Number(i) + 1
            worstPoints = list[i]
        }
    }
    return [beat.length, worstGame]
}
lista = [10, 20, 20, 8, 25, 3, 0, 30, 1]
console.log(records(lista))