import React from 'react';
import { Platform } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import DistributorsScreen from '../screens/DistributorsScreen';
import OrdersScreen from '../screens/OrdersScreen';
import stackNavigator from '../navigation/AddStackNavigator';
import drawerContentComponents from '../components/drawerContentComponent';
import OrderDetailScreen from '../screens/OrderDetailScreen';
import MapScreen from '../screens/MapScreen';
import TimePickScreen from '../screens/TimePickScreen';
const config = Platform.select({  // aca va el if para distribuidor o repartidor
  web: { headerMode: 'screen' },
  default: {},
});

const tabNavigator = createDrawerNavigator({
  Orders:{
    screen: OrdersScreen
  },
  AddOrder: stackNavigator,
  Distributors: {
    screen: DistributorsScreen
  },
  OrderDetail :{
    screen:OrderDetailScreen
  },
  Map : {
    screen: MapScreen
  },

},
{
  contentComponent: drawerContentComponents,
});

tabNavigator.path = '';

export default tabNavigator;
