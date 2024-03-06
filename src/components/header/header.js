import React, { Component } from 'react';
import NewTaskForm from '../new-task-form';
import PropTypes from 'prop-types';
export default class Header extends Component {
  static propTypes = {
    onCreateElement: PropTypes.func,
  };
  static defaultProps = {
    onCreateElement: () => {},
  };
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
