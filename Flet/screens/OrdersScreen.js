import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Dimensions, FlatList } from "react-native";
import { Ionicons, AntDesign, MaterialIcons, EvilIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { getOrders } from '../services/Orders';
import { MonoText } from '../components/StyledText';

const screenWidth = Math.round(Dimensions.get('window').width);
const title = "Pedidos";
let orders = null;

export default class OrdersScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      filteredOrders: [],
    }
  }

  componentWillMount() {
    getOrders().then((res) => {
      let DATA = res
      this.setState({
        orders: DATA,
        filteredOrders: DATA,
      });
    });
  }

  searchFilter(text) {
    if(text != null || text != ''){
      let auxArray = [];
      this.setState({
        filteredOrders: []
      });
      this.state.orders.forEach(element => {
        element.priority.includes(text) || element.number.toString().includes(text)? auxArray.push(element) : null;
      });
      this.setState({
        filteredOrders: auxArray,
      });
    }
    else{
      let auxArray = this.state.orders;
      this.setState({
        filteredOrders: auxArray,
      })
    }
  }

  render() {
    return (<View style={styles.container}>
      <View style={styles.header}>
        {/* //_______________________________________________________________________________ */}
        <View id="viewTitle" style={[styles.headerRow]}>
          <View style={styles.rowitem}>
            <Ionicons onPress={() => this.props.navigation.toggleDrawer()} style={styles.drawerIcon} color='purple' name='ios-menu' size={32} />
          </View>
          <View style={styles.rowitem}>
            <Text style={styles.title} >{title}</Text>
          </View>
          <View style={styles.rowitem}>
            <View style={styles.twoIcons}>
              <AntDesign style={styles.excel} color='purple' name='exclefile1' size={32} />
              <MaterialIcons style={styles.filter} color='purple' name='filter-list' size={32} />
            </View>
          </View>
        </View>
        {/* //_______________________________________________________________________________ */}

        <View id="viewSearch" style={styles.headerNoRow}>
          <View style={styles.searchBar}>
            <Ionicons name='ios-search' color='purple' size={24} style={styles.searchIcon} />
            <TextInput placeholder="Client/Order/Subject.." style={styles.textInput} onChangeText={text => this.searchFilter(text)} ></TextInput>
          </View>
        </View>


        <View id="viewDates" style={styles.headerRow}>
          <View style={styles.headerDate}>
            <MaterialCommunityIcons name='calendar-check' color='purple' size={24} style={styles.searchIcon} />
            <TextInput placeholder="From" style={styles.textInput}></TextInput>
          </View>
          <View style={styles.headerDate}>
            <MaterialCommunityIcons name='calendar-check' color='purple' size={24} style={styles.searchIcon} />
            <TextInput placeholder="To" style={styles.textInput}></TextInput>
          </View>
        </View>

      </View>
      <View style={styles.content}>
        <View style={styles.orderList}>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => {
              return (
                <View style={{ width: 10 }} />
              )
            }}
            data={this.state.filteredOrders}
            numColumns={1}
            renderItem={({ item }) => {
              return (
                <View style={styles.orderCard}>
                  <View style={styles.cardTitle}>
                    <View style={styles.cardTitleText}>
                      <Text style={{fontSize: 24, color: 'purple'}}>{item.number} Nombre cliente</Text>
                    </View>
                    <View style={styles.cardTitleShare}>
                      <Ionicons name="md-share" color="purple" size={24} style={{textAlign: 'right'}} />
                    </View>
                  </View>
                  <View style={styles.cardAddress}>
                    <Text style={styles.cardAddressText}>{item.priority}</Text>
                    <Text style={styles.cardAddressText}>{item.issue}</Text>
                  </View>
                  <View style={styles.cardStateText}>
                    <View style={styles.textPending}>
                      <Text style={{color: '#c4c4c4'}}>Pending</Text>
                    </View>

                    <View style={styles.textPicked}>
                      <Text style={{textAlign: 'center', color: '#c4c4c4'}}>Picked up</Text>
                    </View>

                    <View style={styles.textDelivered}>
                      <Text style={{textAlign: 'right', color: '#c4c4c4'}}>Delivered</Text>
                    </View>
                  </View>
                  <View style={styles.cardState}>
                    <View style={styles.statePending}>
                      <AntDesign name="checkcircle" color="orange" size={24} />
                    </View>

                    <View style={styles.statePicked}>
                      {
                        item.status == 'levantado' || item.status == 'entregado' ? <AntDesign name="checkcircle" color="orange" size={24} style={{textAlign: 'center'}} /> :<FontAwesome name="circle" color="#c4c4c4" size={24} style={{textAlign: 'center'}}/>
                      }
                    </View>

                    <View style={styles.stateDelivered}>
                      {
                        item.status == 'entregado' ? <AntDesign name="checkcircle" color="orange" size={24} style={{textAlign: 'right'}} /> :<FontAwesome name="circle" color="#c4c4c4" size={24} style={{textAlign: 'right'}}/>
                      }
                    </View>
                  </View>
                </View>
              )
            }}
          />
        </View>
      </View>
    </View>)
  }
}

OrdersScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  content: {
    flex: 3,
    backgroundColor: '#f4f2f0',
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
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f4f2f0',
    width: '100%',
  },
  headerRow: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f4f2f0',
    flexDirection: 'row',
    width: '100%',
  },
  headerDate: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 15,
    height: '75%',
    width: '45%',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginLeft: 5,
    marginRight: 5

  },
  rowitem: {
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    fontSize: 24
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
  orderList: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  orderCard: {
    flex: 4,
    width: screenWidth*0.93,
    alignSelf: 'center',
    borderRadius: 5,
    height: '30%',
    backgroundColor: '#EAE8E9',
    marginBottom: 5,
    marginTop: 5,
  },
  cardTitle: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 5,
  },
  cardTitleText:{
    flex: 2,
  },
  cardTitleShare:{
    flex: 1,
    paddingTop: 5,
    paddingRight: 7,
  },
  cardAddress: {
    flex: 1,
    width: '90%',
    marginBottom: 7,
  },
  cardAddressText: {
    paddingLeft: 3,
    textAlign: 'left',
    fontSize: 12,
  },
  cardStateText:{
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 7,
    borderTopColor: '#c4c4c4',
    borderTopWidth: 1,
    paddingLeft: 3,
    paddingRight: 3,
  },
  textPending:{
    flex: 1,
  },
  textPicked: {
    flex: 1,
  },
  textDelivered: {
    flex: 1,
  },
  cardState:{
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 7,
    paddingLeft: 3,
    paddingRight: 3,
  },
  statePending:{
    flex: 1,
  },
  statePicked:{
    flex:1
  },
  stateDelivered:{
    flex: 1,
  },
});
