import React, { Component } from "react";
import Header from "../header";
import Footer from "../footer";
import TodoList from "../todo-list";
export default class App extends Component {
  state = {
    todoData: [
      { description: "drink coffee", id: 1 },
      { description: "watch youtube", id: 2 },
      { description: "smoking", id: 3 },
    ],
  };
  deleteTodo = (id) => {
    this.setState(({ todoData }) => {
      const index = this.state.todoData.findIndex((i) => i.id === id);
      return {
        todoData: [...todoData.slice(0, index), ...todoData.slice(index + 1)],
      };
    });
  };
  render() {
    return (
      <section className="todoapp">
        <Header />
        <section className="main">
          <TodoList todoData={this.state.todoData} onDelete={this.deleteTodo} />
          <Footer />
        </section>
      </section>
    );
  }
}
