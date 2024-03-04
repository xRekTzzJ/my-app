import React from "react";
import TodoItem from "../todo-item";
const TodoList = ({ todoData, onDelete }) => {
  return (
    <ul className="todo-list">
      {todoData.map((i) => {
        return (
          <TodoItem
            key={i.id}
            description={i.description}
            onDelete={() => onDelete(i.id)}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
