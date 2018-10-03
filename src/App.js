import React, { Component } from 'react';
import './App.css';

import NavBar from './components/layout/NavBar';
import Content from './components/dashboard/Dashboard';

class App extends Component {

  render = () => {
    return (
      <div className="App ">
        <NavBar />
        <Content />
      </div>
    );
  }
}

export default App;
