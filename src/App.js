import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { fetchTodoList } from  './actions/todo-action'

import store from './store';

//basic compnent of which holds all routes
class App extends Component {
    componentDidMount(){
        store.dispatch(fetchTodoList()) //on mounting of app api will be happen to get todo list
    }
    render() {
        return (
            <div id="all" history={this.props.history}>
                <Routes />
            </div>
        );
    }
}

export default withRouter(App);