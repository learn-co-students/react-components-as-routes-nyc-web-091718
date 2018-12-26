import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './home';
import About from './about';
import Login from './login';
import Signup from './signup';
import Messages from './messages';
import Navbar from './navbar';

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/messages" component={Messages}/>
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
