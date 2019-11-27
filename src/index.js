import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Signup from './signup'
import Forget from './forgetpass'

const routing = (
  <Router>
    <div>
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sign">Sign up</Link>
        </li>
        <li>
          <Link to="/forgetpass">Forget Pass</Link>
        </li>
      </ul>
      
      <Route path="/" component={App} />
      <Route path="/sign" component={Signup} />
      <Route path="/forgetpass" component={Forget} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
