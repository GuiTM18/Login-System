import React from 'react';
import {Switch, Route} from 'react-router-dom'
 
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
 
const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/account" exact component={Account} />
        </Switch>
    );
}
 
export default Routes;
