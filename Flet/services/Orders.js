import {ordersURL} from '../constants/routes';
import {injectHeaders} from '../constants/header-manager';

export const getOrders = () => {
    const URL = ordersURL;
    return fetch(URL)
    .then((res) => {
        return res.json();
    });
}