import { AsyncStorage } from "react-native";

export const extractHeaders = (res) =>{
    if(res['access-token']!=null){
        let access_token = res['access-token'];
        AsyncStorage.setItem('access-token',access_token);
    }
}

export const injectHeaders = async () =>{
    let accessToken = await AsyncStorage.getItem('access-token');
    return {
        'Content-Type': 'application/json; charset=utf-8',
        'access-token': accessToken,
    }
}