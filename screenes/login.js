/**import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';

export default class Login extends Component{

    render(){
        return(
            <View style={styles.container}>

                <TextInput
                    style={{height: 40,marginTop:50}}
                    placeholder="Username"
                    onChangeText={(text) => this.setState({text})}
                />

                <TextInput
                    style={{height: 40}}
                    placeholder="Password"
                    onChangeText={(text) => this.setState({text})}
                />

                <Button style ={{margin: 20,flexDirection: 'row',justifyContent: 'space-between'}}
                title="Login"
                color="#841584"
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:3,
    },

    title: {
        fontWeight: 'bold',
        fontSize : 48,
        color:'black',
        alignItems:"center",
        marginTop:100,
        textAlign:'center'
    },
 



})**/
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput,Button,Image} from 'react-native';

 class Login extends Component{

    render(){
        return(

            <View style={styles.container}> 
                <Image 
                style={{width:120, height:120, marginLeft:120, marginTop:90}}
                source={require('./dd.png')}
                /> 
                
                <TextInput
                    style={{height: 40,width: 250,marginTop:50, marginLeft:50}}
                    placeholder="Username"
                    onChangeText={(text) => this.setState({text})}
                /> 

                <TextInput
                    style={{height: 40,width: 250,marginTop:10, marginLeft:50}}
                    placeholder="Password"
                    onChangeText={(text) => this.setState({text})}
                />

                <Button style={{marginTop:10, width:40, height:40, flexDirection: 'row',justifyContent: 'space-between'}}
                onPress={() => this.props.navigation.navigate('Home')}
                title="Login"
                color="#841584"
                />

            </View>
        )
    }
}
export default Login;

const styles = StyleSheet.create({
    container: {
    flex:1,
    },

    title: {
        fontWeight: 'bold',
        fontSize : 48,
        color:'black',
        alignItems:"center",
        marginTop:100,
        textAlign:'center'
    },
})
