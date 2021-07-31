import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HOME, CART, SIGN, SIGNIN }  from './utils/routeConstants'

import Home from './components/Home'
import ShoppingCart from './components/ShoppingCart'
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

const Router = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={ HOME } component={ Home }/>
                <Route exact path={ CART } component={ ShoppingCart }/>
                <Route exact path={ SIGN } component={ SignUp }/>
                <Route exact path={ SIGNIN } component={ SignIn }/>


            </Switch>
        </React.Fragment>
    )
}

export default Router;

