import React from "react";
import TodoItem from "../todo-item";
const TodoList = ({ todoData, filteredData, onDelete, doneHandler }) => {
  return (
    <ul className="todo-list">
      {filteredData.map((i) => {
        return (
          <TodoItem
            key={i.id}
            description={i.description}
            onDelete={() => onDelete(i.id)}
            isDone={i.isDone}
            doneHandler={() => doneHandler(i.id)}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
