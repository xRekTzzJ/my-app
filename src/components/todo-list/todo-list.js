import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TodoItem from '../todo-item';
export default class TodoList extends Component {
  static propTypes = {
    todoData: PropTypes.arrayOf(PropTypes.object).isRequired,
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
    onDelete: PropTypes.func,
    doneHandler: PropTypes.func,
    onEditSubmit: PropTypes.func,
    startTimer: PropTypes.func,
    pauseTimer: PropTypes.func,
  };
  static defaultProps = {
    onDelete: () => {},
    doneHandler: () => {},
    onEditSubmit: () => {},
    pauseTimer: () => {},
    startTimer: () => {},
    created: new Date(),
    minutes: 0,
    seconds: 0,
  };

  //Рендер списка todo
  render() {
    const { todoData, onDelete, doneHandler, onEditSubmit, startTimer, pauseTimer } = this.props;
    return (
      <ul className="todo-list">
        {todoData.map((i) => {
          const { id, description, isDone, created, minutes, seconds } = i;
          return (
            <TodoItem
              startTimer={startTimer}
              key={id}
              description={description}
              onDelete={() => onDelete(id)}
              onEditSubmit={onEditSubmit}
              isDone={isDone}
              minutes={minutes}
              seconds={seconds}
              id={id}
              created={created}
              pauseTimer={pauseTimer}
              doneHandler={() => doneHandler(id)}
            />
          );
        })}
      </ul>
    );
  }
}
