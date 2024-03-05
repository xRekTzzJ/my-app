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
      id: (this.maxId += 1),
    };
  };
  state = {
    todoData: [
      this.createTodo("Drink Coffee"),
      this.createTodo("Watch youtube"),
      this.createTodo("Smoking", true),
      this.createTodo("Buy a bread", true),
      this.createTodo("Clean room", true),
    ],
    filteredData: [],
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
      const index = this.state.todoData.findIndex((i) => i.id === id);
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
    return (
      this.state.todoData.length -
      this.state.todoData.filter((e) => {
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
    this.filter();
  };
  filter = (type = "All") => {};
  onFiltered = (e) => {
    if (e.target.closest("button")) {
      e.currentTarget
        .querySelectorAll("button")
        .forEach((i) => i.classList.remove("selected"));
      switch (e.target.textContent) {
        case "Completed":
          e.target.classList.add("selected");
          break;
        case "Active":
          e.target.classList.add("selected");
          break;
        case "All":
          e.target.classList.add("selected");
          break;
        default:
          break;
      }
    }
  };
  render() {
    return (
      <section className="todoapp">
        <Header onCreateElement={this.onCreateElement} />
        <section className="main">
          <TodoList
            todoData={this.state.todoData}
            onDelete={this.deleteTodo}
            doneHandler={this.doneHandler}
          />
          <Footer
            onFiltered={this.onFiltered}
            doneCounter={this.doneCounter()}
            onClearCompleted={this.clearCompleted}
          />
        </section>
      </section>
    );
  }
}
