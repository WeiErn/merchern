import React, { Component } from 'react';
import NavBar from './NavBar';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <NavBar name="Merchandise"/>
        <img className="banner-image"></img>
        <h1 className="App-title">Merchandise</h1>
      </header>
    )
  }
}

export default Header;