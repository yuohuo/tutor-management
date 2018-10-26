import React, { PureComponent } from 'react'
import { Router, Route, NavLink, Switch, Redirect } from "dva/router";
import Home from '../components/Home.js'

export default ({history, app}) => 
    <Router history={history}>
        <React.Fragment>
            <Route path="/home" exact component={Home}/>
        </React.Fragment>
    </Router>
