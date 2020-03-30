import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Dimensions, KeyboardAvoidingView } from "react-native";
import { Ionicons, AntDesign, MaterialIcons, EvilIcons } from '@expo/vector-icons';
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  View,
  TouchableOpacity
} from 'react-native';
import { getOrders } from '../services/Orders';
import { MonoText } from '../components/StyledText';

const screenWidth = Math.round(Dimensions.get('window').width);
const title = "Add Clients";

export default class OrdersScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      client: '',
      phone: '',
      email: '',
      business: '',
      tin: '',
      address: '',
    }
  }

  nextScreen() {
    if(this.state.client == '' || this.state.phone == '' || this.state.email == '' || this.state.business == '' || this.state.tin == '' || this.state.address == ''){
      Alert.alert(
        'Invalid',
        'Please fill in all the form fields',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );
    }
    else{
      this.props.navigation.navigate('OrderDetail', {
        client: this.state.client,
        phone: this.state.phone,
        email: this.state.email,
        business: this.state.business,
        tin: this.state.tin,
        address: this.state.address,
      });
    }
  }



  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View id="viewTitle" style={[styles.headerRow]}>
            <View style={styles.rowitem}>
              <Ionicons onPress={() => this.props.navigation.navigate('Orders')} style={styles.drawerIcon} color='purple' name='ios-arrow-back' size={32} />
            </View>
            <View style={styles.rowitem}>
              <Text style={styles.title} >{title}</Text>
            </View>
            <View style={styles.rowitem}>

            </View>
          </View>
        </View>
        <KeyboardAvoidingView behavior="padding" style={styles.body}>
          <TextInput style={styles.bottominput} placeholder="Client" placeholderTextColor="#88898f" onChangeText={(text) => { this.setState({ client: text }) }}></TextInput>
          <TextInput style={styles.bottominput} placeholder="Phone" placeholderTextColor="#88898f" onChangeText={(text) => { this.setState({ phone: text }) }}></TextInput>
          <TextInput style={styles.bottominput} placeholder="Email" placeholderTextColor="#88898f" onChangeText={(text) => { this.setState({ email: text }) }}></TextInput>
          <TextInput style={styles.bottominput} placeholder="Business Name" placeholderTextColor="#88898f" onChangeText={(text) => { this.setState({ business: text }) }}></TextInput>
          <TextInput style={styles.bottominput} placeholder="TIN-SSN" placeholderTextColor="#88898f" onChangeText={(text) => { this.setState({ tin: text }) }}></TextInput>
          <TextInput style={styles.bottominput} placeholder="Address" placeholderTextColor="#88898f" onChangeText={(text) => { this.setState({ address: text }) }}></TextInput>
        </KeyboardAvoidingView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.purplebutton} onPress={this.nextScreen.bind(this)}>
            <Text style={styles.whitefont} >Next</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

OrdersScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios'? null : 24,
    backgroundColor: '#e3e3e3',
  },
  body: {
    flex: 8,
  },
  header: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    width: '100%'
  },
  footer: {
    flex: 1,
    justifyContent: 'center'    //Para que el botón quede centrado en el flex y no aparezca pegado arriba
  },
  headerRow: {  //titulo de la pantalla
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f4f2f0',
    flexDirection: 'row',
    width: '100%',
  },
  rowitem: {
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    fontSize: 16,
  },
  drawerIcon: {
    paddingLeft: 18
  },
  twoIcons: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  excel: {
    alignSelf: 'center',
  },
  filter: {
    alignSelf: 'center',
    paddingLeft: 13,
  },
  searchBar: {
    alignSelf: 'center',
    borderRadius: 15,
    width: '95%',
    height: '75%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
  },
  searchIcon: {
    paddingRight: 9,
  },
  textInput: {
  },
  bgBlue: {
    backgroundColor: 'blue'
  },
  bottominput: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    alignSelf:'center',
    width:'95%',
   height:'15%',
   textAlign:'left',
  },  
purplebutton:{
    alignSelf:'center', 
    backgroundColor:'#3A0D5E',
    paddingHorizontal: '30%',
    paddingVertical: '5%',
    padding: '4%',
    borderRadius: 12,
    width: '95%',
  },
  whitefont: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
