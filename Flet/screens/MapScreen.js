import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Dimensions } from "react-native";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';



const title = "Map";

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
      subject: '',
      description: '',
      amount: '',
      lat1: '',
      lon1: '',
      lat2: '',
      lon2: '',
      loc1: false,
      loc2: false,
    }
  }

  updateLocation1(){
    this.setState({
      loc1: true,
    });
    this.props.navigation.navigate('Map');
  }

  updateLocation2(){
    this.setState({
      loc2: true,
    });
    this.props.navigation.navigate('Map');
  }

  confirmOrder(){
    console.log(this.state.client);
    console.log(this.state.phone);
    console.log(this.state.email);
    console.log(this.state.business);
    console.log(this.state.tin);
    console.log(this.state.address);
    console.log(this.state.subject);
    console.log(this.state.description);
    console.log(this.state.amount);
    console.log(this.state.lat1);
    console.log(this.state.lon1);
    console.log(this.state.lat2);
    console.log(this.state.lon2);

  }

  componentDidMount() {
    this.setState({
      client: this.props.navigation.getParam('client'),
      phone: this.props.navigation.getParam('phone'),
      email: this.props.navigation.getParam('email'),
      business: this.props.navigation.getParam('business'),
      tin: this.props.navigation.getParam('tin'),
      address: this.props.navigation.getParam('address'),
      subject: this.props.navigation.getParam('subject'),
      description: this.props.navigation.getParam('description'),
      amount: this.props.navigation.getParam('amount'),
    })
  }

  componentWillUpdate() {
    if(this.state.loc1){
      this.setState({
        lat1: this.props.navigation.getParam('lat'),
        lon1: this.props.navigation.getParam('lon'),
        loc1: false,
      });
    }
    if(this.state.loc2){
      this.setState({
        lat2: this.props.navigation.getParam('lat'),
        lon2: this.props.navigation.getParam('lon'),
        loc2: false,
      });
    }
  }

  render() {
    return (<View style={styles.container}>
      <View style={styles.header}>
        {/* //_______________________________________________________________________________  TODO EL HEADER*/}
        <View id="viewTitle" style={[styles.headerRow]}>
          <View style={styles.rowitem}>
            <Ionicons onPress={() => this.props.navigation.goBack()} style={styles.drawerIcon} color='purple' name='ios-arrow-back' size={32} />
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

        <View style={styles.clientatributesdivision}>
          <View style={styles.logoHeader}>
            <MaterialCommunityIcons name='map-marker-radius' color='purple' size={46} />
            <Text style={styles.blackFont}>Origin</Text>
          </View>
          <View style={styles.mapSection}>
            <View style={styles.latitude}>
              <Text style={styles.locationText}>{this.state.lat1}</Text>
            </View>
            <View style={styles.longitude}>
              <Text style={styles.locationText}>{this.state.lon1}</Text>
            </View>
            <View style={styles.buttonSection}>
              <TouchableOpacity style={styles.orangeButton} onPress={this.updateLocation1.bind(this)} >
                <Text style={styles.blackButtonFont}>Select</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.logoHeader}>
            <MaterialCommunityIcons name='map-marker-radius' color='purple' size={46} />
            <Text style={styles.blackFont}>Destination</Text>
          </View>
          <View style={styles.mapSection}>
            <View style={styles.latitude}>
              <Text style={styles.locationText}>{this.state.lat2}</Text>
            </View>
            <View style={styles.longitude}>
              <Text style={styles.locationText}>{this.state.lon2}</Text>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.orangeButton} onPress={this.updateLocation2.bind(this)} >
                <Text style={styles.blackButtonFont}>Select</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>


      <View style={styles.flex1}>
        <TouchableOpacity style={styles.purplebutton} onPress={this.confirmOrder.bind(this)} >
          <Text style={styles.whitefont}>CONFIRM ORDER</Text>
        </TouchableOpacity>
      </View>
    </View>)
  }
}

OrdersScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    flex: 6,
    backgroundColor: "#e3e3e3"
  },
  header: {
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    width: '100%'
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
  drawerIcon: {
    paddingLeft: 18
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
  },
  body: {
    flex: 6,
  },
  clientatributesdivision: {
    flex: 1,
  },
  clientatributesdivision2: {
    flex: 1,
  },
  logoHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mapSection: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  latitude: {
    flex: 1,
  },
  longitude: {
    flex: 1,
  },
  locationText: {
    fontSize: 24,
    paddingLeft: '15%'
  },
  footer: {
    flex: 1,
    alignSelf: 'center'
  },
  bottominput: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    alignSelf: 'center',
    width: '95%',
    height: '40%',
    textAlign: 'left',
    fontSize: 18,
    paddingBottom: 90,

  },
  orangeButton: {
    alignSelf: 'center',
    backgroundColor: 'orange',
    paddingHorizontal: '30%',
    paddingVertical: '5%',
    padding: '4%',
    borderRadius: 12,
    width: '80%',
    marginBottom: 5,
  },
  purplebutton: {
    alignSelf: 'center',
    backgroundColor: '#3A0D5E',
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
    fontSize: 14,
  },
  blackButtonFont: {
    color: 'black',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  blackFont: {
    color: 'black',
    fontSize: 24,
  },
  grayfont: {
    color: '#d4d2d2',
    alignSelf: 'center',
    fontSize: 16,
  },
  flex1: {
    flex: 1,
    backgroundColor: "#e3e3e3",   //COLOR DE FONDO DEL BOTON, TIENE QUE SER IGUAL AL COLOR DE FONDO DEL FLEX DE LOS ATRIBUTOS
    justifyContent: 'center',
  },
});
