import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';



import { connect } from 'react-redux'

import { updateCart }  from '../actions/cartActions'
import Axios from "axios";
import {url} from "../utils/api";

const ProductCard = ({dispatch, name, price, description, image, userId, product}) => {

    const classes = useStyles();
    const [activeButton, setActiveButton] = useState(true)

    const addToCart = (item) => {
        let list = localStorage.getItem('cart') ? [...JSON.parse(localStorage.getItem('cart'))] : []
        console.log(list)
        let index = list.findIndex((t) => (t.id === item.id))
        if( index === -1) {
            localStorage.setItem('cart', JSON.stringify(list));

            Axios.post(url.addToCart, {userId: userId, deviceId: item.id})
                .then(res => {
                    if (res.status === 200) {
                        console.log(res.data)
                    }
                })
                .catch(err => console.error(err))

        } else {
            setActiveButton(false)
        }

        //
        // if( index === -1) {
        //     list.push({...item, quantity: 1})
        // } else {
        //     list[index].quantity += 1
        // }

    }


    return(
        <Card
            className={classes.root}
            style={{ margin: '15px', position: 'relative', flexGrow: 1, textAlign: 'center', backgroundColor: '#fff' }}
        >
            <CardHeader
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" style={{ height: '60px', overflow: 'hidden' }}>
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{ height: '60px', overflow: 'hidden' }}>
                    {description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{ height: '60px', overflow: 'hidden' }}>
                    {price} RON
                </Typography>
                <img src={image} alt="prod"/>
                { activeButton ?
                    <button onClick={e => {
                        e.stopPropagation()
                        addToCart(product)
                    }}>
                        Add to cart
                    </button> :
                    <button onClick={() => alert('Produsul selectat este deja in cos!')}>Add to cart</button>
                }
            </CardContent>
        </Card>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 350,
        margin: '0 4px'
    },
    media: {
        width: '100%',
        height: '200px',
        padding: '0 15px'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default connect(null)(ProductCard)