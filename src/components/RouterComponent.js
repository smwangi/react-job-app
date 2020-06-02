import React from "react";
import { Route, Switch } from 'react-router-dom'

import Home from './Home';
import User from "./User";

const AppRouter = () => {
    return (
        <div style={style}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={User} />
            </Switch>
        </div>
    )
}

const style = {
    marginTop: '20px'
}

export default AppRouter;