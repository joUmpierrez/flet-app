import React, { Component } from 'react';
import { NavigationActions, NavigationEvents } from 'react-navigation';
import { Text, View, StyleSheet, Image, AsyncStorage, Platform } from 'react-native'


export default class drawerContentComponent extends Component {
    navigateToScreen = (route) => (
        () => {
            const navigateAction = NavigationActions.navigate({
                routeName: route
            });
            this.props.navigation.dispatch(navigateAction);
        })

    logout() {
        AsyncStorage.clear();
        this.navigateToScreen('Main');
    }

    render() {
        return (
            <View style={styles.container}>

                <View>
                    <Image style={styles.drawerImage} source ={require('../assets/images/fleticon.png')}>
                        
                    </Image>
                </View>

                <View style={[styles.screenStyle, (this.props.activeItemKey == 'Orders') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey == 'Orders') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Orders')}>Orders</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey == 'AddOrder') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey == 'AddOrder') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('AddOrder')}>Add Order</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey == 'Distributors') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey == 'Distributors') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Distributors')}>Distributors</Text>
                </View>

                {/* <View style={[styles.screenStyle, (this.props.activeItemKey == 'OrderDetail') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey == 'OrderDetail') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('OrderDetail')}>Order Detail</Text>

                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey == 'Map') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey == 'Map') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Map')}>Map</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='OriginDestiny') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='OriginDestiny') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('OriginDestiny')}>Origin Destiny</Text>
                </View> */}
                {/* <View style={[styles.screenStyle, (this.props.activeItemKey=='TimePick') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='TimePick') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('TimePick')}>Time Pick</Text>
                </View>   */}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 24,
    },
    screenContainer: {
        flex: 2,
        alignItems: 'center',
        alignSelf: 'center',
        paddingTop: 20,
        width: '100%',
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    screenTextStyle: {
        flex: 1,
        fontSize: 16,
        textAlign: 'left',
        alignSelf: 'center',
        color: '#3A0D5E',
        left:30,
    },
    selectedTextStyle: {
        color: 'black'
    },
    drawerImage: {
        height: 80,
        width: 80,
        alignSelf:'center',
        right:40
    },
});