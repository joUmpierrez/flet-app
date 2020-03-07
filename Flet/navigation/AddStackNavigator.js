import { createStackNavigator } from 'react-navigation';
import AddClientScreen from '../screens/AddClientScreen';
import OrderDetailScreen from '../screens/OrderDetailScreen';
import OriginDestinyScreen from '../screens/OriginDestinyScreen';

const stackNavigator = createStackNavigator({
    AddClient: {
        screen: AddClientScreen
    },
    OrderDetail: {
        screen: OrderDetailScreen
    },
    OriginDestiny: {
        screen: OriginDestinyScreen
    }
},{
    headerMode:'none',
    // cardStyle:{backgroundColor:'MICOLORDEFONDO'}  ACA VA EL COLOR DE FONDO QUE LE QUIERAS PONER A TODO EL STACK, INDIVIDUALMENTE DE CADA PANTALLA
});

stackNavigator.navigationOptions = ({navigation}) => {
    let drawerLockMode = 'unlocked'; // locked-closed
    return{
        drawerLockMode,
        headervisible: false,
    }
}

export default stackNavigator