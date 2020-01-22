import React from "react";
import { connect } from 'react-redux';


class TodoDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {}
        }
    }
    componentDidMount() {
        //on component did mount getting id of todo and finding from array for show in todo details
        this.props.todos.map(todo => {
            if (todo.id === parseInt(this.props.match.params.id)) {
                this.setState({ todo: todo })
            }
        })
    }
    componentDidUpdate(prevProps) {
        //on component did update getting id of todo and finding from array for show in todo details
        if (prevProps.todos.length !== this.props.todos.length)
            this.props.todos.map(todo => {
                if (todo.id === parseInt(this.props.match.params.id)) {
                    this.setState({ todo: todo })
                }
            })
    }
    render() {
        return (
            <div id="main">
                <h2>{this.state.todo.title}</h2>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="undone">
                            <span className="glyphicon glyphicon-ok icon" aria-hidden="true"></span>
                            Task: {this.state.todo.title}
                        </div>
                        <div className="undone">
                            <span className="glyphicon glyphicon-user icon" aria-hidden="true"></span>
                            User: {this.state.todo.userId}
                        </div>
                        <div className="undone">
                            <span className="glyphicon glyphicon-check icon" aria-hidden="true"></span>
                            Completed: {this.state.todo.completed ? 'Yes' : 'No'}
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
//connecteing this component to store
const stateMap = (state) => {
    return {
        todos: state.todo.todos,
    };
};

export default connect(stateMap)(TodoDetails);
