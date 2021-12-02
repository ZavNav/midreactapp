import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import MenuContainer from "./MenuContainer";

const destination = document.querySelector("#container");

ReactDOM.render(
  <div>
      <TodoList/>
      <MenuContainer/>,
  </div>,
  destination
);