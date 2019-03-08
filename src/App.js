import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Shop from './views/shop';
import Checkout from './views/checkout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path='/' render={() => <Shop />} />
            <Route exact path='/checkout' render={() => <Checkout />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
