import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {Dimensions } from "react-native";
import {Ionicons,AntDesign, MaterialIcons,EvilIcons } from '@expo/vector-icons';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import {getOrders} from '../services/Orders';
import { MonoText } from '../components/StyledText';

const screenWidth = Math.round(Dimensions.get('window').width);
const title = "Add Client";

export default class OrdersScreen extends React.Component {

  

  render(){
    return(<View style={styles.container}>
      <View style={styles.header}>
{/* //_______________________________________________________________________________  TODO EL HEADER*/}
        <View id="viewTitle" style={[styles.headerRow]}>
          <View style={styles.rowitem}>
            <Ionicons onPress={() =>this.props.navigation.toggleDrawer()} style={styles.drawerIcon} color='purple' name='ios-menu' size={32}/>
          </View>
          <View style={styles.rowitem}>
            <Text style={styles.title} >{title}</Text>
          </View>
          <View style={styles.rowitem}>
            
          </View>
        </View>
    </View>

 {/* //_______________________________________________________________________________  DEBAJO DEL HEADER*/}
      <View style={styles.clientatributes} >

      <TextInput  style={styles.bottominput} placeholder="Client"></TextInput>
      <TextInput style={styles.bottominput} placeholder="Phone"></TextInput>
      <TextInput style={styles.bottominput} placeholder="Email"></TextInput>
      <TextInput  style={styles.bottominput} placeholder="Business Name"></TextInput>
      
      <TextInput style={styles.bottominput} placeholder="TIN-SSN"></TextInput>
      <TextInput style={styles.bottominput} placeholder="Address"></TextInput>
      </View>


      <View style={[styles.seg]}>
                  <TouchableOpacity  style={styles.purplebutton} >
                  <Text style={styles.whitefont}>Next</Text>
                  </TouchableOpacity>
                  </View>
    </View>)
  }
}

OrdersScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  clientatributes:{
    flex:6,
    backgroundColor:"#e3e3e3"
  },
  header: {
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    width: '100%'
  },
  container: {
    marginTop: 22,
    flex: 3,
    backgroundColor: '#fff',
  },
 
  headerRow: {  //titulo de la pantalla
    flex:1,
    alignItems: 'center',
    backgroundColor: '#f4f2f0',
    flexDirection:'row',
    width: '100%',
  },
  rowitem: {
    flex:1,

  },
  title:{
    alignSelf:'center',
  },
  drawerIcon:{
    paddingLeft:18
  },
  twoIcons:{
    flex: 1,
    flexDirection: 'row',
    alignSelf:'center',
  },
  excel:{
    alignSelf: 'center',
  },
  filter:{
    alignSelf: 'center',
    paddingLeft:13,
  },
  searchBar: {
    alignSelf: 'center',
    borderRadius: 15,
    width: '95%',
    height:'75%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
  },
  searchIcon:{
    paddingRight: 9,
  },
  textInput:{
  },
  bgBlue:{
    backgroundColor:'blue'
  },
bottominput:{
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    alignSelf:'center',
    width:'95%',
   height:'11.5%',
   textAlign:'left',
  
   
  },  
purplebutton:{
    alignSelf:'center', 
    backgroundColor:'#3A0D5E',
    paddingHorizontal: '30%',
    paddingVertical: '5%',
    padding: '4%',
    borderRadius:12,
    width:'95%',
},
 whitefont:{
    color:'white',
    alignSelf:'center',
    fontWeight: 'bold',
    fontSize:14,
}, 
grayfont:{
    color:'#d4d2d2',
    alignSelf:'center',
    fontSize:16,
},
seg:{
    flex:1,
    backgroundColor:"#e3e3e3",   //COLOR DE FONDO DEL BOTON, TIENE QUE SER IGUAL AL COLOR DE FONDO DEL FLEX
      },
});
