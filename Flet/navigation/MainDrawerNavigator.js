import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AddScreen from '../screens/AddScreen';
import DistributorsScreen from '../screens/DistributorsScreen';
import OrdersScreen from '../screens/OrdersScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const OrderStack = createStackNavigator(
  {
    Orders: OrdersScreen,
  },
  config
);

OrderStack.navigationOptions = {
  drawerLabel: 'Orders',
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

OrderStack.path = '';

const AddStack = createStackNavigator(
  {
    Add: AddScreen,
  },
  config
);

AddStack.navigationOptions = {
  drawerLabel: 'Add',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

AddStack.path = '';

const DistributorsStack = createStackNavigator(
  {
    Distributors: DistributorsScreen,
  },
  config
);

DistributorsStack.navigationOptions = {
  drawerLabel: 'Distributors',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

DistributorsStack.path = '';

const tabNavigator = createDrawerNavigator({
  OrderStack,
  AddStack,
  DistributorsStack,
});

tabNavigator.path = '';

export default tabNavigator;
