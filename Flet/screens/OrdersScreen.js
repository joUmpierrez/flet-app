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
} from 'react-native';

import { MonoText } from '../components/StyledText';

const screenWidth = Math.round(Dimensions.get('window').width);
const title = "Pedidos";

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
{/* //_______________________________________________________________________________ */}
        <View id="viewTitle" style={[styles.headerRow]}>
          <View style={styles.rowitem}>
            <Ionicons style={styles.drawerIcon} color='purple' name='ios-menu' size={32}/>
          </View>
          <View style={styles.rowitem}>
            <Text style={styles.title} >{title}</Text>
          </View>
          <View style={styles.rowitem}>
            <View style={styles.twoIcons}>
              <AntDesign style={styles.excel} color='purple' name='exclefile1' size={32}/>
              <MaterialIcons style={styles.filter} color='purple' name='filter-list' size={32}/>
            </View>
          </View>
        </View>
{/* //_______________________________________________________________________________ */}

        <View id="viewSearch" style={styles.headerNoRow}>
          <View style={styles.searchBar}>
            <Ionicons name='ios-search' color='purple' size={24} style={styles.searchIcon} />
            <TextInput placeholder="Client/Order/Subject.." style={styles.textInput}></TextInput>  
          </View>
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
  headerNoRow: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#f4f2f0',
    width: '100%',
  },
  headerRow: {
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
  bgRed: {

  }
});
