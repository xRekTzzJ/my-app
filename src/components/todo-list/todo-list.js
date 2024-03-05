import React, { Component } from "react";
import TodoItem from "../todo-item";
import PropTypes from "prop-types";
export default class TodoList extends Component {
  static propTypes = {
    todoData: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func,
    doneHandler: PropTypes.func,
  };
  static defaultProps = {
    onDelete: () => {},
    doneHandler: () => {},
  };
  render() {
    const { todoData, onDelete, doneHandler } = this.props;
    return (
      <ul className="todo-list">
        {todoData.map((i) => {
          const { id, description, isDone } = i;
          return (
            <TodoItem
              key={id}
              description={description}
              onDelete={() => onDelete(id)}
              isDone={isDone}
              doneHandler={() => doneHandler(id)}
            />
          );
        })}
      </ul>
    );
  }
}
