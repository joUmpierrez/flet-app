import React from 'react';
import { Platform } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import DistributorsScreen from '../screens/DistributorsScreen';
import OrdersScreen from '../screens/OrdersScreen';
import stackNavigator from '../navigation/AddStackNavigator';
import drawerContentComponents from '../components/drawerContentComponent';

const config = Platform.select({
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
  }
},{
  contentComponent: drawerContentComponents,
});

tabNavigator.path = '';

export default tabNavigator;
