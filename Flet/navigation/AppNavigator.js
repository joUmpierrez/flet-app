import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {Button, StyleSheet, View} from 'react-native';

import MainDrawerNavigator from './MainDrawerNavigator';
import LoginScreen from '../screens/LoginScreen';


export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Login: LoginScreen,
    Main: MainDrawerNavigator,
  },{
    initialRouteName: 'Login',
  })
);

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    flex: 1,
    backgroundColor: '#000000',
  },
});
