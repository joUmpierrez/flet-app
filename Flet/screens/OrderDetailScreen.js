import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Dimensions } from "react-native";
import { Ionicons, AntDesign, MaterialIcons, EvilIcons } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';



const title = "Order Detail";

export default class OrdersScreen extends React.Component {



    render() {
        return (<View style={styles.container}>
            <View style={styles.header}>
                {/* //_______________________________________________________________________________  TODO EL HEADER*/}
                <View id="viewTitle" style={[styles.headerRow]}>
                    <View style={styles.rowitem}>
                        <Ionicons onPress={() => this.props.navigation.toggleDrawer()} style={styles.drawerIcon} color='purple' name='ios-menu' size={32} />
                    </View>
                    <View style={styles.rowitem}>
                        <Text style={styles.title} >{title}</Text>
                    </View>
                    <View style={styles.rowitem}>

                    </View>
                </View>
            </View>

            {/* //_______________________________________________________________________________  DEBAJO DEL HEADER*/}
            <View style={styles.clientatributes} >

                <TextInput  style={styles.bottominput} placeholder="Subject"></TextInput>
                <TextInput style={styles.bottominput} placeholder="Description"></TextInput>
                <TextInput style={styles.bottominput} placeholder="Monto"></TextInput>
            </View>


            <View style={[styles.flex1]}>
                <TouchableOpacity style={styles.purplebutton} >
                    <Text style={styles.whitefont}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>)
    }
}

OrdersScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        marginTop: 22,
        flex: 6,
        backgroundColor: '#fff',
    },
    header: {
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1,
        width: '100%'
    },
    headerRow: {  //titulo de la pantalla
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f4f2f0',
        flexDirection: 'row',
        width: '100%',
    },
    rowitem: {
        flex: 1,
    },
    drawerIcon: {
        paddingLeft: 18
    },
    title: {
        alignSelf: 'center',
    },
    clientatributes: {
        flex: 4,
        backgroundColor: "#e3e3e3"
    },
    bottominput: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        alignSelf: 'center',
        width: '95%',
        height: '28%',
        textAlign: 'left',
        fontSize:18,
        paddingBottom:90,
        
    },
    purplebutton: {
        alignSelf: 'center',
        backgroundColor: '#3A0D5E',
        paddingHorizontal: '30%',
        paddingVertical: '5%',
        padding: '4%',
        borderRadius: 12,
        width: '95%',
    },
    whitefont: {
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 14,
    },
    grayfont: {
        color: '#d4d2d2',
        alignSelf: 'center',
        fontSize: 16,
    },
    flex1: {
        flex: 1,
        backgroundColor: "#e3e3e3",   //COLOR DE FONDO DEL BOTON, TIENE QUE SER IGUAL AL COLOR DE FONDO DEL FLEX DE LOS ATRIBUTOS
    },
});
