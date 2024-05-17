const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    let tabelaChinesa = []
    let tabelaFeminina = []
    for (let i = 0; funcionarios.length > i; i++){
        let tabelaTemp = Object.entries(funcionarios[i])
        for (let l = 0; tabelaTemp.length > l; l++){
            let tabelafiltro = tabelaTemp[l]
            if (tabelafiltro[1] == "China"){
                tabelaChinesa.push(funcionarios[i])
            }
         }
         
    }
    console.log(tabelaChinesa)
})