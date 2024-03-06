import PropTypes from 'prop-types';
import React, { Component } from 'react';
export default class Filters extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterClick: PropTypes.func,
  };
  static defaultProps = {
    onFilterClick: () => {},
  };
  render() {
    const { filter, onFilterClick } = this.props;
    return (
      <ul className="filters">
        <li>
          <button
            className={filter === 'All' ? 'selected' : ''}
            onClick={() => {
              onFilterClick('All');
            }}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={filter === 'Active' ? 'selected' : ''}
            onClick={() => {
              onFilterClick('Active');
            }}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={filter === 'Completed' ? 'selected' : ''}
            onClick={() => {
              onFilterClick('Completed');
            }}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
