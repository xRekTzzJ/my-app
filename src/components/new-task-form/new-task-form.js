import PropTypes from 'prop-types';
import React, { Component } from 'react';
export default class NewTaskForm extends Component {
  static propTypes = {
    onCreateElement: PropTypes.func,
  };
  static defaultProps = {
    onCreateElement: () => {},
  };

  state = {
    description: '',
    minutes: '',
    seconds: '',
  };

  submitHandler = (e) => {
    const { description, minutes, seconds } = this.state;
    const { onCreateElement } = this.props;
    e.preventDefault();
    if (description.length !== 0) {
      onCreateElement(description, minutes, seconds);
      this.setState({
        description: '',
        seconds: '',
        minutes: '',
      });
    }
  };

  inputHandler = (e) => {
    switch (e.target.placeholder) {
      case 'Task':
        this.setState({
          description: e.target.value,
        });
        break;
      case 'Min':
        this.setState({
          minutes: e.target.value,
        });
        break;
      case 'Sec':
        this.setState({
          seconds: e.target.value,
        });
        break;
    }
  };

  render() {
    const { description, seconds, minutes } = this.state;
    return (
      <form className="new-todo-form" onSubmit={this.submitHandler}>
        <input className="new-todo" placeholder="Task" autoFocus onChange={this.inputHandler} value={description} />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          autoFocus
          type="number"
          value={minutes}
          onChange={this.inputHandler}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          autoFocus
          type="number"
          value={seconds}
          onChange={this.inputHandler}
        />
        <button type="submit"></button>
      </form>
    );
  }
}
