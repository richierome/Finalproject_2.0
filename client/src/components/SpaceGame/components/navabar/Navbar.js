import React from 'react';
import "./navbar.css"
import Timer from "../timer/Timer.js"


const Navbar = props => (
    
    <nav className=""> 
    <h1 className="space-navbar-text">Space Quest </h1>
    <span className="space-navbar-text card-guess">{props.cardGuess}</span>
    <span className="space-navbar-text current-score">Current Score: {props.currentScore}</span>
    <span className="space-navbar-text high-score">High Score: {props.highScore}</span>
    <span className="space-navbar-text timer"> <Timer/></span>
    </nav>

);
export default Navbar;
