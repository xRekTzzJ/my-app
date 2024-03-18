import React, { useState } from 'react';

import Footer from '../footer';
import Header from '../header';
import TodoList from '../todo-list';

const App = () => {
  const [todoData, setTodoData] = useState([]);
  const [filter, setFilter] = useState('All');
  const [maxId, setMaxId] = useState(0);

  //Создать todo
  const createTodo = (description, isDone = false, minutes, seconds) => {
    setMaxId((maxId) => maxId + 1);
    const validate = (value) => {
      if (value.length < 1) {
        return 0;
      }
      if (value < 0) {
        return 0;
      }
      if (value > 59) {
        return 59;
      }
      return Number(value);
    };
    return {
      description,
      isDone,
      minutes: validate(minutes),
      seconds: validate(seconds),
      created: new Date(),
      timer: null,
      id: maxId,
    };
  };

  //Запустить таймер
  const startTimer = (id) => {
    setTodoData((data) => {
      const index = data.findIndex((i) => i.id === id);
      const oldElement = data[index];
      return [
        ...data.slice(0, index),
        { ...oldElement, timer: oldElement.timer ? oldElement.timer : setInterval(() => timer(id), 1000) },
        ...data.slice(index + 1),
      ];
    });
  };

  //Остановить таймер
  const pauseTimer = (id) => {
    setTodoData((data) => {
      const index = data.findIndex((i) => i.id === id);
      const oldElement = data[index];
      return [
        ...data.slice(0, index),
        { ...oldElement, timer: clearInterval(oldElement.timer) },
        ...data.slice(index + 1),
      ];
    });
  };

  //Логика таймера
  const timer = (id) => {
    setTodoData((data) => {
      const index = data.findIndex((i) => i.id === id);
      const oldElement = data[index];
      return [
        ...data.slice(0, index),
        {
          ...oldElement,
          timer:
            (oldElement.seconds <= 1 && oldElement.minutes <= 0) || oldElement.isDone
              ? clearInterval(oldElement.timer)
              : oldElement.timer,
          seconds:
            oldElement.seconds === 0 && oldElement.minutes === 0
              ? oldElement.seconds
              : oldElement.isDone
                ? oldElement.seconds
                : oldElement.seconds <= 0
                  ? 59
                  : oldElement.seconds - 1,
          minutes:
            oldElement.seconds === 0 && oldElement.minutes === 0
              ? oldElement.minutes
              : oldElement.seconds <= 0
                ? oldElement.minutes - 1
                : oldElement.minutes,
        },
        ...data.slice(index + 1),
      ];
    });
  };

  //Слушатель done
  const doneHandler = (id) => {
    setTodoData((data) => {
      const index = data.findIndex((i) => i.id === id);
      const oldElement = data[index];
      return [
        ...data.slice(0, index),
        { ...oldElement, isDone: !oldElement.isDone, timer: clearInterval(oldElement.timer), minutes: 0, seconds: 0 },
        ...data.slice(index + 1),
      ];
    });
  };

  //Удалить todo
  const deleteTodo = (id) => {
    pauseTimer(id);
    setTodoData((data) => {
      const index = data.findIndex((i) => i.id === id);
      return [...data.slice(0, index), ...data.slice(index + 1)];
    });
  };

  //Очистить выполненные todo
  const clearCompleted = () => {
    setTodoData((data) => {
      return data.filter((el) => !el.isDone);
    });
  };

  const doneCounter = () => {
    return todoData.length - todoData.filter((e) => e.isDone).length;
  };

  //Слушатель создания todo
  const onCreateElement = (description, minutes, seconds) => {
    setTodoData((data) => {
      return [...data.slice(0), createTodo(description, false, minutes, seconds)];
    });
  };

  //Отфильтровать todo
  const filterTodo = () => {
    switch (filter) {
      case 'Active':
        return todoData.filter((el) => !el.isDone);
      case 'Completed':
        return todoData.filter((el) => el.isDone);
      case 'All':
        return todoData;
    }
  };

  //Слушатель клика по фильтру
  const onFilterClick = (type) => {
    switch (type) {
      case 'Completed':
        setFilter('Completed');
        break;
      case 'Active':
        setFilter('Active');
        break;
      case 'All':
        setFilter('All');
        break;
      default:
        break;
    }
  };

  //Сабмит изменения todo
  const onEditSubmit = (description, id) => {
    setTodoData((data) => {
      const index = data.findIndex((i) => i.id === id);
      return [...data.slice(0, index), { ...data[index], description }, ...data.slice(index + 1)];
    });
  };

  //Рендер приложения
  return (
    <section className="todoapp">
      <Header onCreateElement={onCreateElement} />
      <section className="main">
        <TodoList
          todoData={filterTodo()}
          onDelete={deleteTodo}
          doneHandler={doneHandler}
          onEditSubmit={onEditSubmit}
          startTimer={startTimer}
          pauseTimer={pauseTimer}
        />
        <Footer
          onFilterClick={onFilterClick}
          doneCounter={doneCounter()}
          onClearCompleted={clearCompleted}
          filter={filter}
        />
      </section>
    </section>
  );
};

export default App;
