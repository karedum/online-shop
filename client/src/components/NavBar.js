import React, {useContext} from 'react';
import {Context} from "../index";
import Nav from "react-bootstrap/Nav";
import {NavLink, useHistory} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import Button from "react-bootstrap/Button";
import {observer} from "mobx-react-lite";
import logo from "../img/logo.png";
import style from "./NavBar.module.css"

const NavBar = observer( () => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token');
    }

    return (
        <div className={style.header}>
                    <div>
                        <NavLink to={SHOP_ROUTE}><img alt="EasyCart" src={logo}/></NavLink>
                    </div>
            {user.isAuth ?
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button
                        variant={'light'}
                        onClick={() => history.push(ADMIN_ROUTE)}
                    >
                        Админ-панель
                    </Button>
                    <Button
                        variant={'light'}
                        onClick={() => logOut()}
                        className={'ml-2'}
                    >
                        Выйти
                    </Button>
                    <Button
                        variant={'success'}
                        onClick={() => history.push(BASKET_ROUTE)}
                        className={'ml-2'}
                    >
                        Корзина
                    </Button>

                </Nav>
                :
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={'light'} onClick={() => history.push(LOGIN_ROUTE)} >Авторизация</Button>
                </Nav>
            }
        </div>
    );
}
);

export default NavBar;