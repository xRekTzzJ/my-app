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
    console.log(id);
  };
  render() {
    return (
      <section className="todoapp">
        <Header />
        <section className="main">
          <TodoList todoData={this.state.todoData} />
          <Footer />
        </section>
      </section>
    );
  }
}
