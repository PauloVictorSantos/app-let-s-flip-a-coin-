/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const logo = require('./src/imgs/logo.png');
const btnJogar = require('./src/imgs/botao_jogar.png');
const btnSobreJogo = require('./src/imgs/sobre_jogo.png');
const btnOutroJogo = require('./src/imgs/outros_jogos.png');

export default class App7 extends Component {
  render() {
    return (
      <View style={styles.cenaPrincipal}>
        <View style={styles.apresentacaoJogo}>
          <Image source={logo} />
          <Image source={btnJogar} />
        </View>
        <View style={styles.rodape}> 
          <Image source={btnSobreJogo} />
          <Image source={btnOutroJogo} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cenaPrincipal:{
    flex: 1,
    backgroundColor: '#61BD8C'
  },
  apresentacaoJogo:{
    flex: 10,
    justifyContent: 'center',
    aligntems: 'center'
  },
  rodape:{
    flex:1,
    justifyContent: 'space-between'
  }
});
