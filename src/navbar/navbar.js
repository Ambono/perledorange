import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import Login from './components/Login.js';

var NavBar = React.createClass({
    render() {
      return (
        <div>
          <ul>
            <a onClick={() => history.push('page1') }>Page 1</a>
            <a onClick={() => history.push('page2') }>Page 2</a>
          </ul>
        </div>
      )
    }
  });
  


render((
  <li>
<Router>
  <Route path="/" component={App}>
    <Route path="page1" component={Page1} />
    <Route path="page2" component={Page2} />
  </Route>
  <Route path="/login" component={Login} />
</Router>
  </li>
), document.getElementById('placeholder'))