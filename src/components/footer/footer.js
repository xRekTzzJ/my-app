import React, { Component } from "react";
import Filters from "../filters";
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          {`${this.props.doneCounter} items left`}
        </span>
        <Filters onFiltered={this.props.onFiltered} />
        <button
          className="clear-completed"
          onClick={this.props.onClearCompleted}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}
