import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput,Image, AsyncStorage, Alert, BackHandler} from 'react-native';
import { login } from '../services/Login';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';



export default class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      Alert.alert(
        'Please enable location',
        'This app needs to know your location in order for it to funciton properly',
        [
          { text: 'OK' },
        ],
        { cancelable: false }
      );
    }
    else{
      this.checkHeaders();
    }
  };
  
  componentWillMount(){  // Este metodo verifica luego de cargar la pagina 
    this._getLocationAsync();
  }

  async checkHeaders(){ // Este metodo nos valida el login sin tener que hacerlo, para testear viene barbaro
    let accessToken = await AsyncStorage.getItem('access-token');
    console.log(accessToken);
    if(accessToken != null){
      this.props.navigation.navigate('Main');
    }
  }
    
    handlePress(){
      login(this.state.email,this.state.password).then((res)=>{
      switch(res['access_token']!=null){
        case true: 
          AsyncStorage.setItem('access-token',res['access_token']);
          this._getLocationAsync();
          break;
        default:
          Alert.alert(
            'Invalid Credentials',
            'Check email or password',
            [
              { text: 'OK'},
            ],
            { cancelable: false }
          );
        }
      });

    }
    render() {
      let showErr = (
        this.state.error ?
        <Text>
          {this.state.error}
        </Text>:
        <View></View>
      )
      
      const navigation = this.props.navigation;
      return (
        <View style={styles.bgFlet}> 

        
         
          <View style={[styles.seg,styles.image]}>

          <Image source={require('../assets/images/logo.png')} ></Image>

          </View>


            <View style={[styles.seg]}>
            <TextInput 
            placeholder="E-mail" 
            onChangeText={(text) => {
              this.setState({email : text});
            }}
            style={[styles.bottominput,styles.grayText]}/>

            <TextInput 
            secureTextEntry={true} 
            placeholder="Password" 
            onChangeText={(text) => {
              this.setState({password : text});
            }}
            style={[styles.bottominput,styles.grayText]}/> 
            </View>

                  <View style={[styles.seg]}>
                  <TouchableOpacity 
                  onPress={this.handlePress.bind(this)}
                  style={styles.purplebutton} >
                  <Text style={styles.whitefont}>Sign In</Text>
                  </TouchableOpacity>
                  </View>

        </View>
      
      );
     
    }
    /*_login = async()=>{
      if(userInfo.email== this.state.email && userInfo.password == this.state.password){
        alert('Logeaste')
      }else{
        alert('No logeaste')
      }
    }*/
  }
function handlePress(){
   console.log(this.props.navigation);
}

LoginScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
  bgFlet: {
    flex: 1,
    backgroundColor: '#F9AD3F',
    
  },
  seg:{
    flex:1,
      
  },
  seg2:{
    flex:2,
    alignItems:'center',    
  },

  whitefont:{
    color:'white',
    alignSelf:'center',
    fontWeight: 'bold',
    fontSize:16,
  },
  purplebutton:{
    alignSelf:'center',
    backgroundColor:'#3A0D5E',
    paddingHorizontal: '10%',
    padding: '4%',
    borderRadius:12,
    width:'95%',
   
  },
  bottominput:{
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    alignSelf:'center',
    width:'95%',
    height:'33%',
    
    },

    grayText: {
    color: 'gray',
    fontSize:18,
    marginVertical:'3%'
    },
    center:{
      justifyContent:'center',
      
    },
    image:{
     justifyContent:'flex-end',
     position:'relative',
     width:'auto',
     height:'auto',
     alignItems: 'center',
      
    }
});

