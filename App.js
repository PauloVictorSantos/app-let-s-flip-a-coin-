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
import PropTypes from 'prop-types';
export default class App7 extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="principal" component={Principal} initial title="Cara ou Coroa"/>
          <Scene key="sobrejogo" component={SobreJogo} />
          <Scene key="outrosjogos" component={OutrosJogos} />
        </Scene>
      </Router>
    );
  }
}
