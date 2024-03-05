import React, { Component } from "react";
import NewTaskForm from "../new-task-form";
export default class Header extends Component {
  render() {
    const { onCreateElement } = this.props;
    return (
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onCreateElement={onCreateElement} />
      </header>
    );
  }
}
