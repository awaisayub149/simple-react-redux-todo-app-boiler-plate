import React from "react";
import TodoList from "../components/todo/todo-list"
import { connect } from 'react-redux';
import { TODO_UPDATE } from "../helpers/constants";
import { Header } from '../components/header';

import store from '../store';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.changeState = this.changeState.bind(this);
        this.state = { todoItems: this.props.todoItems };
    }
    changeState(item) {
        //on click of any todo this function will call for done or undone process
        store.dispatch({
            type: TODO_UPDATE,
            payload: item
        });
    }
    render() {
        return (
            <div id="main">
                <Header />
                <TodoList todos={this.props.todos} changeState={this.changeState} />
            </div>
        );
    }
}
//connecting this component to store
const stateMap = (state) => {
    return {
        todos: state.todo.todos,
    };
};

export default connect(stateMap)(Home);
