import React, { Component } from "react";

export default class TodoItem extends Component {
  state = {
    done: false,
  };
  onClickElement = () => {
    this.setState((state) => {
      return {
        done: !state.done,
      };
    });
  };
  render() {
    const { description, onDelete } = this.props;
    let classNames = "";
    if (this.state.done) {
      classNames = "completed";
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" readOnly />
          <label>
            <span className="description" onClick={this.onClickElement}>
              {description}
            </span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDelete}></button>
        </div>
      </li>
    );
  }
}
