import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput,Button,Image} from 'react-native';

 class Home extends Component{

    render(){
        return(
        <View style={styles.container}> 
        <Text style={styles.title}>Biodata</Text>
                
        <Text style={styles.welcome}>Nama   : Akhdiyat Restu Fiqih</Text>
        <Text style={styles.blue}>Kelas     : XI RPL 3</Text>
        <Text style={styles.red}>No Absen   : 05</Text>
          <Image 
        style={{width: 400, height: 400}}
        resizeMode="contain"
        />
        </View>
            

        )
    }
}
export default Home;

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
 



})