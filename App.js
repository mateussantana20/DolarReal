import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {resultado:0, textoinput1:0,textoinput2:0}

    this.convert =this.convert.bind(this)

  }
  convert(){
    let resul = this.state.textoinput1 * this.state.textoinput2;

    let s = this.state
    s.resultado = resul
    this.setState(s);
     
  }

  render() {
    return (
      <View style={styles.container}>
      
        <View style = {styles.viewInput1}> 
         <TextInput style={styles.textoInput1} keyboardType='numeric' placeholder="Digite a cotação do dolar" onChangeText={(textoinput1)=>this.setState({textoinput1})}></TextInput >
         <TextInput style={styles.textoInput2} keyboardType='numeric' placeholder="Digite o valor $" onChangeText={(textoinput2)=>this.setState({textoinput2})}></TextInput>
        </View>

        <View>
          <Text style = {{fontSize:30 ,fontWeight:'bold',marginLeft:135}}>R$ {this.state.resultado.toFixed(2)} </Text>
        </View>

      <View>
        <TouchableOpacity style = {styles.botao} onPress={this.convert}>
          <Text style = {styles.btnTxt}>Converter</Text>
        </TouchableOpacity>
      </View>
      
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',

  },
  textoInput1: {
    fontSize: 20,
    backgroundColor:'steelblue',
    width: 300,
    height: 50, 
    marginBottom:5
  },
  textoInput2:{
    fontSize: 20,
    backgroundColor:'steelblue',
    width: 300,
    height: 50, 
  },
  botao:{
    borderRadius:25,
    backgroundColor:'skyblue',
    marginTop:50,
    borderWidth:1,
    borderColor:'#7fffd4',
    width:150,
    height:50,
    marginLeft:120

  },
  btnTxt:{
    fontSize:25,
    fontWeight:'bold',
    alignSelf:'center',
    padding:5,
    color:'#778899'
  },
  viewInput1:{
    margin:30,
    flexDirection:'column',
    justifyContent:'space-between'
  },

});
