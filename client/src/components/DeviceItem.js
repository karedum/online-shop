import React from 'react';
import Col from "react-bootstrap/Col";
import star from "../assets/star.jpg"
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom"
import {BASKET_ROUTE, DEVICE_ROUTE} from "../utils/consts";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import {createBrand} from "../http/deviceAPI";
import {addToBasket} from "../http/basketAPI";

const DeviceItem = ({device}) => {
    const history = useHistory()
    const createBasket = (deviceId) => {
        addToBasket(deviceId).then(data => {
            history.push(BASKET_ROUTE)
        })
    }
    return (
        <div>
        <Col md={3} className="mt-3" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
        <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
            <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
            <div>Samsung...</div>
            <div className="d-flex align-items-center">
                <Image width={20} height={10} src={star}/>
            </div>
        </div>
            <div>{device.name}</div>

        </Card>

        </Col>
    <Button
        variant={'success'}
        size="sm" onClick={() => createBasket(device.id)}
    >Добавить в корзину</Button>
        </div>
    );

};

export default DeviceItem;