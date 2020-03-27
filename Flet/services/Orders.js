import {ordersURL, addOrderURL} from '../constants/routes';
import {injectHeaders} from '../constants/header-manager';
import { PushNotificationIOS } from 'react-native';

export const getOrders = () => {
    const URL = ordersURL;
    return fetch(URL)
    .then((res) => {
        return res.json();
    });
}

export const getOrdersPage = (page) =>{
    const URL = ordersURL + '&_page=' +page;
    return fetch(URL)
    .then((res) => {
        return res.json();
    })
}


export const addOrder = (json) => {
    const URL = addOrderURL;
    return fetch(URL,{
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(json),
    }).then((res) => {
        return res.json();
    })
}

export const pickUpOrder = (id,pick) => {
    console.log(pick);
    const URL = addOrderURL + '/' +id;
    console.log(URL);
    return fetch(URL,{
        method: 'PATCH',
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            "pick_up":pick,
            "status":"picked_up"
        })
    }).then((res)=>{
        return res.json();
    });  
}

export const deliverOrder = (id,drop) => {
    console.log(drop);
    const URL = addOrderURL + '/' +id;
    console.log(URL);
    return fetch(URL,{
        method: 'PATCH',
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            "drop_off":drop,
            "status":"delivered"
        })
    }).then((res)=>{
        return res.json();
    });  
}

// JSON.stringify({
//     "number": 13,
// }),