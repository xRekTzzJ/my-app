import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
export default class TodoItem extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func,
    doneHandler: PropTypes.func,
    onEditSubmit: PropTypes.func,
  };
  static defaultProps = {
    onDelete: () => {},
    doneHandler: () => {},
    onEditSubmit: () => {},
    created: new Date(),
  };
  state = {
    edit: false,
    description: this.props.description,
  };

  onEditClick = () => {
    this.setState(({ edit }) => {
      return {
        edit: !edit,
      };
    });
  };

  inputHandler = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  submitHandler = (e) => {
    const { onEditSubmit, id } = this.props;
    const { description } = this.state;
    e.preventDefault();
    if (description.length !== 0) {
      onEditSubmit(description, id);
      this.setState({
        edit: false,
      });
    }
  };

  render() {
    const { description, isDone, onDelete, doneHandler, created } = this.props;
    const { edit, description: stateDescription } = this.state;
    let classNames = '';
    if (isDone) {
      classNames = 'completed';
    }
    if (edit) {
      classNames = 'editing';
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
            <span className="created">{`created ${formatDistanceToNow(created, {
              includeSeconds: true,
              addSuffix: true,
            })}`}</span>
          </label>
          <button className="icon icon-edit" onClick={!isDone ? this.onEditClick : () => {}}></button>
          <button className="icon icon-destroy" onClick={onDelete}></button>
        </div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            className="edit"
            onChange={this.inputHandler}
            value={stateDescription}
            placeholder="Write a todo"
          />
        </form>
      </li>
    );
  }
}
