import React, { Component } from "react";
import Header from "../header";
import Footer from "../footer";
import TodoList from "../todo-list";
export default class App extends Component {
  maxId = 0;
  createTodo = (description, isDone = false) => {
    return {
      description,
      isDone,
      created: new Date(),
      id: (this.maxId += 1),
    };
  };
  state = {
    todoData: [],
    filter: "All",
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
    return (
      todoData.length -
      todoData.filter((e) => {
        return e.isDone;
      }).length
    );
  };
  onCreateElement = (description) => {
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData.slice(0), this.createTodo(description)],
      };
    });
  };
  filterTodo = () => {
    const { filter, todoData } = this.state;
    switch (filter) {
      case "Active":
        return todoData.filter((el) => !el.isDone);
      case "Completed":
        return todoData.filter((el) => el.isDone);
      case "All":
        return todoData;
      default:
        break;
    }
  };
  onFilterClick = (type) => {
    switch (type) {
      case "Completed":
        this.setState({
          filter: "Completed",
        });
        break;
      case "Active":
        this.setState({
          filter: "Active",
        });
        break;
      case "All":
        this.setState({
          filter: "All",
        });
        break;
      default:
        break;
    }
  };
  onEditSubmit = (description, id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((i) => i.id === id);
      const oldElement = todoData[index];
      return {
        todoData: [
          ...todoData.slice(0, index),
          { ...oldElement, description },
          ...todoData.slice(index + 1),
        ],
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
