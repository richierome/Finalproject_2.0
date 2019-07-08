import React from 'react';
import Logo from "../images/LogoMakr.png"
import "./nav.css"
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div>
        <nav className="main-nav">
    <div className="main-container">
        <div className="logo">
            <img className="logo" alt="bear on uni" src={Logo} />
        </div>
        <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/game">Game</Link></li>
                
            </ul>
        </div>
        <span className="navTrigger">
            <i></i>
            <i></i>
            <i></i>
         </span>
         </div>
    </nav>
      
    </div>
  );
}

export default Nav;