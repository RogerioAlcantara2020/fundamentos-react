import React from 'react';
import Primeiro from './componentes/basico/Primeiro'
import ComParametro from './componentes/basico/ComParametro'
import ComFilhos from './componentes/basico/Comfilhos';
import Card from './componentes/basico/layout/Card';
import App from './App.css';
import Repeticao from './componentes/basico/Repeticao'
import Condicional from './componentes/basico/Condicional'
import CondicionalIf from './componentes/basico/CondicionalComIf'

export default props => (
    <div className="App">
        <Card titulo="#06 - Condicional com If">
            <CondicionalIf numero={11}></CondicionalIf>
        </Card>

        <Card titulo="#05 - Condicional V1">
            <Condicional numero={15}></Condicional>
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#03 - Componente com filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia </li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Compomentes com Parametros">
            <ComParametro titulo='Esse é o titulo' subtitulo='Esse é o subtitulo' />
            <ComParametro titulo='Opa' subtitulo='Epa' /> */
        </Card>
        <Card titulo=" #01 - Primeiro Exercicio">
            <Primeiro />
        </Card>
    </div>
)