import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './pages/login/Login';



ReactDOM.render(
  <React.StrictMode>
    <Router >
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    
    </Router>


  </React.StrictMode>,
  document.getElementById('root')
);