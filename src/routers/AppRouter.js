import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

import { ContextAuth } from '../context/login/Context';

const AppRouter = () => {
    const { user } = useContext(ContextAuth);

    return (
        <Switch>
            <Route
                exact
                path="/"
                render={() => (
                    user ? <Redirect to="/home" /> : <Login />
                )}
            />
            <Route
                exact
                path="/register"
                render={() => (
                    user ? <Redirect to="/home" /> : <Register />
                )}
            />
            <Route
                exact
                path="/home"
                render={() => (
                    user ? <Home /> : <Redirect to="/" />
                )}
            />

        </Switch>
    )
}

export default AppRouter;