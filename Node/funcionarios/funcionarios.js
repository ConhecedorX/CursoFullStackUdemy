const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    let tabelaChinesa = []
    let tabelaFeminina = []
    let tabelaSalarios = []
    let maior = 0
    for (let i = 0; funcionarios.length > i; i++){
        let tabelaTemp = Object.entries(funcionarios[i])
        for (let c = 0; tabelaTemp.length > c; c++){
            let tabelafiltro = tabelaTemp[c]
            if (tabelafiltro[1] == "China"){
                tabelaChinesa.push(funcionarios[i])
            }
        }
    }
    for (let r = 0; tabelaChinesa.length > r; r++){
        let tabelaChinesaTemp = Object.entries(tabelaChinesa[r])
        for (let f = 0; tabelaChinesaTemp.length > f; f++){
            let tabelafiltrofeminino = tabelaChinesaTemp[f]
            if (tabelafiltrofeminino[1] == "F"){
                tabelaFeminina.push(tabelaChinesa[r])
            }
        }
    }
    for (let s = 0; tabelaFeminina.length > s; s++){
        let tabelaSalarioTemp = Object.entries(tabelaFeminina[s])
        for (let d = 0; tabelaSalarioTemp.length > d; d++){
            let tabelafiltrosalario = tabelaSalarioTemp[d]
            if (tabelafiltrosalario[0] == "salario"){
                if (tabelafiltrosalario[1] > maior){
                    maior = tabelafiltrosalario[1]
                    tabelaSalarios = tabelaFeminina[s]
                }
            }
        }
    }
    console.log(tabelaSalarios)
})