import React, { Component } from "react";

export default class NewTaskForm extends Component {
  state = {
    description: "",
  };

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.description.length !== 0) {
      this.props.onCreateElement(this.state.description);
      this.setState({
        description: "",
      });
    }
  };
  inputHandler = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.inputHandler}
          value={this.state.description}
        />
      </form>
    );
  }
}
