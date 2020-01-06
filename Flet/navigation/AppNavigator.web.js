import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import MainDrawerNavigator from './MainDrawerNavigator';
import LoginScreen from '../screens/LoginScreen';



const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Login: LoginScreen,
  Main: MainDrawerNavigator,
},{
  initialRouteName: 'Login',
});
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
