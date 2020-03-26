import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput,Image, AsyncStorage} from 'react-native';
import { login } from '../services/Login';


export default class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }
  
  componentDidMount(){  // Este metodo verifica luego de cargar la pagina 
    // this.props.navigation.navigate('Main');
  }

  async checkHeaders(){ // Este metodo nos valida el login sin tener que hacerlo, para testear viene barbaro
    let uid = await AsyncStorage.getItem('uid');
    let expiry = await AsyncStorage.getItem('expiry');
    let client = await AsyncStorage.getItem('client');
    let tokenType = await AsyncStorage.getItem('token-type');
    let accessToken = await AsyncStorage.getItem('access-token');

    if(uid != null && expiry != null && client != null && tokenType!= null && accessToken){
      this.props.navigation.navigate('Main');
    }
  }

  async test1(){
    let a = await AsyncStorage.getItem('expiry');
    if(a != null){
      console.log(a);
    }
  }
    
    handlePress(){
      login(this.state.email,this.state.password).then((res)=>{
      console.log(res);
      console.log(res.message);
      switch(res['access_token']!=null){
        case true: 
        console.log('case1')
        this.props.navigation.navigate('Main');
        break;
        default:
          console.log('implementar mensaje');
      }
      });
      this.test1();

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

