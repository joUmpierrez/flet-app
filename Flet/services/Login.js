import { loginURL } from "../constants/routes";
import { extractHeaders } from "../constants/header-manager";


export const login = (email,password) => {
    console.log(email);
    console.log(password);
    const URL = loginURL;
    return fetch(URL,{
        method: 'POST',
        body:JSON.stringify({
            email: email,
            password: password
        }),
        headers:{
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
    .then((res) => {
        extractHeaders(res);
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
}