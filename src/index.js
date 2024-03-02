import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header";
import Footer from "./components/footer";
import TodoList from "./components/todo-list";
const todoData = [
  { description: "drink coffee", id: 1 },
  { description: "watch youtube", id: 2 },
  { description: "smoking", id: 3 },
  { description: "sleeeeep zzz...", id: 4 },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <section className="todoapp">
    <Header />
    <section className="main">
      <TodoList todoData={todoData} />
      <Footer />
    </section>
  </section>
);
