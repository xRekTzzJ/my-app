import PropTypes from 'prop-types';
import React from 'react';

import NewTaskForm from '../new-task-form';

const Header = (props) => {
  const { onCreateElement } = props;

  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm onCreateElement={onCreateElement} />
    </header>
  );
};
Header.defaultProps = {
  onCreateElement: () => {},
};

Header.propTypes = {
  onCreateElement: PropTypes.func,
};

export default Header;
