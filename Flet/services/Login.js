import { loginURL } from "../constants/routes";
import { extractHeaders } from "../constants/header-manager";


export const login = (email,password) => {
    console.log(email);
    console.log(password);
    const URL = loginURL+'?lat=-34&long=-45';
    return fetch(URL,{
        method: 'POST',
        body:JSON.stringify({
            email: email,
            password: password,
            lat: -31.444,
            long: -32.534,
        }),
        headers:{
            'Content-Type': 'application/json;'
        }
    })
    .then((res) => {
        extractHeaders(res);
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
}