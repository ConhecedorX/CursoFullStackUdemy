const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    let tabelaChinesa = []
    let tabelaFeminina = []
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
    console.log(tabelaFeminina)
})