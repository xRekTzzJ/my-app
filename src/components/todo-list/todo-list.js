import React from "react";
import TodoItem from "../todo-item";
const TodoList = ({ todoData }) => {
  return (
    <ul className="todo-list">
      {/* <TodoItem className="completed" />
      <TodoItem className="editing" /> */}

      {todoData.map((i) => {
        return <TodoItem key={i.id} description={i.description} />;
      })}
    </ul>
  );
};

export default TodoList;
