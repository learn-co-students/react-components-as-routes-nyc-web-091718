import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const link = {
width: '100px',
padding: '12px',
margin: '0 6px 6px',
background: 'blue',
textDecoration: 'none',
color: 'white',
}

class Home extends Component {


  render(){
    return (
      <div>
        <h1>Home!</h1>
      </div>
    )
  }
}

export default Home;
