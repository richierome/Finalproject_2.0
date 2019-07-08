import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Game from './components/game';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from "./components/nav";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Nav />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/game" component={Game} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
