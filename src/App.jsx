import React from 'react';
import Primeiro from './componentes/basico/Primeiro'
import ComParametro from './componentes/basico/ComParametro'
import ComFilhos from './componentes/basico/Comfilhos';
import Card from './componentes/basico/layout/Card';
import App from './App.css';
import Repeticao from './componentes/basico/Repeticao'
import Condicional from './componentes/basico/Condicional'
import CondicionalIf from './componentes/basico/CondicionalComIf'
import Pai from './componentes/comunicacao/direta/Pai'

export default props => (
    <div className="App">
        <Card titulo="#07 - Comunicação direta" color="#F46900">
            <Pai sobrenome='Freitas'></Pai>
        </Card>
        <Card titulo="#06 - Condicional com If" color="#F46900">
            <CondicionalIf numero={11}></CondicionalIf>
        </Card>

        <Card titulo="#05 - Condicional V1" color="#E94c6f">
            <Condicional numero={15}></Condicional>
        </Card>
        <Card titulo="#04 - Repetição" color="#008bba">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#03 - Componente com filhos" color="#d96459">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia </li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Compomentes com Parametros" color="#FF85CB">
            <ComParametro titulo='Esse é o titulo' subtitulo='Esse é o subtitulo' />
            <ComParametro titulo='Opa' subtitulo='Epa' /> */
        </Card>
        <Card titulo=" #01 - Primeiro Exercicio" color="#92B06A">
            <Primeiro />
        </Card>
    </div>
)