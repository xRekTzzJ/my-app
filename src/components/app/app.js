import React, { Component } from 'react';

import Footer from '../footer';
import Header from '../header';
import TodoList from '../todo-list';

export default class App extends Component {
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
      id: (this.maxId += 1),
    };
  };
  state = {
    todoData: [],
    filter: 'All',
  };
  updateTimer = (id) => {
    console.log(id);
  };
  doneHandler = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((i) => i.id === id);
      const oldElement = todoData[index];
      return {
        todoData: [
          ...todoData.slice(0, index),
          { ...oldElement, isDone: !oldElement.isDone },
          ...todoData.slice(index + 1),
        ],
      };
    });
  };
  deleteTodo = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((i) => i.id === id);
      return {
        todoData: [...todoData.slice(0, index), ...todoData.slice(index + 1)],
      };
    });
  };
  clearCompleted = () => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter((el) => !el.isDone),
      };
    });
  };
  doneCounter = () => {
    const { todoData } = this.state;
    return todoData.length - todoData.filter((e) => e.isDone).length;
  };
  onCreateElement = (description, minutes, seconds) => {
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData.slice(0), this.createTodo(description, false, minutes, seconds)],
      };
    });
  };
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
  onEditSubmit = (description, id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((i) => i.id === id);
      return {
        todoData: [...todoData.slice(0, index), { ...todoData[index], description }, ...todoData.slice(index + 1)],
      };
    });
  };
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
            updateTimer={this.updateTimer}
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
