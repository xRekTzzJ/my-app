import React, { Component } from "react";
import Filters from "../filters";
export default class Footer extends Component {
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
