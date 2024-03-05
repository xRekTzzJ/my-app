import React, { Component } from "react";
import TodoItem from "../todo-item";
export default class TodoList extends Component {
  render() {
    const { todoData, onDelete, doneHandler } = this.props;
    return (
      <ul className="todo-list">
        {todoData.map((i) => {
          return (
            <TodoItem
              key={i.id}
              description={i.description}
              onDelete={() => onDelete(i.id)}
              isDone={i.isDone}
              doneHandler={() => doneHandler(i.id)}
            />
          );
        })}
      </ul>
    );
  }
}
