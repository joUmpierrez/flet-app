import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Dimensions, FlatList, SafeAreaView } from "react-native";
import { Ionicons, AntDesign, MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import {
  StyleSheet,
  Platform,
  Text,
  TextInput,
  RefreshControl,
  View,
} from 'react-native';
import { getOrders, getOrdersPage, pickUpOrder, deliverOrder, deleteOrder } from '../services/Orders';
import Swipeout from 'react-native-swipeout';
import * as Location from 'expo-location';


const screenWidth = Math.round(Dimensions.get('window').width);
const title = "Pedidos";
let orders = null;

export default class OrdersScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      filteredOrders: [],
      page: 2,
      refreshing: false,
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

  refresh(){
    this.setState({
      refreshing: true,
    })
    getOrders().then((res) => {
      let DATA = res
      this.setState({
        orders: DATA,
        filteredOrders: DATA,
        refreshing: false,
      });
    });
  }

  searchFilter(text) {
    if (text != null || text != '') {
      let auxArray = [];
      this.setState({
        filteredOrders: []
      });
      this.state.orders.forEach(element => {
        element.priority.includes(text) || element.number.toString().includes(text) ? auxArray.push(element) : null;
      });
      this.setState({
        filteredOrders: auxArray,
      });
    }
    else {
      let auxArray = this.state.orders;
      this.setState({
        filteredOrders: auxArray,
      })
    }
  }

  deleteItem(id) {
    auxlist = []
    this.state.filteredOrders.forEach(element => {
      element.id != id ? auxlist.push(element) : null;
    });
    this.setState({
      filteredOrders: auxlist,
    });
    deleteOrder(id);
  }

  dropOff = async (id, drop) => {
    let or = this.state.orders;
    or.forEach(element => {
      if (element.id == id) {
        element.status = 'delivered'
      }
    });
    this.setState({
      orders: or,
    })
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let day = new Date().getDate();
    if (hour.toString().length <= 1) {
      let ah = '0' + hour.toString();
      hour = ah;
    }
    if (minutes.toString().length <= 1) {
      let ah = '0' + minutes.toString();
      minutes = ah;
    }
    if (month.toString().length <= 1) {
      let ah = '0' + month.toString();
      month = ah;
    }
    if (day.toString().length <= 1) {
      let ah = '0' + day.toString();
      day = ah;
    }
    let time = hour.toString() + '-' + minutes.toString();
    let date = year.toString() + '-' + month.toString() + '-' + day.toString();
    drop['effective_time'] = time;
    drop['effective_date'] = date;
    location = await Location.getCurrentPositionAsync();
    let lat = location['coords']['latitude'];
    let lng = location['coords']['longitude'];
    let coords = {
      latitude: lat,
      longitude: lng,
    }
    drop['coordinates'] = coords;
    deliverOrder(id, drop);
  }

  pickUp = async (id, pick) => {
    let or = this.state.orders;
    or.forEach(element => {
      if (element.id == id) {
        element.status = 'picked_up'
      }
    });
    this.setState({
      orders: or,
    })
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let day = new Date().getDate();
    if (hour.toString().length <= 1) {
      let ah = '0' + hour.toString();
      hour = ah;
    }
    if (minutes.toString().length <= 1) {
      let ah = '0' + minutes.toString();
      minutes = ah;
    }
    if (month.toString().length <= 1) {
      let ah = '0' + month.toString();
      month = ah;
    }
    if (day.toString().length <= 1) {
      let ah = '0' + day.toString();
      day = ah;
    }
    let time = hour.toString() + '-' + minutes.toString();
    let date = year.toString() + '-' + month.toString() + '-' + day.toString();
    pick['effective_time'] = time;
    pick['effective_date'] = date;
    location = await Location.getCurrentPositionAsync();
    let lat = location['coords']['latitude'];
    let lng = location['coords']['longitude'];
    let coords = {
      latitude: lat,
      longitude: lng,
    }
    pick['coordinates'] = coords;
    pickUpOrder(id, pick);
  }

  renderItem(item) {
    let swipeoutBtns = [{}];
    if (item.item.status == 'delivered') {
      swipeoutBtns = [{
        text: 'Delete',
        backgroundColor: 'red',
        onPress: () => { this.deleteItem(item.item.id) }
      }];
    } else if (item.item.status == 'picked_up') {
      swipeoutBtns = [
        {
          text: 'Deliver',
          backgroundColor: 'orange',
          onPress: () => { this.dropOff(item.item.id, item.item['drop_off']) }
        },
        {
          text: 'Delete',
          backgroundColor: 'red',
          onPress: () => { this.deleteItem(item.item.id) }
        }];
    } else {
      swipeoutBtns = [
        {
          text: 'Pick up',
          backgroundColor: 'orange',
          onPress: () => {
            this.pickUp(item.item.id, item.item['pick_up']);
          }
        },
        {
          text: 'Delete',
          backgroundColor: 'red',
          onPress: () => { this.deleteItem(item.item.id) }
        }];
    }

    return (
      <View style={styles.orderCard}>
        <Swipeout sensitivity={40} autoClose={true} right={swipeoutBtns} style={styles.swipeout}>
          <View style={styles.cardTitle}>
            <View style={styles.cardTitleText}>

              <Text style={{ fontSize: 24, color: 'purple' }}>{item.item.client.name} {item.item.client.lastname}</Text>

            </View>
            <View style={styles.cardTitleShare}>
              <Ionicons name="md-share" color="purple" size={20} style={{ textAlign: 'right' }} />
            </View>
          </View>
          <View style={styles.cardAddress}>
            <Text style={styles.cardAddressText}>{item.item.issue}</Text>
            <Text style={styles.cardAddressText}>{item.item.client.address}</Text>
          </View>
          <View style={styles.cardStateText}>
            <View style={styles.textPending}>
              <Text style={{ color: '#c4c4c4' }}>Pending</Text>
            </View>

            <View style={styles.textPicked}>
              <Text style={{ textAlign: 'center', color: '#c4c4c4' }}>Picked up</Text>
            </View>

            <View style={styles.textDelivered}>
              <Text style={{ textAlign: 'right', color: '#c4c4c4' }}>Delivered</Text>
            </View>
          </View>
          <View style={styles.cardState}>
            <View style={styles.statePending}>
              <AntDesign name="checkcircle" color="orange" size={24} />
            </View>

            <View style={styles.statePicked}>
              {
                item.item.status == 'picked_up' || item.item.status == 'delivered' ? <AntDesign name="checkcircle" color="orange" size={24} style={{ textAlign: 'center' }} /> : <FontAwesome name="circle" color="#c4c4c4" size={24} style={{ textAlign: 'center' }} />
              }
            </View>

            <View style={styles.stateDelivered}>
              {
                item.item.status == 'delivered' ? <AntDesign name="checkcircle" color="orange" size={24} style={{ textAlign: 'right' }} /> : <FontAwesome name="circle" color="#c4c4c4" size={24} style={{ textAlign: 'right' }} />
              }
            </View>
          </View>
        </Swipeout>
      </View>
    )
  }


  render() {
    return (
        <SafeAreaView style={styles.container}>
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
                refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.refresh.bind(this)} />}
                ItemSeparatorComponent={() => {
                  return (
                    <View style={{ width: 10 }} />
                  )
                }}
                data={this.state.filteredOrders}
                numColumns={1}
                renderItem={this.renderItem.bind(this)}
              // onEndReached={this.endReached.bind(this)}
              // onEndReachedThreshold= {0.5}
              />
            </View>
          </View>
        </SafeAreaView>
    )
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
    marginTop: Platform.OS === 'ios'? null : 22,
    flex: 3,
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
    fontSize: 20
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
    width: screenWidth * 0.93,
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
  cardTitleText: {
    flex: 2,
  },
  cardTitleShare: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 7,
  },
  cardAddress: {
    flex: 1,
    width: '90%',
    marginBottom: 7,
  },
  cardStateText: {
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
  textPending: {
    flex: 1,
  },
  textPicked: {
    flex: 1,
  },
  textDelivered: {
    flex: 1,
  },
  cardState: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 7,
    paddingLeft: 3,
    paddingRight: 3,
  },
  cardAddressText: {
    paddingLeft: 3,
    textAlign: 'left',
    fontSize: 14,
  },
  statePending: {
    flex: 1,
  },
  statePicked: {
    flex: 1
  },
  stateDelivered: {
    flex: 1,
  },
  swipeout: {
    borderRadius: 5,
  }
});
