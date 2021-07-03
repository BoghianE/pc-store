import React from 'react'

import { updateCart }  from '../actions/cartActions'

const ProductCard = ({name, price, description, product, dispatch}) => {

    return(
        <div className='product-card'>
            <div>{name}</div>
            <div>{price}</div>
            <div>{description}</div>
            <button onClick={() => dispatch(updateCart(product))}>Add to cart</button>
        </div>
    )
};

export default ProductCard