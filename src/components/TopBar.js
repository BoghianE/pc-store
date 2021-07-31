import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BackspaceIcon from '@material-ui/icons/Backspace';

import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';

import ShowCart from "./ShowCart";
import {HOME, CART, SIGN, SIGNIN} from '../utils/routeConstants'
import Avatar from "@material-ui/core/Avatar";



const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,

    },
}));

const TopBar = (props) => {
    const classes = useStyles()
    const [schimba, setSchimba] = useState(true)
    const [cart, setCart] = useState()
    const [openHover, setOpenHover] = useState(false)
    //
    // useEffect(() => {
    //     if (localStorage.getItem('token-market')) {
    //         let data = jwt.verify(localStorage.getItem('token-market'), 'jwtSecret')
    //     }
    // }, [])

    useEffect(() => {
        let localC = JSON.parse(localStorage.getItem('cart-length'))
        setCart(localC)
    }, [])


    return (
        <div className='ls-app-header'>
            <div
                className="logo"
                style={{ cursor: 'pointer' }}
                onClick={e => window.location.href = '/'}
            >PC Store</div>

            {props.userData === null ?
                <div className='navigation-container'>
                    <div onClick={() => props.history.push(HOME)}>Acasa</div>
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
                            <div className="cart-icon-length" style={{marginTop: '-8px'}} onClick = {() => props.history.push(CART)} onMouseOver={e => setOpenHover(true)} >
                                <ShoppingCartIcon/>
                                <div className='number-of-items'>{} </div>
                            </div>
                        </div>
                    }
                    <div onClick={() => props.history.push(HOME)}> Acasa </div>
                    <div>Contul Meu</div>
                    <div style={{display: 'flex'}}>
                        <div>{props.userData?.username}</div>
                        <Avatar className={classes.avatar} style={{marginTop: '-5px', width: '30px', height: '30px'}}>
                        </Avatar>
                    </div>



                    {openHover && <ShowCart history={props.history} setOpenHover={setOpenHover} userData={props.userData}/>}
                </div>
            }
        </div>
    )
}

export default TopBar
