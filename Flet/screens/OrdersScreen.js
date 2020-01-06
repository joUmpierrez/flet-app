//asdlaksdlaksjdlasldkjasldkjasldkjalskdjalskjdlaksjdlkasjdlaksjldkasd
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

const title = "Orders";

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View id="viewTitle" style={[styles.headerRow, styles.bgBlue]}>
          <Text>{title}</Text>
        </View>
        <View id="viewSearch" style={styles.headerRow}>
          <TextInput placeholder="Client/Order/Subject.." style={styles.searchBar}></TextInput>  
        </View>
        <View id="viewDates" style={styles.headerRow}>
          <Text>Aca va la tercer linea del header</Text>  
        </View>
      </View>
      <View style={styles.content}>
        <Text>Aca va todo de la pantalla Orders</Text>
      </View>
    </View>
  );
}

OrdersScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  content:{
    flex:3
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
  headerRow: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#f4f2f0'
  },
  bgBlue:{
    backgroundColor:'blue'
  },
  bgRed: {

  }
});
