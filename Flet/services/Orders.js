import {ordersURL, addOrderURL} from '../constants/routes';
import {injectHeaders} from '../constants/header-manager';

export const getOrders = () => {
    const URL = ordersURL;
    return fetch(URL)
    .then((res) => {
        return res.json();
    });
}

export const addOrder = (json) => {
    console.log('llegue piola');
    let number = '123123123123';
    const URL = addOrderURL;
    console.log(json['client']);
    return fetch(URL,{
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            "number": 13,
        }),
    }).then((res) => {
        return res.json();
    })
}