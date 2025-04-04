const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // cliente http

const getCountry = funcionario => funcionario.pais = 'China'
const getGender = funcionario => funcionario.genero = 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    console.log(funcionarios.filter(getCountry).filter(getGender).reduce(menorSalario))
})
