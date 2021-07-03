import React from "react";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

import { connect } from 'react-redux'

const ShoppingCart = (cart) => {
    return (
        <div>
            {cart.map((c) => {
                return(
                    <div>
                        c.price
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cartReducer.cart,
    }
}

export default connect(mapStateToProps)(ShoppingCart)