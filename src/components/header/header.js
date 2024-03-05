import React, { Component } from "react";
import NewTaskForm from "../new-task-form";
export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onCreateElement={this.props.onCreateElement} />
      </header>
    );
  }
}
