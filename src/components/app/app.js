import React, { Component } from 'react';

import Footer from '../footer';
import Header from '../header';
import TodoList from '../todo-list';

export default class App extends Component {
  //Создать todo
  maxId = 0;
  createTodo = (description, isDone = false, minutes, seconds) => {
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
      id: (this.maxId += 1),
    };
  };

  state = {
    todoData: [],
    filter: 'All',
  };

  //Запустить таймер
  startTimer = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((i) => i.id === id);
      const oldElement = todoData[index];
      return {
        todoData: [
          ...todoData.slice(0, index),
          { ...oldElement, timer: oldElement.timer ? oldElement.timer : setInterval(() => this.timer(id), 1000) },
          ...todoData.slice(index + 1),
        ],
      };
    });
  };

  //Остановить таймер
  pauseTimer = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((i) => i.id === id);
      const oldElement = todoData[index];
      return {
        todoData: [
          ...todoData.slice(0, index),
          { ...oldElement, timer: clearInterval(oldElement.timer) },
          ...todoData.slice(index + 1),
        ],
      };
    });
  };

  //Логика таймера
  timer = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((i) => i.id === id);
      const oldElement = todoData[index];
      return {
        todoData: [
          ...todoData.slice(0, index),
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
          ...todoData.slice(index + 1),
        ],
      };
    });
  };

  //Слушатель done
  doneHandler = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((i) => i.id === id);
      const oldElement = todoData[index];
      return {
        todoData: [
          ...todoData.slice(0, index),
          { ...oldElement, isDone: !oldElement.isDone, timer: clearInterval(oldElement.timer) },
          ...todoData.slice(index + 1),
        ],
      };
    });
  };

  //Удалить todo
  deleteTodo = (id) => {
    this.pauseTimer(id);
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((i) => i.id === id);
      return {
        todoData: [...todoData.slice(0, index), ...todoData.slice(index + 1)],
      };
    });
  };

  //Очистить выполненные todo
  clearCompleted = () => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter((el) => !el.isDone),
      };
    });
  };

  //Количество выполненных todo
  doneCounter = () => {
    const { todoData } = this.state;
    return todoData.length - todoData.filter((e) => e.isDone).length;
  };

  //Слушатель создания todo
  onCreateElement = (description, minutes, seconds) => {
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData.slice(0), this.createTodo(description, false, minutes, seconds)],
      };
    });
  };

  //Отфильтровать todo
  filterTodo = () => {
    const { filter, todoData } = this.state;
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
  onFilterClick = (type) => {
    switch (type) {
      case 'Completed':
        this.setState({
          filter: 'Completed',
        });
        break;
      case 'Active':
        this.setState({
          filter: 'Active',
        });
        break;
      case 'All':
        this.setState({
          filter: 'All',
        });
        break;
      default:
        break;
    }
  };

  //Сабмит изменения todo
  onEditSubmit = (description, id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((i) => i.id === id);
      return {
        todoData: [...todoData.slice(0, index), { ...todoData[index], description }, ...todoData.slice(index + 1)],
      };
    });
  };

  //Рендер приложения
  render() {
    const { filter } = this.state;
    return (
      <section className="todoapp">
        <Header onCreateElement={this.onCreateElement} />
        <section className="main">
          <TodoList
            todoData={this.filterTodo()}
            onDelete={this.deleteTodo}
            doneHandler={this.doneHandler}
            onEditSubmit={this.onEditSubmit}
            startTimer={this.startTimer}
            pauseTimer={this.pauseTimer}
          />
          <Footer
            onFilterClick={this.onFilterClick}
            doneCounter={this.doneCounter()}
            onClearCompleted={this.clearCompleted}
            filter={filter}
          />
        </section>
      </section>
    );
  }
}
