import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import { Register } from './components/Register';
import { Login } from './components/Login';
import Student from './components/Student';

function App() {

  const [type, setType] = useState(localStorage.getItem('is_type'));
  useEffect(() => { }, [type]);
  const home = () => {
    switch (type) {
      case "Student":
        return (<Student update={() => setType(localStorage.getItem('is_type'))} />);

      case "Teacher":
        return (<Student />);

      case "Parent":
        return (<Student />);

      default:
        return(<Redirect to = "login"/>);
    }
  };

  return (<div className="APP">
    <Router>
      <Switch>
        <Route  path="/register" component={Register} />
        <Route  path="/login" render={() => <Login update={() => setType(localStorage.getItem('is_type'))} />} />
        <Route  path="/home" >
          {home()}
        </Route>

      </Switch>
    </Router>
  </div>
  );
}

export default App;
