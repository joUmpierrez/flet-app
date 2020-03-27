import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Dimensions } from "react-native";
import { Ionicons, AntDesign, MaterialIcons, EvilIcons } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';



const title = "Order Detail";

export default class OrdersScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            client: '',
            phone: '',
            email: '',
            business: '',
            tin: '',
            address: '',
            subject: '',
            description: '',
            amount: '',
            trackingID: '',
        }
    }

    componentDidMount() {
        this.setState({
            client: this.props.navigation.getParam('client'),
            phone: this.props.navigation.getParam('phone'),
            email: this.props.navigation.getParam('email'),
            business: this.props.navigation.getParam('business'),
            tin: this.props.navigation.getParam('tin'),
            address: this.props.navigation.getParam('address'),
        })
    }

    nextScreen() {
        if (this.state.subject == '' || this.state.description == ''|| this.state.amount == '' || this.state.description == '') {
            Alert.alert(
                'Error',
                'Por favor, Complete todos los Campos',
                [
                  { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
              );
        }
        else {
            this.props.navigation.navigate('OriginDestiny', {
                client: this.state.client,
                phone: this.state.phone,
                email: this.state.email,
                business: this.state.business,
                tin: this.state.tin,
                address: this.state.address,
                subject: this.state.subject,
                description: this.state.description,
                amount: this.state.amount,
                trackingID: this.state.trackingID,

            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerRow}>
                        <View style={styles.rowitem}>
                            <Ionicons onPress={() => this.props.navigation.goBack()} style={styles.drawerIcon} color='purple' name='ios-arrow-back' size={32} />
                        </View>
                        <View style={styles.rowitem}>
                            <Text style={styles.title} >{title}</Text>
                        </View>
                        <View style={styles.rowitem}>

                        </View>
                    </View>
                </View>
                <View style={styles.body} >
                    <View style={styles.regularInputs} >
                        <View style={styles.subject}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Subject"
                                placeholderTextColor="#88898f"
                                multiline
                                numberOfLines={8}
                                onChangeText={(text) => { this.setState({ subject: text }) }}
                            />
                        </View>
                        <View style={styles.trackId}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Tracking Id"
                                placeholderTextColor="#88898f"
                                keyboardType="number-pad"
                                multiline
                                numberOfLines={3}
                                onChangeText={(text) => { this.setState({ trackingID: text }) }}
                            />
                        </View>
                        <View style={styles.amount}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Amount"
                                placeholderTextColor="#88898f"
                                keyboardType="number-pad"
                                multiline
                                numberOfLines={3}
                                onChangeText={(text) => { this.setState({ amount: text }) }}
                            />
                        </View>
                    </View>
                    <View style={styles.descriptionInput}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Description"
                            placeholderTextColor="#88898f"
                            multiline
                            numberOfLines={12}
                            onChangeText={(text) => { this.setState({ description: text }) }}
                        />
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.purplebutton} onPress={this.nextScreen.bind(this)} >
                        <Text style={styles.whitefont}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

OrdersScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        flex: 1,
        backgroundColor: '#e3e3e3',
    },
    header: {
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1,
        width: '100%',
    },
    body: {
        flex: 8,
        width: '100%',
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
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
        fontSize: 24,
    },
    regularInputs: {
        flex: 1,
        width: '95%',
        alignSelf: 'center',
    },
    descriptionInput: {
        flex: 1,
        width: '95%',
        alignSelf: 'center',
    },
    subject: {
        flex: 2,
    },
    trackId: {
        flex: 1,
    },
    amount: {
        flex: 1,
    },
    inputContainer: {
        flex: 2,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: 'red',
    },
    amountInputContainer: {
        flex: 1,
        width: '95%',
        alignSelf: 'center',
        paddingLeft: 25,
    },
    textInput: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        alignSelf: 'center',
        width: '100%',
        // height: '28%',
        textAlign: 'left',
        fontSize: 18,
        // paddingBottom: 90,

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
});
