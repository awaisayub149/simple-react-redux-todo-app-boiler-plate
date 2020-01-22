import React from 'react';
import TodoListItem from './todo'
//loop through all the list and mapping todos on atomic component of todo.
export default class TodoList extends React.Component {
  render() {
    //mapping process start
    var items = this.props.todos && this.props.todos.map((item, index) => {
      return (
        <TodoListItem key={index} item={item} index={index} changeState={this.props.changeState} />
      );
    });
    //mapping process end
    return (
      <ul className="list-group"> {items} </ul> //return to parent component
    );
  }
}

