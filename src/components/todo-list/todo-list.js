import React, { Component } from 'react';
import TodoItem from '../todo-item';
import PropTypes from 'prop-types';
export default class TodoList extends Component {
  static propTypes = {
    todoData: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func,
    doneHandler: PropTypes.func,
    onEditSubmit: PropTypes.func,
  };
  static defaultProps = {
    onDelete: () => {},
    doneHandler: () => {},
    onEditSubmit: () => {},
    created: new Date(),
  };
  render() {
    const { todoData, onDelete, doneHandler, onEditSubmit } = this.props;
    return (
      <ul className="todo-list">
        {todoData.map((i) => {
          const { id, description, isDone, created } = i;
          return (
            <TodoItem
              key={id}
              description={description}
              onDelete={() => onDelete(id)}
              onEditSubmit={onEditSubmit}
              isDone={isDone}
              id={id}
              created={created}
              doneHandler={() => doneHandler(id)}
            />
          );
        })}
      </ul>
    );
  }
}
