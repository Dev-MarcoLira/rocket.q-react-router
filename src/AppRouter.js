import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import CreateRoom from './components/CreateRoom'

import { useAuth } from './AuthContext'

const PrivateRoute = ({ component: Component, ... rest }) => {
    
    const { isAuthenticated } = useAuth()

    return(
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    )
}

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                
                <Route path="/" exact Component={ Home }></Route>
                <Route path="/login" exact Component={ Login }></Route>
                <PrivateRoute path="/room" component={ CreateRoom } />
            </Switch>
        </Router>
    )
}

export default AppRouter