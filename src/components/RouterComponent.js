import React from "react";
import { Route, Switch } from 'react-router-dom'

import Home from './Home';

const AppRouter = () => {
    return (
        <div style={style}>
            <Switch>
                <Route exact path="/" component={Home} />

            </Switch>
        </div>
    )
}

const style = {
    marginTop: '20px'
}

export default AppRouter;