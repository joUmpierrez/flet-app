import React from 'react';
import { Text, View, StyleSheet, Dimensions, SafeAreaView, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { getDrivers } from '../services/Drivers';

export default class DistributorsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      drivers:[],
    }
  }

  componentWillMount(){
    getDrivers().then((res)=>{
      this.setState({
        drivers: res
      });
    });
  }


  render() {

    let region = {
      latitude: -34.927658,
      longitude: -54.948938,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <View style={styles.rowitem}>
              <Ionicons onPress={() => this.props.navigation.goBack()} style={styles.drawerIcon} color='purple' name='ios-arrow-back' size={32} />
            </View>
            <View style={styles.rowitem}>
              <Text style={styles.title} >Distributors</Text>
            </View>
            <View style={styles.rowitem}>

            </View>
          </View>
        </View>


        <View style={styles.body}>
          <MapView style={styles.map}
            initialRegion={region}>
              {this.state.drivers.map((item) => {
                if(item.coordinates['latitude'] != null){
                  return(
                    <Marker 
                      key={item.id}
                      coordinate={{latitude: item.coordinates['latitude'],longitude: item.coordinates['longitude']}}
                      title={item.name + ' ' + item.lastname}
                    />
                  )
                }
              })}
          </MapView>
        </View>
      </SafeAreaView>
    );
  }
}

DistributorsScreen.navigationOptions = {
  title: 'Distributors',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios'? null : 24,
    backgroundColor: '#e3e3e3'
  },
  header: {
    flex: 1,
    width: '100%',
  },
  header: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
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
  title: {
    alignSelf: 'center',
    fontSize: 16,
  },
  drawerIcon: {
    paddingLeft: 18
  },
  body: {
    flex: 8,
    width: '100%',
  },
  map: {

    width: '100%',
    height: '100%'
  }
});
