import React from 'react';
import { Link } from 'react-router-dom'
import "./todo.css";
import { TO_TODO_DETAIL } from '../../helpers/constants';

//atomic component of Todo list  
export default class TodoListItem extends React.Component {
    constructor(props) {
      super(props);
      this.onClickDone = this.onClickDone.bind(this);
    }
    //on click function to mark done/undone
    onClickDone() {
      this.props.changeState(this.props.item); // calling a function recived from parent
    }
    render () {
      var todoClass = this.props.item.completed ? //dynamically adding class for done and undone todo
           "done" : "undone";
      return(
        <li className="list-group-item ">
          <div className={todoClass}>
            <span title="Mark check/uncheck" className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}></span>
            <Link title="View Detail" to={`${TO_TODO_DETAIL}${this.props.item.id}`}>{this.props.item.title}</Link>
          </div>
        </li>     
      );
    }
  }