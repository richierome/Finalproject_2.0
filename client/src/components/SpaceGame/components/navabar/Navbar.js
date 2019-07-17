import React from 'react';
import "./navbar.css"
import Timer from "../timer/Timer.js"


const Navbar = props => (
    
    <nav className=" row  col-sm-6 col-md-6 col-lg-8 col-xl-12 navbar"> 
    <h2 className="space-navbar ">Space Quest </h2>
    <span className="space-navbar-text card-guess">{props.cardGuess}</span>
    <span className="space-navbar-text current-score">Current Score: {props.currentScore}</span>
    <span className="space-navbar-text high-score">High Score: {props.highScore}</span>
    <span className="space-navbar-text timer"> <Timer/></span>
    </nav>

);
export default Navbar;
