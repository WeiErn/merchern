import React, { Component } from 'react';
import './App.css';

import NavBar from './components/layout/NavBar';
import Content from './components/dashboard/Dashboard';

class App extends Component {

  state = {
    scrolling: false,
    navBarPosition: 'static'
  };

  handleOnScroll = () => {
    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({scrolling: false});
      // this.setState({navBarPosition: 'static'});
    }
    else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({scrolling: true});
      // this.setState({navBarPosition: 'fixed'});
    }
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleOnScroll)
  };

  render = () => {
    return (
      <div className="App ">
        <NavBar position={this.state.scrolling}/>
        <Content/>
      </div>
    );
  }
}

export default App;
