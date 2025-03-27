function comprarVeiculo(tipo){
    switch(tipo){
        case "Hatch":
            return "Compra efetuada com sucesso!"
        case "Sedan": case "Motocicleta": case "Caminhonete":
            return "Tem certeza que não prefere este modelo?"
        default:
            return "Não trabalhamos com este tipo de automóvel aqui."
    }
}

console.log(comprarVeiculo("Hatch"))
console.log(comprarVeiculo("Sedan"))
console.log(comprarVeiculo("Motocicleta"))
console.log(comprarVeiculo("Caminhonete"))
console.log(comprarVeiculo("Conversível"))