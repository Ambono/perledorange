import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import Login from './components/Login.js';

var NavBar = React.createClass({
    render() {
      return (
        <div>
       
        </div>
      )
    }
  });
  


render((
  <li>
<Router>
  
  <Route path="/login" component={Login} />
</Router>
  </li>
), document.getElementById('placeholder'))