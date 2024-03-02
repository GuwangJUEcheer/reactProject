// App.js
import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/login" activeClassName="active">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register" activeClassName="active">Register</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
