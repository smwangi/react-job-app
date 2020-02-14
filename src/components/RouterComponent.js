import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import ListUserComponent from "./user/ListUserComponent";
// import AddUserComponent from "./user/AddUserComponent";
// import EditUserComponent from "./user/EditUserComponent";

import Home from './Home';
import Footer from './FooterEx';

const AppRouter = () => {
    return(
        <div style={style}>
            <Router>
                    <Switch>
                        <Route exact component={Home}   path="/"/>
                        <Route exact component={Footer} path="/users"/>
                         {/*<Route exactly component={Login} pattern="/login" />
                        <Route path="/add-user" component={AddUserComponent} />
                        <Route path="/edit-user" component={EditUserComponent} /> */}
                    </Switch>
            </Router>
        </div>
    )
}

const style={
    marginTop:'20px'
}

export default AppRouter;