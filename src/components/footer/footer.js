import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Filters from '../filters';
export default class Footer extends Component {
  static propTypes = {
    doneCounter: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    onFilterClick: PropTypes.func,
    onClearCompleted: PropTypes.func,
  };
  static defaultProps = {
    onFilterClick: () => {},
    onClearCompleted: () => {},
  };

  //Рендер футера
  render() {
    const { doneCounter, filter, onFilterClick, onClearCompleted } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{`${doneCounter} items left`}</span>
        <Filters filter={filter} onFilterClick={onFilterClick} />
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}
