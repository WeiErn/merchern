import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ProductDetails from './components/products/ProductDetails';

class App extends Component {

  render = () => {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/product/:id' component={ProductDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
