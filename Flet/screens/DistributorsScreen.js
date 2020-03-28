import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

export default class DistributorsScreen extends React.Component {
  render() {

    let region = {
      latitude: -34.927658,
      longitude: -54.948938,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    return (
      <View style={styles.container}>
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
          </MapView>
        </View>
      </View>
    );
  }
}

DistributorsScreen.navigationOptions = {
  title: 'Distributors',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
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
