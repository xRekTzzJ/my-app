import React, { Component } from "react";
import PropTypes from "prop-types";
export default class TodoItem extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    onDelete: PropTypes.func,
    doneHandler: PropTypes.func,
  };
  static defaultProps = {
    onDelete: () => {},
    doneHandler: () => {},
  };

  render() {
    const { description, isDone, onDelete, doneHandler } = this.props;
    let classNames = "";
    if (isDone) {
      classNames = "completed";
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            defaultChecked={isDone === true ? true : false}
            onClick={doneHandler}
          />
          <label>
            <span className="description">{description}</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDelete}></button>
        </div>
      </li>
    );
  }
}
