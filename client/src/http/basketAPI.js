import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode"

export const addToBasket = async (deviceId) => {
    const {data} = await $authHost.post('api/basket/add', {deviceId})
    return data
}

export const deleteInBasket = async (deviceId) => {
    const {data} = await $authHost.delete(`api/basket/delete/${deviceId}`)

    return data
}



export const fetchBasket = async () => {
    const {data} = await $authHost.get('api/basket')
    return data
}