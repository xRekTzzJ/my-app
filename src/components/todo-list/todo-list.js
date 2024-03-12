import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TodoItem from '../todo-item';
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
    const { todoData, onDelete, doneHandler, onEditSubmit, updateTimer } = this.props;
    return (
      <ul className="todo-list">
        {todoData.map((i) => {
          const { id, description, isDone, created, minutes, seconds } = i;
          return (
            <TodoItem
              updateTimer={updateTimer}
              key={id}
              description={description}
              onDelete={() => onDelete(id)}
              onEditSubmit={onEditSubmit}
              isDone={isDone}
              minutes={minutes}
              seconds={seconds}
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
