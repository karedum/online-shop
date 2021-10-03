import React, {useContext, useEffect} from 'react';
import {fetchDevice, fetchOneDevice} from "../http/deviceAPI";
import {addToBasket, deleteInBasket, fetchBasket} from "../http/basketAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Button from "react-bootstrap/Button";

const BasketItem = ({basket, createInBasket, removeInBasket}) => {

    return (
        <tbody>
        <tr>
            <td>{basket.id}</td>
            <td>{basket.name}</td>
            <td>{basket.price}</td>
            <td>{basket.basket_devices.length} <Button variant="success" size="sm" onClick={()=>createInBasket(basket.id)}>+</Button>
                <Button variant="danger" size="sm" onClick={()=> removeInBasket(basket.id)}>-</Button></td>
        </tr>
        </tbody>
    );
};

export default BasketItem;