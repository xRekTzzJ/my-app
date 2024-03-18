import PropTypes from 'prop-types';
import React, { useState } from 'react';

const NewTaskForm = (props) => {
  const [description, setDescription] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  //Слушатель сабмита формы
  const submitHandler = (e) => {
    const { onCreateElement } = props;
    e.preventDefault();
    if (description.length !== 0) {
      onCreateElement(description, minutes, seconds);
      setDescription('');
      setMinutes('');
      setSeconds('');
    }
  };

  //Слушатель инпутов
  const inputHandler = (e) => {
    switch (e.target.placeholder) {
      case 'Task':
        setDescription(e.target.value);
        break;
      case 'Min':
        e.target.value.length > 2 ? null : setMinutes(e.target.value);
        break;
      case 'Sec':
        e.target.value.length > 2 ? null : setSeconds(e.target.value);
        break;
    }
  };

  //Отрендерить форму
  return (
    <form className="new-todo-form" onSubmit={submitHandler}>
      <input className="new-todo" placeholder="Task" autoFocus onChange={inputHandler} value={description} />
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        autoFocus
        type="number"
        value={minutes}
        onChange={inputHandler}
        min={0}
        max={59}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        autoFocus
        type="number"
        value={seconds}
        onChange={inputHandler}
        max={59}
        min={0}
      />
      <button type="submit"></button>
    </form>
  );
};

NewTaskForm.propTypes = {
  onCreateElement: PropTypes.func,
};

NewTaskForm.defaultProps = {
  onCreateElement: () => {},
};

export default NewTaskForm;
