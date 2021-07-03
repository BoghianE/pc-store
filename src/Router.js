import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HOME, CART }  from './utils/routeConstants'

import Home from './components/Home'
import ShoppingCart from './components/ShoppingCart'

const Router = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={ HOME } component={ Home }/>
                <Route exact path={ CART } component={ ShoppingCart }/>

            </Switch>
        </React.Fragment>
    )
}

export default Router;

