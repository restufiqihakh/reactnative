/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Component/Judul';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Judul title="BIODATA"/>
        <Judul title="LOGIN"/>
        <Judul title="NAMBAH"/>
        <Text style={styles.welcome}>Hello!!!</Text>
        <Text style={styles.instructions}>Akhdiyat Restu Fiqih</Text>
        <Text style={styles.instructions}>XI RPL 3</Text>
        <Text style={styles.instructions}>05</Text>
        <Image
        style={{width:200,height:250}}
        resizeMode="contain"
        source={{uri: 'https://scontent.fsub2-2.fna.fbcdn.net/v/t1.0-9/30741504_2105510276394808_8942516312823824384_n.jpg?_nc_cat=0&_nc_eui2=AeE7hbb5pVsCcLkOdFI5Dxh_cvSuERGPSbYQfb41oD8GpzBLKmLI-W7FAjEnSs_I2yVuvd-5ywHiL6u2AEmR7oHkCG7JxZTFFXSpKTjYXcUP0Q&oh=0c8c17af9cd704136b57f414f89ec568&oe=5C2260B0'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b0ffff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#00bfc9'
  },
  instructions: {
    textAlign: 'center',
    color: '#00bfc9',
    marginBottom: 5,
  },
});
