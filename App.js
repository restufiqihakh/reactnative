/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,TextInput,Button} from 'react-native';
import Judul from './Component/Judul';
import Login from './screenes/login';

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
      <View style={styles.container}>
                <Image 
                style={{width:120, height:120, marginLeft:120, marginTop:100}}
                source={require('./dd.png')}
                />
                <TextInput
                    style={{marginLeft:55,height: 40, width:250,marginTop:65}}
                    placeholder="Username"
                    onChangeText={(text) => this.setState({text})}
                />

                <TextInput
                    style={{height: 40,marginLeft:55,width:250, marginTop:10}}
                    placeholder="Password"
                    onChangeText={(text) => this.setState({text})}
                />

                <Button style ={{margin: 20, width:10,height:10,flexDirection: 'row',justifyContent: 'space-between'}}
                title="Login"
                color="#841584"
                />
            </View>

    );
  }
}

const styles = StyleSheet.create({
container: {
        flex:3,
    },
    container: {
      flex:1,
      backgroundColor:'#89D0EC'
    },
});
