import React, { useState, useEffect } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BackspaceIcon from '@material-ui/icons/Backspace';
import { makeStyles } from '@material-ui/core/styles';

import ShowCart from "./ShowCart";
import {HOME, CART, SIGN, SIGNIN} from '../utils/routeConstants'
import Avatar from "@material-ui/core/Avatar";
import Axios from "axios";
import {url} from "../utils/api";

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,

    },
}));

const TopBar = (props) => {
    const classes = useStyles()
    const [cart, setCart] = useState(0)
    const [openHover, setOpenHover] = useState(false)
    //
    // useEffect(() => {
    //     if (localStorage.getItem('token-market')) {
    //         let data = jwt.verify(localStorage.getItem('token-market'), 'jwtSecret')
    //     }
    // }, [])

    useEffect(() => {
        const getCart = () => {
            Axios.post(url.cart, {userId: props.userData.id})
                .then((res) => {
                    setCart(res.data)
                    console.log(props.userData.id)
                })
                .catch((err) => {
                    alert(err)
                    console.log(err)
                })

        }
        getCart();
    }, [props.userData?.id])


    return (
        <div className='ls-app-header'>
            <div
                className="logo"
                style={{ cursor: 'pointer' }}
                onClick={e => window.location.href = '/'}
            >PC Store</div>

            {props.userData === null ?
                <div className='navigation-container'>
                    <div onClick={e => window.location.href = '/'}>Acasa</div>
                    <div onClick={() => props.history.push(SIGNIN)}>Autentificare</div>
                    <div onClick={() => props.history.push(SIGN)}>Inregistreaza-te</div>
                </div>
                 :
                <div className='navigation-container'>
                    {(window.location.href.indexOf("shopping-cart") > -1)?
                        <div>
                            <BackspaceIcon style={{ cursor:'pointer', display: 'none' }} onClick = {() => props.history.push(HOME)}/>
                        </div> :
                        <div className="shopping-cart">
                            <div
                                className="cart-icon-length"
                                style={{marginTop: '-8px'}}
                                onClick = {() => props.history.push(CART)}
                                onMouseOver={e => setOpenHover(true)}
                            >
                                <ShoppingCartIcon/>
                                <div className='number-of-items'>{cart?.length}</div>
                            </div>
                        </div>
                    }
                    <div onClick={e => window.location.href = '/'}> Acasa </div>
                    <div>Contul Meu</div>
                    <div style={{display: 'flex', marginRight: '3px'}}>
                        <div>{props.userData?.username}</div>
                        <Avatar className={classes.avatar} style={{marginTop: '-5px', width: '30px', height: '30px'}}>
                        </Avatar>
                    </div>0

                    {openHover && <ShowCart history={props.history} setOpenHover={setOpenHover} userData={props.userData}/>}
                </div>
            }
        </div>
    )
}

export default TopBar
