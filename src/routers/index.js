import React, { PureComponent } from 'react'
import { Router, Route, NavLink, Switch, Redirect } from "dva/router";
import Home from '../components/Home.js'
import Signin from '../components/Signin.js'

export default ({history, app}) => 
    <Router history={history}>
        <React.Fragment>
            <Route path="/home" exact component={Home}/>
            <Route path="/signin" exact component={Signin}/>
        </React.Fragment>
    </Router>
