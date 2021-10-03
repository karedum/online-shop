import React, {useEffect, useState} from 'react';
import bigStar from '../assets/bigStar.jpg'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {fetchOneDevice} from "../http/deviceAPI";
import {useParams} from 'react-router-dom'
import style from "./DevicePage.module.css"

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect( () => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])
    return (
        <div className={style.device_page}>
            <Row>
                <Col md={6}>
                    <Row className="d-flex flex-column align-items-center justify-content-center">
                        <h2>{device.name}</h2>
                        <Image className={style.device_image} src={process.env.REACT_APP_API_URL + device.img}/>
                    </Row>
                </Col>
                <Col md={6}>
                <Row className="d-flex flex-column mr-2">
                    <h2>Характеристики</h2>
                    {device.info.map((info, index) =>
                        <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                            {info.title}: {info.description}
                        </Row>
                    )}
                </Row>
                </Col>
            </Row>
            <Col md={6}>
                <Row className="d-flex flex-column align-items-center justify-content-center">
                    <h3>{device.price} RUB</h3>
                <Button variant="success">Добавить в корзину</Button>
                </Row>
            </Col>
        </div>
    );
};

export default DevicePage;