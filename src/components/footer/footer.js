import PropTypes from 'prop-types';
import React from 'react';

import Filters from '../filters';

const Footer = (props) => {
  const { doneCounter, filter, onFilterClick, onClearCompleted } = props;

  return (
    <footer className="footer">
      <span className="todo-count">{`${doneCounter} items left`}</span>
      <Filters filter={filter} onFilterClick={onFilterClick} />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};
Footer.propTypes = {
  doneCounter: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func,
  onClearCompleted: PropTypes.func,
};

Footer.defaultProps = {
  onFilterClick: () => {},
  onClearCompleted: () => {},
};

export default Footer;
