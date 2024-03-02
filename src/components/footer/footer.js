import React from "react";
import Filters from "../filters";
const Footer = () => {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <Filters />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
