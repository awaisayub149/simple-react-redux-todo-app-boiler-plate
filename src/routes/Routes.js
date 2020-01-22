import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import TodoDetail from "../containers/TodoDetail";

import {TO_HOME,TO_LOGIN, TO_TODO_DETAIL} from "../helpers/constants"

export default ({ childProps }) =>
  //defining routes of the app, all routes and there component will be connacted here
<Switch>
    <Route exact path={TO_LOGIN} component={ Login }/>
    <Route path={TO_HOME} component={ Home }/>
    <Route path={TO_TODO_DETAIL+':id'} component={ TodoDetail }/>
</Switch>  
