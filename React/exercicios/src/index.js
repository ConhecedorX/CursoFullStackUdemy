import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'

// import BomDia from './components/BomDia'

// import Multi, { BoaNoite } from './components/Multiplos'

// import Saudacao from './components/Saudacao'

import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Como passo os componentes Filhos aqui? */}
            <Filho nome="Pedro" />
            <Filho nome="Paula"/>
            <Filho nome="Carla"/>

        </Pai>
    </div>, document.getElementById('root'))