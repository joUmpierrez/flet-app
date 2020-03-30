import { driversURL } from "../constants/routes"

export const getDrivers = () =>{
    const URL = driversURL;
    return fetch(URL).then((res) => {
        console.log(res);
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
}