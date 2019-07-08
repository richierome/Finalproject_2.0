import React from "react";
import "./BNav.css";

const BNav = props => (
  <nav className="alphabet-nav">
    <ul>
      <li> 
        {props.title}
      </li>

      <li id="rw">{props.rightWrong}</li>

      <li  id="cur-sco">Your Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default BNav;