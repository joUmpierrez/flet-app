import { AsyncStorage } from "react-native";

export const extractHeaders = (res) =>{
    console.log(res.headers.map['uid']);
    let headers = res.headers;
    let uid = headers.map['uid'];
    let access_token = headers.map['access-token'];
    let client = headers.map['client'];
    let expiry = headers.map['expiry'];
    let token_type = headers.map['token-type'];
    AsyncStorage.setItem('uid',uid);
    AsyncStorage.setItem('access-token',access_token);
    AsyncStorage.setItem('token-type',token_type);
    AsyncStorage.setItem('client',client);
    AsyncStorage.setItem('expiry',expiry);
}

export const injectHeaders = async () =>{
    let uid = await AsyncStorage.getItem('uid');
    let accessToken = await AsyncStorage.getItem('access-token');
    let tokenType = await AsyncStorage.getItem('token-type');
    let client = await AsyncStorage.getItem('client');
    let expiry = await AsyncStorage.getItem('expiry');
    console.log(expiry);
    return {
        'Content-Type': 'application/json; charset=utf-8',
        'uid': uid,
        'access-token': accessToken,
        'token-type': tokenType,
        'client': client,
        'expiry': expiry,
    }
}