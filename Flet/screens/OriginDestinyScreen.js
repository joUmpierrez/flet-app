import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

export default class OrginDestinyScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lat: -34.927658,
            lon: -54.948938,
        }
    }

    onMapPress(event) {
        console.log(event);
        this.setState({
            lat: event.coordinate.latitude,
            lon: event.coordinate.longitude
        });
    }

    refresh(){
        console.log('asdasdasdasd');
    }

    sendLocation(){
        this.props.navigation.goBack();

        this.props.navigation.navigate('OriginDestiny',{
            lat: this.state.lat,
            lon: this.state.lon,
        });
    }

    render() {
        let region = {
            latitude: -34.927658,
            longitude: -54.948938,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
        return (
            <View style={styles.container}>
                <MapView style={styles.mapStyle}
                    initialRegion={region}
                    onPress={(event) => this.onMapPress(event.nativeEvent)}
                >
                    <Marker
                        coordinate={{ latitude: this.state.lat, longitude: this.state.lon, }}
                    />
                </MapView>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.purplebutton} onPress={() => this.sendLocation() } >
                        <Text style={styles.whitefont}>Select Location</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 24,
    },
    mapStyle: {
        flex: 9,
        width: Dimensions.get('window').width
    },
    button: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    purplebutton:{
        alignSelf:'center', 
        backgroundColor:'#3A0D5E',
        paddingHorizontal: '30%',
        paddingVertical: '5%',
        padding: '4%',
        borderRadius:12,
        width:'95%',
    },
    whitefont:{
        color:'white',
        alignSelf:'center',
        fontWeight: 'bold',
        fontSize:14,
    }, 
});