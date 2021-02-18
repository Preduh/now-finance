import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from './pages/Login'
import Landing from './pages/Landing'

import { isAuthenticated } from './auth'

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
        } />
    )
}

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/home" component={Landing} />
            </Switch>
        </BrowserRouter>
    )
}