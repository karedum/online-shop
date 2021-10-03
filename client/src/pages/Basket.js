import React, {useContext, useEffect} from 'react';
import {fetchDevice, fetchOneDevice} from "../http/deviceAPI";
import {addToBasket, deleteInBasket, fetchBasket} from "../http/basketAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import DeviceItem from "../components/DeviceItem";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import BasketItem from "../components/BasketItem";
import Button from "react-bootstrap/Button";


const Basket = observer(() => {
    const {basket} = useContext(Context)
    useEffect(() => {
        fetchBasket().then(data => {
            basket.setBasket(data)
        })
    }, [])
    const createInBasket = (id) => {
        addToBasket(id).then(data => {
            fetchBasket().then(data => {
                basket.setBasket(data)
            })
        })}
    const removeInBasket = (id) => {
        deleteInBasket(id).then(data => {
            fetchBasket().then(data => {
                basket.setBasket(data)
            })
        })}

    return (
        <div>
        <Table striped bordered hover >
            <thead>
            <tr>
                <th>№</th>
                <th>Название</th>
                <th>Цена</th>
                <th>Кол-во</th>

            </tr>
            </thead>
                {basket.basket.map(basket =>
                    <BasketItem key={basket.id} basket={basket} createInBasket={createInBasket} removeInBasket={removeInBasket}/>

                )}
        </Table>
        </div>
    );
});

export default Basket;