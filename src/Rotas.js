import React  from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './component/Principal';
import SobreJogo from './component/SobreJogo';
import OutrosJogos from './component/OutrosJogos';
import Resultados from './component/Resultado';

const Rotas = () => (
    <Router sceneStyle={{ paddingTop: 50 }}>
        <Scene key="root">
            <Scene key="principal" component={Principal} initial title="Cara ou Coroa" />
            <Scene key="sobrejogo" component={SobreJogo} title="Sobre o Jogo" />
            <Scene key="outrosjogos" component={OutrosJogos} title="Outros Jogos" />
            <Scene key="resultado" component={Resultados} title="Resultados" />
        </Scene>
    </Router>);

    export default Rotas;