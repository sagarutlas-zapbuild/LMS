import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <Link to = "/login">Login</Link>
        <br/>
        <Link to = "/register">Register</Link>
      <Switch>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
      </Router>
  );
}

export default App;
