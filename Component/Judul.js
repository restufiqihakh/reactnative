import  React,{Component} from 'react';
import {Text} from 'react-native';

class Judul extends React.Component{
	render(){
		return (
			<Text style={salon.Judul}>{this.props.title}</Text>
		)
	}
}

const salon = {
	Judul: {
		color:"#00bfc9",
		fontSize:25,
	}
}
export default Judul;
