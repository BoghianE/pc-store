import React, { useState, useEffect } from 'react'

import { CART } from '../utils/routeConstants';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { totalPrice } from '../utils/getTotalPrice';
import Axios from "axios";
import {url} from "../utils/api";
import {images} from "../images/images";


const ShowCart = (props) => {
    const [currentShowCart, setCurrentShowCart] = useState([])
    const [cart, setCart] = useState([])


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
    }, [props.userData.id])


    useEffect(() => {
        let data = localStorage.getItem('cart') ? [...JSON.parse(localStorage.getItem('cart'))] : []
        setCurrentShowCart(data)
    }, [])


    const leaveHover = () => {
        setTimeout(() => {
            props.setOpenHover(false)
        }, 700);
    }

    const deleteItem = (item) => {
        console.log(item.id)
        let id = item.id
        Axios.delete(url.deleteFromCart, {data: {userId: props.userData?.id, deviceId: id}})
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    let showTotal = totalPrice(currentShowCart)
    return (
        <div className='show-current-cart'  onMouseLeave={e => leaveHover()}>
            <div className='pop-title'>Ultimele adaugate:</div>

            {currentShowCart?.length > 0 ? (
                <div className='pop-elements'>
                    {currentShowCart.map((item) => {
                        return (
                            <div key={item.id} className='grid-container-cart'>
                                <div className='item0'>
                                    <img
                                        src={item.image}
                                        alt={'prod'}
                                    />
                                </div>
                                <div className='item1'>{item.title}</div>
                                <div className='item2'>{item.price} RON</div>
                                <button className='item3' onClick={() => deleteItem(item)}>Delete</button>
                            </div>
                        );
                    })}
                    <div className='div-with-total'>
                        <div className='total1'>TOTAL: <span>{''} </span> </div>
                        <div className='total2'>{currentShowCart.length} produse</div>
                        <div className='total3'>{showTotal.toFixed(2)}$</div>
                    </div>
                </div>
            ) : (
                <div className='message-empty'>
                    Cosul tau este gol.
                </div>
            )}
            <div className='div-with-btn'>
                <button className='pop-button' onClick = {() => props.history.push(CART)}>
                    <div>
                        <ArrowForwardIosIcon/>
                        <ArrowForwardIosIcon/>
                    </div>
                    <p>Du-te la cos</p>
                </button>
                <button onClick={() => console.log(cart)}>show</button>
            </div>
        </div>
    )
}

export default ShowCart