import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const divStyle = {
  marginTop: '40px',
  border: '5px solid grey'
};

class Login extends Component {
  // const divStyle = {
  // marginTop: '50px',
  // border: '5px solid pink'
  // };

  render(){
    return (
      <div>
        <form>
          <div style={divStyle}>
            <input type="text" name="username" placeholder="Username" />
            <label htmlFor="username">Username</label>
          </div>
          <div style={divStyle}>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default Login;
