import React from "react";

const TodoItem = ({ className, description }) => {
  // if (className === "completed") {
  //   return (
  //     <li className="completed">
  //       <div className="view">
  //         <input className="toggle" type="checkbox" readOnly />
  //         <label>
  //           <span className="description">Completed task</span>
  //           <span className="created">created 17 seconds ago</span>
  //         </label>
  //         <button className="icon icon-edit"></button>
  //         <button className="icon icon-destroy"></button>
  //       </div>
  //     </li>
  //   );
  // }
  // if (className === "editing") {
  //   return (
  //     <li className="editing">
  //       <div className="view">
  //         <input className="toggle" type="checkbox" readOnly />
  //         <label>
  //           <span className="description">Editing task</span>
  //           <span className="created">created 5 minutes ago</span>
  //         </label>
  //         <button className="icon icon-edit"></button>
  //         <button className="icon icon-destroy"></button>
  //       </div>
  //       <input type="text" className="edit" value="Editing task" readOnly />
  //     </li>
  //   );
  // }
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" readOnly />
        <label>
          <span className="description">{description}</span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  );
};

export default TodoItem;
