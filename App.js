/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Principal from './src/component/Principal';
import SobreJogo from './src/component/SobreJogo';
import OutrosJogos from './src/component/OutrosJogos';
import Resultados from './src/component/Resultado';

export default class App7 extends Component {
  render() {
    return (
      <Router  sceneStyle={{paddingTop: 50}}> 
        <Scene key="root">
          <Scene key="principal" component={Principal} initial title="Cara ou Coroa"/>
          <Scene key="sobrejogo" component={SobreJogo} title="Sobre o Jogo"/>
          <Scene key="outrosjogos" component={OutrosJogos} title="Outros Jogos"/>
          <Scene key="resultado" component={Resultados} title="Resultados"/>
        </Scene>
      </Router>
    );
  }
}
