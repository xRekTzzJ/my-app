import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class NewTaskForm extends Component {
  static propTypes = {
    onCreateElement: PropTypes.func,
  };
  static defaultProps = {
    onCreateElement: () => {},
  };

  state = {
    description: '',
  };

  submitHandler = (e) => {
    const { description } = this.state;
    const { onCreateElement } = this.props;
    e.preventDefault();
    if (description.length !== 0) {
      onCreateElement(description);
      this.setState({
        description: '',
      });
    }
  };

  inputHandler = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  render() {
    const { description } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.inputHandler}
          value={description}
        />
      </form>
    );
  }
}
