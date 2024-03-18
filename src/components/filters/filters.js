import PropTypes from 'prop-types';
import React from 'react';

const Filters = (props) => {
  const { filter, onFilterClick } = props;

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
};

//Типы пропсов
Filters.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func,
};

//Пропсы по дефолту
Filters.defaultProps = {
  onFilterClick: () => {},
};

export default Filters;
